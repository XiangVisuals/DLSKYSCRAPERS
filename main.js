// main.js
document.addEventListener('DOMContentLoaded', function() {
    // 1. 初始化图标
    lucide.createIcons();

    // 2. 滚动出现动画
    const observer = new IntersectionObserver(e => e.forEach(en => en.isIntersecting && (en.target.classList.add('visible'), observer.unobserve(en.target))), { threshold: 0.1 });
    document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));

    // 3. 移动端菜单逻辑
    const menuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    
    menuBtn.addEventListener('click', () => {
        const isClosed = mobileMenu.classList.contains('menu-closed');
        mobileMenu.classList.toggle('menu-closed', !isClosed);
        mobileMenu.classList.toggle('menu-open', isClosed);
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('menu-open');
            mobileMenu.classList.add('menu-closed');
        });
    });

    // 4. 数据面板交互 (Mobile)
    const mobileStatsToggle = document.getElementById('mobileStatsToggle');
    const statsPanel = document.getElementById('statsPanel');
    const closeStatsBtn = document.getElementById('closeStatsBtn');

    if(mobileStatsToggle && statsPanel && closeStatsBtn) {
        mobileStatsToggle.addEventListener('click', () => {
            statsPanel.classList.remove('hidden');
            mobileStatsToggle.classList.add('hidden');
        });

        closeStatsBtn.addEventListener('click', () => {
            statsPanel.classList.add('hidden');
            mobileStatsToggle.classList.remove('hidden');
        });
    }

    // 5. 地图初始化
    // 修复：禁用 scrollWheelZoom 防止页面滚动卡顿
    const map = L.map('progressMap', {
        center: [38.920, 121.640],
        zoom: 14,
        zoomControl: false,       
        attributionControl: false,
        fadeAnimation: true,
        scrollWheelZoom: false    
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        maxZoom: 19,
        subdomains: 'abcd'
    }).addTo(map);

    // 缩放按钮事件
    const btnCity = document.getElementById('zoomCity');
    const btnDistrict = document.getElementById('zoomDistrict');
    if(btnCity) btnCity.onclick = () => map.flyTo([38.910, 121.610], 13);
    if(btnDistrict) btnDistrict.onclick = () => map.flyTo([38.923, 121.660], 15);

    // 6. 数据处理与渲染
    if (typeof buildingData === 'undefined') {
        console.error("数据加载失败，请确保 buildings.js 已正确引入");
        return;
    }

    const buildings = buildingData;
    
    // 按高度排序
    buildings.sort((a, b) => (b.height || 0) - (a.height || 0));
    buildings.forEach((b, i) => b.rank = i + 1);

    // 统计逻辑
    const counts = { completed: 0, construction: 0, planned: 0 };
    buildings.forEach(b => {
        let statusKey = b.status;
        if(statusKey === 'landmark') statusKey = 'completed'; // 地标归为已建成
        
        // 确保 key 存在，不存在则默认归为 planned 或其他
        if(counts[statusKey] !== undefined) {
            counts[statusKey]++;
        } else {
            counts.planned++;
        }
    });

    // 更新统计面板
    const elC1 = document.getElementById('c1');
    const elC2 = document.getElementById('c2');
    const elC3 = document.getElementById('c3');
    const elTotal = document.getElementById('totalCount');
    
    if(elC1) elC1.textContent = counts.completed;
    if(elC2) elC2.textContent = counts.construction;
    if(elC3) elC3.textContent = counts.planned;
    if(elTotal) elTotal.textContent = buildings.length;

    // 渲染列表和 Markers
    const list = document.getElementById('buildingList');
    const card = document.getElementById('infoCard');
    
    // 记录当前激活的 Marker Icon，用于清除高亮
    let activeMarkerIcon = null;

    // 清除状态函数
    const clearActiveState = () => {
        if (activeMarkerIcon) {
            L.DomUtil.removeClass(activeMarkerIcon, 'active-marker');
            activeMarkerIcon = null;
        }
        if(card) card.classList.remove('is-visible');
        
        // 清除列表高亮
        document.querySelectorAll('#buildingList > div').forEach(el => {
            el.classList.remove('border-white', 'bg-white/10');
            el.classList.add('border-transparent');
        });
    };

    buildings.forEach(b => {
        // --- 颜色定义 (与 CSS 变量配合) ---
        // 绿色: #34d399 (Emerald-400)
        // 黄色: #fbbf24 (Amber-400)
        // 红色: #f87171 (Red-400)
        let color;
        if (b.status === "completed" || b.status === "landmark") {
            color = "#34d399"; 
        } else if (b.status === "construction") {
            color = "#fbbf24"; 
        } else {
            color = "#f87171"; 
        }

        if (!b.lat || !b.lng) return;

        // --- Marker 核心优化 ---
        // 生成一个 0 到 -3秒 之间的随机延迟，使所有点的呼吸动画产生错落感，不再整齐划一
        const randomDelay = `-${Math.random() * 3}s`;

        const icon = L.divIcon({
            className: 'custom-div-icon',
            html: `
                <div class="marker-ring" style="--color:${color}; animation-delay: ${randomDelay}"></div>
                <div class="marker-dot" style="--color:${color}; animation-delay: ${randomDelay}"></div>
            `,
            iconSize: [24, 24],
            iconAnchor: [12, 12]
        });

        const marker = L.marker([b.lat, b.lng], { icon: icon }).addTo(map);

        // 创建侧边栏列表项
        const item = document.createElement('div');
        item.className = `p-2 pl-3 border-l-2 border-transparent hover:border-white hover:bg-white/5 cursor-pointer transition-all group flex justify-between items-center`;
        item.innerHTML = `
            <div class="overflow-hidden">
                <div class="text-[10px] font-mono text-gray-500 group-hover:text-white">#${b.rank.toString().padStart(2, '0')}</div>
                <div class="text-xs font-medium text-gray-300 group-hover:text-white truncate mt-0.5 font-sans">${b.name}</div>
            </div>
            <div class="w-1.5 h-1.5 rounded-full flex-shrink-0 ml-2" style="background:${color}"></div>
        `;

        // 点击激活逻辑
        const activate = (e) => {
            if(e && e.originalEvent) L.DomEvent.stopPropagation(e);
            clearActiveState();

            // 1. Marker 高亮
            if (marker._icon) {
                L.DomUtil.addClass(marker._icon, 'active-marker');
                activeMarkerIcon = marker._icon;
            }

            // 2. 列表高亮并滚动
            item.classList.remove('border-transparent');
            item.classList.add('border-white', 'bg-white/10');
            item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

            // 3. 地图视角飞跃
            map.flyTo([b.lat, b.lng], 16, { duration: 0.8 });

            // 4. 填充信息卡片
            if(card) {
                document.getElementById('cardRank').textContent = '#' + b.rank.toString().padStart(2, '0');
                
                // 名字处理：分离中文和英文(括号内)
                const nameParts = b.name.split(/[\(（]/); 
                document.getElementById('cardName').textContent = nameParts[0].trim();
                document.getElementById('cardEnName').textContent = nameParts[1] ? nameParts[1].replace(/[\)）]/, '') : 'Unknown Entity';
                
                document.getElementById('cardHeight').textContent = b.height || '-';
                document.getElementById('cardFloors').textContent = b.floors || '-';
                document.getElementById('cardYear').textContent = b.year;
                
                let areaText = '其他区域';
                if (b.area === 'Zhongshan') areaText = '中山区';
                else if (b.area === 'Donggang') areaText = '东港商务区';
                else if (b.area === 'Shahekou') areaText = '沙河口/星海';
                else if (b.area === 'Xigang') areaText = '西岗区';
                else if (b.area === 'Ganjingzi') areaText = '甘井子区';
                document.getElementById('cardArea').textContent = areaText;

                // 状态标签样式
                const statusContainer = document.getElementById('cardStatusContainer');
                let statusConfig;
                
                if (b.status === "completed" || b.status === "landmark") {
                    statusConfig = { text: '已建成 | COMPLETED', color: 'text-emerald-400', bg: 'bg-emerald-400' };
                } else if (b.status === "construction") {
                    statusConfig = { text: '建设中 | CONSTRUCTION', color: 'text-amber-400', bg: 'bg-amber-400' };
                } else {
                    statusConfig = { text: '规划中 | PLANNED', color: 'text-red-400', bg: 'bg-red-400' };
                }

                statusContainer.className = `text-[10px] font-mono tracking-widest mb-1 flex items-center gap-1.5 ${statusConfig.color}`;
                statusContainer.innerHTML = `<div class="w-1.5 h-1.5 rounded-full ${statusConfig.bg} animate-pulse"></div> ${statusConfig.text}`;

                // 显示卡片
                card.classList.add('is-visible');
            }
        };

        item.onclick = activate;
        marker.on('click', activate);
        list.appendChild(item);
    });

    // 点击地图空白处清除状态
    map.on('click', clearActiveState);
    
    // 移动端关闭按钮
    const closeCardMobile = document.getElementById('closeCardMobile');
    if(closeCardMobile) {
        closeCardMobile.addEventListener('click', (e) => {
            e.stopPropagation();
            clearActiveState();
        });
    }
});
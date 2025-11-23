/**
 * DLSKYSCRAPERS - Main Logic
 * 包含：交互逻辑、地图初始化、数据模拟
 */

document.addEventListener('DOMContentLoaded', function() {
    // 初始化 Lucide 图标
    lucide.createIcons();

    // 1. 滚动动画观察者 (Intersection Observer)
    // 性能优化：复用同一个 observer 实例
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // 动画完成后停止观察，节省资源
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));

    // ================= MOBILE MENU LOGIC =================
    const menuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    
    // 切换菜单
    menuBtn.addEventListener('click', () => {
        const isClosed = mobileMenu.classList.contains('menu-closed');
        if (isClosed) {
            mobileMenu.classList.remove('menu-closed');
            mobileMenu.classList.add('menu-open');
        } else {
            mobileMenu.classList.remove('menu-open');
            mobileMenu.classList.add('menu-closed');
        }
    });

    // 点击链接后关闭菜单
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('menu-open');
            mobileMenu.classList.add('menu-closed');
        });
    });


    // ================= MAP STATS MOBILE TOGGLE =================
    const mobileStatsToggle = document.getElementById('mobileStatsToggle');
    const statsPanel = document.getElementById('statsPanel');
    const closeStatsBtn = document.getElementById('closeStatsBtn');

    if (mobileStatsToggle && statsPanel && closeStatsBtn) {
        mobileStatsToggle.addEventListener('click', () => {
            statsPanel.classList.remove('hidden');
            mobileStatsToggle.classList.add('hidden');
        });

        closeStatsBtn.addEventListener('click', () => {
            statsPanel.classList.add('hidden');
            mobileStatsToggle.classList.remove('hidden');
        });
    }


    // ================= MAP LOGIC =================
    // 检查 Leaflet 是否已加载
    if (typeof L !== 'undefined') {
        const map = L.map('progressMap', {
            center: [38.920, 121.630],
            zoom: 14,
            zoomControl: false,
            attributionControl: false,
            fadeAnimation: true,
            scrollWheelZoom: false,
            tap: true
        });

        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
            maxZoom: 19,
            subdomains: 'abcd'
        }).addTo(map);

        // 解决地图容器大小变化导致的渲染问题
        setTimeout(() => { map.invalidateSize(); }, 200);

        // 全局暴露 map 以便 HTML 中的按钮调用 (如 map.setZoom)
        window.map = map;

        // Mock Data Generation (模拟数据生成)
        const buildings = [
            { name: "Eton Center T1", height: 383, floors: 80, year: "2016", lat: 38.9175, lng: 121.6244, area: "Zhongshan", status: "completed" },
            { name: "Dalian ITC", height: 370, floors: 86, year: "2019", lat: 38.9233, lng: 121.6414, area: "Zhongshan", status: "completed" },
            { name: "Eton Center T2", height: 279, floors: 62, year: "2015", lat: 38.9178, lng: 121.6250, area: "Zhongshan", status: "completed" },
            { name: "Victoria Plaza", height: 268, floors: 68, year: "2018", lat: 38.9260, lng: 121.6480, area: "Zhongshan", status: "completed" },
            { name: "Hope Tower", height: 240, floors: 45, year: "2008", lat: 38.9160, lng: 121.6320, area: "Zhongshan", status: "completed" },
            { name: "Xinghai One", height: 220, floors: 50, year: "2012", lat: 38.8850, lng: 121.5850, area: "Shahekou", status: "completed" },
            { name: "Greenland Center", height: 518, floors: 88, year: "TBD", lat: 38.9300, lng: 121.6600, area: "Donggang", status: "planned" },
        ];

        const zones = [
            { lat: 38.923, lng: 121.641, r: 0.015, area: "Zhongshan" },
            { lat: 38.888, lng: 121.582, r: 0.010, area: "Shahekou" },
            { lat: 38.910, lng: 121.610, r: 0.008, area: "Xigang" }
        ];

        // 生成随机建筑以填满列表
        while (buildings.length < 87) {
            const zone = zones[Math.floor(Math.random() * zones.length)];
            const statusVal = Math.random();
            const status = statusVal < 0.6 ? "completed" : statusVal < 0.85 ? "construction" : "planned";
            const r = zone.r * Math.sqrt(Math.random());
            const theta = Math.random() * 2 * Math.PI;
            
            buildings.push({
                name: status === "completed" ? `Commercial Block ${buildings.length}` : `Sector ${buildings.length}`,
                height: 120 + Math.floor(Math.random() * 150),
                floors: 30 + Math.floor(Math.random() * 40),
                year: status === "completed" ? 2010 + Math.floor(Math.random() * 13) : "WIP",
                lat: zone.lat + r * Math.cos(theta) * 0.7,
                lng: zone.lng + r * Math.sin(theta),
                area: zone.area,
                status
            });
        }

        // 排序：高度降序
        buildings.sort((a, b) => b.height - a.height);
        buildings.forEach((b, i) => b.rank = i + 1);
        
        // 更新统计数据
        const counts = { completed: 0, construction: 0, planned: 0 };
        buildings.forEach(b => counts[b.status]++);
        document.getElementById('c1').textContent = counts.completed;
        document.getElementById('c2').textContent = counts.construction;
        document.getElementById('c3').textContent = counts.planned;
        document.getElementById('totalCount').textContent = buildings.length;

        const list = document.getElementById('buildingList');
        const card = document.getElementById('infoCard');
        
        list.innerHTML = '';

        const hideCard = () => {
            card.classList.remove('is-visible');
            document.querySelectorAll('#buildingList > div').forEach(el => {
                el.classList.remove('border-white', 'bg-white/10');
                el.classList.add('border-transparent');
            });
        };

        buildings.forEach(b => {
            const color = b.status === "completed" ? "#34d399" : b.status === "construction" ? "#fbbf24" : "#f87171";
            const zIndex = b.status === "completed" ? 10 : 5;
            
            const icon = L.divIcon({
                className: 'custom-div-icon',
                html: `
                    <div class="marker-ring" style="--color:${color}"></div>
                    <div class="marker-dot" style="--color:${color}"></div>
                `,
                iconSize: [24, 24],
                iconAnchor: [12, 12]
            });

            const marker = L.marker([b.lat, b.lng], { icon: icon, zIndexOffset: zIndex }).addTo(map);

            // 创建列表项 (仅桌面端显示)
            const item = document.createElement('div');
            item.className = `p-2 pl-3 border-l-2 border-transparent hover:border-white hover:bg-white/5 cursor-pointer transition-all group`;
            item.innerHTML = `
                <div class="flex justify-between items-center">
                    <div class="text-[10px] font-mono text-gray-500 group-hover:text-white">#${b.rank.toString().padStart(2, '0')}</div>
                    <div class="w-1.5 h-1.5 rounded-full" style="background:${color}"></div>
                </div>
                <div class="text-xs font-medium text-gray-300 group-hover:text-white truncate mt-0.5 font-sans">${b.name}</div>
            `;

            const activate = () => {
                // 重置 UI 状态
                document.querySelectorAll('#buildingList > div').forEach(el => {
                    el.classList.remove('border-white', 'bg-white/10');
                    el.classList.add('border-transparent');
                });
                
                // 高亮选中的列表项
                item.classList.remove('border-transparent');
                item.classList.add('border-white', 'bg-white/10');
                
                // 仅在列表可见时滚动 (桌面端)
                if (list.offsetParent !== null) {
                    item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
                
                map.flyTo([b.lat, b.lng], 16, { duration: 1.2 });

                // 填充卡片数据
                document.getElementById('cardRank').textContent = '#' + b.rank.toString().padStart(2, '0');
                document.getElementById('cardName').textContent = b.name;
                document.getElementById('cardHeight').textContent = b.height;
                document.getElementById('cardFloors').textContent = b.floors;
                document.getElementById('cardYear').textContent = b.year;
                document.getElementById('cardArea').textContent = b.area;
                
                const statusText = document.getElementById('cardStatus');
                statusText.innerHTML = b.status === "completed" 
                    ? `<div class="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div> COMPLETED`
                    : `<div class="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse"></div> CONSTRUCTION`;
                statusText.className = `text-[10px] font-mono tracking-widest mb-1 flex items-center gap-1.5 ${b.status === "completed" ? "text-emerald-400" : b.status === "construction" ? "text-amber-400" : "text-red-400"}`;

                // 显示卡片
                card.classList.add('is-visible');
            };

            item.onclick = activate;
            marker.on('click', activate); // Leaflet 自动处理触摸事件
            list.appendChild(item);
        });

        // 点击地图空白处关闭卡片
        map.on('click', hideCard);
        
        // 移动端关闭按钮事件
        const closeMobileBtn = document.getElementById('closeCardMobile');
        if (closeMobileBtn) {
            closeMobileBtn.addEventListener('click', (e) => {
                e.stopPropagation(); // 防止触发地图点击
                hideCard();
            });
        }
    }
});
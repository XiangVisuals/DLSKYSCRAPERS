// buildings.js
// 更新时间：2025-11-24
// 状态说明：status: "completed"(绿), "construction"(黄), "planned"(红/代构建)

const buildingData = [
    // ==========================================
    // 中山区 (Zhongshan District) - 青泥洼/CBD
    // ==========================================
    { 
        name: "大连国贸中心 (Dalian ITC)", 
        height: 370, floors: 86, year: "2019", 
        status: "completed", // 改为施工中状态
        area: "Zhongshan", 
        lat: 38.91948141777889, lng: 121.63293168398651 
    },
    { 
        name: "大连裕景中心 (Eton Center)", 
        height: 383, floors: 80, year: "2016", 
        status: "completed", // 保留为已完成作为参考基准
        area: "Zhongshan", 
        lat: 38.917585140930875, lng: 121.62388433746095
    },
    { 
        name: "希望大厦 (Hope Tower)", 
        height: 240, floors: 45, year: "2008", 
        status: "completed", 
        area: "Zhongshan", 
        lat: 38.91411997474989, lng: 121.62620152378004 
    },
    { name: "金座大厦", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.91926438630217, lng: 121.6318909868535 },
    { name: "洲际酒店", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.91918091249443, lng: 121.63532421437587 },
    { name: "友好广场水晶球", height: 15, floors: 0, year: "1996", status: "landmark", area: "Zhongshan", lat: 38.91942715996894, lng: 121.63463756891505 },
    { name: "天安国际", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.91792044582539, lng: 121.63156375729776 },
    { name: "劳动公园 (Labor Park)", height: 0, floors: 0, year: "1898", status: "landmark", area: "Zhongshan", lat: 38.9130, lng: 121.6280 }, // 大致中心
    { name: "民航大厦", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.91329077021056, lng: 121.6243018019581 },
    { name: "香洲大饭店", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.91275314220025, lng: 121.62336734549764 },
    { name: "申贸大厦", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.91278561996261, lng: 121.62247921823115 },
    { name: "中信丰悦", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.92450419316765, lng: 121.6569711247112 },
    { name: "海景酒店", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.92400251704368, lng: 121.65628834574221 },
    { name: "上方港景", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.92399071285688, lng: 121.65503658429907 },
    { name: "港湾中心", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.92428581693457, lng: 121.65415655809703 },
    { name: "安和大厦", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.92438625306207, lng: 121.65193654649524 },
    { name: "心悦酒店", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.92404664594294, lng: 121.65091516144192 },
    { name: "成大大厦", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.923857380011334, lng: 121.65009130043654 },
    { name: "凯美大厦", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.92360470394769, lng: 121.64934128483097 },
    { name: "亚太国际金融中心", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.923414545082835, lng: 121.64865488661846 },
    { name: "新世界酒店", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.92319833643925, lng: 121.64755664947839 },
    { name: "国门宾馆", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.922679953978985, lng: 121.64647515381436 },
    { name: "纺织大厦", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.92253668178128, lng: 121.64599634920759 },
    { name: "辽粮大厦", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.92234131013639, lng: 121.64520950247618 },
    { name: "虹源大厦", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.921994849753496, lng: 121.64421841048667 },
    { name: "北方大厦", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.92180468657387, lng: 121.64364250564492 },
    { name: "国际金融大厦", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.92144780358754, lng: 121.64271168287857 },
    { name: "农商银行大厦", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.92121335395109, lng: 121.64214247460478 },
    { name: "东亚银行", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.92099453359146, lng: 121.64138241414504 },
    { name: "交通银行", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.92087209809582, lng: 121.64017703191817 },
    { name: "中信银行", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.921426963651236, lng: 121.63984220352181 },
    { name: "友谊商场", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.92186460102844, lng: 121.64036453582013 },
    { name: "银洲国际大厦", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.92265911439224, lng: 121.64139580725539 },
    { name: "世贸大厦", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.92339891553541, lng: 121.6407696781542 },
    { name: "润德中心", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.92289095432128, lng: 121.6438969753306 },
    { name: "人寿大厦", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.922495002538355, lng: 121.64313021830294 },
    { name: "时代广场", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.92331555805338, lng: 121.64541374792667 },
    { name: "富丽华酒店", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.92396418095012, lng: 121.64720507976376 },
    { name: "富丽华国际", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.92492798714925, lng: 121.64674971313678 },
    { name: "香格里拉酒店", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.92416215303836, lng: 121.64861135899693 },
    { name: "宏誉大厦", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.92451641746876, lng: 121.64981674117621 },
    { name: "海港大厦", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.92540728049701, lng: 121.65022188349944 },
    { name: "日航饭店", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.92588798156018, lng: 121.63783788846573 },
    { name: "宏孚大厦", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.92402311780355, lng: 121.6362335362023 },
    { name: "人民文化俱乐部", height: null, floors: null, year: "TBD", status: "landmark", area: "Zhongshan", lat: 38.92176661601409, lng: 121.63925349349005 },
    { name: "中国银行", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.9220847822106, lng: 121.63817763373694 },
    { name: "万科大都会中山", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.922652582954655, lng: 121.6376051001841 },
    { name: "中银大厦B座", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.92301479829671, lng: 121.63820280004694 },
    { name: "上鼎大厦", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.922011359368796, lng: 121.63681865299614 },
    { name: "邮电万科大厦", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.92173724675481, lng: 121.63634678468337 },
    { name: "报业大厦A座", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.921600190050675, lng: 121.63535271543779 },
    { name: "天津街广场", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.92203583365784, lng: 121.63505071971764 },
    { name: "曼哈顿大厦", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.9217029826036, lng: 121.6338175705269 },
    { name: "港汇中心", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.92024918833997, lng: 121.63353444962377 },
    { name: "渤海明珠饭店", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.920919797461025, lng: 121.63013070619427 },
    { name: "九州国际酒店", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.91994080391602, lng: 121.6311625249049 },
    { name: "鸿霖大厦", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.92018065858382, lng: 121.63233904989806 },
    { name: "友好大厦", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.91818347659277, lng: 121.63515767666632 },
    { name: "汇邦中心", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.91771843839285, lng: 121.64076347214116 },
    { name: "万达大厦", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.91710164620742, lng: 121.64135488042649 },
    { name: "建设银行大厦", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.91838417632918, lng: 121.64024756276989 },
    { name: "新星国际中心大厦", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.91845760292434, lng: 121.63734085396322 },
    { name: "一方大厦", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.918594665698684, lng: 121.63843558844884 },
    { name: "嘉禾广场", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.91894899958982, lng: 121.64854425753516 },
    { name: "大连宾馆", height: null, floors: null, year: "TBD", status: "landmark", area: "Zhongshan", lat: 38.91962504637787, lng: 121.63933967197698 },
    { name: "大连金融中心大厦", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.919564467289156, lng: 121.63847610806339 },
    { name: "辽沈银行", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.91994446253588, lng: 121.63765855370255 },
    { name: "工商银行", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.92064111520293, lng: 121.63755237781155 },
    { name: "青泥8号", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.91734426930113, lng: 121.63170252647365 },
    { name: "城市广场B座", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.91532714106349, lng: 121.6327321046254 },
    { name: "凯宾斯基", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.914470114832056, lng: 121.6329408028843 },
    { name: "联通大厦", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.91122053823564, lng: 121.63469618726167 },
    { name: "瑞士酒店", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.91478913214345, lng: 121.63029484255627 },
    { name: "百年城", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.91565260720036, lng: 121.63118515554814 },
    { name: "中山大酒店", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.91670144695178, lng: 121.63091555372665 },
    { name: "大商", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.916018483292795, lng: 121.62914119755276 },
    { name: "久光百货", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.91588188977228, lng: 121.6270909697476 },
    { name: "汇景天地", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.91231573019079, lng: 121.62610660960871 },
    { name: "儿童医院", height: null, floors: null, year: "TBD", status: "construction", area: "Zhongshan", lat: 38.91148148633958, lng: 121.62337297273248 },

    // ==========================================
    // 东港商务区 (Donggang CBD)
    // ==========================================
    { name: "绿地中心 (Greenland Center)", height: 518, floors: 88, year: "TBD", status: "planned", area: "Donggang", lat: 38.92650518924529, lng: 121.66672675401998 },
    { name: "富力中心", height: null, floors: null, year: "TBD", status: "construction", area: "Donggang", lat: 38.927490797144856, lng: 121.66519429455624 },
    { name: "航运大厦", height: null, floors: null, year: "TBD", status: "construction", area: "Donggang", lat: 38.92621009438784, lng: 121.67006478443692 },
    { name: "大商城市乐园", height: null, floors: null, year: "TBD", status: "construction", area: "Donggang", lat: 38.9262396039233, lng: 121.67268969021836 },
    { name: "佳兆业", height: null, floors: null, year: "TBD", status: "construction", area: "Donggang", lat: 38.92560809706212, lng: 121.67529942303686 },
    { name: "欧力士大厦", height: null, floors: null, year: "TBD", status: "construction", area: "Donggang", lat: 38.92456934459137, lng: 121.6779850202658 },
    { name: "万科东港大都会", height: null, floors: null, year: "TBD", status: "construction", area: "Donggang", lat: 38.92376666180303, lng: 121.67929747308506 },
    { name: "碧桂园云璟", height: null, floors: null, year: "TBD", status: "construction", area: "Donggang", lat: 38.92351287051012, lng: 121.68091338331163 },
    { name: "恒力大厦", height: null, floors: null, year: "TBD", status: "construction", area: "Donggang", lat: 38.92262754489983, lng: 121.68356104825035 },
    { name: "磐海", height: null, floors: null, year: "TBD", status: "construction", area: "Donggang", lat: 38.92968600489396, lng: 121.66462583536422 },
    { name: "国际会议中心", height: null, floors: null, year: "TBD", status: "completed", area: "Donggang", lat: 38.92862960703471, lng: 121.66789558798234 },
    { name: "恒大东港", height: null, floors: null, year: "TBD", status: "construction", area: "Donggang", lat: 38.926310197840614, lng: 121.66019535873139 },
    { name: "四季酒店", height: null, floors: null, year: "TBD", status: "construction", area: "Donggang", lat: 38.924994061724234, lng: 121.6599146607108 },

    // ==========================================
    // 西岗区 (Xigang District)
    // ==========================================
    { name: "市民健身中心", height: null, floors: null, year: "TBD", status: "construction", area: "Xigang", lat: 38.91159857378734, lng: 121.61650753114725 },
    { name: "城市规划馆", height: null, floors: null, year: "TBD", status: "construction", area: "Xigang", lat: 38.9113204908117, lng: 121.61482095231061 },
    { name: "市政府", height: null, floors: null, year: "TBD", status: "completed", area: "Xigang", lat: 38.913330469563874, lng: 121.60969851802763 },
    { name: "人民法院", height: null, floors: null, year: "TBD", status: "construction", area: "Xigang", lat: 38.911232674921244, lng: 121.60768590908127 },
    { name: "公安局", height: null, floors: null, year: "TBD", status: "construction", area: "Xigang", lat: 38.912315730130054, lng: 121.612532472058 },
    { name: "九邦大厦", height: null, floors: null, year: "TBD", status: "construction", area: "Xigang", lat: 38.915330634678774, lng: 121.61289612097693 },
    { name: "珠江国际大厦", height: null, floors: null, year: "TBD", status: "construction", area: "Xigang", lat: 38.91501353910094, lng: 121.61174247597337 },
    { name: "鑫隆大厦", height: null, floors: null, year: "TBD", status: "construction", area: "Xigang", lat: 38.91574869092136, lng: 121.61278788602293 },
    { name: "外经贸大厦", height: null, floors: null, year: "TBD", status: "construction", area: "Xigang", lat: 38.914917352015095, lng: 121.61142888501418 },
    { name: "润德广场", height: null, floors: null, year: "TBD", status: "construction", area: "Xigang", lat: 38.915785152931164, lng: 121.61160696100842 },
    { name: "泰华大厦", height: null, floors: null, year: "TBD", status: "construction", area: "Xigang", lat: 38.91635760402916, lng: 121.61154135406319 },
    { name: "金福星大厦", height: null, floors: null, year: "TBD", status: "construction", area: "Xigang", lat: 38.917163403192355, lng: 121.61150386438477 },
    { name: "锦绣大厦", height: null, floors: null, year: "TBD", status: "construction", area: "Xigang", lat: 38.91775407366932, lng: 121.61150855059513 },
    { name: "白云物业大厦", height: null, floors: null, year: "TBD", status: "construction", area: "Xigang", lat: 38.91812232870079, lng: 121.61049164294376 },
    { name: "金宸国际大厦", height: null, floors: null, year: "TBD", status: "construction", area: "Xigang", lat: 38.91843953697664, lng: 121.61250671338342 },
    { name: "西岗万达大厦", height: null, floors: null, year: "TBD", status: "construction", area: "Xigang", lat: 38.91899373648897, lng: 121.61241767538633 },
    { name: "润德公馆", height: null, floors: null, year: "TBD", status: "construction", area: "Xigang", lat: 38.919380215166164, lng: 121.61213181655344 },
    { name: "恒隆广场", height: null, floors: null, year: "TBD", status: "construction", area: "Xigang", lat: 38.90619371810297, lng: 121.6043408860843 },
    { name: "西岗体育馆", height: null, floors: null, year: "TBD", status: "construction", area: "Xigang", lat: 38.90745643295365, lng: 121.60046375502009 },
    { name: "大连电视台", height: null, floors: null, year: "TBD", status: "landmark", area: "Xigang", lat: 38.90511741039338, lng: 121.62749111942975 },
    { name: "足球博物馆", height: null, floors: null, year: "TBD", status: "construction", area: "Xigang", lat: 38.90866030284136, lng: 121.62947074391846 },

    // ==========================================
    // 沙河口区/星海湾 (Shahekou District/Xinghai)
    // ==========================================
    { name: "深蓝中心", height: null, floors: null, year: "TBD", status: "construction", area: "Shahekou", lat: 38.892962952432605, lng: 121.58230117859632 },
    { name: "凯泰铭座", height: null, floors: null, year: "TBD", status: "construction", area: "Shahekou", lat: 38.89163786586266, lng: 121.5826137431868 },
    { name: "中国石油大厦", height: null, floors: null, year: "TBD", status: "construction", area: "Shahekou", lat: 38.89133764750177, lng: 121.58170265065709 },
    { name: "万科大都会星海", height: null, floors: null, year: "TBD", status: "construction", area: "Shahekou", lat: 38.89028687324585, lng: 121.58248073697807 },
    { name: "环球金融中心", height: null, floors: null, year: "TBD", status: "construction", area: "Shahekou", lat: 38.88951560540262, lng: 121.58222802518152 },
    { name: "华君金融中心", height: null, floors: null, year: "TBD", status: "construction", area: "Shahekou", lat: 38.89008499857921, lng: 121.58133688358312 },
    { name: "诺德大厦", height: null, floors: null, year: "TBD", status: "construction", area: "Shahekou", lat: 38.89033863588848, lng: 121.5841566152079 },
    { name: "期货大厦", height: null, floors: null, year: "TBD", status: "construction", area: "Shahekou", lat: 38.89021958175406, lng: 121.58539357294902 },
    { name: "万象城", height: null, floors: null, year: "TBD", status: "construction", area: "Shahekou", lat: 38.88733116371944, lng: 121.5841366642235 },
    { name: "大连博物馆", height: null, floors: null, year: "TBD", status: "landmark", area: "Shahekou", lat: 38.887610693172135, lng: 121.58119722701083 },
    { name: "国航大厦", height: null, floors: null, year: "TBD", status: "construction", area: "Shahekou", lat: 38.8861198566856, lng: 121.581017668643 },
    { name: "世纪经典", height: null, floors: null, year: "TBD", status: "construction", area: "Shahekou", lat: 38.88513112497471, lng: 121.58094451522821 },
    { name: "星海国际金融中心", height: null, floors: null, year: "TBD", status: "construction", area: "Shahekou", lat: 38.88576784906753, lng: 121.58218812327972 },
    { name: "CIC国际金融中心", height: null, floors: null, year: "TBD", status: "construction", area: "Shahekou", lat: 38.88739328143117, lng: 121.58744186847318 },
    { name: "星海大观", height: null, floors: null, year: "TBD", status: "construction", area: "Shahekou", lat: 38.88654951066866, lng: 121.5869829970531 },
    { name: "大连世界博览广场", height: null, floors: null, year: "TBD", status: "completed", area: "Shahekou", lat: 38.88450474848644, lng: 121.58703619951997 },
    { name: "君悦", height: null, floors: null, year: "TBD", status: "construction", area: "Shahekou", lat: 38.877282902364726, lng: 121.57943489480677 },
    { name: "新星海中心", height: null, floors: null, year: "TBD", status: "construction", area: "Shahekou", lat: 38.89474468975745, lng: 121.58912100734973 },
    { name: "泛太平洋", height: null, floors: null, year: "TBD", status: "construction", area: "Shahekou", lat: 38.8910881905982, lng: 121.58990120983509 },
    { name: "星海长岛", height: null, floors: null, year: "TBD", status: "construction", area: "Shahekou", lat: 38.89051562560839, lng: 121.58998480295217 },
    { name: "城堡酒店 (The Castle Hotel)", height: null, floors: null, year: "2014", status: "completed", area: "Shahekou", lat: 38.87779188944455, lng: 121.59074635415483 },

    // ==========================================
    // 甘井子/其他 (Ganjingzi/Other)
    // ==========================================
    { name: "梭鱼湾足球场 (Suoyuwan Stadium)", height: 50, floors: 0, year: "2023", status: "completed", area: "Ganjingzi", lat: 38.95157093640852, lng: 121.61936045002965 },
    { name: "南海中心", height: null, floors: null, year: "TBD", status: "construction", area: "Other", lat: 38.85990734918894, lng: 121.54103457670298 }
];
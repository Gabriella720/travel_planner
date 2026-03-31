(() => {
    const STORAGE_KEY = 'trip_lang';

    const DICT = {
        en: {
            'app.name': 'Trip Planner',
            'common.lang.en': 'EN',
            'common.lang.zh': '中文',
            'common.backHome': 'Back',

            'home.title': 'Explore Your Trip',
            'home.subtitle': 'Whether it’s a city stroll nearby or an adventure far away, Trip Planner helps you plan every perfect journey.',
            'home.local.title': 'Local Trip',
            'home.local.desc': 'Discover hidden gems and Citywalk routes around your city.',
            'home.local.cta': 'Start Planning',
            'home.domestic.title': 'Domestic Travel',
            'home.domestic.desc': 'Explore popular destinations nationwide and experience local culture and scenery.',
            'home.domestic.cta': 'Explore Destinations',
            'home.foreign.title': 'International Travel',
            'home.foreign.desc': 'Plan your overseas trip, enjoy diverse cultures, and explore the world.',
            'home.foreign.cta': 'Explore the World',
            'home.footer': '© 2026 Trip Planner. All rights reserved.',

            'local.weather': 'Weather',
            'local.city': 'City',
            'local.city.ph': 'Type or select a city',
            'local.destination': 'Place',
            'local.destination.ph': 'e.g. Palace Museum, Nanluoguxiang',
            'local.time': 'Time',
            'local.time.ph': 'Start - End',
            'local.timeStart': 'Start',
            'local.timeEnd': 'End',
            'local.confirm': 'Confirm',
            'local.preference': 'Preference',
            'local.pref.citywalk': 'Citywalk',
            'local.pref.art': 'Arts',
            'local.pref.cycling': 'Cycling',
            'local.pref.mixed': 'Mixed',
            'local.smartPlan': 'Smart Plan',
            'local.selfPlan': 'Plan Myself',
            'local.smartImport': 'Smart Import',
            'local.textImport': 'Text / Link',
            'local.textImport.ph': 'Paste notes, guide links, or any text...',
            'local.screenshotImport': 'Screenshot',
            'local.screenshot.hint1': 'Click or paste image (Ctrl+V)',
            'local.screenshot.hint2': 'Supports JPG, PNG',
            'local.parseRoute': 'Parse Route',
            'local.parsedTitle': 'Parsed Itinerary',
            'local.addToTrip': 'Add to My Trip',
            'local.myTrip': 'My Trip',
            'local.mapArea': 'Map Area',
            'local.routePreview': 'Route Preview',
            'local.editRoute': 'Edit Route',
            'local.doneEdit': 'Done',
            'local.addPoint': 'Add a Stop',
            'local.notes': 'Notes',
            'local.notes.ph': 'Write down tips and reminders...',
            'local.checklist': 'Checklist',
            'local.addItem.ph': 'Add an item...',
            'local.add': 'Add',
            'local.exportImg': 'Export Image',
            'local.exportIcs': 'Sync to Calendar',
            'local.airGood': 'Good',
            'local.now': 'Now',
            'local.weatherDetails': 'Humidity 45% · NE wind 3',
            'local.weatherDemo': 'Sunny to Cloudy',
            'local.startPoint': 'Start',
            'local.unset': 'Not set',
            'local.routeEmpty': 'No stops yet. Click “Add a Stop” below to start.',
            'local.editHint': 'Click edit to add details',
            'local.stopNamePh': 'Stop name',
            'local.stopDetailPh': 'Details / notes',
            'local.newStop': 'New stop',
            'local.enterNameAlert': 'Please enter a stop name',
            'local.planning': 'Planning...',
            'local.planDone': 'Smart plan is ready.',
            'local.planFail': 'Smart planning failed: {msg}\n\nA fallback plan is generated.',
            'local.uploadImageFirst': 'Please upload or paste an image first.',
            'local.addedToMyTrip': 'Added to “My Trip”.',
            'local.noParsed': 'No parsed itinerary yet. Please parse text or image first.',
            'local.dsNeedKeyPrompt': 'DeepSeek API Key is not set. Please enter your API Key to enable Smart Plan:',
            'local.dsNeedKeyError': 'API Key is required to use Smart Plan.',
            'local.dsPrompt': 'City: {city}\nPlace: {dest}\nTime: {time}\nPreference: {prefs}\nPlease plan a trip.',
            'local.fallback.center': ' Downtown',
            'local.fallback.meet': 'Meet up & depart',
            'local.fallback.hot': ' popular spots',
            'local.fallback.play': 'Main sightseeing',
            'local.fallback.food': 'Local food',
            'local.fallback.lunch': 'Lunch',
            'local.check.id': 'ID / Passport',
            'local.check.power': 'Power bank',
            'local.check.umbrella': 'Umbrella',
            'import.cat.attraction': 'Attraction',
            'import.cat.food': 'Food',
            'import.cat.hotel': 'Hotel',
            'import.sample.1.name': 'The Palace Museum',
            'import.sample.1.notes': 'A UNESCO World Heritage site and former imperial palace. Book tickets 1–7 days in advance. Suggested visit: 3–4 hours.',
            'import.sample.1.distance': '1.4 km',
            'import.sample.1.duration': '27 min',
            'import.sample.2.name': 'Jingshan Park',
            'import.sample.2.notes': 'North of the Palace Museum. Great viewpoint for a full panorama. Suggested visit: 1 hour.',
            'import.sample.2.distance': '1.3 km',
            'import.sample.2.duration': '2 min',
            'import.sample.3.name': 'Siji Minfu (Palace branch)',
            'import.sample.3.notes': 'Near the east gate. Famous roast duck. Get a number early; queues are common.',
            'import.sample.3.distance': '4.7 km',
            'import.sample.3.duration': '15 min',
            'route.demo.1.name': 'The Palace Museum',
            'route.demo.1.notes': 'UNESCO World Heritage · Ticket reservation required · Suggested 3–4 hours.',
            'route.demo.2.name': 'Jingshan Park',
            'route.demo.2.notes': 'Best panorama viewpoint · Suggested 1 hour · Ticket ¥2.',
            'route.demo.3.name': 'Siji Minfu (Palace branch)',
            'route.demo.3.notes': 'Famous roast duck · Queue early · Suggested 1–1.5 hours.',
            'route.demo.4.name': 'Shichahai',
            'route.demo.4.notes': 'Lakeside walk · Sunset spot · Cycling friendly.',

            'domestic.title': 'Wishlist',
            'domestic.subtitle': 'Add domestic destinations you’d like to visit and start planning.',
            'domestic.add': 'Add Destination',
            'domestic.detail': 'View Details',
            'domestic.suitable': 'Good to Go',
            'domestic.planned': 'Planned',
            'domestic.modal.title': 'Add Destination',
            'domestic.modal.city': 'City',
            'domestic.modal.city.ph': 'Enter a city',
            'domestic.modal.date': 'Date',
            'domestic.modal.cancel': 'Cancel',
            'domestic.modal.confirm': 'Confirm',
            'domestic.alert.fill': 'Please enter both city and date',

            'foreign.title': 'International Travel',
            'foreign.coming': 'Coming Soon',
            'foreign.desc': 'We’re working on global data to bring you an expanded travel experience.',
            'foreign.back': 'Back to Home'
        },
        zh: {
            'app.name': '行程助手',
            'common.lang.en': 'EN',
            'common.lang.zh': '中文',
            'common.backHome': '返回',

            'home.title': '探索你的行程',
            'home.subtitle': '无论是在熟悉的城市漫步，还是去探索未知的国度，行程助手帮你轻松规划每一段完美旅程。',
            'home.local.title': '本地出游',
            'home.local.desc': '探索你所在城市的精彩，发现身边的小众景点和 Citywalk 路线。',
            'home.local.cta': '开始规划',
            'home.domestic.title': '国内旅行',
            'home.domestic.desc': '发现国内热门目的地，体验各地的风土人情和壮丽风光。',
            'home.domestic.cta': '探索目的地',
            'home.foreign.title': '国外旅行',
            'home.foreign.desc': '计划你的出境之旅，体验不同文化，探索广阔世界。',
            'home.foreign.cta': '探索世界',
            'home.footer': '© 2026 行程助手. All rights reserved.',

            'local.weather': '天气',
            'local.city': '城市',
            'local.city.ph': '请输入或选择城市',
            'local.destination': '地点',
            'local.destination.ph': '如故宫、南锣鼓巷等',
            'local.time': '时间',
            'local.time.ph': '开始时间 - 结束时间',
            'local.timeStart': '开始时间',
            'local.timeEnd': '结束时间',
            'local.confirm': '确认',
            'local.preference': '偏好',
            'local.pref.citywalk': 'Citywalk',
            'local.pref.art': '文艺展览',
            'local.pref.cycling': '骑行',
            'local.pref.mixed': '综合',
            'local.smartPlan': '智能规划',
            'local.selfPlan': '自己规划',
            'local.smartImport': '智能导入行程',
            'local.textImport': '文本或链接识别',
            'local.textImport.ph': '粘贴小红书笔记、攻略链接或其他文本...',
            'local.screenshotImport': '截图识别',
            'local.screenshot.hint1': '点击或直接粘贴图片 (Ctrl+V)',
            'local.screenshot.hint2': '支持 JPG, PNG',
            'local.parseRoute': '解析路线',
            'local.parsedTitle': '解析出的行程',
            'local.addToTrip': '添加至行程',
            'local.myTrip': '我的行程',
            'local.mapArea': '路线图区域',
            'local.routePreview': '路线预览',
            'local.editRoute': '编辑路线',
            'local.doneEdit': '完成编辑',
            'local.addPoint': '新增路线点',
            'local.notes': '便签',
            'local.notes.ph': '记录出行日记、注意事项...',
            'local.checklist': '出行清单',
            'local.addItem.ph': '添加新物品...',
            'local.add': '添加',
            'local.exportImg': '导出图片',
            'local.exportIcs': '同步到日历',
            'local.airGood': '空气优',
            'local.now': '现在',
            'local.weatherDetails': '湿度 45% · 东北风 3级',
            'local.weatherDemo': '晴转多云',
            'local.startPoint': '起始点',
            'local.unset': '暂未设定',
            'local.routeEmpty': '暂无路线点，请点击下方新增',
            'local.editHint': '点击编辑详细信息',
            'local.stopNamePh': '路线点名称',
            'local.stopDetailPh': '详情信息',
            'local.newStop': '新路线点',
            'local.enterNameAlert': '请输入地点名称',
            'local.planning': '规划中...',
            'local.planDone': '智能规划完成！',
            'local.planFail': '智能规划遇到一点问题：{msg}\n\n系统将自动为您提供模拟规划方案。',
            'local.uploadImageFirst': '请先上传图片或粘贴图片。',
            'local.addedToMyTrip': '已成功同步到“我的行程”！',
            'local.noParsed': '暂无解析出的路线信息，请先识别文本或图片。',
            'local.dsNeedKeyPrompt': '检测到您尚未配置 DeepSeek API Key。请输入您的 API Key 以启用智能规划功能：',
            'local.dsNeedKeyError': '需要 API Key 才能使用智能规划功能',
            'local.dsPrompt': '城市：{city}\n地点：{dest}\n时间：{time}\n偏好：{prefs}\n请规划行程。',
            'local.fallback.center': '市中心',
            'local.fallback.meet': '集合出发',
            'local.fallback.hot': '热门景点',
            'local.fallback.play': '重点游玩',
            'local.fallback.food': '当地美食',
            'local.fallback.lunch': '午餐体验',
            'local.check.id': '身份证 / 护照',
            'local.check.power': '充电宝',
            'local.check.umbrella': '雨伞',
            'import.cat.attraction': '景点',
            'import.cat.food': '吃喝',
            'import.cat.hotel': '住宿',
            'import.sample.1.name': '故宫博物院',
            'import.sample.1.notes': '世界文化遗产，明清皇宫，规模宏大。需提前1-7天在官网预约购票！建议游玩3-4小时。',
            'import.sample.1.distance': '1.4公里',
            'import.sample.1.duration': '27分钟',
            'import.sample.2.name': '景山公园',
            'import.sample.2.notes': '位于故宫北侧，可登顶俯瞰故宫全景，最佳拍摄点。建议游玩1小时。',
            'import.sample.2.distance': '1.3公里',
            'import.sample.2.duration': '2分钟',
            'import.sample.3.name': '四季民福(故宫店)',
            'import.sample.3.notes': '故宫东门旁，果木烤鸭一绝。建议提前取号排队。',
            'import.sample.3.distance': '4.7公里',
            'import.sample.3.duration': '15分钟',
            'route.demo.1.name': '故宫博物院',
            'route.demo.1.notes': '世界文化遗产 · 需预约购票 · 建议游玩3-4小时。',
            'route.demo.2.name': '景山公园',
            'route.demo.2.notes': '俯瞰故宫全景最佳点 · 建议游玩1小时 · 门票2元。',
            'route.demo.3.name': '四季民福(故宫店)',
            'route.demo.3.notes': '果木烤鸭一绝 · 建议提前取号排队 · 建议游玩1-1.5小时。',
            'route.demo.4.name': '什刹海',
            'route.demo.4.notes': '前海后海西海散步 · 适合傍晚看落日 · 可骑行。',

            'domestic.title': '我的心愿单',
            'domestic.subtitle': '添加你想去的国内目的地，开启精彩旅程。',
            'domestic.add': '添加目的地',
            'domestic.detail': '查看详情',
            'domestic.suitable': '适合出行',
            'domestic.planned': '计划中',
            'domestic.modal.title': '添加目的地',
            'domestic.modal.city': '城市名称',
            'domestic.modal.city.ph': '输入你想去的城市',
            'domestic.modal.date': '计划日期',
            'domestic.modal.cancel': '取消',
            'domestic.modal.confirm': '确定',
            'domestic.alert.fill': '请完整填写城市和日期',

            'foreign.title': '国外旅行',
            'foreign.coming': '敬请期待',
            'foreign.desc': '我们正在努力接入全球旅游数据，为您提供更广阔的探索体验。',
            'foreign.back': '返回首页'
        }
    };

    const getLang = () => {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved === 'zh' || saved === 'en' ? saved : 'en';
    };

    const setLang = (lang) => {
        localStorage.setItem(STORAGE_KEY, lang === 'zh' ? 'zh' : 'en');
        document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    };

    const t = (key) => {
        const lang = getLang();
        return (DICT[lang] && DICT[lang][key]) || DICT.en[key] || key;
    };

    const apply = (root = document) => {
        const lang = getLang();
        document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

        const titleKey = document.body?.dataset?.i18nTitle;
        if (titleKey) document.title = t(titleKey);

        root.querySelectorAll('[data-i18n]').forEach((el) => {
            const key = el.getAttribute('data-i18n');
            if (!key) return;
            el.textContent = t(key);
        });

        root.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (!key) return;
            if ('placeholder' in el) el.placeholder = t(key);
        });
    };

    const ensureDefault = () => {
        if (!localStorage.getItem(STORAGE_KEY)) setLang('en');
        else setLang(getLang());
    };

    const mountSwitcher = () => {
        const buttons = Array.from(document.querySelectorAll('.lang-switch'));
        if (buttons.length === 0) return;

        const renderLabel = (btn) => {
            const lang = getLang();
            btn.textContent = lang === 'zh' ? t('common.lang.zh') : t('common.lang.en');
        };

        buttons.forEach((btn) => {
            btn.addEventListener('click', () => {
                const next = getLang() === 'zh' ? 'en' : 'zh';
                setLang(next);
                apply();
                buttons.forEach(renderLabel);
                window.dispatchEvent(new CustomEvent('langchange', { detail: { lang: next } }));
            });
            renderLabel(btn);
        });
    };

    window.I18n = { t, getLang, setLang, apply };

    const init = () => {
        ensureDefault();
        mountSwitcher();
        apply();
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();

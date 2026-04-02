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
            'foreign.back': 'Back to Home',

            'agent.title': 'AI Travel Agent',
            'agent.placeholder': 'I want to go to Japan for 7 days, budget 10k, and I love anime.',
            'agent.generate': 'Generate Itinerary',
            'agent.optimize': 'Optimize Plan',
            'agent.full': 'Full Travel Plan',
            'agent.empty': 'Describe your trip needs, then click “Generate Itinerary”. I’ll show my reasoning and output in cards.',
            'agent.thinkingTitle': 'AI Reasoning',
            'agent.think.1': 'Analyzing your preferences...',
            'agent.think.2': 'Matching destinations...',
            'agent.think.3': 'Optimizing route...',
            'agent.think.4': 'Generating itinerary...',
            'agent.optimizingTitle': 'Re-optimizing...',
            'agent.optimizing.1': 'Re-checking time and budget constraints...',
            'agent.optimizing.2': 'Re-ordering route for efficiency...',
            'agent.optimizing.3': 'Refreshing the itinerary details...',
            'agent.fullTitle': 'Generating full plan...',
            'agent.full.1': 'Selecting hotel areas and preferences...',
            'agent.full.2': 'Allocating budget and transport strategy...',
            'agent.full.3': 'Compiling the complete travel package...',
            'agent.followup.q': 'Do you prefer nature views or city vibes?',
            'agent.followup.nature': 'Nature',
            'agent.followup.city': 'City',
            'agent.card.dest': 'Recommended Destination',
            'agent.card.reason': 'Reasoning',
            'agent.card.itinerary': 'Itinerary',
            'agent.card.tips': 'Travel Tips',
            'agent.card.hotel': 'Hotel Suggestions',
            'agent.card.budget': 'Budget Breakdown',
            'agent.card.transport': 'Transport',
            'agent.notice.emptyInput': 'Please enter your travel request first.'
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
            'foreign.back': '返回首页',

            'agent.title': 'AI Travel Agent',
            'agent.placeholder': '我想去日本7天，预算1万，喜欢动漫',
            'agent.generate': '生成行程',
            'agent.optimize': '🔄 优化行程',
            'agent.full': '✨ 生成完整旅行方案',
            'agent.empty': '输入你的旅行需求并点击“生成行程”。我会展示思考过程，并用卡片输出结果。',
            'agent.thinkingTitle': 'AI 思考过程',
            'agent.think.1': '正在分析用户偏好...',
            'agent.think.2': '正在匹配目的地...',
            'agent.think.3': '正在优化路线...',
            'agent.think.4': '正在生成行程...',
            'agent.optimizingTitle': '正在重新优化...',
            'agent.optimizing.1': '正在重新校验时间与预算约束...',
            'agent.optimizing.2': '正在重新排序动线以提升效率...',
            'agent.optimizing.3': '正在微调每日安排细节...',
            'agent.fullTitle': '正在生成完整方案...',
            'agent.full.1': '正在选择适合的酒店区域与偏好...',
            'agent.full.2': '正在分配预算并制定交通策略...',
            'agent.full.3': '正在汇总完整旅行包...',
            'agent.followup.q': '你更喜欢自然风光还是城市体验？',
            'agent.followup.nature': '自然',
            'agent.followup.city': '城市',
            'agent.card.dest': '📍 推荐目的地',
            'agent.card.reason': '🧠 推荐理由',
            'agent.card.itinerary': '📅 行程安排',
            'agent.card.tips': '💡 旅行建议',
            'agent.card.hotel': '🏨 酒店推荐（mock）',
            'agent.card.budget': '💰 预算分配（mock）',
            'agent.card.transport': '🚆 交通建议（mock）',
            'agent.notice.emptyInput': '请先输入你的旅行需求。'
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

    const initAgent = () => {
        if (!document.body || document.body.dataset.agentDemo !== 'true') return;
        if (document.getElementById('ai-agent-panel')) return;

        const escapeHtml = (val) =>
            String(val)
                .replaceAll('&', '&amp;')
                .replaceAll('<', '&lt;')
                .replaceAll('>', '&gt;')
                .replaceAll('"', '&quot;')
                .replaceAll("'", '&#039;');

        const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

        const state = {
            isBusy: false,
            isOpen: true,
            lastRequest: '',
            followUp: null,
            plan: null,
            fullEnabled: false
        };

        const fab = document.createElement('button');
        fab.type = 'button';
        fab.className = 'ai-agent-fab';
        fab.setAttribute('aria-label', 'AI Travel Agent');
        fab.innerHTML = '<i class="fa-solid fa-wand-magic-sparkles"></i>';

        const panel = document.createElement('section');
        panel.className = 'ai-agent-panel';
        panel.id = 'ai-agent-panel';
        panel.innerHTML = `
            <div class="ai-agent-header">
                <div class="ai-agent-title">
                    <i class="fa-solid fa-brain"></i>
                    <span data-i18n="agent.title">AI Travel Agent</span>
                </div>
                <button type="button" class="ai-agent-close" aria-label="Close">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
            <div class="ai-agent-body">
                <textarea class="ai-agent-input" id="ai-agent-input" data-i18n-placeholder="agent.placeholder" placeholder=""></textarea>
                <div class="ai-agent-actions">
                    <button type="button" class="btn btn-primary" id="ai-agent-generate">
                        <i class="fa-solid fa-sparkles"></i>
                        <span data-i18n="agent.generate">生成行程</span>
                    </button>
                    <button type="button" class="btn btn-secondary" id="ai-agent-optimize">
                        <i class="fa-solid fa-rotate"></i>
                        <span data-i18n="agent.optimize">🔄 优化行程</span>
                    </button>
                    <button type="button" class="btn btn-secondary btn-fullrow" id="ai-agent-full">
                        <i class="fa-solid fa-wand-magic-sparkles"></i>
                        <span data-i18n="agent.full">✨ 生成完整旅行方案</span>
                    </button>
                </div>
                <div class="ai-agent-feed" id="ai-agent-feed">
                    <div class="ai-empty" id="ai-agent-empty" data-i18n="agent.empty">...</div>
                    <div class="ai-thinking" id="ai-agent-thinking" style="display:none;">
                        <div class="ai-thinking-title">
                            <i class="fa-solid fa-circle-nodes"></i>
                            <span data-i18n="agent.thinkingTitle">AI 思考过程</span>
                            <span class="ai-pill" style="margin-left:auto;">
                                <span class="dot"></span>
                                <span id="ai-agent-status">Ready</span>
                            </span>
                        </div>
                        <div id="ai-agent-thinking-lines"></div>
                    </div>
                    <div class="ai-cards" id="ai-agent-cards"></div>
                </div>
            </div>
        `;

        document.body.appendChild(fab);
        document.body.appendChild(panel);
        apply(panel);

        const inputEl = panel.querySelector('#ai-agent-input');
        const generateBtn = panel.querySelector('#ai-agent-generate');
        const optimizeBtn = panel.querySelector('#ai-agent-optimize');
        const fullBtn = panel.querySelector('#ai-agent-full');
        const closeBtn = panel.querySelector('.ai-agent-close');
        const emptyEl = panel.querySelector('#ai-agent-empty');
        const thinkingEl = panel.querySelector('#ai-agent-thinking');
        const thinkingLinesEl = panel.querySelector('#ai-agent-thinking-lines');
        const cardsEl = panel.querySelector('#ai-agent-cards');
        const statusEl = panel.querySelector('#ai-agent-status');

        const PANEL_CFG = {
            preferredW: 300,
            minW: 220,
            gap: 18,
            minRight: 12
        };

        const getAnchorEl = () =>
            document.querySelector('main.container')
            || document.querySelector('.planner-main.container')
            || document.querySelector('main .container')
            || document.querySelector('header .container')
            || document.querySelector('.container');

        const applyPlacement = () => {
            const anchor = getAnchorEl();
            const rect = anchor ? anchor.getBoundingClientRect() : { right: window.innerWidth };

            const spaceRight = Math.max(0, window.innerWidth - rect.right);
            const maxW = Math.max(PANEL_CFG.minW, spaceRight - PANEL_CFG.gap);
            const w = Math.min(PANEL_CFG.preferredW, maxW);

            const desiredLeft = rect.right + PANEL_CFG.gap;
            const computedRight = window.innerWidth - (desiredLeft + w);
            const right = Math.max(PANEL_CFG.minRight, computedRight);

            panel.style.left = '';
            panel.style.right = `${right}px`;
            panel.style.width = `${w}px`;
        };

        const setOpen = (open) => {
            state.isOpen = open;
            if (open) {
                panel.classList.remove('closed');
                applyPlacement();
            } else {
                panel.classList.add('closed');
            }
        };

        setOpen(true);

        fab.addEventListener('click', () => setOpen(!state.isOpen));
        closeBtn.addEventListener('click', () => setOpen(false));

        window.addEventListener('resize', () => {
            if (!state.isOpen) return;
            applyPlacement();
        });

        const setBusy = (busy, statusText) => {
            state.isBusy = busy;
            generateBtn.disabled = busy;
            optimizeBtn.disabled = busy;
            fullBtn.disabled = busy;
            if (statusText) statusEl.textContent = statusText;
        };

        const typeLine = async (text) => {
            const lineEl = document.createElement('div');
            lineEl.className = 'ai-thought-line ai-caret';
            thinkingLinesEl.appendChild(lineEl);
            lineEl.textContent = '';
            for (let i = 0; i < text.length; i += 1) {
                lineEl.textContent += text[i];
                await sleep(14 + Math.random() * 18);
            }
            lineEl.classList.remove('ai-caret');
        };

        const renderShimmer = () => {
            cardsEl.innerHTML = `
                <div class="ai-card ai-shimmer" style="height: 92px;"></div>
                <div class="ai-card ai-shimmer" style="height: 122px;"></div>
                <div class="ai-card ai-shimmer" style="height: 168px;"></div>
                <div class="ai-card ai-shimmer" style="height: 118px;"></div>
            `;
        };

        const parseRequest = (rawText) => {
            const text = String(rawText || '').trim();
            const lower = text.toLowerCase();
            const daysMatch = text.match(/(\d{1,2})\s*(天|days?)/i);
            const days = daysMatch ? Math.max(2, Math.min(14, parseInt(daysMatch[1], 10))) : 7;

            const budgetWanMatch = text.match(/预算\s*(\d+(?:\.\d+)?)\s*万/);
            const budgetKMatch = text.match(/预算\s*(\d+(?:\.\d+)?)\s*(k|千|w)/i);
            const budgetPlainMatch = text.match(/预算\s*(\d{3,6})/);
            const budgetCny = budgetWanMatch
                ? Math.round(parseFloat(budgetWanMatch[1]) * 10000)
                : budgetKMatch
                    ? Math.round(parseFloat(budgetKMatch[1]) * 1000)
                    : budgetPlainMatch
                        ? parseInt(budgetPlainMatch[1], 10)
                        : null;

            const tags = {
                japan: /日本|japan/.test(text),
                island: /海岛|海边|沙滩|island|beach/.test(lower),
                city: /城市|city|shopping|逛街|博物馆|museum/.test(lower),
                europe: /欧洲|europe|paris|rome|london/.test(lower),
                usa: /美国|usa|new york|nyc/.test(lower),
                anime: /动漫|anime|秋叶原|akihabara|吉卜力|ghibli/.test(lower),
                food: /美食|吃|food|restaurant|拉面|寿司/.test(lower),
                nature: /自然|风光|徒步|hiking|lake|mountain|温泉|onsen/.test(lower)
            };

            return { text, lower, days, budgetCny, tags };
        };

        const pickDestination = (meta) => {
            if (meta.tags.japan) return { headline: '东京 + 京都', type: 'japan' };
            if (meta.tags.island) return { headline: '巴厘岛 + 乌布', type: 'island' };
            if (meta.tags.europe) return { headline: '巴黎 + 里昂', type: 'europe' };
            if (meta.tags.usa) return { headline: '纽约 + 波士顿', type: 'usa' };
            if (meta.tags.city) return { headline: '上海 + 杭州', type: 'china-city' };
            return { headline: '东京 + 京都', type: 'japan' };
        };

        const buildItinerary = (meta, dest, followUp) => {
            const dayTemplates = {
                japan: [
                    '东京 - 涩谷 / 秋叶原',
                    '东京 - 浅草 / 上野',
                    '东京 - 新宿 / 明治神宫',
                    '镰仓/箱根 一日游 - 海景/温泉',
                    '京都 - 清水寺 / 祇园',
                    '京都 - 伏见稻荷 / 岚山',
                    '返程 - 伴手礼 / 机场'
                ],
                island: [
                    '抵达 - 海边放松 / 日落',
                    '海滩日 - 浮潜 / 水上项目',
                    '乌布 - 梯田 / 森林漫步',
                    '海岛跳岛 - 出海一日',
                    '咖啡庄园 - 手作体验 / SPA',
                    '自由日 - 购物 / 打卡餐厅',
                    '返程 - 轻松收尾'
                ],
                europe: [
                    '巴黎 - 塞纳河 / 埃菲尔铁塔',
                    '巴黎 - 卢浮宫 / 老城区',
                    '巴黎 - 蒙马特 / 咖啡馆',
                    '里昂 - 老城漫步 / 美食',
                    '里昂 - 近郊小镇一日游',
                    '巴黎 - 购物 / 博物馆补票',
                    '返程 - 机场'
                ],
                usa: [
                    '纽约 - 时代广场 / 中城夜景',
                    '纽约 - 大都会博物馆 / 中央公园',
                    '纽约 - 华尔街 / 布鲁克林',
                    '波士顿 - 自由之路 / 校园',
                    '波士顿 - 海鲜 / 码头',
                    '纽约 - 购物 / 观景台',
                    '返程 - 机场'
                ],
                'china-city': [
                    '上海 - 外滩 / 南京路',
                    '上海 - 武康路 / 新天地',
                    '上海 - 博物馆 / 田子坊',
                    '杭州 - 西湖 / 灵隐寺',
                    '杭州 - 龙井 / 茶园',
                    '上海 - 购物 / 复盘打卡',
                    '返程 - 高铁/机场'
                ]
            };

            const base = dayTemplates[dest.type] || dayTemplates.japan;
            const list = [];
            for (let i = 0; i < meta.days; i += 1) {
                const idx = i < base.length ? i : (i % base.length);
                let title = base[idx];
                if (followUp === 'nature') {
                    if (dest.type === 'japan' && i === 3) title = '箱根/富士山 一日游 - 温泉/自然风光';
                    if (dest.type === 'china-city' && i === 3) title = '杭州 - 西湖骑行 / 夕阳';
                }
                if (followUp === 'city') {
                    if (dest.type === 'japan' && i === 3) title = '东京 - 银座 / 代官山 / 咖啡馆';
                    if (dest.type === 'island' && i === 2) title = '海边打卡 - 网红餐厅 / 夜市';
                }
                list.push(`Day ${i + 1}: ${title}`);
            }
            return list;
        };

        const buildReasoning = (meta, dest) => {
            const lang = getLang();
            const points = [];
            if (lang === 'zh') {
                const extracted = [];
                if (meta.tags.japan) extracted.push('日本');
                if (meta.days) extracted.push(`${meta.days}天`);
                if (meta.budgetCny) extracted.push(`预算约${meta.budgetCny.toLocaleString()}元`);
                if (meta.tags.anime) extracted.push('动漫偏好');
                if (meta.tags.food) extracted.push('美食偏好');
                if (meta.tags.nature) extracted.push('自然/温泉偏好');
                if (extracted.length) points.push(`需求解析：${extracted.join(' · ')}`);
                points.push(`目的地匹配：选择 ${dest.headline} 作为主线，兼顾“城市体验 + 交通效率”。`);
                points.push('路线优化：按“同区域聚类 + 动线最短 + 体力分配”重新排序每日安排。');
                points.push('风险控制：为热门景点预留预约/排队缓冲，并在中段安排可弹性调整的一日游。');
                return points;
            }
            if (meta.tags.anime) points.push('Preference fit: anime-related areas and themed spots are prioritized.');
            if (meta.budgetCny) points.push(`Budget constraint: designed to stay around CNY ${meta.budgetCny.toLocaleString()} with flexible options.`);
            points.push(`Destination match: ${dest.headline} balances highlights and transit efficiency.`);
            points.push('Route optimization: grouped by areas to reduce backtracking and keep each day smooth.');
            return points;
        };

        const buildTips = (meta, dest) => {
            const lang = getLang();
            if (lang === 'zh') {
                const tips = [
                    '尽量避开周末热门景点，或安排在早上第一波入场。',
                    '地铁/巴士建议使用通票或电子卡，减少排队时间。',
                    '每天预留 1–2 小时机动时间，用于排队/天气/临时想去的点。'
                ];
                if (dest.type === 'japan') tips.unshift('秋叶原/主题店建议在工作日午后，体验更舒适。');
                if (meta.tags.food) tips.push('热门餐厅建议提前预约或错峰用餐（14:00–17:00）。');
                return tips;
            }
            const tips = [
                'Avoid crowded attractions on weekends; go early for the first entry slot.',
                'Use metro passes or a transit card to save time and simplify commuting.',
                'Keep 1–2 hours of buffer time per day for queues, weather, and spontaneous stops.'
            ];
            if (dest.type === 'japan') tips.unshift('Visit Akihabara on weekdays for a smoother anime-focused experience.');
            return tips;
        };

        const buildFullPlan = (meta, dest) => {
            const lang = getLang();
            if (lang === 'zh') {
                const hotel = [
                    '东京：新宿/银座（交通便利 + 购物餐饮集中）',
                    '京都：四条河原町/京都站（换乘方便 + 住宿选择多）'
                ];
                const budget = [
                    '交通：25%（通票/新干线/市内交通）',
                    '住宿：35%（中端酒店/交通便利区）',
                    '餐饮：20%（特色餐厅 + 便利店补给）',
                    '门票体验：15%（景点门票/主题咖啡/展览）',
                    '机动：5%（应急/临时加点）'
                ];
                const transport = [
                    dest.type === 'japan' ? '东京⇄京都：新干线（建议提前购买指定席）' : '主城内通勤：优先地铁/公交卡',
                    '机场往返：优先机场快线或直达巴士，减少换乘。',
                    '市内移动：将同一区域景点集中在同一天，减少折返。'
                ];
                return { hotel, budget, transport };
            }
            return {
                hotel: ['Stay near a major transit hub (walkable + easy transfers).', 'Choose a second base close to top attractions to reduce daily commuting.'],
                budget: ['Transit 25%', 'Hotels 35%', 'Food 20%', 'Tickets/experiences 15%', 'Buffer 5%'],
                transport: ['Use fast intercity transit for long hops; book seats early if possible.', 'Prefer metro + transit cards inside cities.', 'Cluster attractions by area to avoid backtracking.']
            };
        };

        const createCard = ({ icon, title, contentHtml }) => {
            return `
                <div class="ai-card">
                    <div class="ai-card-title">
                        <span class="ai-card-icon"><i class="${icon}"></i></span>
                        <span>${escapeHtml(title)}</span>
                    </div>
                    <div class="ai-card-content">${contentHtml}</div>
                </div>
            `;
        };

        const renderPlan = () => {
            if (!state.plan) return;
            emptyEl.style.display = 'none';
            const { destHeadline, reasoning, itinerary, tips, full } = state.plan;

            const lang = getLang();
            const destTitle = t('agent.card.dest');
            const reasonTitle = t('agent.card.reason');
            const itineraryTitle = t('agent.card.itinerary');
            const tipsTitle = t('agent.card.tips');

            const destHtml = `<div style="font-weight:800; font-size: 16px; color: rgba(241,245,249,0.98);">${escapeHtml(destHeadline)}</div>`;
            const reasonHtml = `<ul>${reasoning.map((r) => `<li>${escapeHtml(r)}</li>`).join('')}</ul>`;
            const itineraryHtml = `<ul>${itinerary.map((d) => `<li>${escapeHtml(d)}</li>`).join('')}</ul>`;
            const tipsHtml = `<ul>${tips.map((d) => `<li>${escapeHtml(d)}</li>`).join('')}</ul>`;

            const parts = [
                createCard({ icon: 'fa-solid fa-location-dot', title: destTitle, contentHtml: destHtml }),
                createCard({ icon: 'fa-solid fa-brain', title: reasonTitle, contentHtml: reasonHtml }),
                createCard({ icon: 'fa-solid fa-calendar-days', title: itineraryTitle, contentHtml: itineraryHtml }),
                createCard({ icon: 'fa-solid fa-lightbulb', title: tipsTitle, contentHtml: tipsHtml })
            ];

            if (state.fullEnabled && full) {
                const hotelTitle = t('agent.card.hotel');
                const budgetTitle = t('agent.card.budget');
                const transportTitle = t('agent.card.transport');
                parts.push(
                    createCard({ icon: 'fa-solid fa-hotel', title: hotelTitle, contentHtml: `<ul>${full.hotel.map((x) => `<li>${escapeHtml(x)}</li>`).join('')}</ul>` }),
                    createCard({ icon: 'fa-solid fa-wallet', title: budgetTitle, contentHtml: `<ul>${full.budget.map((x) => `<li>${escapeHtml(x)}</li>`).join('')}</ul>` }),
                    createCard({ icon: 'fa-solid fa-train-subway', title: transportTitle, contentHtml: `<ul>${full.transport.map((x) => `<li>${escapeHtml(x)}</li>`).join('')}</ul>` })
                );
            }

            const followUpTitle = lang === 'zh' ? '💬' : 'Q';
            const followUp = `
                <div class="ai-card ai-followup">
                    <div class="ai-card-title">
                        <span class="ai-card-icon"><i class="fa-solid fa-message"></i></span>
                        <span>${escapeHtml(followUpTitle)} ${escapeHtml(t('agent.followup.q'))}</span>
                    </div>
                    <div class="ai-followup-actions">
                        <button type="button" class="btn btn-secondary" data-followup="nature">${escapeHtml(t('agent.followup.nature'))}</button>
                        <button type="button" class="btn btn-secondary" data-followup="city">${escapeHtml(t('agent.followup.city'))}</button>
                    </div>
                </div>
            `;

            cardsEl.innerHTML = parts.join('') + followUp;
            cardsEl.querySelectorAll('[data-followup]').forEach((btn) => {
                btn.addEventListener('click', async (e) => {
                    const v = e.currentTarget.getAttribute('data-followup');
                    if (!v) return;
                    state.followUp = v;
                    await runGenerate({ followUp: v, mode: 'refine' });
                });
            });
        };

        const buildPlan = (rawText, { followUp, mode } = {}) => {
            const meta = parseRequest(rawText);
            const dest = pickDestination(meta);
            let itinerary = buildItinerary(meta, dest, followUp);
            if (mode === 'optimize') {
                const swapped = itinerary.slice();
                if (swapped.length >= 3) {
                    const tmp = swapped[1];
                    swapped[1] = swapped[2];
                    swapped[2] = tmp;
                }
                itinerary = swapped.map((line, idx) => {
                    if (idx % 2 === 0) return line;
                    return line.replace(' / ', ' · ').replace(' - ', ' - ');
                });
            }
            const reasoning = buildReasoning(meta, dest);
            const tips = buildTips(meta, dest);
            const full = buildFullPlan(meta, dest);

            return { meta, destHeadline: dest.headline, itinerary, reasoning, tips, full };
        };

        const runThinking = async (titleKey, lineKeys) => {
            thinkingEl.style.display = '';
            thinkingLinesEl.innerHTML = '';
            statusEl.textContent = getLang() === 'zh' ? '运行中' : 'Running';
            await sleep(120);
            await typeLine(t(titleKey));
            for (const k of lineKeys) {
                await sleep(260 + Math.random() * 220);
                await typeLine(t(k));
            }
        };

        const runGenerate = async ({ followUp, mode } = {}) => {
            const text = state.lastRequest || inputEl.value.trim();
            if (!text) {
                emptyEl.style.display = '';
                statusEl.textContent = getLang() === 'zh' ? '待输入' : 'Waiting';
                alert(t('agent.notice.emptyInput'));
                return;
            }

            state.lastRequest = text;
            emptyEl.style.display = 'none';
            renderShimmer();

            setBusy(true, getLang() === 'zh' ? '思考中' : 'Thinking');
            try {
                if (mode === 'optimize') {
                    await runThinking('agent.optimizingTitle', ['agent.optimizing.1', 'agent.optimizing.2', 'agent.optimizing.3']);
                } else if (mode === 'full') {
                    await runThinking('agent.fullTitle', ['agent.full.1', 'agent.full.2', 'agent.full.3']);
                } else if (mode === 'refine') {
                    await runThinking('agent.optimizingTitle', ['agent.optimizing.2', 'agent.optimizing.3']);
                } else {
                    await runThinking('agent.thinkingTitle', ['agent.think.1', 'agent.think.2', 'agent.think.3', 'agent.think.4']);
                }

                state.plan = buildPlan(text, { followUp, mode });
                renderPlan();
                statusEl.textContent = getLang() === 'zh' ? '完成' : 'Done';
            } finally {
                setBusy(false);
            }
        };

        generateBtn.addEventListener('click', async () => {
            state.followUp = null;
            state.fullEnabled = false;
            await runGenerate({ followUp: null, mode: 'base' });
        });

        optimizeBtn.addEventListener('click', async () => {
            if (!state.plan) {
                alert(t('agent.notice.emptyInput'));
                return;
            }
            await runGenerate({ followUp: state.followUp, mode: 'optimize' });
        });

        fullBtn.addEventListener('click', async () => {
            if (!state.plan) {
                alert(t('agent.notice.emptyInput'));
                return;
            }
            state.fullEnabled = !state.fullEnabled;
            if (state.fullEnabled) {
                await runGenerate({ followUp: state.followUp, mode: 'full' });
            } else {
                renderPlan();
            }
        });

        inputEl.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                generateBtn.click();
            }
        });

        window.addEventListener('langchange', () => {
            apply(panel);
            if (state.plan) renderPlan();
        });
    };

    const init = () => {
        ensureDefault();
        mountSwitcher();
        apply();
        initAgent();
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();

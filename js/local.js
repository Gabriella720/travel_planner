/**
 * 本地出游模式逻辑
 */

document.addEventListener('DOMContentLoaded', () => {
    const tr = (key) => (window.I18n ? window.I18n.t(key) : key);

    // 模拟数据
    const MOCK_WEATHER = {
        temp: '22°C',
        desc: tr('local.weatherDemo'),
        aqi: '32',
        forecast: [
            { time: tr('local.now'), temp: '22°', icon: 'fa-sun' },
            { time: '14:00', temp: '23°', icon: 'fa-sun' },
            { time: '15:00', temp: '24°', icon: 'fa-sun' },
            { time: '16:00', temp: '23°', icon: 'fa-cloud-sun' },
            { time: '17:00', temp: '21°', icon: 'fa-cloud-sun' }
        ]
    };

    // 状态管理
    const urlParams = new URLSearchParams(window.location.search);
    const initialCity = urlParams.get('city') || '北京';

    const state = {
        city: initialCity,
        points: [
            { nameKey: 'local.startPoint', timeKey: 'local.unset', name: '', time: '', location: null }
        ],
        tempPoints: [],
        editingIndex: -1, 
        isBatchEditing: false, // 新增：是否处于批量编辑模式
        checklist: Utils.getStorage('checklist', [
            { id: 1, text: tr('local.check.id'), checked: true },
            { id: 2, text: tr('local.check.power'), checked: true },
            { id: 3, text: tr('local.check.umbrella'), checked: false }
        ])
    };

    const DEMO_ROUTE_STORAGE_KEY = 'demo_beijing_route_initialized';
    if (!urlParams.get('city') && state.city === '北京' && !Utils.getStorage(DEMO_ROUTE_STORAGE_KEY, false)) {
        state.points = [
            { nameKey: 'route.demo.1.name', timeKey: 'route.demo.1.notes', name: '', time: '', location: null },
            { nameKey: 'route.demo.2.name', timeKey: 'route.demo.2.notes', name: '', time: '', location: null },
            { nameKey: 'route.demo.3.name', timeKey: 'route.demo.3.notes', name: '', time: '', location: null },
            { nameKey: 'route.demo.4.name', timeKey: 'route.demo.4.notes', name: '', time: '', location: null }
        ];
        Utils.setStorage(DEMO_ROUTE_STORAGE_KEY, true);
    }

    // 城市大数据集
    const CHINA_CITIES = [
        "北京", "上海", "广州", "深圳", "成都", "杭州", "重庆", "武汉", "西安", "苏州", "天津", "南京", "长沙", "郑州", "东莞", "青岛", "沈阳", "宁波", "昆明", "无锡", "厦门", "福州", "合肥", "大连", "哈尔滨", "济南", "温州", "南宁", "长春", "泉州", "石家庄", "贵阳", "南昌", "金华", "常州", "嘉兴", "南通", "徐州", "太原", "惠州", "珠海", "中山", "台州", "烟台", "兰州", "绍兴", "海口", "扬州", "汕头", "潍坊", "保定", "镇江", "威海", "临沂", "廊坊", "咸阳", "江门", "盐城", "济宁", "芜湖", "莆田", "淮安", "宜昌", "绵阳", "淄博", "赣州", "唐山", "柳州", "三亚", "洛阳", "遵义", "邯郸", "上饶", "泰州", "漳州", "岳阳", "九江", "新乡", "衡阳", "安阳", "周口", "沧州", "信阳", "驻马店", "南阳", "阜阳", "商丘", "揭阳", "湛江", "茂名", "梅州", "清远", "肇庆", "潮州", "汕尾", "河源", "阳江", "韶关", "惠州", "汕头", "江门", "中山", "珠海"
    ];

    const CITY_EN_MAP = {
        北京: 'Beijing',
        上海: 'Shanghai',
        广州: 'Guangzhou',
        深圳: 'Shenzhen',
        成都: 'Chengdu',
        杭州: 'Hangzhou',
        重庆: 'Chongqing',
        武汉: 'Wuhan',
        西安: "Xi'an",
        厦门: 'Xiamen',
        南京: 'Nanjing',
        苏州: 'Suzhou',
        天津: 'Tianjin',
        长沙: 'Changsha',
        青岛: 'Qingdao',
        大连: 'Dalian',
        昆明: 'Kunming'
    };

    const CITY_OPTIONS = CHINA_CITIES.map((zh) => ({
        zh,
        en: CITY_EN_MAP[zh] || zh
    }));

    // 热门景点数据集 (按城市分类)
    const HOT_DESTINATIONS = {
        "北京": ["故宫", "天安门", "颐和园", "八达岭长城", "天坛", "南锣鼓巷", "亮马河", "三里屯", "奥林匹克公园", "圆明园", "什刹海", "雍和宫", "798艺术区"],
        "上海": ["外滩", "南京路", "豫园", "东方明珠", "田子坊", "武康路", "上海迪士尼", "静安寺", "新天地", "陆家嘴", "徐家汇"],
        "广州": ["广州塔", "珠江新城", "陈家祠", "越秀公园", "沙面岛", "长隆欢乐世界", "上下九", "白云山", "花城广场"],
        "深圳": ["世界之窗", "大梅沙", "东部华侨城", "欢乐海岸", "莲花山公园", "平安金融中心", "人才公园", "深圳湾公园"],
        "成都": ["宽窄巷子", "锦里", "大熊猫基地", "春熙路", "太古里", "武侯祠", "杜甫草堂", "九眼桥", "人民公园"],
        "杭州": ["西湖", "灵隐寺", "河坊街", "西溪湿地", "宋城", "钱江新城", "断桥", "雷峰塔", "南宋御街"],
        "厦门": ["鼓浪屿", "曾厝垵", "厦门大学", "南普陀寺", "环岛路", "中山路", "集美学村", "沙坡尾", "植物园", "白鹭洲公园"],
        "默认": ["故宫", "南锣鼓巷", "亮马河", "白浮泉", "奥林匹克公园", "外滩", "南京路", "广州塔", "宽窄巷子", "西湖", "鼓浪屿"]
    };

    // 辅助函数：初始化可搜索下拉列表
    const initSearchableSelect = (containerId, initialOptions = [], onSelect, getDynamicOptions) => {
        const container = document.getElementById(containerId);
        if (!container) return;

        const input = container.querySelector('input');
        const list = container.querySelector('.options-list');

        // 初始化列表内容
        const renderOptions = (filterVal = '') => {
            let currentOptions = initialOptions;
            if (getDynamicOptions) {
                currentOptions = getDynamicOptions();
            }

            const lang = window.I18n ? window.I18n.getLang() : 'en';
            const norm = (s) => (s || '').toString().toLowerCase();
            const q = norm(filterVal);

            const getOption = (opt) => {
                if (typeof opt === 'string') return { zh: opt, en: opt };
                return opt;
            };

            const filtered = q
                ? currentOptions
                    .map(getOption)
                    .filter((opt) => norm(opt.zh).includes(q) || norm(opt.en).includes(q))
                : currentOptions.map(getOption).slice(0, 10);
            
            list.innerHTML = filtered.map((opt) => {
                const label = lang === 'zh' ? opt.zh : opt.en;
                const safeZh = (opt.zh || '').replace(/"/g, '&quot;');
                const safeEn = (opt.en || '').replace(/"/g, '&quot;');
                return `<li data-zh="${safeZh}" data-en="${safeEn}">${label}</li>`;
            }).join('');
            list.classList.toggle('active', filtered.length > 0);
        };

        // 处理点击输入框展开列表
        input.addEventListener('click', (e) => {
            e.stopPropagation();
            document.querySelectorAll('.options-list').forEach(l => l.classList.remove('active'));
            renderOptions(input.value);
        });

        // 实时搜索匹配
        input.addEventListener('input', (e) => {
            renderOptions(e.target.value);
        });

        // 选择选项
        list.addEventListener('mousedown', (e) => {
            if (e.target.tagName === 'LI') {
                const zh = e.target.dataset.zh || e.target.textContent;
                const en = e.target.dataset.en || zh;
                const lang = window.I18n ? window.I18n.getLang() : 'en';
                input.value = lang === 'zh' ? zh : en;
                list.classList.remove('active');
                if (onSelect) onSelect({ zh, en });
            }
        });
    };

    // 初始化城市搜索
    const setCityInputFromState = () => {
        const input = document.getElementById('city-input');
        if (!input) return;
        const lang = window.I18n ? window.I18n.getLang() : 'en';
        input.value = lang === 'zh' ? state.city : (CITY_EN_MAP[state.city] || state.city);
    };

    initSearchableSelect('city-searchable', CITY_OPTIONS, (city) => {
        state.city = city.zh;
        setCityInputFromState();
        // 切换城市时，清空地点输入框，以便重新匹配新城市的景点
        const destInput = document.querySelector('#destination-input');
        if (destInput) destInput.value = '';
    });
    setCityInputFromState();

    // 初始化地点搜索 (动态获取当前城市的景点)
    initSearchableSelect('dest-searchable', [], null, () => {
        return HOT_DESTINATIONS[state.city] || HOT_DESTINATIONS["默认"];
    });

    // 初始化时间选择 (双列: 开始时间 - 结束时间)
    const timeContainer = document.getElementById('time-searchable');
    if (timeContainer) {
        const timeInput = document.getElementById('time-input');
        const dropdown = timeContainer.querySelector('.time-picker-dropdown');
        const startList = dropdown.querySelector('.start-time-list');
        const endList = dropdown.querySelector('.end-time-list');
        const confirmBtn = dropdown.querySelector('.btn-time-confirm');

        let selectedStart = '09:00';
        let selectedEnd = '18:00';

        // 生成时间选项
        const generateOptions = (list, selectedVal, onSelect) => {
            list.innerHTML = '';
            for (let i = 0; i < 24; i++) {
                const hour = i.toString().padStart(2, '0') + ':00';
                const li = document.createElement('li');
                li.textContent = hour;
                if (hour === selectedVal) li.classList.add('selected');
                
                li.addEventListener('click', (e) => {
                    e.stopPropagation();
                    list.querySelectorAll('li').forEach(el => el.classList.remove('selected'));
                    li.classList.add('selected');
                    onSelect(hour);
                });
                list.appendChild(li);
            }
        };

        generateOptions(startList, selectedStart, (val) => selectedStart = val);
        generateOptions(endList, selectedEnd, (val) => selectedEnd = val);

        // 点击输入框展开
        timeInput.addEventListener('click', (e) => {
            e.stopPropagation();
            document.querySelectorAll('.options-list').forEach(l => l.classList.remove('active'));
            dropdown.classList.add('active');
        });

        // 确认按钮
        confirmBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            timeInput.value = `${selectedStart} - ${selectedEnd}`;
            dropdown.classList.remove('active');
        });

        // 点击外部关闭
        document.addEventListener('click', (e) => {
            if (!timeContainer.contains(e.target)) {
                dropdown.classList.remove('active');
            }
        });
    }

    // 初始化 AMap
    let map = null;
    try {
        if (typeof AMap !== 'undefined') {
            map = new AMap.Map('map-container', {
                zoom: 11,
                center: [116.397428, 39.90923], // 北京
                viewMode: '3D'
            });
            // 移除占位
            document.querySelector('.map-placeholder').style.display = 'none';
        }
    } catch (e) {
        console.warn('AMap failed to load, using placeholder.');
    }

    // UI 元素
    const routeListEl = document.getElementById('route-list');
    const checklistEl = document.querySelector('.checklist');
    const importTextarea = document.querySelector('.planner-sidebar textarea');
    const parseBtn = document.querySelector('.import-box .btn-right');
    const pasteArea = document.getElementById('drop-area');

    // 渲染路线列表
    const renderRoute = () => {
        routeListEl.innerHTML = '';
        const batchEditBtn = document.getElementById('btn-batch-edit');
        if (batchEditBtn) {
            batchEditBtn.classList.toggle('active', state.isBatchEditing);
            batchEditBtn.innerHTML = state.isBatchEditing 
                ? `<i class="fa-solid fa-check"></i> ${tr('local.doneEdit')}` 
                : `<i class="fa-regular fa-pen-to-square"></i> ${tr('local.editRoute')}`;
        }

        if (state.points.length === 0) {
            routeListEl.innerHTML = `<div class="route-empty">${tr('local.routeEmpty')}</div>`;
            return;
        }

        const getPointName = (point) => (point.nameKey ? tr(point.nameKey) : point.name);
        const getPointTime = (point) => (point.timeKey ? tr(point.timeKey) : point.time);

        state.points.forEach((point, index) => {
            const isEditing = state.isBatchEditing || state.editingIndex === index;
            const item = document.createElement('div');
            item.className = `route-item-card ${isEditing ? 'editing' : ''}`;
            item.setAttribute('data-index', index);
            
            if (isEditing) {
                item.innerHTML = `
                    <div class="drag-handle"><i class="fa-solid fa-grip-vertical"></i></div>
                    <div class="point-edit-fields">
                        <input type="text" class="edit-name" value="${getPointName(point)}" placeholder="${tr('local.stopNamePh')}">
                        <textarea class="edit-time" placeholder="${tr('local.stopDetailPh')}">${getPointTime(point) || ''}</textarea>
                    </div>
                    <div class="route-actions">
                        ${!state.isBatchEditing ? `<button class="btn-save-point" data-index="${index}"><i class="fa-solid fa-save"></i></button>` : ''}
                        <button class="btn-delete-point" data-index="${index}"><i class="fa-solid fa-trash-can"></i></button>
                    </div>
                `;
            } else {
                item.innerHTML = `
                    <div class="drag-handle"><i class="fa-solid fa-grip-vertical"></i></div>
                    <div class="point-info">
                        <span class="point-name">${getPointName(point)}</span>
                        <span class="point-time">${getPointTime(point) || tr('local.editHint')}</span>
                    </div>
                    <div class="route-actions">
                        <button class="btn-edit-point" data-index="${index}"><i class="fa-regular fa-pen-to-square"></i></button>
                        <button class="btn-delete-point" data-index="${index}"><i class="fa-solid fa-trash-can"></i></button>
                    </div>
                `;
            }
            routeListEl.appendChild(item);
        });

        // 绑定删除按钮
        document.querySelectorAll('.btn-delete-point').forEach(btn => {
            btn.onclick = (e) => {
                e.stopPropagation();
                const idx = parseInt(e.currentTarget.dataset.index);
                state.points.splice(idx, 1);
                if (state.editingIndex === idx) state.editingIndex = -1;
                else if (state.editingIndex > idx) state.editingIndex--;
                renderRoute();
                updateMapMarkers();
            };
        });

        // 绑定编辑按钮 (单条)
        document.querySelectorAll('.btn-edit-point').forEach(btn => {
            btn.onclick = (e) => {
                e.stopPropagation();
                state.editingIndex = parseInt(e.currentTarget.dataset.index);
                state.isBatchEditing = false;
                renderRoute();
            };
        });

        // 绑定保存按钮 (单条)
        document.querySelectorAll('.btn-save-point').forEach(btn => {
            btn.onclick = (e) => {
                e.stopPropagation();
                savePointData(parseInt(e.currentTarget.dataset.index));
            };
        });

        // 辅助：保存单条数据
        const savePointData = (idx) => {
            const item = routeListEl.querySelector(`.route-item-card[data-index="${idx}"]`);
            if (!item) return;
            const newName = item.querySelector('.edit-name').value.trim();
            const newTime = item.querySelector('.edit-time').value.trim();
            
            if (newName) {
                state.points[idx].name = newName;
                state.points[idx].time = newTime;
                delete state.points[idx].nameKey;
                delete state.points[idx].timeKey;
                return true;
            } else {
                alert(tr('local.enterNameAlert'));
                return false;
            }
        };

        // 批量编辑入口
        const batchBtn = document.getElementById('btn-batch-edit');
        if (batchBtn) {
            batchBtn.onclick = () => {
                if (state.isBatchEditing) {
                    // 保存所有
                    let allValid = true;
                    state.points.forEach((_, idx) => {
                        if (!savePointData(idx)) allValid = false;
                    });
                    if (allValid) {
                        state.isBatchEditing = false;
                        state.editingIndex = -1;
                        renderRoute();
                        updateMapMarkers();
                    }
                } else {
                    state.isBatchEditing = true;
                    state.editingIndex = -1;
                    renderRoute();
                }
            };
        }

        // 智能规划入口
        const magicBtn = document.querySelector('.btn-magic');
        if (magicBtn) {
            magicBtn.onclick = async () => {
                const city = document.getElementById('city-input').value;
                const dest = document.getElementById('destination-input').value;
                const time = document.getElementById('time-input').value;
                const prefs = Array.from(document.querySelectorAll('.chip.active')).map(c => c.textContent).join(',');

                const dsPrompt = tr('local.dsPrompt')
                    .replace('{city}', city)
                    .replace('{dest}', dest)
                    .replace('{time}', time)
                    .replace('{prefs}', prefs);

                magicBtn.disabled = true;
                magicBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> ${tr('local.planning')}`;

                try {
                    // 检查本地是否有 API Key
                    let apiKey = Utils.getStorage('deepseek_api_key');
                    if (!apiKey) {
                        apiKey = window.prompt(tr('local.dsNeedKeyPrompt'));
                        if (apiKey) {
                            Utils.setStorage('deepseek_api_key', apiKey);
                        } else {
                            throw new Error(tr('local.dsNeedKeyError'));
                        }
                    }

                    const result = await Utils.callDeepSeek(dsPrompt, apiKey);
                    if (result && result.choices && result.choices[0].message.content) {
                        const content = JSON.parse(result.choices[0].message.content);
                        if (content.points && Array.isArray(content.points)) {
                            state.points = content.points.map(p => ({
                                name: p.name,
                                time: p.time,
                                location: null
                            }));
                            renderRoute();
                            updateMapMarkers();
                            alert(tr('local.planDone'));
                        }
                    }
                } catch (err) {
                    console.error(err);
                    alert(tr('local.planFail').replace('{msg}', err.message));
                    
                    // 模拟兜底方案
                    state.points = [
                        { name: `${city}${tr('local.fallback.center')}`, time: tr('local.fallback.meet'), location: null },
                        { name: dest || `${city}${tr('local.fallback.hot')}`, time: tr('local.fallback.play'), location: null },
                        { name: tr('local.fallback.food'), time: tr('local.fallback.lunch'), location: null }
                    ];
                    renderRoute();
                    updateMapMarkers();
                } finally {
                    magicBtn.disabled = false;
                    magicBtn.innerHTML = `<i class="fa-solid fa-wand-magic-sparkles"></i> ${tr('local.smartPlan')}`;
                }
            };
        }

        // 自己规划入口
        const selfBtn = document.querySelector('.btn-plain');
        if (selfBtn) {
            selfBtn.onclick = () => {
                const target = document.getElementById('route-preview-section');
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    // 如果当前没有路线点，自动触发新增一个
                    if (state.points.length === 0) {
                        const addBtn = document.querySelector('.btn-add-point');
                        if (addBtn) addBtn.click();
                    }
                }
            };
        }

        // 初始化拖拽排序
        if (typeof Sortable !== 'undefined' && state.points.length > 1) {
            Sortable.create(routeListEl, {
                handle: '.drag-handle',
                animation: 150,
                onEnd: (evt) => {
                    const oldIndex = evt.oldIndex;
                    const newIndex = evt.newIndex;
                    const item = state.points.splice(oldIndex, 1)[0];
                    state.points.splice(newIndex, 0, item);
                    
                    // 同步正在编辑的索引
                    if (state.editingIndex === oldIndex) {
                        state.editingIndex = newIndex;
                    } else if (state.editingIndex > oldIndex && state.editingIndex <= newIndex) {
                        state.editingIndex--;
                    } else if (state.editingIndex < oldIndex && state.editingIndex >= newIndex) {
                        state.editingIndex++;
                    }
                    
                    renderRoute();
                    updateMapMarkers();
                }
            });
        }
    };

    // 新增路线点
    const addPointBtn = document.querySelector('.btn-add-point');
    if (addPointBtn) {
        addPointBtn.onclick = () => {
            state.points.push({
                name: tr('local.newStop'),
                time: tr('local.editHint'),
                location: null
            });
            state.editingIndex = state.points.length - 1; // 默认新出的就是编辑状态
            renderRoute();
            // 自动聚焦新加的输入框
            setTimeout(() => {
                const lastItem = routeListEl.lastElementChild;
                if (lastItem) {
                    const nameInput = lastItem.querySelector('.edit-name');
                    if (nameInput) {
                        nameInput.focus();
                        nameInput.select();
                    }
                }
            }, 0);
        };
    }

    // 渲染清单
    const renderChecklist = () => {
        checklistEl.innerHTML = '';
        state.checklist.forEach((item, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <input type="checkbox" ${item.checked ? 'checked' : ''} data-index="${index}">
                <span>${item.text}</span>
                <button class="btn-delete-item" data-index="${index}"><i class="fa-solid fa-trash-can"></i></button>
            `;
            checklistEl.appendChild(li);
        });

        // 绑定事件
        checklistEl.querySelectorAll('input').forEach(input => {
            input.onchange = (e) => {
                const idx = parseInt(e.target.dataset.index);
                state.checklist[idx].checked = e.target.checked;
                Utils.setStorage('checklist', state.checklist);
            };
        });

        checklistEl.querySelectorAll('.btn-delete-item').forEach(btn => {
            btn.onclick = (e) => {
                const idx = parseInt(e.currentTarget.dataset.index);
                state.checklist.splice(idx, 1);
                renderChecklist();
                Utils.setStorage('checklist', state.checklist);
            };
        });
    };

    // 地图标记更新
    const markers = [];
    const polyline = null;
    const updateMapMarkers = () => {
        if (!map) {
            renderMockMap();
            return;
        }
        
        // 清除旧标记
        map.remove(markers);
        markers.length = 0;

        // 添加新标记
        state.points.forEach((point, index) => {
            if (point.location) {
                const marker = new AMap.Marker({
                    position: point.location,
                    label: { content: index + 1, direction: 'top' }
                });
                markers.push(marker);
                map.add(marker);
            }
        });

        if (markers.length > 0) {
            map.setFitView();
        }
    };

    const renderMockMap = () => {
        const container = document.getElementById('map-container');
        if (!container) return;

        const placeholder = container.querySelector('.map-placeholder');
        if (placeholder) placeholder.style.display = 'none';

        let mock = container.querySelector('.mock-map');
        if (!mock) {
            mock = document.createElement('div');
            mock.className = 'mock-map';
            container.appendChild(mock);
        }

        const getPointName = (point) => (point.nameKey ? tr(point.nameKey) : point.name);
        const stops = state.points.length > 0 ? state.points : [{ nameKey: 'local.startPoint' }];

        const isBeijingDemo =
            state.city === '北京' &&
            stops.length >= 4 &&
            stops.slice(0, 4).every((p) => (p.nameKey || '').startsWith('route.demo.'));

        const beijingDemoPoints = [
            { x: 55, y: 40, label: 1, name: tr('route.demo.1.name') },
            { x: 55, y: 30, label: 2, name: tr('route.demo.2.name') },
            { x: 68, y: 46, label: 3, name: tr('route.demo.3.name') },
            { x: 48, y: 22, label: 4, name: tr('route.demo.4.name') }
        ];

        const points = (isBeijingDemo ? beijingDemoPoints : stops.slice(0, 6).map((p, idx) => {
            const x = 14 + idx * (72 / Math.max(1, Math.min(5, stops.length - 1)));
            const y = 32 + (idx % 2) * 16;
            return { x, y, label: idx + 1, name: getPointName(p) };
        }));

        const poly = points.map(p => `${p.x},${p.y}`).join(' ');
        const circles = points.map((p) => `
            <g>
                <circle cx="${p.x}" cy="${p.y}" r="3.2" />
                <text x="${p.x}" y="${p.y - 6}" text-anchor="middle" class="mock-map-idx">${p.label}</text>
                <text x="${p.x}" y="${p.y + 10}" text-anchor="middle" class="mock-map-name">${p.name}</text>
            </g>
        `).join('');

        mock.innerHTML = `
            <svg viewBox="0 0 100 60" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="bg" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stop-color="#F8FAFC" />
                        <stop offset="100%" stop-color="#F3F4F6" />
                    </linearGradient>
                </defs>
                <rect x="0" y="0" width="100" height="60" fill="url(#bg)" />

                <path d="M8,20 C18,10 30,10 40,22 C46,30 56,34 64,28 C72,22 84,20 92,26" fill="none" stroke="rgba(156,163,175,0.5)" stroke-width="0.6" />
                <path d="M10,42 C24,40 34,34 44,36 C52,38 62,46 90,46" fill="none" stroke="rgba(156,163,175,0.5)" stroke-width="0.6" />

                <path d="M18,44 C16,36 18,30 24,26 C30,22 36,24 38,30 C40,36 34,44 28,46 C24,48 20,48 18,44Z" fill="rgba(59,130,246,0.22)" />
                <path d="M38,50 C42,46 48,44 56,46 C62,48 66,52 62,56 C58,60 44,58 40,54 C38,52 37,51 38,50Z" fill="rgba(59,130,246,0.18)" />

                <path d="M70,16 C78,10 92,10 94,20 C96,30 84,34 76,30 C68,26 64,22 70,16Z" fill="rgba(34,197,94,0.18)" />
                <path d="M10,10 C12,6 18,6 22,10 C26,14 20,18 14,16 C10,14 9,12 10,10Z" fill="rgba(34,197,94,0.16)" />

                <polyline points="${poly}" />
                ${circles}
            </svg>
        `;
    };

    // 渲染解析结果
    const renderImportResults = () => {
        const section = document.getElementById('import-results-section');
        const listEl = document.getElementById('import-results-list');
        if (!section || !listEl) return;

        if (state.tempPoints.length > 0) {
            section.style.display = 'block';
            listEl.innerHTML = '';
            state.tempPoints.forEach((point, index) => {
                const item = document.createElement('div');
                item.className = 'import-card';
                const categoryKey = point.categoryKey || 'import.cat.attraction';
                const categoryLabel = tr(categoryKey);
                const tagClass = categoryKey === 'import.cat.food' ? 'food' : (categoryKey === 'import.cat.hotel' ? 'hotel' : '');
                const transportIcon = point.transport === 'walk' ? 'fa-person-walking' : 'fa-car';
                
                item.innerHTML = `
                    <div class="import-card-main">
                        <img src="${point.image || 'https://via.placeholder.com/60'}" class="import-card-img">
                        <div class="import-card-content">
                            <span class="import-card-tag ${tagClass}">${categoryLabel}</span>
                            <div class="import-card-name">${index + 1}.${point.name}</div>
                            <div class="import-card-notes">
                                ${point.notes || '暂无详细描述'}
                                ${point.expandable ? '<span class="expand-btn">...展开</span>' : ''}
                                <i class="fa-solid fa-pencil" style="position: absolute; right: 12px; bottom: 12px;"></i>
                            </div>
                        </div>
                    </div>
                    ${point.distance ? `
                    <div class="import-card-footer">
                        <i class="fa-solid ${transportIcon}"></i>
                        <span>${point.distance} · ${point.duration}</span>
                        <i class="fa-solid fa-chevron-right"></i>
                    </div>` : ''}
                `;
                listEl.appendChild(item);
            });
        } else {
            section.style.display = 'none';
        }
    };

    // 解析文本导入
    const parseTextBtn = document.querySelector('.import-box .btn-right');
    if (parseTextBtn) {
        parseTextBtn.onclick = () => {
            const text = importTextarea.value.trim();
            if (!text) return;

            // 模拟解析文本为结构化数据
            state.tempPoints = [
                {
                    categoryKey: 'import.cat.attraction',
                    name: tr('import.sample.1.name'),
                    image: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=100&h=100&fit=crop',
                    notes: tr('import.sample.1.notes'),
                    expandable: true,
                    distance: tr('import.sample.1.distance'),
                    duration: tr('import.sample.1.duration'),
                    transport: 'walk'
                },
                {
                    categoryKey: 'import.cat.attraction',
                    name: tr('import.sample.2.name'),
                    image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=100&h=100&fit=crop',
                    notes: tr('import.sample.2.notes'),
                    expandable: false,
                    distance: tr('import.sample.2.distance'),
                    duration: tr('import.sample.2.duration'),
                    transport: 'car'
                },
                {
                    categoryKey: 'import.cat.food',
                    name: tr('import.sample.3.name'),
                    image: 'https://images.unsplash.com/photo-1512058560366-cd24270083cd?w=100&h=100&fit=crop',
                    notes: tr('import.sample.3.notes'),
                    expandable: true,
                    distance: tr('import.sample.3.distance'),
                    duration: tr('import.sample.3.duration'),
                    transport: 'car'
                }
            ];
            renderImportResults();
        };
    }

    // 截图文件选择
    const screenshotFileInput = document.getElementById('screenshot-file');
    if (pasteArea) {
        pasteArea.onclick = () => {
            screenshotFileInput.click();
        };

        // 粘贴图片识别
        pasteArea.addEventListener('paste', (e) => {
            const items = (e.clipboardData || e.originalEvent.clipboardData).items;
            for (const item of items) {
                if (item.type.indexOf('image') !== -1) {
                    const blob = item.getAsFile();
                    handleScreenshot(blob);
                }
            }
        });
    }

    if (screenshotFileInput) {
        screenshotFileInput.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                handleScreenshot(file);
            }
        };
    }

    const handleScreenshot = (blob) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            // 模拟识别图片内容
            state.tempPoints = [
                {
                    categoryKey: 'import.cat.attraction',
                    name: tr('import.sample.1.name'),
                    image: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=100&h=100&fit=crop',
                    notes: tr('import.sample.1.notes'),
                    expandable: true,
                    distance: tr('import.sample.1.distance'),
                    duration: tr('import.sample.1.duration'),
                    transport: 'walk'
                },
                {
                    categoryKey: 'import.cat.attraction',
                    name: tr('import.sample.2.name'),
                    image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=100&h=100&fit=crop',
                    notes: tr('import.sample.2.notes'),
                    expandable: false,
                    distance: tr('import.sample.2.distance'),
                    duration: tr('import.sample.2.duration'),
                    transport: 'car'
                }
            ];
            renderImportResults();
        };
        reader.readAsDataURL(blob);
    };

    // 解析图片按钮
    const parseImageBtn = document.getElementById('parse-image-btn');
    if (parseImageBtn) {
        parseImageBtn.onclick = () => {
            if (state.tempPoints.length > 0) {
                renderImportResults();
            } else {
                alert(tr('local.uploadImageFirst'));
            }
        };
    }

    // 添加至行程按钮 (始终显示在侧边栏下方)
    const addToRouteBtn = document.getElementById('add-to-route-btn');
    if (addToRouteBtn) {
        addToRouteBtn.onclick = () => {
            if (state.tempPoints.length > 0) {
                const pointsToAdd = state.tempPoints.map(tp => ({
                    name: tp.name,
                    time: tp.notes, // 将解析出的备注存入行程的详情字段
                    location: null
                }));
                state.points = [...state.points, ...pointsToAdd];
                state.tempPoints = []; // 清空临时数据
                renderImportResults(); // 隐藏解析区域
                renderRoute();
                updateMapMarkers();
                alert(tr('local.addedToMyTrip'));
            } else {
                alert(tr('local.noParsed'));
            }
        };
    }

    // 添加清单项
    const addItemInput = document.getElementById('checklist-input');
    const addItemBtn = document.getElementById('checklist-add-btn');

    const handleAddChecklistItem = () => {
        const text = addItemInput.value.trim();
        if (text) {
            state.checklist.push({ id: Date.now(), text, checked: false });
            addItemInput.value = '';
            renderChecklist();
            Utils.setStorage('checklist', state.checklist);
        }
    };

    if (addItemBtn) {
        addItemBtn.onclick = handleAddChecklistItem;
    }

    if (addItemInput) {
        addItemInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleAddChecklistItem();
            }
        });
    }

    // 导出图片
    document.getElementById('btn-export-image').onclick = () => {
        const area = document.querySelector('.planner-main-area');
        html2canvas(area).then(canvas => {
            const link = document.createElement('a');
            link.download = `我的行程-${state.city}.png`;
            link.href = canvas.toDataURL();
            link.click();
        });
    };

    // 导出 ICS
    document.getElementById('btn-export-ics').onclick = () => {
        const title = `${state.city}行程规划`;
        const description = state.points.map(p => p.name).join(' -> ');
        const dateRange = document.getElementById('date-range').value || Utils.formatDate(new Date());
        const startDate = dateRange.split(' - ')[0] || Utils.formatDate(new Date());
        const endDate = dateRange.split(' - ')[1] || startDate;
        
        Utils.generateICS(title, startDate, endDate, description);
    };

    // 渲染天气
    const renderWeather = () => {
        const card = document.getElementById('weather-card');
        if (!card) return;

        MOCK_WEATHER.desc = tr('local.weatherDemo');
        if (MOCK_WEATHER.forecast && MOCK_WEATHER.forecast[0]) {
            MOCK_WEATHER.forecast[0].time = tr('local.now');
        }
        
        card.querySelector('.temp').textContent = MOCK_WEATHER.temp;
        card.querySelector('.desc').textContent = MOCK_WEATHER.desc;
        card.querySelector('.aqi-val').textContent = MOCK_WEATHER.aqi;
        
        const forecastEl = card.querySelector('.weather-forecast');
        forecastEl.innerHTML = '';
        MOCK_WEATHER.forecast.forEach(item => {
            const div = document.createElement('div');
            div.className = 'forecast-item';
            div.innerHTML = `
                <span>${item.time}</span>
                <i class="fa-solid ${item.icon}"></i>
                <span>${item.temp}</span>
            `;
            forecastEl.appendChild(div);
        });
    };

    // 初始渲染
    renderWeather();
    renderRoute();
    renderChecklist();
    updateMapMarkers();

    window.addEventListener('langchange', () => {
        setCityInputFromState();
        renderWeather();
        renderRoute();
        renderImportResults();
        updateMapMarkers();
    });

    // 芯片点击效果
    const prefChips = document.getElementById('pref-chips');
    if (prefChips) {
        prefChips.querySelectorAll('.chip').forEach(chip => {
            chip.onclick = () => {
                if (chip.dataset.pref === 'mixed') {
                    prefChips.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
                    chip.classList.add('active');
                } else {
                    prefChips.querySelectorAll('.chip').forEach(c => {
                        if (c.dataset.pref === 'mixed') c.classList.remove('active');
                    });
                    chip.classList.toggle('active');
                    
                    if (prefChips.querySelectorAll('.chip.active').length === 0) {
                        prefChips.querySelectorAll('.chip').forEach(c => {
                            if (c.dataset.pref === 'mixed') c.classList.add('active');
                        });
                    }
                }
            };
        });
    }
});

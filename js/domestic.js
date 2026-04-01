/**
 * 国内旅行模式逻辑
 */

document.addEventListener('DOMContentLoaded', () => {
    const tr = (key) => (window.I18n ? window.I18n.t(key) : key);
    const lang = () => (window.I18n ? window.I18n.getLang() : 'en');

    const CITY_EN_MAP = {
        大理: 'Dali',
        拉萨: 'Lhasa',
        北京: 'Beijing',
        上海: 'Shanghai',
        广州: 'Guangzhou',
        深圳: 'Shenzhen',
        成都: 'Chengdu',
        杭州: 'Hangzhou',
        厦门: 'Xiamen'
    };

    const buildImageUrl = (city) => {
        const q = encodeURIComponent(`${city} travel`);
        return `https://source.unsplash.com/featured/800x600?${q}`;
    };

    // 状态管理
    const state = {
        wishlist: Utils.getStorage('wishlist', [
            { id: 1, city: '大理', date: '2026-05-01', temp: '22°C', isSunny: true, image: buildImageUrl('大理') },
            { id: 2, city: '拉萨', date: '2026-06-15', temp: '18°C', isSunny: false, image: buildImageUrl('拉萨') },
            { id: 3, city: '北京', date: '2026-04-20', temp: '20°C', isSunny: true, image: buildImageUrl('北京') },
            { id: 4, city: '上海', date: '2026-05-18', temp: '24°C', isSunny: true, image: buildImageUrl('上海') },
            { id: 5, city: '成都', date: '2026-06-02', temp: '26°C', isSunny: false, image: buildImageUrl('成都') },
            { id: 6, city: '厦门', date: '2026-06-22', temp: '28°C', isSunny: true, image: buildImageUrl('厦门') }
        ])
    };

    // UI 元素
    const wishlistContainer = document.getElementById('wishlist-container');
    const addBtn = document.getElementById('add-wishlist-btn');
    const modal = document.getElementById('add-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const confirmAddBtn = document.getElementById('confirm-add');
    const cityInput = document.getElementById('modal-city-input');
    const dateInput = document.getElementById('modal-date-input');

    // 渲染心愿单
    const renderWishlist = () => {
        wishlistContainer.innerHTML = '';
        state.wishlist.forEach((item) => {
            const cityLabel = lang() === 'zh' ? item.city : (CITY_EN_MAP[item.city] || item.city);
            const imageUrl = item.image || buildImageUrl(item.city);
            const card = document.createElement('div');
            card.className = 'wishlist-card card';
            card.innerHTML = `
                <div class="card-image-placeholder ${imageUrl ? 'has-image' : ''}" ${imageUrl ? `style="background-image:url('${imageUrl}')"` : ''}>
                    ${imageUrl ? '<div class="card-image-overlay"></div>' : ''}
                    <i class="fa-solid fa-mountain-sun"></i>
                </div>
                <div class="card-content">
                    <div class="card-title-row">
                        <h3>${cityLabel}</h3>
                        ${item.isSunny ? `<span class="weather-badge sunny">${tr('domestic.suitable')}</span>` : ''}
                    </div>
                    <p>${tr('domestic.planned')} · ${item.date}</p>
                    <div class="card-footer">
                        <span class="info"><i class="fa-solid fa-cloud-sun"></i> ${item.temp}</span>
                        <div class="card-actions">
                             <button class="btn-delete-item" data-id="${item.id}"><i class="fa-solid fa-trash-can"></i></button>
                             <a href="local.html?city=${encodeURIComponent(item.city)}" class="btn btn-outline btn-xs">${tr('domestic.detail')}</a>
                        </div>
                    </div>
                </div>
            `;
            wishlistContainer.appendChild(card);
        });

        // 绑定删除按钮
        wishlistContainer.querySelectorAll('.btn-delete-item').forEach(btn => {
            btn.onclick = (e) => {
                const id = parseInt(e.currentTarget.dataset.id);
                state.wishlist = state.wishlist.filter(item => item.id !== id);
                renderWishlist();
                Utils.setStorage('wishlist', state.wishlist);
            };
        });
    };

    // 弹窗控制
    addBtn.onclick = () => {
        modal.classList.add('active');
    };

    closeModalBtn.onclick = () => {
        modal.classList.remove('active');
    };

    confirmAddBtn.onclick = () => {
        const city = cityInput.value.trim();
        const date = dateInput.value;
        if (city && date) {
            const newItem = {
                id: Date.now(),
                city,
                date,
                temp: '20°C', // 模拟数据
                isSunny: Math.random() > 0.5, // 随机模拟天气提醒
                image: buildImageUrl(city)
            };
            state.wishlist.push(newItem);
            renderWishlist();
            Utils.setStorage('wishlist', state.wishlist);
            modal.classList.remove('active');
            cityInput.value = '';
            dateInput.value = '';
        } else {
            alert(tr('domestic.alert.fill'));
        }
    };

    // 点击弹窗外部关闭
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.classList.remove('active');
        }
    };

    // 初始渲染
    renderWishlist();
});

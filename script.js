// =========================================
// AccShop — Script
// =========================================

// ─── DEFAULT PRODUCT DATA ───
const DEFAULT_PRODUCTS = [
    {
        id: 'cgpt-cap-san',
        name: 'Chat GPT Plus Cấp Sẵn',
        gradient: 'linear-gradient(135deg, #1a1a2e, #16213e)',
        labelColor: '#10b981',
        image: '',
        paused: false,
        features: [
            { text: 'Bảo hành toàn bộ thời gian sử dụng', type: 'good' },
            { text: 'Dữ liệu chat & lịch sử riêng tư, không bị xóa', type: 'info' },
            { text: 'GPT-4o, GPT-4, DALL·E 3, Code Interpreter', type: 'good' },
            { text: 'Dùng chung tài khoản, tối đa 3 thiết bị', type: 'warn' },
        ],
        durations: [
            { label: '1 Tháng', price: 69000, out: false },
            { label: '3 Tháng', price: 195000, out: false },
            { label: '6 Tháng', price: 370000, out: false },
            { label: '12 Tháng', price: 690000, out: false },
        ]
    },
    {
        id: 'cgpt-chinh-chu',
        name: 'Chat GPT Plus Chính Chủ',
        gradient: 'linear-gradient(135deg, #064e3b, #0f172a)',
        labelColor: '#34d399',
        image: '',
        paused: false,
        features: [
            { text: 'Tài khoản chính chủ — email + mật khẩu riêng', type: 'good' },
            { text: 'Toàn quyền sử dụng, không chia sẻ', type: 'good' },
            { text: 'GPT-4o, DALL·E 3, Advanced Analysis', type: 'good' },
            { text: 'Bảo hành đổi mới nếu lỗi', type: 'info' },
        ],
        durations: [
            { label: '1 Tháng', price: 99000, out: false },
            { label: '3 Tháng', price: 280000, out: false },
            { label: '6 Tháng', price: 529000, out: true },
            { label: '12 Tháng', price: 950000, out: false },
        ]
    },
    {
        id: 'gemini-pro',
        name: 'Gemini Pro Chính Chủ',
        gradient: 'linear-gradient(135deg, #1e3a5f, #0c2340)',
        labelColor: '#60a5fa',
        image: '',
        paused: false,
        features: [
            { text: 'Gemini Ultra — model AI mạnh nhất của Google', type: 'good' },
            { text: 'Google One 2TB cloud storage đi kèm', type: 'good' },
            { text: 'Tích hợp Gmail, Docs, Sheets, Slides', type: 'good' },
            { text: 'Tài khoản chính chủ không chia sẻ', type: 'info' },
        ],
        durations: [
            { label: '1 Tháng', price: 173000, out: false },
            { label: '3 Tháng', price: 480000, out: false },
            { label: '6 Tháng', price: 890000, out: false },
            { label: '12 Tháng', price: 1600000, out: false },
        ]
    },
    {
        id: 'capcut-pro',
        name: 'Capcut Pro',
        gradient: 'linear-gradient(135deg, #312e81, #1e1b4b)',
        labelColor: '#a78bfa',
        image: '',
        paused: false,
        features: [
            { text: 'Mở khoá toàn bộ hiệu ứng, font chữ, sticker Pro', type: 'good' },
            { text: 'Export 4K không watermark', type: 'good' },
            { text: 'Nhạc bản quyền dùng thương mại', type: 'good' },
            { text: 'Dùng 1 thiết bị, chính chủ', type: 'info' },
        ],
        durations: [
            { label: '1 Tháng', price: 50000, out: false },
            { label: '3 Tháng', price: 130000, out: false },
            { label: '6 Tháng', price: 240000, out: false },
            { label: '12 Tháng', price: 420000, out: false },
        ]
    },
    {
        id: 'canva-pro',
        name: 'Canva Pro Chính Chủ',
        gradient: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
        labelColor: '#ddd6fe',
        image: '',
        paused: false,
        features: [
            { text: '100+ triệu ảnh stock, element Premium', type: 'good' },
            { text: 'Xóa nền AI, Magic Resize, Brand Kit', type: 'good' },
            { text: 'Xuất file với tất cả định dạng', type: 'good' },
            { text: 'Tài khoản chính chủ, dùng email riêng', type: 'info' },
        ],
        durations: [
            { label: '1 Tháng', price: 120000, out: false },
            { label: '3 Tháng', price: 320000, out: false },
            { label: '6 Tháng', price: 580000, out: false },
            { label: '12 Tháng', price: 999000, out: false },
        ]
    },
    {
        id: 'youtube-premium',
        name: 'Youtube Premium (Family)',
        gradient: 'linear-gradient(135deg, #7f1d1d, #450a0a)',
        labelColor: '#fca5a5',
        image: '',
        paused: false,
        features: [
            { text: 'Xem video không quảng cáo trên mọi thiết bị', type: 'good' },
            { text: 'Phát nhạc nền khi tắt màn hình', type: 'good' },
            { text: 'YouTube Music Premium đi kèm', type: 'good' },
            { text: 'Gói Family — thêm vào gia đình của bạn', type: 'info' },
        ],
        durations: [
            { label: '1 Tháng', price: 33000, out: false },
            { label: '3 Tháng', price: 90000, out: false },
            { label: '6 Tháng', price: 170000, out: false },
            { label: '12 Tháng', price: 320000, out: false },
        ]
    },
    {
        id: 'netflix-4k',
        name: 'Netflix Ultra 4K',
        gradient: 'linear-gradient(135deg, #b91c1c, #1c1917)',
        labelColor: '#fca5a5',
        image: '',
        paused: false,
        features: [
            { text: '4K Ultra HD + HDR, Dolby Atmos', type: 'good' },
            { text: '4 màn hình cùng lúc', type: 'good' },
            { text: 'Tải phim xem offline', type: 'good' },
            { text: 'Tài khoản dùng chung, không chính chủ', type: 'warn' },
        ],
        durations: [
            { label: '1 Tháng', price: 120000, out: false },
            { label: '3 Tháng', price: 330000, out: false },
            { label: '6 Tháng', price: 620000, out: false },
            { label: '12 Tháng', price: 1150000, out: false },
        ]
    },
    {
        id: 'spotify',
        name: 'Spotify Premium (Individual)',
        gradient: 'linear-gradient(135deg, #14532d, #052e16)',
        labelColor: '#4ade80',
        image: '',
        paused: false,
        features: [
            { text: 'Nghe nhạc không quảng cáo, không giới hạn', type: 'good' },
            { text: 'Tải nhạc nghe offline', type: 'good' },
            { text: 'Chất lượng âm thanh cao nhất', type: 'good' },
            { text: 'Tài khoản cá nhân chính chủ', type: 'info' },
        ],
        durations: [
            { label: '1 Tháng', price: 59000, out: false },
            { label: '3 Tháng', price: 160000, out: false },
            { label: '6 Tháng', price: 299000, out: false },
            { label: '12 Tháng', price: 549000, out: false },
        ]
    },
    {
        id: 'cursor-cap-san',
        name: 'Cursor Pro Cấp Sẵn',
        gradient: 'linear-gradient(135deg, #0c4a6e, #082f49)',
        labelColor: '#7dd3fc',
        image: '',
        paused: false,
        features: [
            { text: 'AI code completion cực mạnh', type: 'good' },
            { text: 'Claude Sonnet, GPT-4 tích hợp sẵn', type: 'good' },
            { text: 'Unlimited fast requests mỗi tháng', type: 'good' },
            { text: 'Tài khoản dùng chung theo slot', type: 'warn' },
        ],
        durations: [
            { label: '1 Tháng', price: 360000, out: false },
            { label: '3 Tháng', price: 990000, out: false },
            { label: '6 Tháng', price: 1800000, out: false },
            { label: '12 Tháng', price: 3200000, out: false },
        ]
    },
    {
        id: 'cursor-chinh-chu',
        name: 'Cursor Pro Chính Chủ 1 tháng',
        gradient: 'linear-gradient(135deg, #1e3a5f, #0a1628)',
        labelColor: '#93c5fd',
        image: '',
        paused: false,
        features: [
            { text: 'Tài khoản chính chủ — email riêng của bạn', type: 'good' },
            { text: 'Không chia sẻ với ai khác', type: 'good' },
            { text: 'Unlimited requests, không lo bị giới hạn', type: 'good' },
            { text: 'Hỗ trợ kích hoạt trực tiếp', type: 'info' },
        ],
        durations: [
            { label: '1 Tháng', price: 430000, out: false },
            { label: '3 Tháng', price: 1200000, out: false },
            { label: '6 Tháng', price: 2200000, out: true },
            { label: '12 Tháng', price: 3900000, out: false },
        ]
    },
    {
        id: 'ms365',
        name: 'Microsoft 365 Premium (Office)',
        gradient: 'linear-gradient(135deg, #1e3a5f, #0c2340)',
        labelColor: '#93c5fd',
        image: '',
        paused: false,
        features: [
            { text: 'Word, Excel, PowerPoint, Outlook, Teams', type: 'good' },
            { text: 'OneDrive 1TB cloud storage', type: 'good' },
            { text: 'Cài 5 máy tính, 5 điện thoại', type: 'good' },
            { text: 'Bản quyền chính hãng, luôn cập nhật', type: 'info' },
        ],
        durations: [
            { label: '1 Tháng', price: 150000, out: false },
            { label: '3 Tháng', price: 400000, out: false },
            { label: '6 Tháng', price: 740000, out: false },
            { label: '12 Tháng', price: 1350000, out: false },
        ]
    },
    {
        id: 'adobe-full',
        name: 'Adobe Full Apps',
        gradient: 'linear-gradient(135deg, #7c2d12, #431407)',
        labelColor: '#fb923c',
        image: '',
        paused: false,
        features: [
            { text: 'Photoshop, Illustrator, Premiere, After Effects', type: 'good' },
            { text: 'Lightroom, InDesign, XD và 20+ app khác', type: 'good' },
            { text: '100GB cloud storage', type: 'good' },
            { text: 'Bản Creative Cloud chính hãng', type: 'info' },
        ],
        durations: [
            { label: '1 Tháng', price: 230000, out: false },
            { label: '3 Tháng', price: 640000, out: false },
            { label: '6 Tháng', price: 1200000, out: false },
            { label: '12 Tháng', price: 2100000, out: false },
        ]
    },
    {
        id: 'discord-nitro',
        name: 'Discord Nitro',
        gradient: 'linear-gradient(135deg, #3730a3, #1e1b4b)',
        labelColor: '#a5b4fc',
        image: '',
        paused: false,
        features: [
            { text: 'Boost server, upload file đến 500MB', type: 'good' },
            { text: 'Sticker, emoji animated, avatar động', type: 'good' },
            { text: 'Kết nối Go Live chất lượng 4K', type: 'good' },
            { text: 'Tài khoản chính chủ của bạn', type: 'info' },
        ],
        durations: [
            { label: '1 Tháng', price: 100000, out: false },
            { label: '3 Tháng', price: 270000, out: false },
            { label: '6 Tháng', price: 510000, out: false },
            { label: '12 Tháng', price: 950000, out: false },
        ]
    },
    {
        id: 'perplexity',
        name: 'Perplexity Pro',
        gradient: 'linear-gradient(135deg, #134e4a, #042f2e)',
        labelColor: '#5eead4',
        image: '',
        paused: false,
        features: [
            { text: 'AI tìm kiếm thông minh, không quảng cáo', type: 'good' },
            { text: 'Dùng được GPT-4, Claude Opus, Gemini', type: 'good' },
            { text: 'Tải file, phân tích PDF, hình ảnh', type: 'good' },
            { text: 'Tài khoản chính chủ', type: 'info' },
        ],
        durations: [
            { label: '1 Tháng', price: 436000, out: false },
            { label: '3 Tháng', price: 1200000, out: false },
            { label: '6 Tháng', price: 2200000, out: false },
            { label: '12 Tháng', price: 4000000, out: false },
        ]
    },
    {
        id: 'sora2',
        name: 'Sora 2',
        gradient: 'linear-gradient(135deg, #1c1917, #0c0a09)',
        labelColor: '#d4d4d4',
        image: '',
        paused: false,
        features: [
            { text: 'Tạo video AI từ văn bản siêu thực', type: 'good' },
            { text: 'Độ phân giải 1080p, tối đa 20 giây', type: 'good' },
            { text: 'Không cần kỹ năng chỉnh sửa', type: 'good' },
            { text: 'Tài khoản dùng chung theo slot', type: 'warn' },
        ],
        durations: [
            { label: '1 Tháng', price: 60000, out: false },
            { label: '3 Tháng', price: 165000, out: false },
            { label: '6 Tháng', price: 300000, out: false },
            { label: '12 Tháng', price: 550000, out: false },
        ]
    },
    {
        id: 'veo3',
        name: 'Veo3 Ultra 45k credit',
        gradient: 'linear-gradient(135deg, #172554, #1e1b4b)',
        labelColor: '#93c5fd',
        image: '',
        paused: true,
        features: [
            { text: 'Tạo video AI với chất lượng điện ảnh', type: 'good' },
            { text: '45.000 credit tương đương nhiều video', type: 'good' },
            { text: 'Hỗ trợ âm thanh, nhạc nền tự động', type: 'good' },
            { text: 'Sản phẩm đang tạm ngưng — liên hệ để hỏi', type: 'warn' },
        ],
        durations: [
            { label: '45k credit', price: 200000, out: false },
            { label: '90k credit', price: 380000, out: false },
            { label: 'Gói lớn', price: 700000, out: true },
            { label: 'Enterprise', price: 1500000, out: true },
        ]
    },
];

// ─── STATE ───
let products = [];
let adminMode = false;
let editingProductId = null;
let selectedProductId = null;
let detailQty = 1;
let selectedDurIdx = 0;

// ─── INIT ───
function init() {
    loadProducts();
    renderAll();
    setupGlobalEvents();
}

function loadProducts() {
    const saved = localStorage.getItem('accshop_products');
    products = saved ? JSON.parse(saved) : JSON.parse(JSON.stringify(DEFAULT_PRODUCTS));
}

function saveProducts() {
    localStorage.setItem('accshop_products', JSON.stringify(products));
}

// ─── RENDER ───
function renderAll() {
    const main = document.getElementById('main');
    const active = products.filter(p => !p.paused);
    const paused = products.filter(p => p.paused);

    let html = '';

    // Active products
    html += `<div class="section-title">🔥 Tất cả sản phẩm</div>`;
    html += `<div class="product-grid" id="activeGrid">`;
    active.forEach(p => { html += renderCard(p); });
    html += `</div>`;

    // Paused products
    if (paused.length > 0) {
        html += `
      <div class="paused-toggle">
        <button class="paused-toggle-btn" id="pausedToggle" onclick="togglePausedSection()">
          ⏸ Sản phẩm tạm ngưng <span class="paused-count">${paused.length}</span>
        </button>
      </div>
      <div class="product-grid" id="pausedGrid" style="display:none">
        ${paused.map(p => renderCard(p)).join('')}
      </div>
    `;
    }

    main.innerHTML = html;
}

function renderCard(p) {
    const minPrice = Math.min(...p.durations.filter(d => !d.out).map(d => d.price));
    const imgStyle = p.image
        ? `background-image: url('${p.image}'); background-size: cover; background-position: center;`
        : `background: ${p.gradient};`;

    return `
    <div class="product-card${p.paused ? ' paused' : ''}${selectedProductId === p.id ? ' selected' : ''}"
      data-id="${p.id}" onclick="handleCardClick('${p.id}')">
      <div class="card-img" style="${imgStyle}">
        ${!p.image ? `<div class="card-img-label" style="color:${p.labelColor}">${p.name.split(' ').slice(0, 2).join(' ')}</div>` : ''}
        ${p.paused ? `<div class="card-paused-badge">TẠM NGƯNG</div>` : ''}
      </div>
      <div class="card-info">
        <h3 class="card-name">${p.name}</h3>
        <div class="card-price">chỉ từ <span>${formatVND(minPrice)}VNĐ</span></div>
      </div>
      <button class="card-edit-btn" onclick="openAdminEdit(event, '${p.id}')">✏️ Sửa</button>
    </div>
  `;
}

function handleCardClick(id) {
    if (adminMode) return; // In admin mode, edit btn handles it
    selectedProductId = id;
    // Update selected style
    document.querySelectorAll('.product-card').forEach(c => c.classList.remove('selected'));
    document.querySelector(`[data-id="${id}"]`)?.classList.add('selected');
    openDetail(id);
}

// ─── DETAIL MODAL ───
function openDetail(id) {
    const p = products.find(x => x.id === id);
    if (!p) return;

    detailQty = 1;
    const availIdx = p.durations.findIndex(d => !d.out);
    selectedDurIdx = availIdx >= 0 ? availIdx : 0;

    document.getElementById('detailTitle').textContent = p.name;
    renderDetailBody(p);

    document.getElementById('detailOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function renderDetailBody(p) {
    const total = calcTotal(p);
    const featHtml = p.features.map(f => `
    <div class="feature-item">
      <div class="feature-dot ${f.type}">${f.type === 'good' ? '✓' : f.type === 'warn' ? '✕' : 'i'}</div>
      <span>${f.text}</span>
    </div>
  `).join('');

    const durHtml = p.durations.map((d, i) => `
    <div class="dur-btn${i === selectedDurIdx ? ' selected' : ''}${d.out ? ' out' : ''}"
      onclick="${d.out ? '' : `selectDur(${i})`}">
      ${d.out ? `<div class="out-badge">Hết hàng</div>` : ''}
      <div class="dur-btn-label">${d.label}</div>
      <div class="dur-btn-price">${formatVND(d.price * detailQty)}đ</div>
    </div>
  `).join('');

    document.getElementById('detailBody').innerHTML = `
    <div class="feature-list">${featHtml}</div>

    <div class="qty-row">
      <span class="qty-label">Số lượng</span>
      <div class="qty-control">
        <button class="qty-btn" onclick="changeQty(-1)">−</button>
        <span class="qty-num">${detailQty}</span>
        <button class="qty-btn" onclick="changeQty(1)">+</button>
      </div>
    </div>
    <div class="qty-tip">⚡ Mua thêm 2 để được giảm thêm khi liên hệ shop</div>

    <div class="duration-label">Chọn thời hạn</div>
    <div class="duration-grid">${durHtml}</div>

    <div class="detail-total">
      <span class="total-label">Tổng thanh toán:</span>
      <span class="total-amount">${formatVND(total)}đ</span>
    </div>

    <div class="contact-note">
      💬 Hiện chỉ hỗ trợ mua hàng thông qua tin nhắn
    </div>

    <div class="detail-actions">
      <button class="btn-buy" onclick="copyOrder('${p.id}')">🛒 Mua hàng</button>
      <button class="btn-msg" onclick="goContact()">💬 Nhắn tin</button>
    </div>
  `;
}

function selectDur(idx) {
    selectedDurIdx = idx;
    const p = products.find(x => x.id === selectedProductId);
    if (p) renderDetailBody(p);
}

function changeQty(delta) {
    detailQty = Math.max(1, detailQty + delta);
    const p = products.find(x => x.id === selectedProductId);
    if (p) renderDetailBody(p);
}

function calcTotal(p) {
    const dur = p.durations[selectedDurIdx];
    return dur ? dur.price * detailQty : 0;
}

function closeDetail() {
    document.getElementById('detailOverlay').classList.remove('open');
    document.body.style.overflow = '';
    selectedProductId = null;
    document.querySelectorAll('.product-card').forEach(c => c.classList.remove('selected'));
}

function copyOrder(id) {
    const p = products.find(x => x.id === id);
    if (!p) return;
    const dur = p.durations[selectedDurIdx];
    const total = calcTotal(p);
    const msg = `Đặt hàng: ${p.name}\nThời hạn: ${dur.label}\nSố lượng: ${detailQty}\nTổng: ${formatVND(total)}đ\n\nVui lòng xác nhận và gửi thông tin thanh toán cho mình nhé!`;
    navigator.clipboard.writeText(msg).catch(() => { });
    toast('✅ Đã copy thông tin đơn hàng! Gửi cho shop qua Zalo/Telegram để thanh toán.');
    closeDetail();
}

function goContact() {
    toast('💬 Liên hệ shop qua Zalo: 0123.456.789 hoặc Telegram: @accshop_vn', 'warn');
    closeDetail();
}

// ─── SEARCH ───
function filterProducts(q) {
    q = q.toLowerCase().trim();
    document.querySelectorAll('.product-card').forEach(card => {
        const id = card.dataset.id;
        const p = products.find(x => x.id === id);
        const match = !q || p.name.toLowerCase().includes(q);
        card.style.display = match ? '' : 'none';
    });
}

// ─── PAUSED SECTION ───
function togglePausedSection() {
    const grid = document.getElementById('pausedGrid');
    if (!grid) return;
    const isHidden = grid.style.display === 'none';
    grid.style.display = isHidden ? 'grid' : 'none';
}

// ─── ADMIN MODE ───
function toggleAdmin() {
    adminMode = !adminMode;
    document.body.classList.toggle('admin-mode', adminMode);
    if (adminMode) {
        toast('⚙️ Đã bật chế độ Admin — Click ✏️ trên sản phẩm để chỉnh sửa');
    }
}

function openAdminEdit(e, id) {
    e.stopPropagation();
    if (!adminMode) return;
    editingProductId = id;
    const p = products.find(x => x.id === id);
    if (!p) return;
    renderAdminModal(p);
    document.getElementById('adminModalOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function renderAdminModal(p) {
    const featHtml = p.features.map((f, i) => `
    <div class="admin-feat-row">
      <select class="feat-type-select" id="feat-type-${i}">
        <option value="good" ${f.type === 'good' ? 'selected' : ''}>✓ Tốt</option>
        <option value="warn" ${f.type === 'warn' ? 'selected' : ''}>✕ Hạn chế</option>
        <option value="info" ${f.type === 'info' ? 'selected' : ''}>i Ghi chú</option>
      </select>
      <input class="admin-input" id="feat-text-${i}" value="${f.text}" placeholder="Nội dung...">
      <button class="btn-remove-feat" onclick="removeFeat(${i})">✕</button>
    </div>
  `).join('');

    const durHtml = p.durations.map((d, i) => `
    <div class="dur-row">
      <input class="admin-input" id="dur-label-${i}" value="${d.label}" placeholder="Nhãn">
      <input class="admin-input" id="dur-price-${i}" type="number" value="${d.price}" placeholder="Giá (VNĐ)">
      <label class="admin-toggle" title="Hết hàng">
        <input type="checkbox" id="dur-out-${i}" ${d.out ? 'checked' : ''}>
        <span class="admin-toggle-slider"></span>
      </label>
      <span class="dur-row-label" style="font-size:0.68rem; color:var(--text2); white-space:nowrap">hết hàng</span>
    </div>
  `).join('');

    const imgPrev = p.image
        ? `background-image: url('${p.image}'); background-size: cover; background-position: center;`
        : `background: ${p.gradient};`;

    document.getElementById('adminModalBody').innerHTML = `
    <div class="admin-field">
      <label>Tên sản phẩm</label>
      <input class="admin-input" id="edit-name" value="${p.name}">
    </div>

    <div class="admin-field">
      <label>Hình ảnh sản phẩm</label>
      <div class="admin-img-preview" id="editImgPreview" style="${imgPrev}">
        ${!p.image ? '<span>Chưa có ảnh — đang dùng màu nền</span>' : ''}
      </div>
      <div class="admin-img-row">
        <input class="admin-input" id="edit-img-url" placeholder="Nhập URL ảnh..." value="${p.image || ''}" oninput="previewImgUrl(this.value)">
        <button class="admin-upload-btn" onclick="document.getElementById('imgUpload').click()">📁 Upload</button>
      </div>
    </div>

    <div class="admin-field">
      <label>Màu nền (khi không có ảnh)</label>
      <input class="admin-input" id="edit-gradient" value="${p.gradient}" placeholder="CSS gradient hoặc màu...">
    </div>

    <div class="admin-field">
      <label>Thời hạn & Giá <span style="color:var(--text2);font-weight:400;font-size:0.7rem;">(bật toggle = hết hàng)</span></label>
      <div class="dur-editor">${durHtml}</div>
    </div>

    <div class="admin-field">
      <label>Tính năng / Mô tả</label>
      <div class="admin-features-list" id="editFeaturesList">${featHtml}</div>
      <button class="btn-add-feat" onclick="addFeat()">＋ Thêm dòng</button>
    </div>

    <div class="admin-field">
      <label>Trạng thái</label>
      <div class="admin-toggle-row">
        <label class="admin-toggle">
          <input type="checkbox" id="edit-paused" ${p.paused ? 'checked' : ''}>
          <span class="admin-toggle-slider"></span>
        </label>
        <span style="font-size:0.82rem; color:var(--text2)">Tạm ngưng bán</span>
      </div>
    </div>
  `;
}

function previewImgUrl(url) {
    const prev = document.getElementById('editImgPreview');
    if (!prev) return;
    if (url) {
        prev.style.backgroundImage = `url('${url}')`;
        prev.style.backgroundSize = 'cover';
        prev.style.backgroundPosition = 'center';
        prev.innerHTML = '';
    } else {
        const p = products.find(x => x.id === editingProductId);
        prev.style.backgroundImage = '';
        prev.style.background = p?.gradient || '';
        prev.innerHTML = '<span>Chưa có ảnh — đang dùng màu nền</span>';
    }
}

function handleImgUpload(input) {
    const file = input.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        const url = e.target.result;
        document.getElementById('edit-img-url').value = url;
        previewImgUrl(url);
    };
    reader.readAsDataURL(file);
    input.value = '';
}

function addFeat() {
    const p = products.find(x => x.id === editingProductId);
    if (!p) return;
    // Collect current features first
    collectFeaturesFromUI(p);
    p.features.push({ text: '', type: 'good' });
    renderAdminModal(p);
}

function removeFeat(idx) {
    const p = products.find(x => x.id === editingProductId);
    if (!p) return;
    collectFeaturesFromUI(p);
    p.features.splice(idx, 1);
    renderAdminModal(p);
}

function collectFeaturesFromUI(p) {
    const newFeats = [];
    p.features.forEach((_, i) => {
        const typeEl = document.getElementById(`feat-type-${i}`);
        const textEl = document.getElementById(`feat-text-${i}`);
        if (typeEl && textEl) {
            newFeats.push({ type: typeEl.value, text: textEl.value });
        }
    });
    p.features = newFeats;
}

function saveProduct() {
    const p = products.find(x => x.id === editingProductId);
    if (!p) return;

    p.name = document.getElementById('edit-name')?.value || p.name;
    p.image = document.getElementById('edit-img-url')?.value || '';
    p.gradient = document.getElementById('edit-gradient')?.value || p.gradient;
    p.paused = document.getElementById('edit-paused')?.checked || false;

    // Durations
    p.durations.forEach((d, i) => {
        const lbl = document.getElementById(`dur-label-${i}`);
        const pr = document.getElementById(`dur-price-${i}`);
        const out = document.getElementById(`dur-out-${i}`);
        if (lbl) d.label = lbl.value;
        if (pr) d.price = parseInt(pr.value) || d.price;
        if (out) d.out = out.checked;
    });

    // Features
    collectFeaturesFromUI(p);

    saveProducts();
    closeAdminModal();
    renderAll();
    toast('✅ Đã lưu thay đổi!');
}

function closeAdminModal() {
    document.getElementById('adminModalOverlay').classList.remove('open');
    document.body.style.overflow = '';
    editingProductId = null;
}

function addProduct() {
    const newId = 'product-' + Date.now();
    products.push({
        id: newId,
        name: 'Sản phẩm mới',
        gradient: 'linear-gradient(135deg, #1e293b, #0f172a)',
        labelColor: '#94a3b8',
        image: '',
        paused: false,
        features: [
            { text: 'Tính năng 1', type: 'good' },
        ],
        durations: [
            { label: '1 Tháng', price: 100000, out: false },
            { label: '3 Tháng', price: 270000, out: false },
            { label: '6 Tháng', price: 500000, out: false },
            { label: '12 Tháng', price: 900000, out: false },
        ]
    });
    saveProducts();
    renderAll();
    // Open edit modal for the new product
    setTimeout(() => {
        const card = document.querySelector(`[data-id="${newId}"]`);
        if (card) {
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
            setTimeout(() => openAdminEdit(new Event('click'), newId), 400);
        }
    }, 200);
}

function resetData() {
    if (!confirm('Reset toàn bộ về dữ liệu mặc định? Thao tác này không thể hoàn tác.')) return;
    localStorage.removeItem('accshop_products');
    loadProducts();
    renderAll();
    toast('⚠️ Đã reset về mặc định');
}

// ─── KEYBOARD SHORTCUTS ───
function setupGlobalEvents() {
    // Ctrl+Shift+A = toggle admin
    document.addEventListener('keydown', e => {
        if (e.ctrlKey && e.shiftKey && e.key === 'A') {
            e.preventDefault();
            toggleAdmin();
        }
        if (e.key === 'Escape') {
            closeDetail();
            closeAdminModal();
        }
    });

    // Double-click logo = toggle admin
    document.getElementById('siteLogo')?.addEventListener('dblclick', () => toggleAdmin());

    // Close modals on overlay click
    document.getElementById('detailOverlay')?.addEventListener('click', e => {
        if (e.target === document.getElementById('detailOverlay')) closeDetail();
    });
    document.getElementById('adminModalOverlay')?.addEventListener('click', e => {
        if (e.target === document.getElementById('adminModalOverlay')) closeAdminModal();
    });
}

// ─── TOAST ───
function toast(msg, type = 'ok') {
    const wrap = document.getElementById('toastWrap');
    const el = document.createElement('div');
    el.className = `toast${type === 'warn' ? ' warn' : ''}`;
    el.textContent = msg;
    wrap.appendChild(el);
    setTimeout(() => el.remove(), 3200);
}

// ─── FORMAT ───
function formatVND(n) {
    return new Intl.NumberFormat('vi-VN').format(n);
}

// ─── START ───
init();

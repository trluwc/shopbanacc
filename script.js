// =========================================
// sieuthinick.store — Script
// =========================================

// ─── DEFAULT PRODUCT DATA ───
const DEFAULT_PRODUCTS = [
    {
        id: 'antigravity',
        name: 'Google Antigravity Pro',
        gradient: 'linear-gradient(135deg, #0a1628, #172554)',
        labelColor: '#93c5fd',
        image: './images/img-antigravity.webp',
        badge: 'BEST SELLER',
        paused: false,
        features: [
            { text: 'Tài Khoản Google Antigravity Pro + Ultra', type: 'good' },
            { text: 'Tặng kèm Gemini Pro + 2TB Google Driver', type: 'good' },
            { text: 'Nâng cấp chính chủ hoặc dùng tài khoản riêng', type: 'good' },
            { text: 'Bảo hành toàn bộ thời gian sử dụng', type: 'info' },
        ],
        durations: [
            { label: 'Nâng Cấp CC 1T (+Gemini+2TB)', price: 52650, out: true },
            { label: 'Ultra Sẵn 1T (Bảo hành 14 ngày)', price: 289575, out: true },
            { label: 'Nâng Cấp CC 6T (+Gemini+2TB)', price: 142155, out: false },
            { label: 'Nâng Cấp CC 12T (+Gemini+2TB)', price: 221130, out: false },
            { label: 'Chủ Nhóm 5 Slot 12T (+Gemini AI+2TB)', price: 631800, out: false },
        ]
    },
    {
        id: 'cgpt-plus',
        name: 'ChatGPT Plus',
        gradient: 'linear-gradient(135deg, #1a1a2e, #16213e)',
        labelColor: '#10b981',
        image: './images/img-chatgpt.jpg',
        badge: 'BEST SELLER',
        paused: false,
        features: [
            { text: 'Vô hạn ChatGPT 5.2 Instant, ChatGPT 5.2 Thinking, ChatGPT 5.2 Pro', type: 'good' },
            { text: 'Bảo hành toàn bộ thời gian sử dụng', type: 'good' },
            { text: 'Có 3 loại: Dùng Chung · Riêng Tư · Chính Chủ', type: 'info' },
            { text: 'Chính chủ: toàn quyền, không chia sẻ, bảo hành đổi mới', type: 'good' },
        ],
        durations: [
            { label: '1 Tháng', desc: 'ChatGPT Plus Dùng Chung — Chỉ đăng nhập được 1 thiết bị', price: 89100, out: false },
            { label: '12 Tháng', desc: 'ChatGPT Plus Dùng Chung — Chỉ đăng nhập được 1 thiết bị', price: 481140, out: false },
            { label: '1 Tháng', desc: 'ChatGPT Plus Dùng Riêng Tư — Đăng nhập được 3-5 thiết bị', price: 151470, out: false },
            { label: '1 Tháng', desc: 'ChatGPT Plus Nâng Cấp Chính Chủ — Đăng nhập được 3-5 thiết bị', price: 178200, out: false },
            { label: '2 Tháng', desc: 'ChatGPT Plus Nâng Cấp Chính Chủ — Đăng nhập được 3-5 thiết bị', price: 302940, out: true },
            { label: '3 Tháng', desc: 'ChatGPT Plus Dùng Riêng Tư — Đăng nhập được 3-5 thiết bị', price: 454410, out: false },
            { label: '3 Tháng', desc: 'ChatGPT Plus Nâng Cấp Chính Chủ — Đăng nhập được 3-5 thiết bị', price: 507870, out: false },
            { label: '12 Tháng', desc: 'ChatGPT Go Có Sẵn Dùng Riêng Tư — Đăng nhập được 3-5 thiết bị', price: 534600, out: false },
            { label: '12 Tháng', desc: 'ChatGPT Plus Dùng Riêng Tư — Đăng nhập được 3-5 thiết bị', price: 1496880, out: false },
            { label: '12 Tháng', desc: 'Nâng Cấp ChatGPT Plus Chính Chủ — Đăng nhập được 3-5 thiết bị', price: 1603800, out: true },
        ]
    },
    {
        id: 'veo3',
        name: 'Google VEO3 ULTRA',
        gradient: 'linear-gradient(135deg, #172554, #1e1b4b)',
        labelColor: '#93c5fd',
        image: './images/img-veo3.webp',
        badge: 'BEST SELLER',
        paused: false,
        features: [
            { text: 'Tài khoản Google PRO AI 2TB (Veo3) — Cấp Sẵn 1000–45000 Credit Flow', type: 'good' },
            { text: 'Veo3 Ultra không giới hạn + 45000 Credit tạo được 450 video Pro', type: 'good' },
            { text: 'Nâng cấp chính chủ: tặng kèm Gemini Pro + 2TB + Google Antigravity', type: 'good' },
            { text: 'Bảo hành 7–14 ngày cho gói cấp sẵn', type: 'info' },
        ],
        durations: [
            { label: '1 Tháng', desc: 'Veo3 Ultra Không Giới Hạn + 45000 Credit Flow Labs (450 Video Pro) — Bảo hành 7 ngày', price: 247455, out: true },
            { label: '1 Tháng', desc: 'Veo3 Ultra Không Giới Hạn + 45000 Credit Flow Labs (450 Video Pro) — Bảo hành 14 ngày', price: 315900, out: true },
            { label: '6 Tháng', desc: 'Nâng Cấp Chính Chủ Veo3 Pro 1000 Credit/Tháng + Tặng kèm Gemini Pro + 2TB + Google Antigravity', price: 142155, out: false },
            { label: '12 Tháng', desc: 'Nâng Cấp Chính Chủ Veo3 Pro 1000 Credit/Tháng + Tặng kèm Gemini Pro + 2TB + Google Antigravity', price: 221130, out: false },
        ]
    },
    {
        id: 'gemini-pro',
        name: 'Gemini Pro Chính Chủ',
        gradient: 'linear-gradient(135deg, #1e3a5f, #0c2340)',
        labelColor: '#60a5fa',
        image: './images/img-gemini.jpg',
        paused: false,
        features: [
            { text: 'Gemini Ultra — model AI mạnh nhất của Google', type: 'good' },
            { text: 'Google One 2TB cloud storage đi kèm', type: 'good' },
            { text: 'Tích hợp Gmail, Docs, Sheets, Slides', type: 'good' },
            { text: 'Tài khoản chính chủ không chia sẻ', type: 'info' },
        ],
        durations: [
            { label: '6 Tháng', desc: 'Nâng Cấp Gemini Pro AI + Google One Drive 2TB + Google Antigravity Chính Chủ', price: 142155, out: false },
            { label: '12 Tháng', desc: 'Nâng Cấp Gemini Pro AI + Google One Drive 2TB + Google Antigravity Chính Chủ', price: 221130, out: false },
            { label: '12 Tháng', desc: 'Tài Khoản Chủ Nhóm + 5 Slot Gemini Pro AI + 2TB + Google Antigravity (6 Slot)', price: 631800, out: false },

        ]
    },
    {
        id: 'capcut-pro',
        name: 'Capcut Pro',
        gradient: 'linear-gradient(135deg, #312e81, #1e1b4b)',
        labelColor: '#a78bfa',
        image: './images/img-capcut.webp',
        paused: false,
        features: [
            { text: 'Mở khoá toàn bộ hiệu ứng, font chữ, sticker Pro', type: 'good' },
            { text: 'Export 4K không watermark', type: 'good' },
            { text: 'Nhạc bản quyền dùng thương mại', type: 'good' },
            { text: 'Có gói cố sẵn, cá nhân & nâng cấp chính chủ', type: 'info' },
        ],
        durations: [
            { label: '1 Tháng', desc: 'Cấp Sẵn 1 Tháng Riêng Biệt — Đăng nhập bằng Email (Đăng nhập được 3-4 máy)', price: 45900, out: false },
            { label: '3 Tháng', desc: 'Cấp Sẵn 3 Tháng Riêng Biệt — Đổi TK hàng tháng (Đăng nhập được 3-4 máy)', price: 192780, out: false },
            { label: '6 Tháng', desc: 'Cấp Sẵn Đủ Hạn 6 Tháng, Hàng Đổi Nhóm (Đăng nhập được 3-4 máy)', price: 330480, out: false },
            { label: '6 Tháng', desc: 'Cá Nhân Đầy Đủ Hạn 6 Tháng Riêng Biệt (Đăng nhập được 3-4 máy)', price: 385560, out: false },
            { label: '6 Tháng', desc: 'Nâng Cấp Chính Chủ Cá Nhân Đầy Đủ Hạn 6 Tháng (Đăng nhập được 3-4 máy)', price: 440640, out: false },
            { label: '12 Tháng', desc: 'Cấp Sẵn Đủ Hạn 12 Tháng, Hàng Đổi Nhóm (Đăng nhập được 3-4 máy)', price: 550800, out: false },
            { label: '12 Tháng', desc: 'Nâng Cấp Chính Chủ Hạn 12 Tháng, Hàng Đổi Nhóm (Đăng nhập được 3-4 máy)', price: 633420, out: false },
        ]
    },
    {
        id: 'canva-pro',
        name: 'Canva Pro Chính Chủ',
        gradient: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
        labelColor: '#ddd6fe',
        image: './images/img-canva.jpg',
        paused: false,
        features: [
            { text: '100+ triệu ảnh stock, element Premium', type: 'good' },
            { text: 'Xóa nền AI, Magic Resize, Brand Kit', type: 'good' },
            { text: 'Xuất file với tất cả định dạng', type: 'good' },
            { text: 'Có gói Education & Full tính năng chính chủ', type: 'info' },
        ],
        durations: [
            { label: '12 Tháng', desc: 'Canva Education — Chính chủ đăng ký bằng mail của bạn', price: 20160, out: false },
            { label: '12 Tháng', desc: 'Canva Pro Full Tính Năng — Toàn quyền, có Brand Kit, Upload font', price: 120960, out: false },
            { label: '24 Tháng', desc: 'Canva Education — Chính chủ đăng ký bằng mail của bạn', price: 37632, out: false },
            { label: '24 Tháng', desc: 'Canva Pro Full Tính Năng — Toàn quyền, có Brand Kit, Upload font', price: 228480, out: false },
            { label: '36 Tháng', desc: 'Canva Education — Chính chủ đăng ký bằng mail của bạn', price: 52416, out: false },
            { label: '36 Tháng', desc: 'Canva Pro Full Tính Năng — Toàn quyền, có Brand Kit, Upload font', price: 322560, out: false },
        ]
    },
    {
        id: 'youtube-premium',
        name: 'Youtube Premium (Family)',
        gradient: 'linear-gradient(135deg, #7f1d1d, #450a0a)',
        labelColor: '#fca5a5',
        image: './images/img-ytb.webp',
        paused: false,
        features: [
            { text: 'Xem video không quảng cáo trên mọi thiết bị', type: 'good' },
            { text: 'Phát nhạc nền khi tắt màn hình', type: 'good' },
            { text: 'YouTube Music Premium đi kèm', type: 'good' },
            { text: 'Gói Family + Tặng kèm Canva Pro Edu các gói dài hạn', type: 'info' },
        ],
        durations: [
            { label: '1 Tháng', desc: 'YouTube Premium Family — Không kèm Canva Pro Edu', price: 39150, out: false },
            { label: '3 Tháng', desc: 'YouTube Premium Family — Không kèm Canva Pro Edu', price: 99833, out: false },
            { label: '6 Tháng', desc: 'YouTube Premium Family + Tặng kèm Canva Pro Edu 1 Năm', price: 187920, out: false },
            { label: '12 Tháng', desc: 'YouTube Premium Family + Tặng kèm Canva Pro Edu 1 Năm', price: 352350, out: false },
            { label: '24 Tháng', desc: 'YouTube Premium Family + Tặng kèm Canva Pro Edu 2 Năm', price: 610740, out: false },
            { label: '36 Tháng', desc: 'YouTube Premium Family + Tặng kèm Canva Pro Edu 3 Năm', price: 845640, out: false },
        ]
    },
    {
        id: 'netflix-4k',
        name: 'Netflix Ultra 4K',
        gradient: 'linear-gradient(135deg, #b91c1c, #1c1917)',
        labelColor: '#fca5a5',
        image: './images/img-netflix.jpg',
        paused: false,
        features: [
            { text: '4K Ultra HD + HDR, Dolby Atmos', type: 'good' },
            { text: 'Profile riêng + Pin riêng — không bị xâm phạm', type: 'good' },
            { text: 'Tải phim xem offline', type: 'good' },
            { text: 'Nhập số điện thoại để được hỗ trợ nhanh', type: 'info' },
        ],
        durations: [
            { label: '1 Tháng', desc: 'Netflix Ultra 4K — Profile Riêng + Pin Riêng', price: 99900, out: true },
            { label: '3 Tháng', desc: 'Netflix Ultra 4K — Profile Riêng + Pin Riêng', price: 314685, out: false },
            { label: '6 Tháng', desc: 'Netflix Ultra 4K — Profile Riêng + Pin Riêng', price: 611388, out: true },
            { label: '12 Tháng', desc: 'Netflix Ultra 4K — Profile Riêng + Pin Riêng', price: 1150000, out: false },
        ]
    },
    {
        id: 'spotify',
        name: 'Spotify Premium',
        gradient: 'linear-gradient(135deg, #14532d, #052e16)',
        labelColor: '#4ade80',
        image: './images/img-spotify.webp',
        paused: false,
        features: [
            { text: 'Nghe nhạc không quảng cáo, không giới hạn', type: 'good' },
            { text: 'Tải nhạc nghe offline', type: 'good' },
            { text: 'Chất lượng âm thanh cao nhất', type: 'good' },
            { text: 'Tài khoản cá nhân chính chủ giá rẻ', type: 'info' },
        ],
        durations: [
            { label: '4 Tháng', desc: 'Tài Khoản Spotify Premium Cá Nhân — Chính chủ giá rẻ', price: 183600, out: false },
            { label: '1 Năm', desc: 'Tài Khoản Spotify Premium Cá Nhân — Chính chủ giá rẻ', price: 499000, out: false },
        ]
    },
    {
        id: 'cursor-pro',
        name: 'Cursor Pro AI',
        gradient: 'linear-gradient(135deg, #0c2d4e, #0a1628)',
        labelColor: '#7dd3fc',
        image: './images/img-cursor.webp',
        paused: false,
        features: [
            { text: 'Tài Khoản Cursor Pro AI + Cursor Pro Plus', type: 'good' },
            { text: 'AI code completion siêu mạnh với Claude, GPT-4', type: 'good' },
            { text: 'Unlimited fast requests mỗi tháng', type: 'good' },
            { text: 'Có lựa chọn dùng riêng & nâng cấp chính chủ', type: 'info' },
        ],
        durations: [
            { label: '1 Tháng', desc: 'Tài Khoản Cursor Pro — Dùng Riêng', price: 459000, out: false },
            { label: '1 Tháng', desc: 'Nâng Cấp Chính Chủ Cursor Pro — Email + Pass riêng', price: 481950, out: true },
            { label: '1 Tháng', desc: 'Tài Khoản Cursor Pro Plus — Dùng Riêng', price: 1147500, out: true },
        ]
    },
    {
        id: 'ms365',
        name: 'Microsoft Office 365',
        gradient: 'linear-gradient(135deg, #1e3a5f, #0c2340)',
        labelColor: '#93c5fd',
        image: './images/img-ms365.webp',
        paused: false,
        features: [
            { text: 'Word, Excel, PowerPoint, Outlook, Teams, Copilot AI', type: 'good' },
            { text: 'OneDrive 1TB cloud storage', type: 'good' },
            { text: 'Nâng cấp chính chủ tài khoản Microsoft của bạn', type: 'good' },
            { text: 'Bản quyền chính hãng, luôn cập nhật', type: 'info' },
        ],
        durations: [
            { label: '6 Tháng', desc: 'Nâng Cấp Chính Chủ Microsoft Office 365 Copilot + One Driver 1TB', price: 121500, out: false },
            { label: '12 Tháng', desc: 'Nâng Cấp Chính Chủ Microsoft Office 365 Copilot + One Driver 1TB', price: 194400, out: false },
        ]
    },
    {
        id: 'adobe-full',
        name: 'Adobe Full Apps',
        gradient: 'linear-gradient(135deg, #7c2d12, #431407)',
        labelColor: '#fb923c',
        image: './images/img-adobe.webp',
        paused: false,
        features: [
            { text: 'Photoshop, Illustrator, Premiere, After Effects', type: 'good' },
            { text: 'Lightroom, InDesign, XD và 20+ app khác', type: 'good' },
            { text: '100GB cloud storage', type: 'good' },
            { text: 'Bản Creative Cloud chính hãng — Full 20+ Apps', type: 'info' },
        ],
        durations: [
            { label: '1 Tháng', desc: 'Tài Khoản Adobe Full 20+ Apps + 100GB Cloud Lưu Trữ', price: 60750, out: true },
            { label: '4 Tháng', desc: 'Tài Khoản Adobe Full 20+ Apps + 100GB Cloud Lưu Trữ', price: 243000, out: false },
            { label: '12 Tháng', desc: 'Tài Khoản Adobe Full 20+ Apps + 100GB Cloud Lưu Trữ', price: 729000, out: false },
        ]
    },
    {
        id: 'zoom-pro',
        name: 'Zoom Pro',
        gradient: 'linear-gradient(135deg, #1a56db, #0e3fad)',
        labelColor: '#93c5fd',
        image: './images/img-zoom.webp',
        paused: false,
        features: [
            { text: 'Tài Khoản Zoom Pro Phòng Họp 100 Người', type: 'good' },
            { text: 'Không giới hạn thời gian cuộc họp', type: 'good' },
            { text: 'Ghi âm cloud, whiteboards, breakout rooms', type: 'good' },
            { text: 'Giá rẻ, bảo hành toàn thời gian sử dụng', type: 'info' },
        ],
        durations: [
            { label: '1 Tháng', desc: 'Tài Khoản Zoom Pro Phòng Họp 100 Người Giá Rẻ', price: 132300, out: false },
            { label: '3 Tháng', desc: 'Tài Khoản Zoom Pro Phòng Họp 100 Người Giá Rẻ', price: 370000, out: false },
            { label: '6 Tháng', desc: 'Tài Khoản Zoom Pro Phòng Họp 100 Người Giá Rẻ', price: 700000, out: false },
            { label: '12 Tháng', desc: 'Tài Khoản Zoom Pro Phòng Họp 100 Người Giá Rẻ', price: 1300000, out: false },
        ]
    },
    {
        id: 'zalo-group-1000',
        name: 'Nh\u00f3m Zalo 1000 Members',
        gradient: 'linear-gradient(135deg, #0068FF, #004ecc)',
        labelColor: '#ffffff',
        image: 'https://thatim.vn/uploads/images/original/jH1-gjQ-HoK-nfC-26-09-2025-16.webp',
        paused: true,
        features: [
            { text: 'Nh\u00f3m Zalo V\u0129nh Vi\u1ec5n 1000-1200 Th\u00e0nh Vi\u00ean Ch\u1edd X\u00e9t Duy\u1ec7t', type: 'good' },
            { text: 'Nh\u00f3m th\u1eadt, th\u00e0nh vi\u00ean th\u1eadt \u2014 kh\u00f4ng bot', type: 'good' },
            { text: 'Ph\u00f9 h\u1ee3p Marketing, kinh doanh online', type: 'good' },
            { text: 'S\u1ea3n ph\u1ea9m \u0111ang t\u1ea1m ng\u01b0ng \u2014 li\u00ean h\u1ec7 \u0111\u1ec3 h\u1ecfi th\u00eam', type: 'warn' },
        ],
        durations: [
            { label: '1 Nh\u00f3m Zalo V\u0129nh Vi\u1ec5n 1000-1200 TV', price: 189000, out: true },
            { label: '5 Nh\u00f3m Zalo V\u0129nh Vi\u1ec5n 1000-1200 TV', price: 756000, out: true },
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
    const DATA_VER = 'v20260301_2';

    const savedVer = localStorage.getItem('accshop_ver');
    const saved = localStorage.getItem('accshop_products');
    if (!saved || savedVer !== DATA_VER) {
        localStorage.removeItem('accshop_products');
        localStorage.setItem('accshop_ver', DATA_VER);
        products = JSON.parse(JSON.stringify(DEFAULT_PRODUCTS));
    } else {
        products = JSON.parse(saved);
    }
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
    html += `<div class="section-title">TẤT CẢ SẢN PHẨM</div>`;

    html += `<div class="product-grid" id="activeGrid">`;
    active.forEach(p => { html += renderCard(p); });
    html += `</div>`;

    if (paused.length > 0) {
        html += `<div class="paused-section">`;
        html += `<button class="paused-section-toggle" onclick="togglePausedSection()" id="pausedToggleBtn"><span class="paused-toggle-icon" id="pausedChevron">▼</span><span>Sản phẩm tạm ngưng <span class="paused-count">(${paused.length})</span></span></button>`;

        html += `<div class="product-grid paused-grid" id="pausedGrid" style="display:none">`;
        paused.forEach(p => { html += renderCard(p); });
        html += `</div></div>`;
    }

    main.innerHTML = html;
}

function renderCard(p) {
    const minPrice = Math.min(...p.durations.filter(d => !d.out).map(d => d.price));
    const origPrice = p.originalPrice || Math.round(minPrice * 1.4 / 1000) * 1000;
    const discount = Math.round((1 - minPrice / origPrice) * 100);
    const imgStyle = p.image
        ? `background-image: url('${p.image}'); background-size: cover; background-position: center;`
        : `background: ${p.gradient};`;

    return `
    <div class="product-card${p.paused ? ' paused' : ''}${selectedProductId === p.id ? ' selected' : ''}${p.badge ? ' has-badge' : ''}"
      data-id="${p.id}" onclick="handleCardClick('${p.id}')">
      <div class="card-img" style="${imgStyle}">
        ${!p.image ? `<div class="card-img-label" style="color:${p.labelColor}">${p.name.split(' ').slice(0, 2).join(' ')}</div>` : ''}
        ${p.paused ? `<div class="card-paused-badge">TẠM NGƯNG</div>` : ''}
        ${p.badge ? `<div class="card-hot-badge">${p.badge}</div>` : ''}
      </div>
      <div class="card-info">
        <h3 class="card-name">${p.name}</h3>
        <div class="card-price-row">
          <span class="card-old-price">${formatVND(origPrice)}đ</span>
          <span class="card-discount">-${discount}%</span>
        </div>
        <div class="card-price">chỉ từ <span>${formatVND(minPrice)}VNĐ</span></div>
      </div>
      <button class="card-edit-btn" onclick="openAdminEdit(event, '${p.id}')">✏️ Sửa</button>
    </div>
  `;
}

function handleCardClick(id) {
    if (adminMode) return;
    selectedProductId = id;
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
      <div class="dur-btn-top">
        <div class="dur-btn-label">${d.label}</div>
        <div class="dur-btn-price">${formatVND(d.price * detailQty)}đ</div>
      </div>
      ${d.desc ? `<div class="dur-btn-desc">${d.desc}</div>` : ''}
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
      <button class="btn-buy" disabled title="Vui lòng liên hệ qua Nhắn tin để đặt hàng">🛒 Mua hàng</button>
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
    closeDetail();
    openContactPopup();
}

function goContact() {
    closeDetail();
    openContactPopup();
}

// ─── TERMS PAGE ───
function showTerms() {
    document.getElementById('termsPage').style.display = 'block';
    document.body.style.overflow = 'hidden';
    document.getElementById('termsPage').scrollTop = 0;
}

function closeTerms() {
    document.getElementById('termsPage').style.display = 'none';
    document.body.style.overflow = '';
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


// ─── ADMIN MODE ───
function toggleAdmin() {
    adminMode = !adminMode;
    document.body.classList.toggle('admin-mode', adminMode);
    if (adminMode) {
        toast('⚙️ Đã bật chế độ Admin — Click ✏️ trên sản phẩm để chỉnh sửa');
    }
}

// ─── PAUSED SECTION ───
function togglePausedSection() {
    const grid = document.getElementById('pausedGrid');
    const chevron = document.getElementById('pausedChevron');
    if (!grid) return;
    const isHidden = grid.style.display === 'none';
    grid.style.display = isHidden ? 'grid' : 'none';
    if (chevron) chevron.textContent = isHidden ? '▲' : '▼';
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
            closeContactPopup();
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

// ─── CONTACT POPUP ───
function openContactPopup() {
    document.getElementById('contactPopupOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeContactPopup() {
    document.getElementById('contactPopupOverlay').classList.remove('open');
    document.body.style.overflow = '';
}


// ─── FAB SPEED DIAL ───
function toggleFab() {
    document.getElementById('fabWrap').classList.toggle('open');
}

// ─── THEME TOGGLE ───
function toggleTheme() {
    const isLight = document.body.classList.contains('light-mode');
    const btn = document.getElementById('themeBtn');
    if (isLight) {
        // Switch to dark
        document.body.classList.remove('light-mode');
        btn.textContent = '🌙';
        localStorage.setItem('accshop_theme', 'dark');
    } else {
        // Switch to light
        document.body.classList.add('light-mode');
        btn.textContent = '☀️';
        localStorage.setItem('accshop_theme', 'light');
    }
}

function loadTheme() {
    const saved = localStorage.getItem('accshop_theme');
    const btn = document.getElementById('themeBtn');
    if (saved === 'dark') {
        document.body.classList.remove('light-mode');
        if (btn) btn.textContent = '🌙';
    } else {
        // Default = light (body already has light-mode class)
        document.body.classList.add('light-mode');
        if (btn) btn.textContent = '☀️';
    }
}

// ─── START ───
loadTheme();
init();

// --- WELCOME POPUP ---
(function () {
    const DELAY = 700;
    const AUTO_CLOSE = 7200;

    function setVisible(visible) {
        const el = document.getElementById('welcomePopup');
        const bd = document.getElementById('wpBackdrop');
        const dot = document.getElementById('popupToggleDot');
        if (!el) return;
        if (visible) {
            el.classList.remove('hide'); el.classList.add('show');
            if (bd) bd.classList.add('show');
            if (dot) dot.classList.remove('active');
        } else {
            el.classList.remove('show'); el.classList.add('hide');
            if (bd) bd.classList.remove('show');
            if (dot) dot.classList.add('active');
        }
    }

    window.closeWelcome = function () { setVisible(false); };
    window.toggleWelcomePopup = function () {
        const el = document.getElementById('welcomePopup');
        if (el) setVisible(!el.classList.contains('show'));
    };

    window.addEventListener('DOMContentLoaded', function () {
        const snoozed = localStorage.getItem('wp_snoozed');
        if (snoozed && Date.now() < parseInt(snoozed)) return; // still snoozed
        setTimeout(function () { setVisible(true); }, DELAY);
        setTimeout(function () { setVisible(false); }, DELAY + AUTO_CLOSE);
    });
})();
// ─── DISMISS FOR 15 MINUTES ───
window.dismissWelcome15 = function () {
    localStorage.setItem('wp_snoozed', Date.now() + 15 * 60 * 1000);
    window.closeWelcome();
};

// ─── FAQ ACCORDION ───
function toggleFaq(el) {
    el.classList.toggle('open');
}



// ─── BACK TO TOP ───
window.addEventListener('scroll', function () {
    const btn = document.getElementById('backToTop');
    if (btn) btn.classList.toggle('show', window.scrollY > 400);
});
// ─── FLASH SALE COUNTDOWN ───
function initFlashSale() {
    function getEndOfDay() {
        const now = new Date();
        const end = new Date(now);
        end.setHours(23, 59, 59, 999);
        return end;
    }
    function updateTimer() {
        const now = new Date();
        const end = getEndOfDay();
        let diff = Math.max(0, Math.floor((end - now) / 1000));
        const h = Math.floor(diff / 3600);
        diff %= 3600;
        const m = Math.floor(diff / 60);
        const s = diff % 60;
        const hEl = document.getElementById('fsHours');
        const mEl = document.getElementById('fsMinutes');
        const sEl = document.getElementById('fsSeconds');
        if (hEl) hEl.textContent = String(h).padStart(2, '0');
        if (mEl) mEl.textContent = String(m).padStart(2, '0');
        if (sEl) sEl.textContent = String(s).padStart(2, '0');
    }
    updateTimer();
    setInterval(updateTimer, 1000);
}

// ─── COUNTING ANIMATION ───
function initCountAnimation() {
    const nums = document.querySelectorAll('.trust-num[data-count]');
    if (!nums.length) return;
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            if (el.dataset.animated) return;
            el.dataset.animated = '1';
            const target = parseInt(el.dataset.count, 10);
            const suffix = el.dataset.suffix || '';
            const duration = 1800;
            const start = performance.now();
            function tick(now) {
                const elapsed = now - start;
                const progress = Math.min(elapsed / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                const current = Math.floor(eased * target);
                el.textContent = current.toLocaleString('vi-VN') + suffix;
                if (progress < 1) {
                    requestAnimationFrame(tick);
                } else {
                    el.textContent = target.toLocaleString('vi-VN') + suffix;
                    el.classList.add('counted');
                }
            }
            requestAnimationFrame(tick);
        });
    }, { threshold: 0.3 });
    nums.forEach(n => observer.observe(n));
}

// ─── FAQ ACCORDION ───
function toggleFaq(el) {
    const isOpen = el.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(item => item.classList.remove('open'));
    if (!isOpen) el.classList.add('open');
}

// init on load
document.addEventListener('DOMContentLoaded', function () {
    initFlashSale();
    initCountAnimation();
});

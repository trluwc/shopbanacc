// ==========================================
// AccVault — Premium Account Shop
// ==========================================

// ========== STATE ==========
let cart = [];
let purchaseHistory = JSON.parse(localStorage.getItem('accvault_history') || '[]');

// ========== DOM REFS ==========
const sidebar = document.getElementById('sidebar');
const cartOverlay = document.getElementById('cartOverlay');
const cartSidebar = document.getElementById('cartSidebar');
const cartCountEl = document.getElementById('cartCount');
const cartItemsEl = document.getElementById('cartItems');
const cartTotalEl = document.getElementById('cartTotal');
const toastContainer = document.getElementById('toastContainer');
const userDropdown = document.getElementById('userDropdown');
const productModal = document.getElementById('productModal');
const modalBody = document.getElementById('modalBody');
const modalTitle = document.getElementById('modalTitle');

// ========== PAGE NAVIGATION ==========
function switchPage(page, linkEl) {
    // Close sidebar on mobile
    sidebar.classList.remove('open');

    // Update active state
    document.querySelectorAll('.sidebar-nav a, .sidebar-nav button').forEach(a => a.classList.remove('active'));
    if (linkEl) linkEl.classList.add('active');

    // Hide all pages
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('contactPage').classList.remove('active');
    document.getElementById('historyPage').classList.remove('active');

    // Show target
    switch (page) {
        case 'home':
        case 'accounts':
            document.getElementById('homePage').style.display = 'block';
            if (page === 'accounts') {
                setTimeout(() => {
                    const section = document.getElementById('section-ai');
                    if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
            break;
        case 'contact':
        case 'support':
            document.getElementById('contactPage').classList.add('active');
            break;
        case 'history':
            document.getElementById('historyPage').classList.add('active');
            renderHistory();
            break;
    }

    // Close dropdown
    closeUserDropdown();
    window.scrollTo({ top: 0 });
}

// ========== SIDEBAR TOGGLE (mobile) ==========
function toggleSidebar() {
    sidebar.classList.toggle('open');
}

// Click outside sidebar to close (mobile)
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768 && sidebar.classList.contains('open')) {
        if (!sidebar.contains(e.target) && !e.target.closest('.mobile-toggle')) {
            sidebar.classList.remove('open');
        }
    }
});

// ========== USER DROPDOWN ==========
function toggleUserDropdown() {
    userDropdown.classList.toggle('show');
}

function closeUserDropdown() {
    userDropdown.classList.remove('show');
}

document.addEventListener('click', (e) => {
    if (!e.target.closest('.user-profile')) {
        closeUserDropdown();
    }
});

// ========== SEARCH / FILTER ==========
function filterProducts(query) {
    query = query.toLowerCase().trim();
    const allCards = document.querySelectorAll('.product-card');

    allCards.forEach(card => {
        const name = (card.dataset.name || '').toLowerCase();
        const desc = (card.dataset.desc || '').toLowerCase();
        if (!query || name.includes(query) || desc.includes(query)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}

// ========== SCROLL TO PRODUCT ==========
function scrollToProduct(productId) {
    // Make sure we're on home page
    switchPage('home', document.querySelector('[data-page=home]'));

    setTimeout(() => {
        const card = document.querySelector(`.product-card[data-id="${productId}"]`);
        if (card) {
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
            // Highlight effect
            card.style.boxShadow = '0 0 0 3px rgba(99, 102, 241, 0.5)';
            card.style.transform = 'translateY(-4px) scale(1.02)';
            setTimeout(() => {
                card.style.boxShadow = '';
                card.style.transform = '';
            }, 2000);
        }
    }, 150);
}

// ========== PRODUCT MODAL ==========
function openProductModal(cardEl) {
    const data = cardEl.dataset;
    modalTitle.textContent = data.name;

    const features = (data.features || '').split('|');
    const featuresHtml = features.map(f =>
        `<div class="modal-feature-item"><span class="check">✓</span> ${f.trim()}</div>`
    ).join('');

    modalBody.innerHTML = `
    <div class="modal-product-hero">
      <div class="modal-product-icon">${data.icon}</div>
      <div class="modal-product-title">
        <h3>${data.name}</h3>
        <span class="modal-price">${formatPrice(parseInt(data.price))}</span>
        ${data.original ? `<span class="modal-price-original">${formatPrice(parseInt(data.original))}</span>` : ''}
      </div>
    </div>

    <p class="modal-desc">${data.desc}</p>

    <div class="modal-features">
      <h4>✨ Tính năng bao gồm:</h4>
      <div class="modal-feature-list">
        ${featuresHtml}
      </div>
    </div>

    <div class="modal-actions">
      <button class="btn btn-primary" onclick="addToCartFromModal('${data.id}', '${escapeHtml(data.name)}', ${data.price}, '${data.icon}')">
        🛒 Thêm vào giỏ
      </button>
      <button class="btn btn-outline" onclick="contactToBuy('${escapeHtml(data.name)}', ${data.price})">
        💬 Liên hệ mua ngay
      </button>
    </div>
  `;

    productModal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeProductModal() {
    productModal.classList.remove('show');
    document.body.style.overflow = '';
}

// Close modal on overlay click
productModal.addEventListener('click', (e) => {
    if (e.target === productModal) closeProductModal();
});

// ========== CART ==========
function toggleCart() {
    const isOpen = cartSidebar.classList.contains('open');
    cartOverlay.classList.toggle('open', !isOpen);
    cartSidebar.classList.toggle('open', !isOpen);
    document.body.style.overflow = isOpen ? '' : 'hidden';
}

function addToCartFromModal(id, name, price, icon) {
    cart.push({
        id: id + '-' + Date.now(),
        productId: id,
        name: name,
        price: price,
        icon: icon,
    });
    updateCartUI();
    closeProductModal();
    showToast(`✅ Đã thêm "${name}" vào giỏ hàng!`);
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCartUI();
}

function updateCartUI() {
    const count = cart.length;
    cartCountEl.textContent = count;
    cartCountEl.classList.toggle('show', count > 0);

    if (cart.length === 0) {
        cartItemsEl.innerHTML = `
      <div class="cart-empty">
        <div class="empty-icon">🛒</div>
        <p>Giỏ hàng trống</p>
      </div>
    `;
    } else {
        cartItemsEl.innerHTML = cart.map(item => `
      <div class="cart-item">
        <div class="cart-item-icon">${item.icon}</div>
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <span class="cart-item-price">${formatPrice(item.price)}</span>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart('${item.id}')">✕</button>
      </div>
    `).join('');
    }

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotalEl.textContent = formatPrice(total);
}

function checkout() {
    if (cart.length === 0) {
        showToast('⚠️ Giỏ hàng trống! Hãy thêm sản phẩm trước.');
        return;
    }

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const items = cart.map(item => `• ${item.name}: ${formatPrice(item.price)}`).join('\n');
    const message = `🛒 ĐƠN HÀNG MỚI - AccVault\n\n${items}\n\n💰 Tổng: ${formatPrice(total)}\n\nMình muốn mua các tài khoản trên. Vui lòng gửi thông tin thanh toán!`;

    // Save to history
    cart.forEach(item => {
        purchaseHistory.unshift({
            name: item.name,
            icon: item.icon,
            price: item.price,
            date: new Date().toLocaleString('vi-VN'),
            status: 'Chờ liên hệ'
        });
    });
    localStorage.setItem('accvault_history', JSON.stringify(purchaseHistory));

    // Copy to clipboard
    navigator.clipboard.writeText(message).catch(() => {
        const ta = document.createElement('textarea');
        ta.value = message;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
    });

    showToast('📋 Đã sao chép đơn hàng! Gửi tin nhắn này cho shop qua Zalo/Facebook/Telegram để mua hàng.');

    cart = [];
    updateCartUI();
    toggleCart();
}

function contactToBuy(name, price) {
    const message = `Mình muốn mua: ${name}\nGiá: ${formatPrice(price)}\n\nVui lòng gửi thông tin thanh toán!`;

    navigator.clipboard.writeText(message).catch(() => {
        const ta = document.createElement('textarea');
        ta.value = message;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
    });

    // Save to history
    purchaseHistory.unshift({
        name: name,
        icon: '📦',
        price: price,
        date: new Date().toLocaleString('vi-VN'),
        status: 'Chờ liên hệ'
    });
    localStorage.setItem('accvault_history', JSON.stringify(purchaseHistory));

    closeProductModal();
    showToast(`📋 Đã sao chép thông tin "${name}"! Gửi cho shop qua Zalo/Facebook/Telegram.`);
}

// ========== HISTORY ==========
function renderHistory() {
    const container = document.getElementById('historyContent');

    if (purchaseHistory.length === 0) {
        container.innerHTML = `
      <div class="history-empty">
        <div class="empty-icon">📋</div>
        <p>Chưa có đơn hàng nào</p>
        <p style="font-size: 0.78rem; margin-top: 6px; color: var(--text-light);">Liên hệ shop để mua tài khoản premium đầu tiên!</p>
      </div>
    `;
        return;
    }

    container.innerHTML = `
    <div class="history-list">
      ${purchaseHistory.map(item => `
        <div class="history-item">
          <div class="history-icon">${item.icon}</div>
          <div class="history-info">
            <h4>${item.name}</h4>
            <div class="history-date">${item.date}</div>
          </div>
          <span class="history-status success">${item.status}</span>
          <span class="history-price">${formatPrice(item.price)}</span>
        </div>
      `).join('')}
    </div>
  `;
}

// ========== UTILS ==========
function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN').format(price) + 'đ';
}

function escapeHtml(str) {
    return str.replace(/'/g, "\\'").replace(/"/g, '&quot;');
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>${message}</span>`;
    toastContainer.appendChild(toast);
    setTimeout(() => { if (toast.parentNode) toast.remove(); }, 3200);
}

// ========== KEYBOARD SHORTCUTS ==========
document.addEventListener('keydown', (e) => {
    // Escape closes modals
    if (e.key === 'Escape') {
        closeProductModal();
        if (cartSidebar.classList.contains('open')) toggleCart();
        closeUserDropdown();
    }

    // Ctrl+K for search focus
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        document.getElementById('searchInput').focus();
    }
});

// ========== INIT ==========
updateCartUI();

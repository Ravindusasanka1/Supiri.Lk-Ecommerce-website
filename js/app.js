/**
 * Supiri.Lk Gents Collection — Customer Storefront JavaScript
 */

const PRODUCTS = [
  {
    id: 1,
    name: 'Oxford Casual Shirt',
    category: 'Shirts',
    price: 4990,
    size: ['M', 'L', 'XL'],
    outOfStockSizes: ['S', 'XXL'],
    colors: [
      { name: 'White', hex: '#ffffff', image: 'assets/products/user-images/oxford-white.jpg' },
      { name: 'Light Blue', hex: '#9ecae1', image: 'assets/products/user-images/oxford-blue.jpg' },
      { name: 'Black', hex: '#111111', image: 'assets/products/user-images/oxford-black.jpg' }
    ],
    tag: 'NEW',
    description: 'A refined short-sleeve silhouette designed for warm-weather dressing. Lightweight, breathable, and easy to style from weekday meetings to relaxed evenings.',
    look: [
      { id: 3, name: 'Slim Chino', price: 5490, size: '32', color: 'Cream', image: 'assets/products/p3-cream.jpg' },
      { id: 7, name: 'Handcrafted Leather Belt', price: 2990, size: 'M', color: 'Dark Brown', image: 'assets/products/p7-belt-brown.jpg' }
    ]
  },
  {
    id: 2,
    name: 'Classic Polo',
    category: 'T-Shirts',
    price: 3490,
    size: ['S', 'M', 'L'],
    outOfStockSizes: ['XL', 'XXL'],
    colors: [
      { name: 'Black', hex: '#111111', image: 'assets/products/user-images/polo-black.jpg' },
      { name: 'White', hex: '#ffffff', image: 'assets/products/user-images/polo-white.jpg' },
      { name: 'Navy', hex: '#1b2a49', image: 'assets/products/user-images/polo-blue.jpg' }
    ],
    tag: '',
    description: 'Constructed from premium combed cotton piqué. Soft touch finish with structured collar for an understated luxury appeal.',
    look: [
      { id: 6, name: 'Smart Trouser', price: 5990, size: '32', color: 'Stone', image: 'assets/products/user-images/smart-trouser-stone.jpg' },
      { id: 7, name: 'Handcrafted Leather Belt', price: 2990, size: 'M', color: 'Dark Brown', image: 'assets/products/p7-belt-brown.jpg' }
    ]
  },
  {
    id: 3,
    name: 'Slim Chino',
    category: 'Trousers',
    price: 5490,
    size: ['30', '32', '34'],
    outOfStockSizes: ['28', '36'],
    colors: [
      { name: 'Cream', hex: '#eee6d8', image: 'assets/products/p3-cream.jpg' },
      { name: 'Black', hex: '#111111', image: 'assets/products/p3-black.jpg' }
    ],
    tag: '',
    description: 'Tailored slim-fit chino crafted with stretch cotton twill for all-day freedom of movement and silhouette longevity.',
    look: [
      { id: 1, name: 'Oxford Casual Shirt', price: 4990, size: 'M', color: 'White', image: 'assets/products/user-images/oxford-white.jpg' },
      { id: 7, name: 'Handcrafted Leather Belt', price: 2990, size: 'M', color: 'Dark Brown', image: 'assets/products/p7-belt-brown.jpg' }
    ]
  },
  {
    id: 4,
    name: 'Linen Shirt',
    category: 'Shirts',
    price: 5990,
    size: ['M', 'L', 'XL'],
    outOfStockSizes: ['S'],
    colors: [
      { name: 'White', hex: '#ffffff', image: 'assets/products/user-images/liner-white.jpg' },
      { name: 'Sand', hex: '#d6c6a8', image: 'assets/products/user-images/liner-cream.jpg' }
    ],
    tag: 'NEW',
    description: '100% French flax linen shirt. Naturally temperature regulating with an airy relaxed cut suited for tropical island heat.',
    look: [
      { id: 3, name: 'Slim Chino', price: 5490, size: '32', color: 'Cream', image: 'assets/products/p3-cream.jpg' }
    ]
  },
  {
    id: 5,
    name: 'Basic Tee',
    category: 'T-Shirts',
    price: 2490,
    size: ['S', 'M', 'XL'],
    outOfStockSizes: ['L'],
    colors: [
      { name: 'White', hex: '#ffffff', image: 'assets/products/user-images/basic-white.jpg' },
      { name: 'Cream', hex: '#efe5d4', image: 'assets/products/user-images/basic-cream.jpg' }
    ],
    tag: '',
    description: 'Heavyweight organic cotton minimal crewneck tee. Double-stitched hems with pre-shrunk fabric integrity.',
    look: [
      { id: 6, name: 'Smart Trouser', price: 5990, size: '32', color: 'Stone', image: 'assets/products/user-images/smart-trouser-stone.jpg' }
    ]
  },
  {
    id: 6,
    name: 'Smart Trouser',
    category: 'Trousers',
    price: 5990,
    size: ['30', '32', '36'],
    outOfStockSizes: ['34'],
    colors: [
      { name: 'Stone', hex: '#c9c1b3', image: 'assets/products/user-images/smart-trouser-stone.jpg' },
      { name: 'Navy', hex: '#1c2340', image: 'assets/products/user-images/smart-trouser-navy.jpg' },
      { name: 'Cream', hex: '#eee8dc', image: 'assets/products/user-images/smart-trouser-cream.jpg' }
    ],
    tag: '',
    description: 'Contemporary flat-front dress trouser with hidden elasticated waistband tab and refined crease retention.',
    look: [
      { id: 2, name: 'Classic Polo', price: 3490, size: 'M', color: 'Black', image: 'assets/products/user-images/polo-black.jpg' },
      { id: 7, name: 'Handcrafted Leather Belt', price: 2990, size: 'M', color: 'Dark Brown', image: 'assets/products/p7-belt-brown.jpg' }
    ]
  },
  {
    id: 7,
    name: 'Handcrafted Leather Belt',
    category: 'Accessories',
    price: 2990,
    size: ['M', 'L'],
    outOfStockSizes: [],
    colors: [
      { name: 'Dark Brown', hex: '#6b3f2a', image: 'assets/products/p7-belt-brown.jpg' },
      { name: 'Tan', hex: '#a96532', image: 'assets/products/p7-belt-tan.jpg' },
      { name: 'Black', hex: '#111111', image: 'assets/products/p7-belt-black.jpg' }
    ],
    tag: '',
    description: 'A classic leather belt selected to complete refined everyday looks.',
    look: []
  }
];

// Helper Utilities
function money(v) {
  return 'Rs. ' + Number(v).toLocaleString('en-LK');
}

function getCart() {
  try {
    return JSON.parse(localStorage.getItem('supiriCart') || '[]');
  } catch (e) {
    return [];
  }
}

function saveCart(c) {
  localStorage.setItem('supiriCart', JSON.stringify(c));
  updateCartBadge();
  renderCart();
}

function updateCartBadge() {
  const cart = getCart();
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = totalQty;
  });
}

function showToast(msg) {
  let t = document.getElementById('siteToast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'siteToast';
    document.body.appendChild(t);
  }
  t.innerHTML = `<i class="bi bi-check-circle-fill text-gold me-2"></i> ${msg}`;
  t.style.opacity = '1';
  t.style.transform = 'translateY(0)';
  clearTimeout(window.__toast);
  window.__toast = setTimeout(() => {
    t.style.opacity = '0';
    t.style.transform = 'translateY(10px)';
  }, 2600);
}

// Cart Operations
function addToCart(id, size = 'M', color = 'Black', qty = 1) {
  const p = PRODUCTS.find(x => x.id == id);
  if (!p) return;
  const cart = getCart();
  const colorObj = (p.colors || []).find(c => c.name.toLowerCase() === color.toLowerCase()) || p.colors[0];
  const colorName = colorObj ? colorObj.name : color;
  const image = colorObj ? colorObj.image : (p.colors[0] ? p.colors[0].image : '');

  const existing = cart.find(x => x.id == id && x.size == size && x.color == colorName);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({
      id: p.id,
      name: p.name,
      price: p.price,
      size,
      color: colorName,
      image,
      qty
    });
  }
  saveCart(cart);
  showToast(`Added <strong>${p.name}</strong> (${size} / ${colorName}) to your cart`);

  // Open offcanvas drawer if available
  openOffcanvasCart();
}

function addLookToCart(mainId, lookItems = []) {
  const mainP = PRODUCTS.find(x => x.id == mainId);
  if (mainP) {
    addToCart(mainP.id, mainP.size[0] || 'M', mainP.colors[0]?.name || 'White', 1);
  }
  lookItems.forEach(item => {
    const p = PRODUCTS.find(x => x.id == item.id);
    if (p) {
      addToCart(p.id, item.size || 'M', item.color || 'Black', 1);
    }
  });
  showToast(`Entire outfit look added to your cart!`);
}

function removeFromCart(index) {
  const cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
}

function changeQty(index, delta) {
  const cart = getCart();
  if (cart[index]) {
    cart[index].qty += delta;
    if (cart[index].qty <= 0) {
      cart.splice(index, 1);
    }
    saveCart(cart);
  }
}

function openOffcanvasCart() {
  const offcanvasEl = document.getElementById('offcanvasCart');
  if (offcanvasEl && window.bootstrap) {
    const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl) || new bootstrap.Offcanvas(offcanvasEl);
    bsOffcanvas.show();
  }
}

function renderCart() {
  const cart = getCart();
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const delivery = subtotal === 0 ? 0 : 350;
  const total = subtotal + delivery;

  // Update text totals across page & offcanvas
  document.querySelectorAll('.subtotal').forEach(e => e.textContent = money(subtotal));
  document.querySelectorAll('.delivery').forEach(e => e.textContent = subtotal === 0 ? 'Rs. 0' : (delivery === 0 ? 'FREE' : money(delivery)));
  document.querySelectorAll('.total').forEach(e => e.textContent = money(total));

  // Delivery progress bar

  // Render Page / Offcanvas Cart HTML
  const containers = [document.getElementById('cartItems'), document.getElementById('offcanvasCartItems')].filter(Boolean);

  containers.forEach(box => {
    if (!cart.length) {
      box.innerHTML = `
        <div class="text-center py-5">
          <i class="bi bi-bag-x display-4 text-muted mb-3 d-block"></i>
          <h5 class="serif">Your cart is empty</h5>
          <p class="small text-secondary mb-4">Discover our elevated essentials and find your fit.</p>
          <a href="shop.html" class="btn btn-dark-custom btn-sm px-4" data-bs-dismiss="offcanvas">Explore Shop</a>
        </div>
      `;
      return;
    }

    box.innerHTML = cart.map((x, i) => `
      <div class="cart-item d-flex gap-3 align-items-center">
        <img class="cart-item-image" src="${x.image || 'assets/products/user-images/oxford-white.jpg'}" alt="${x.name}">
        <div class="flex-grow-1">
          <div class="small text-uppercase text-gold font-monospace" style="font-size: 0.65rem;">SUPIRI.LK</div>
          <div class="fw-semibold text-uppercase" style="font-size: 0.88rem; letter-spacing: 0.05em;">${x.name}</div>
          <div class="small text-secondary mt-1">Size: <strong>${x.size}</strong> · Color: <strong>${x.color}</strong></div>
          <div class="fw-semibold mt-2">${money(x.price)}</div>
        </div>
        <div class="d-flex flex-column align-items-end gap-2">
          <button class="btn btn-link text-danger p-0 border-0" onclick="removeFromCart(${i})" title="Remove item">
            <i class="bi bi-trash"></i>
          </button>
          <div class="quantity-box" style="transform: scale(0.85); transform-origin: right center;">
            <button onclick="changeQty(${i}, -1)">−</button>
            <span>${x.qty}</span>
            <button onclick="changeQty(${i}, 1)">+</button>
          </div>
        </div>
      </div>
    `).join('');
  });
}

// Shop Grid Rendering & Filtering
function setupShop() {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  const searchInput = document.getElementById('searchInput');
  const catFilter = document.getElementById('categoryFilter');
  const sortFilter = document.getElementById('sortFilter');
  const sizePills = document.querySelectorAll('.size-pill-filter');
  const priceFilter = document.getElementById('priceFilter');
  const countEl = document.getElementById('productCount');

  let activeSize = document.querySelector('.size-pill-filter.active')?.dataset.size || 'All';

  sizePills.forEach(pill => {
    pill.addEventListener('click', () => {
      sizePills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeSize = pill.dataset.size || 'All';
      applyFilters();
    });
  });

  function applyFilters() {
    let list = [...PRODUCTS];

    // Search query
    if (searchInput && searchInput.value.trim()) {
      const q = searchInput.value.trim().toLowerCase();
      list = list.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
    }

    // Category filter
    if (catFilter && catFilter.value !== 'All') {
      list = list.filter(p => p.category === catFilter.value);
    }

    // Size filter
    if (activeSize !== 'All') {
      list = list.filter(p => (p.size || []).includes(activeSize));
    }

    // Price filter
    if (priceFilter && priceFilter.value !== 'All') {
      if (priceFilter.value === 'under4000') list = list.filter(p => p.price < 4000);
      else if (priceFilter.value === '4000to6000') list = list.filter(p => p.price >= 4000 && p.price <= 6000);
      else if (priceFilter.value === 'above6000') list = list.filter(p => p.price > 6000);
    }

    // Sorting
    if (sortFilter) {
      if (sortFilter.value === 'low') list.sort((a, b) => a.price - b.price);
      else if (sortFilter.value === 'high') list.sort((a, b) => b.price - a.price);
      else if (sortFilter.value === 'name') list.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (countEl) {
      countEl.textContent = `Showing ${list.length} item${list.length === 1 ? '' : 's'}`;
    }

    renderProductCards(list, 'productGrid');
  }

  searchInput?.addEventListener('input', applyFilters);
  catFilter?.addEventListener('change', applyFilters);
  sortFilter?.addEventListener('change', applyFilters);
  priceFilter?.addEventListener('change', applyFilters);

  applyFilters();
}

function renderProductCards(list = PRODUCTS, targetId = 'productGrid') {
  const target = document.getElementById(targetId);
  if (!target) return;

  if (!list.length) {
    target.innerHTML = `
      <div class="col-12 text-center py-5">
        <i class="bi bi-search display-5 text-muted mb-3 d-block"></i>
        <h5 class="serif">No products match your criteria</h5>
        <p class="small text-secondary">Try adjusting your category, price range, or size filters.</p>
      </div>
    `;
    return;
  }

  target.innerHTML = list.map(p => `
    <div class="col-12 col-sm-6 col-lg-4">
      <article class="product-card">
        <a href="product.html?id=${p.id}">
          <div class="product-image">
            ${p.tag ? `<span class="badge badge-gold position-absolute top-0 start-0 mt-3 ms-3 z-2">${p.tag}</span>` : ''}
            <img src="${p.colors[0]?.image || 'assets/products/user-images/oxford-white.jpg'}" alt="${p.name}">
          </div>
        </a>
        <div class="product-info">
          <div class="small text-secondary text-uppercase" style="letter-spacing:0.15em; font-size:0.65rem;">${p.category}</div>
          <div class="d-flex justify-content-between align-items-start gap-2 mt-1">
            <h6 class="mb-0 fw-semibold" style="font-size: 0.95rem;"><a href="product.html?id=${p.id}">${p.name}</a></h6>
            <span class="product-price">${money(p.price)}</span>
          </div>
          <div class="product-swatches">
            ${(p.colors || []).map(c => `<span class="mini-swatch" style="background:${c.hex}" title="${c.name}"></span>`).join('')}
          </div>
        </div>
      </article>
    </div>
  `).join('');
}

// Product Details Page Handler
function loadProductDetail() {
  const params = new URLSearchParams(window.location.search);
  const productId = Number(params.get('id')) || 1;
  const p = PRODUCTS.find(x => x.id === productId) || PRODUCTS[0];

  // Update dynamic content elements
  document.querySelectorAll('[data-product-name]').forEach(e => e.textContent = p.name);
  document.querySelectorAll('[data-product-price]').forEach(e => e.textContent = money(p.price));
  document.querySelectorAll('[data-product-category]').forEach(e => e.textContent = p.category);
  document.querySelectorAll('[data-product-desc]').forEach(e => e.textContent = p.description);

  const mainImage = document.getElementById('productMainImage');
  const thumbsBox = document.getElementById('productThumbs');

  if (mainImage && p.colors && p.colors[0]) {
    mainImage.src = p.colors[0].image;
  }

  if (thumbsBox && p.colors) {
    thumbsBox.innerHTML = p.colors.map((c, i) => `
      <button class="thumb ${i === 0 ? 'active' : ''}" data-image="${c.image}" title="${c.name}">
        <img src="${c.image}" alt="${c.name}">
      </button>
    `).join('');

    thumbsBox.querySelectorAll('.thumb').forEach(b => {
      b.addEventListener('click', () => {
        thumbsBox.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
        b.classList.add('active');
        if (mainImage) mainImage.src = b.dataset.image;
      });
    });
  }

  // Size Options & Restock Alerts Integration
  const sizeBox = document.getElementById('sizeOptions');
  const inStockSizes = p.size || ['S', 'M', 'L', 'XL'];
  const outOfStockSizes = p.outOfStockSizes || [];

  const standardOrder = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36', '38'];
  const allSizesList = Array.from(new Set([...inStockSizes, ...outOfStockSizes]));
  allSizesList.sort((a, b) => {
    let idxA = standardOrder.indexOf(a);
    let idxB = standardOrder.indexOf(b);
    if (idxA !== -1 && idxB !== -1) return idxA - idxB;
    return a.localeCompare(b);
  });

  if (sizeBox) {
    let firstInStockFound = false;
    sizeBox.innerHTML = allSizesList.map((s) => {
      const isOut = outOfStockSizes.includes(s);
      let activeClass = '';
      if (!isOut && !firstInStockFound) {
        activeClass = 'active';
        firstInStockFound = true;
      }
      if (isOut) {
        return `<button type="button" class="btn btn-outline-custom size-btn out-of-stock" data-size="${s}" data-out-of-stock="true" title="Out of Stock - Click for Restock Alert">${s}</button>`;
      } else {
        return `<button type="button" class="btn btn-outline-custom size-btn ${activeClass}" data-size="${s}" data-out-of-stock="false">${s}</button>`;
      }
    }).join('');

    const updateSizeState = (btn) => {
      sizeBox.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const isOut = btn.dataset.outOfStock === 'true';
      const sizeVal = btn.dataset.size;
      let noticeBox = document.getElementById('restockNoticeBox');
      const addBtn = document.getElementById('addProduct');
      const activeColor = document.querySelector('#colorOptions .color-option.active')?.dataset.color || (p.colors ? p.colors[0].name : 'Standard');

      // Pre-fill modal fields
      openRestockModal(p, sizeVal, activeColor, false);

      if (isOut) {
        if (!noticeBox) {
          noticeBox = document.createElement('div');
          noticeBox.id = 'restockNoticeBox';
          sizeBox.after(noticeBox);
        }
        noticeBox.className = 'restock-alert-box mt-3 mb-2 d-flex align-items-center justify-content-between flex-wrap gap-2';
        noticeBox.innerHTML = `
          <div>
            <span class="badge bg-danger text-white me-2" style="font-size:0.65rem;">OUT OF STOCK</span>
            <span class="small text-dark">Size <strong>${sizeVal}</strong> is currently unavailable.</span>
          </div>
          <button type="button" class="btn btn-sm btn-gold text-white px-3 py-2 text-uppercase" id="triggerRestockNoticeBtn" data-bs-toggle="modal" data-bs-target="#restockModal" style="font-size:0.75rem;">
            <i class="bi bi-bell-fill me-1"></i> Get Restock Alert
          </button>
        `;

        document.getElementById('triggerRestockNoticeBtn')?.addEventListener('click', () => {
          const latestColor = document.querySelector('#colorOptions .color-option.active')?.dataset.color || (p.colors ? p.colors[0].name : 'Standard');
          openRestockModal(p, sizeVal, latestColor, true);
        });

        if (addBtn) {
          addBtn.style.display = 'none';
          addBtn.removeAttribute('data-bs-toggle');
          addBtn.removeAttribute('data-bs-target');
        }
      } else {
        if (noticeBox) noticeBox.remove();
        if (addBtn) {
          addBtn.style.display = '';
          addBtn.removeAttribute('data-bs-toggle');
          addBtn.removeAttribute('data-bs-target');
          addBtn.innerHTML = `Add to Cart <i class="bi bi-arrow-right ms-2"></i>`;
        }
      }
    };

    sizeBox.querySelectorAll('.size-btn').forEach(btn => {
      btn.addEventListener('click', () => updateSizeState(btn));
    });

    const initialActiveBtn = sizeBox.querySelector('.size-btn.active') || sizeBox.querySelector('.size-btn');
    if (initialActiveBtn) {
      updateSizeState(initialActiveBtn);
    }
  }

  // Color Options
  const colorBox = document.getElementById('colorOptions');
  if (colorBox && p.colors) {
    colorBox.innerHTML = p.colors.map((c, i) => `
      <button type="button" class="color-option ${i === 0 ? 'active' : ''}" data-color="${c.name}" data-image="${c.image}">
        <span class="color-swatch" style="background:${c.hex}"></span> ${c.name}
      </button>
    `).join('');

    colorBox.querySelectorAll('.color-option').forEach(btn => {
      btn.addEventListener('click', () => {
        colorBox.querySelectorAll('.color-option').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        if (mainImage) mainImage.src = btn.dataset.image;

        // Sync gallery thumbnail active state
        thumbsBox?.querySelectorAll('.thumb').forEach(t => {
          t.classList.toggle('active', t.dataset.image === btn.dataset.image);
        });
      });
    });
  }

  // Quantity Counter
  let currentQty = 1;
  const qtyVal = document.getElementById('qtyValue');
  document.getElementById('qtyMinus')?.addEventListener('click', () => {
    currentQty = Math.max(1, currentQty - 1);
    if (qtyVal) qtyVal.textContent = currentQty;
  });
  document.getElementById('qtyPlus')?.addEventListener('click', () => {
    currentQty++;
    if (qtyVal) qtyVal.textContent = currentQty;
  });

  // Add to Cart / Restock Alert Button
  document.getElementById('addProduct')?.addEventListener('click', () => {
    const activeBtn = document.querySelector('#sizeOptions .size-btn.active');
    const activeSize = activeBtn?.dataset.size || (p.size ? p.size[0] : 'M');
    const activeColor = document.querySelector('#colorOptions .color-option.active')?.dataset.color || (p.colors ? p.colors[0].name : 'Standard');

    if (activeBtn && activeBtn.dataset.outOfStock === 'true') {
      openRestockModal(p, activeSize, activeColor);
    } else {
      addToCart(p.id, activeSize, activeColor, currentQty);
    }
  });

  // Render Shop The Look Section
  renderShopTheLook(p);
}

// Dedicated "Shop The Look" Renderer
function renderShopTheLook(mainProduct) {
  const lookSection = document.getElementById('shopTheLookSection');
  if (!lookSection) return;

  const lookItems = mainProduct.look || [
    { id: 3, name: 'Slim Chino', price: 5490, size: '32', color: 'Cream', image: 'assets/products/p3-cream.jpg' },
    { id: 7, name: 'Handcrafted Leather Belt', price: 2990, size: 'M', color: 'Dark Brown', image: 'assets/products/p7-belt-brown.jpg' }
  ];

  const outfitTotal = mainProduct.price + lookItems.reduce((s, x) => s + x.price, 0);

  lookSection.innerHTML = `
    <div class="shop-the-look-card">
      <div class="row g-4 align-items-center">
        <div class="col-lg-5">
          <div class="section-label mb-2">Complete The Look</div>
          <h3 class="serif mb-3">Style It With</h3>
          <p class="small text-secondary mb-4">Handpicked complementary pieces curated by Supiri.Lk stylists for a cohesive, effortless silhouette.</p>
          <div class="d-flex gap-3 align-items-center mb-4">
            <div>
              <div class="small text-muted text-uppercase">Outfit Total</div>
              <div class="fs-4 fw-bold">${money(outfitTotal)}</div>
            </div>
            <span class="badge bg-cream text-dark border border-warning px-3 py-2 small fw-semibold">
              <i class="bi bi-stars text-gold"></i> Complete Outfit Look
            </span>
          </div>
          <button id="addEntireLookBtn" class="btn btn-gold w-100 py-3">
            Add Complete Outfit to Cart (${1 + lookItems.length} Items) <i class="bi bi-bag-plus ms-2"></i>
          </button>
        </div>

        <div class="col-lg-7">
          <div class="bg-white p-3 border">
            <!-- Main Item Row -->
            <div class="look-item-row d-flex align-items-center gap-3">
              <img src="${mainProduct.colors[0]?.image || ''}" class="look-thumb" alt="${mainProduct.name}">
              <div class="flex-grow-1">
                <span class="badge bg-dark text-white rounded-0 px-2 py-1 mb-1" style="font-size:0.6rem;">SELECTED PIECE</span>
                <div class="fw-semibold">${mainProduct.name}</div>
                <div class="small text-secondary">${money(mainProduct.price)}</div>
              </div>
              <i class="bi bi-check-circle-fill text-gold fs-5"></i>
            </div>

            <!-- Complementary Items -->
            ${lookItems.map(item => `
              <div class="look-item-row d-flex align-items-center gap-3">
                <img src="${item.image}" class="look-thumb" alt="${item.name}">
                <div class="flex-grow-1">
                  <div class="fw-semibold">${item.name}</div>
                  <div class="small text-secondary">${money(item.price)} · Size ${item.size}</div>
                </div>
                <button class="btn btn-sm btn-outline-custom py-1 px-3" onclick="addToCart(${item.id}, '${item.size}', '${item.color}', 1)">
                  + Add Item
                </button>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;

  document.getElementById('addEntireLookBtn')?.addEventListener('click', () => {
    addLookToCart(mainProduct.id, lookItems);
  });
}

// Smart Size Finder Formula Calculator
function setupSmartSizeFinder() {
  const form = document.getElementById('smartSizeForm');
  const resultCard = document.getElementById('sizeResultCard');
  if (!form || !resultCard) return;

  form.addEventListener('submit', e => {
    e.preventDefault();

    const height = Number(document.getElementById('heightInput')?.value) || 175;
    const chest = Number(document.getElementById('chestInput')?.value) || 96;
    const waist = Number(document.getElementById('waistInput')?.value) || 82;
    const shoulder = Number(document.getElementById('shoulderInput')?.value) || 44;

    let size = 'M';
    let fitType = 'Regular Tailored Fit';
    let detailMsg = 'Standard chest width clearance with clean waist taper.';

    if (chest < 90 && waist < 76) {
      size = 'S';
      fitType = 'Slim Fit Silhouette';
      detailMsg = 'Recommended for lean builds under 90cm chest circumference.';
    } else if (chest >= 90 && chest <= 99 && waist <= 84) {
      size = 'M';
      fitType = 'Regular Tailored Fit';
      detailMsg = 'Ideal balance for everyday chest comfort and shoulder movement.';
    } else if ((chest >= 100 && chest <= 108) || (waist >= 85 && waist <= 92)) {
      size = 'L';
      fitType = 'Relaxed Comfort Fit';
      detailMsg = 'Ample room around upper torso and waist structure.';
    } else if (chest > 108 || waist > 92) {
      size = 'XL';
      fitType = 'Generous Classic Fit';
      detailMsg = 'Maximized comfort cut suited for broader shoulder profiles.';
    }

    resultCard.innerHTML = `
      <div class="small text-uppercase text-gold font-monospace tracking-widest mb-2">Personalised Recommendation</div>
      <div class="display-1 fw-bold serif mb-2 text-white">${size}</div>
      <h4 class="serif mb-2 text-gold">${fitType}</h4>
      <p class="text-white-50 mb-4" style="font-size:0.9rem;">${detailMsg}</p>
      
      <div class="border-top border-secondary pt-3 mb-4">
        <div class="d-flex justify-content-between small text-white-50 mb-1">
          <span>Height / Chest Profile</span>
          <span class="text-white fw-semibold">${height} cm / ${chest} cm</span>
        </div>
        <div class="d-flex justify-content-between small text-white-50">
          <span>Waist / Shoulder Span</span>
          <span class="text-white fw-semibold">${waist} cm / ${shoulder} cm</span>
        </div>
      </div>

      <a href="shop.html?size=${size}" class="btn btn-gold w-100 py-3">
        Shop Items in Size ${size} <i class="bi bi-arrow-right ms-2"></i>
      </a>
    `;
  });
}

// User Customer Auth System
function getCurrentUser() {
  try {
    return JSON.parse(localStorage.getItem('supiriCustomerUser') || 'null');
  } catch (e) {
    return null;
  }
}

function setCurrentUser(user) {
  if (user) {
    localStorage.setItem('supiriCustomerUser', JSON.stringify(user));
  } else {
    localStorage.removeItem('supiriCustomerUser');
  }
  updateAuthUI();
}

function updateAuthUI() {
  const user = getCurrentUser();
  document.querySelectorAll('.auth-user-btn').forEach(btn => {
    if (user) {
      btn.innerHTML = `<i class="bi bi-person-check text-gold me-1"></i> ${user.name || 'Account'}`;
      btn.onclick = (e) => {
        e.preventDefault();
        if (confirm(`Logged in as ${user.email}. Do you want to log out?`)) {
          setCurrentUser(null);
          showToast('You have been logged out.');
        }
      };
    } else {
      btn.innerHTML = `<i class="bi bi-person me-1"></i> Login`;
      btn.onclick = (e) => {
        e.preventDefault();
        const authModal = document.getElementById('authModal');
        if (authModal && window.bootstrap) {
          const modal = bootstrap.Modal.getInstance(authModal) || new bootstrap.Modal(authModal);
          modal.show();
        }
      };
    }
  });
}

function setupAuthModal() {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');

  loginForm?.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('loginEmail')?.value || 'kamal@example.com';
    const user = { name: email.split('@')[0].toUpperCase(), email };
    setCurrentUser(user);
    showToast(`Welcome back, ${user.name}!`);

    const authModalEl = document.getElementById('authModal');
    if (authModalEl && window.bootstrap) {
      bootstrap.Modal.getInstance(authModalEl)?.hide();
    }
  });

  registerForm?.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('regName')?.value || 'Customer';
    const email = document.getElementById('regEmail')?.value || 'customer@example.com';
    const user = { name, email };
    setCurrentUser(user);
    showToast(`Account created successfully! Welcome ${name}.`);

    const authModalEl = document.getElementById('authModal');
    if (authModalEl && window.bootstrap) {
      bootstrap.Modal.getInstance(authModalEl)?.hide();
    }
  });
}

// Stripe Payment Modal & Checkout Handler
function setupStripeCheckout() {
  const openCheckoutBtns = document.querySelectorAll('.trigger-stripe-checkout');
  const stripeModalEl = document.getElementById('stripeCheckoutModal');
  const stripeForm = document.getElementById('stripePaymentForm');
  const cardInput = document.getElementById('stripeCardNumber');

  openCheckoutBtns.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const cart = getCart();
      if (!cart.length) {
        showToast('Your cart is empty. Add items before checking out.');
        return;
      }

      // Close offcanvas cart if open
      const offcanvasEl = document.getElementById('offcanvasCart');
      if (offcanvasEl && window.bootstrap) {
        bootstrap.Offcanvas.getInstance(offcanvasEl)?.hide();
      }

      // Populate Stripe Modal Summary
      const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
      const delivery = subtotal >= 10000 || subtotal === 0 ? 0 : 350;
      const total = subtotal + delivery;

      document.querySelectorAll('.stripe-pay-amount').forEach(el => el.textContent = money(total));

      if (stripeModalEl && window.bootstrap) {
        const modal = bootstrap.Modal.getInstance(stripeModalEl) || new bootstrap.Modal(stripeModalEl);
        modal.show();
      }
    });
  });

  // Card input auto-formatting
  cardInput?.addEventListener('input', e => {
    let val = e.target.value.replace(/\D/g, '').substring(0, 16);
    let formatted = val.match(/.{1,4}/g)?.join(' ') || val;
    e.target.value = formatted;
  });

  stripeForm?.addEventListener('submit', e => {
    e.preventDefault();
    const submitBtn = document.getElementById('stripeSubmitBtn');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span class="spinner-border spinner-border-sm me-2"></span> Processing Payment...`;
    }

    setTimeout(() => {
      const cart = getCart();
      const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
      const delivery = subtotal >= 10000 || subtotal === 0 ? 0 : 350;
      const total = subtotal + delivery;

      const orderRef = 'SUP-' + Math.floor(100000 + Math.random() * 900000);
      const customerName = document.getElementById('stripeCardName')?.value || 'Valued Customer';

      // Save order to LocalStorage supiriFrontendData
      try {
        const key = "supiriFrontendData";
        let raw = localStorage.getItem(key);
        let data = raw ? JSON.parse(raw) : { orders: [] };
        if (!data.orders) data.orders = [];
        data.orders.push({
          id: orderRef,
          customer: customerName,
          date: new Date().toISOString().split('T')[0],
          amount: total,
          status: 'Paid'
        });
        localStorage.setItem(key, JSON.stringify(data));
      } catch (err) { }

      // Clear Cart
      saveCart([]);

      // Reset Button
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `Pay <span class="stripe-pay-amount">${money(total)}</span> via Stripe <i class="bi bi-arrow-right ms-2"></i>`;
      }

      // Hide Stripe Checkout Modal
      if (stripeModalEl && window.bootstrap) {
        bootstrap.Modal.getInstance(stripeModalEl)?.hide();
      }

      // Open Success Confirmation Modal
      showOrderSuccessModal(orderRef, customerName, total);

    }, 1600);
  });
}

function showOrderSuccessModal(orderRef, customerName, total) {
  let modalEl = document.getElementById('orderSuccessModal');
  if (!modalEl) {
    modalEl = document.createElement('div');
    modalEl.id = 'orderSuccessModal';
    modalEl.className = 'modal fade';
    modalEl.setAttribute('tabindex', '-1');
    document.body.appendChild(modalEl);
  }

  modalEl.innerHTML = `
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content border-0 rounded-0 shadow-lg text-center p-4">
        <div class="py-3">
          <div class="d-inline-flex align-items-center justify-content-center bg-cream rounded-circle mb-3" style="width:70px; height:70px;">
            <i class="bi bi-check-lg text-gold display-5"></i>
          </div>
          <div class="small text-uppercase text-gold font-monospace tracking-widest">Payment Confirmed</div>
          <h3 class="serif mt-1">Thank you for your order!</h3>
          <p class="text-secondary small mb-4">Your Stripe transaction was processed successfully.</p>
          
          <div class="bg-paper p-3 border mb-4 text-start">
            <div class="d-flex justify-content-between small mb-2">
              <span class="text-muted">Order Reference:</span>
              <strong class="font-monospace">${orderRef}</strong>
            </div>
            <div class="d-flex justify-content-between small mb-2">
              <span class="text-muted">Customer Name:</span>
              <strong>${customerName}</strong>
            </div>
            <div class="d-flex justify-content-between small">
              <span class="text-muted">Total Paid:</span>
              <strong class="text-gold">${money(total)}</strong>
            </div>
          </div>

          <p class="small text-muted mb-4">We are preparing your package for islandwide dispatch. A copy of the receipt has been emailed to you.</p>

          <button class="btn btn-dark-custom w-100" data-bs-dismiss="modal" onclick="window.location.href='index.html'">
            Return to Storefront
          </button>
        </div>
      </div>
    </div>
  `;

  if (window.bootstrap) {
    const modal = new bootstrap.Modal(modalEl);
    modal.show();
  }
}

// Restock Alerts Logic & Modal Management
function openRestockModal(product, size, color, showModal = true) {
  if (!product) return;

  // Ensure Restock Modal exists in DOM
  ensureRestockModalHTML();

  const modalEl = document.getElementById('restockModal');
  if (!modalEl) return;

  const colorName = color || (product.colors ? product.colors[0].name : 'Standard');
  const colorObj = (product.colors || []).find(c => c.name.toLowerCase() === colorName.toLowerCase()) || product.colors?.[0];
  const imgSrc = colorObj ? colorObj.image : (product.colors?.[0]?.image || 'assets/products/user-images/oxford-white.jpg');

  // Fill modal values
  const pIdEl = document.getElementById('restockProductId');
  const sizeValEl = document.getElementById('restockSizeValue');
  const colorValEl = document.getElementById('restockColorValue');
  const nameEl = document.getElementById('restockProductName');
  const colorEl = document.getElementById('restockProductColor');
  const sizeBadgeEl = document.getElementById('restockProductSize');
  const sizeNoticeEl = document.getElementById('restockProductSizeNotice');
  const imgEl = document.getElementById('restockProductImg');

  if (pIdEl) pIdEl.value = product.id;
  if (sizeValEl) sizeValEl.value = size;
  if (colorValEl) colorValEl.value = colorName;
  if (nameEl) nameEl.textContent = product.name;
  if (colorEl) colorEl.textContent = colorName;
  if (sizeBadgeEl) sizeBadgeEl.textContent = size;
  if (sizeNoticeEl) sizeNoticeEl.textContent = `Size ${size}`;
  if (imgEl) imgEl.src = imgSrc;

  // Setup channel toggles & form submission listeners
  setupRestockModalEvents();

  // Show Bootstrap Modal programmatically if requested
  if (showModal) {
    try {
      if (window.bootstrap && window.bootstrap.Modal) {
        let bsModal = bootstrap.Modal.getInstance(modalEl);
        if (!bsModal) {
          bsModal = new bootstrap.Modal(modalEl);
        }
        bsModal.show();
      }
    } catch (e) {
      console.error('Modal toggle error:', e);
    }
  }
}

function ensureRestockModalHTML() {
  let existingModal = document.getElementById('restockModal');
  if (existingModal) {
    if (existingModal.parentElement !== document.body) {
      document.body.appendChild(existingModal);
    }
    return;
  }

  const modalDiv = document.createElement('div');
  modalDiv.innerHTML = `
  <div class="modal fade" id="restockModal" tabindex="-1" aria-labelledby="restockModalTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content restock-modal-content border-0 shadow-lg">
        <div class="modal-header restock-modal-header d-flex justify-content-between align-items-center">
          <div>
            <span class="restock-badge-pill d-inline-block mb-1"><i class="bi bi-bell-fill me-1"></i> RESTOCK NOTIFICATION</span>
            <h5 class="modal-title serif mb-0 text-white" id="restockModalTitle">Get Restock Alert</h5>
          </div>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body p-4 p-md-4">
          <div class="d-flex align-items-center gap-3 p-3 bg-paper border mb-4">
            <img id="restockProductImg" src="assets/products/user-images/oxford-white.jpg" alt="Product thumbnail" class="restock-modal-thumb">
            <div>
              <span class="out-of-stock-pill mb-1 d-inline-block">OUT OF STOCK</span>
              <div id="restockProductName" class="fw-bold text-dark fs-6">Product Name</div>
              <div class="small text-secondary d-flex align-items-center gap-2 mt-1">
                <span>Colour: <strong id="restockProductColor">White</strong></span>
                <span>•</span>
                <span>Size: <span id="restockProductSize" class="badge bg-dark text-white rounded-0 px-2 py-1">S</span></span>
              </div>
            </div>
          </div>

          <p class="small text-secondary mb-4">
            Leave your email address below and we will automatically send you a notification as soon as <strong id="restockProductSizeNotice">Size S</strong> becomes available again.
          </p>

          <form id="restockAlertForm">
            <input type="hidden" id="restockProductId">
            <input type="hidden" id="restockSizeValue">
            <input type="hidden" id="restockColorValue">

            <div id="restockEmailGroup" class="mb-3">
              <label class="form-label small text-uppercase fw-bold">Email Address <span class="text-danger">*</span></label>
              <div class="input-group">
                <span class="input-group-text bg-light rounded-0 border-end-0"><i class="bi bi-envelope text-muted"></i></span>
                <input id="restockEmailInput" type="email" class="form-control rounded-0 border-start-0" placeholder="yourname@example.com" required>
              </div>
            </div>

            <div class="form-check mb-4">
              <input class="form-check-input rounded-0" type="checkbox" id="restockConsent" checked required>
              <label class="form-check-label small text-secondary" for="restockConsent">
                Notify me immediately as soon as this item is restocked.
              </label>
            </div>

            <button type="submit" class="btn btn-gold w-100 py-3 d-flex align-items-center justify-content-center gap-2">
              <i class="bi bi-bell-fill"></i> SUBSCRIBE FOR RESTOCK ALERT
            </button>
          </form>
        </div>
        <div class="modal-footer bg-light py-2 px-4 border-top">
          <div class="small text-muted w-100 d-flex justify-content-between align-items-center" style="font-size:0.75rem;">
            <span><i class="bi bi-shield-check text-gold me-1"></i> Privacy guaranteed</span>
            <span>Automated Notification System</span>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  document.body.appendChild(modalDiv.firstElementChild);
}

let __restockEventsBound = false;
function setupRestockModalEvents() {
  const form = document.getElementById('restockAlertForm');

  if (form && !__restockEventsBound) {
    __restockEventsBound = true;
    form.onsubmit = (e) => {
      e.preventDefault();
      const pId = document.getElementById('restockProductId')?.value || 1;
      const size = document.getElementById('restockSizeValue')?.value || 'S';
      const color = document.getElementById('restockColorValue')?.value || 'Standard';
      const pName = document.getElementById('restockProductName')?.textContent || 'Product';
      const email = document.getElementById('restockEmailInput')?.value.trim() || '';

      if (!email || !email.includes('@')) {
        alert('Please enter a valid email address.');
        return;
      }

      // Save subscription in localStorage
      const alerts = JSON.parse(localStorage.getItem('supiriRestockAlerts') || '[]');
      const newAlert = {
        id: Date.now(),
        productId: Number(pId),
        productName: pName,
        size,
        color,
        channel: 'Email',
        contact: email,
        date: new Date().toLocaleDateString('en-LK') + ' ' + new Date().toLocaleTimeString('en-LK', { hour: '2-digit', minute: '2-digit' }),
        status: 'Active'
      };
      alerts.push(newAlert);
      localStorage.setItem('supiriRestockAlerts', JSON.stringify(alerts));

      // Close modal
      const modalEl = document.getElementById('restockModal');
      if (modalEl && window.bootstrap) {
        bootstrap.Modal.getInstance(modalEl)?.hide();
      }

      // Show toast confirmation
      showToast(`✓ Restock alert registered! We'll notify you on <strong>${email}</strong> when <strong>${pName} (${size})</strong> is restocked.`);

      // Reset inputs
      if (document.getElementById('restockEmailInput')) document.getElementById('restockEmailInput').value = '';
    };
  }
}



// Support UI shared across storefront pages.
function setupSupiriSupportUI() {
  document.querySelectorAll('[data-open-contact]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const modalEl = document.getElementById('contactModal');
      if (modalEl && window.bootstrap) {
        (bootstrap.Modal.getInstance(modalEl) || new bootstrap.Modal(modalEl)).show();
      }
    });
  });
  const contactForm = document.getElementById('contactForm');
  if (contactForm && !contactForm.dataset.bound) {
    contactForm.dataset.bound = '1';
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      contactForm.reset();
      const modalEl = document.getElementById('contactModal');
      if (modalEl && window.bootstrap) bootstrap.Modal.getInstance(modalEl)?.hide();
      showToast('Thanks — your message has been sent to Supiri.LK support.');
    });
  }
}

// Global DOM Content Loaded Listener
document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();
  renderCart();
  setupShop();
  loadProductDetail();
  setupSmartSizeFinder();
  setupAuthModal();
  updateAuthUI();
  setupStripeCheckout();
  setupRestockModalEvents();
  setupSupiriSupportUI();
});

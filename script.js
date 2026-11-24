* APNA GIFT - Master JavaScript
* Pure Vanilla JavaScript Application Logic
* No frameworks or external UI dependencies
*/

    // ==========================================================================
    // 1. PRODUCT DATABASE & DATA STORE
    // ==========================================================================
    const PRODUCTS_DATA = [
      {
        id: 'p1',
        name: 'Royal Kundan Rakhi & Handcrafted Belgian Chocolate Hamper',
        category: 'combos',
        giftType: 'combos',
        price: 1499,
        originalPrice: 2999,
        discountPercent: 50,
        rating: 4.9,
        reviewsCount: 342,
        badge: 'Best Value',
        image: 'https://i.pinimg.com/1200x/b0/4b/4f/b04b4ff22539512c53eb9f983674d617.jpg',
        description: 'Exquisite gold-plated kundan rakhi paired with 12 artisan handcrafted Belgian chocolates, premium roasted almond jar, and traditional roli-chawal.',
        isFeatured: true,
        isBestSeller: true,
        isCombo: true,
        inStock: true
      },
      {
        id: 'p2',
        name: 'Personalized "Best Sister Forever" LED Wooden Photo Lamp',
        category: 'personalized',
        giftType: 'personalized',
        price: 799,
        originalPrice: 1999,
        discountPercent: 60,
        rating: 4.8,
        reviewsCount: 518,
        badge: 'Most Loved',
        image: 'https://i.pinimg.com/736x/56/cb/fe/56cbfe13faa2e54af2e7c04d2a764925.jpg',
        description: 'Custom engraved wooden night lamp with warm ambient LED lighting featuring your favorite nostalgic childhood brother-sister memory.',
        isFeatured: true,
        isBestSeller: true,
        isCombo: false,
        inStock: true
      },
      {
        id: 'p3',
        name: 'Luxury Rose Quartz Bracelet Rakhi & Organic Skincare Box',
        category: 'hampers',
        giftType: 'premium',
        price: 2199,
        originalPrice: 4399,
        discountPercent: 50,
        rating: 5.0,
        reviewsCount: 189,
        badge: 'Luxury Edition',
        image: 'https://i.pinimg.com/736x/bd/ba/11/bdba118dd9c433b0b2d772b376a123c6.jpg',
        description: 'Authentic semi-precious Rose Quartz healing bracelet rakhi with organic botanical body mist, whipped butter scrub, and scented soy candle.',
        isFeatured: true,
        isBestSeller: false,
        isCombo: true,
        inStock: true
      },
      {
        id: 'p4',
        name: 'Handcrafted Meenakari Peacock Rakhi with Kaju Katli Box',
        category: 'rakhis',
        giftType: 'rakhi',
        price: 449,
        originalPrice: 999,
        discountPercent: 55,
        rating: 4.7,
        reviewsCount: 620,
        badge: 'Under ₹500',
        image: 'https://i.pinimg.com/736x/c4/58/c2/c458c2c76430d3c0174d5b84731f275f.jpg',
        description: 'Traditional Jaipur Meenakari work peacock rakhi with 250g fresh silver-leaf Kaju Katli from Delhi confectioners.',
        isFeatured: false,
        isBestSeller: true,
        isCombo: true,
        inStock: true
      },
      {
        id: 'p5',
        name: 'Sister\'s Keepsake Velvet Jewelry Organiser & Silver Pendant',
        category: 'personalized',
        giftType: 'surprise',
        price: 1299,
        originalPrice: 3249,
        discountPercent: 60,
        rating: 4.9,
        reviewsCount: 275,
        badge: 'Trending',
        image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop',
        description: 'Plush velvet travel jewelry case personalized with sister’s initial in gold lettering, complete with 925 sterling silver heart pendant.',
        isFeatured: true,
        isBestSeller: true,
        isCombo: true,
        inStock: true
      },
      {
        id: 'p6',
        name: 'Grand Royal Rakhi Celebration Trunk (Mega Festival Hamper)',
        category: 'hampers',
        giftType: 'combos',
        price: 3499,
        originalPrice: 7999,
        discountPercent: 56,
        rating: 5.0,
        reviewsCount: 142,
        badge: 'Limited Offer',
        image: 'https://i.pinimg.com/736x/c2/d9/80/c2d980f78eed76f7d4b2a7d6016a9de4.jpg',
        description: 'Vintage brass-accented treasure trunk containing 2 designer Rakhis, assorted dry fruits, imported cookies, gold-plated Pooja thali, and perfume.',
        isFeatured: true,
        isBestSeller: false,
        isCombo: true,
        inStock: true
      },
      {
        id: 'p7',
        name: 'Personalized "World\'s Best Sister" Ceramic Mug & Gourmet Cookies',
        category: 'personalized',
        giftType: 'personalized',
        price: 399,
        originalPrice: 899,
        discountPercent: 56,
        rating: 4.6,
        reviewsCount: 410,
        badge: 'Under ₹500',
        image: 'https://i.pinimg.com/736x/34/9b/26/349b26e0255829a4767201308693328a.jpg',
        description: 'Glossy ceramic coffee mug personalized with custom photos and sister quote, with choco-chip cookies in a cute gift pouch.',
        isFeatured: false,
        isBestSeller: false,
        isCombo: true,
        inStock: true
      },
      {
        id: 'p8',
        name: '925 Pure Silver Evil Eye Rakhi Bracelet (Forever Wear)',
        category: 'rakhis',
        giftType: 'rakhi',
        price: 999,
        originalPrice: 2499,
        discountPercent: 60,
        rating: 4.9,
        reviewsCount: 890,
        badge: 'Top Seller',
        image: 'https://i.pinimg.com/1200x/c4/06/43/c406438b2d7b50fcbba24ede71d9ac79.jpg',
        description: 'Hallmarked 925 sterling silver protective Evil Eye rakhi that turns into a permanent chic bracelet with certificate of authenticity.',
        isFeatured: true,
        isBestSeller: true,
        isCombo: false,
        inStock: true
      },
      {
        id: 'p9',
        name: 'Aromatherapy Scented Candle & Botanical Bath Salts Set',
        category: 'hampers',
        giftType: 'surprise',
        price: 699,
        originalPrice: 1599,
        discountPercent: 56,
        rating: 4.8,
        reviewsCount: 215,
        badge: 'Self-Care',
        image: 'https://i.pinimg.com/736x/20/27/44/2027446c79bfcf513705f8cf2d45f4da.jpg',
        description: 'French Lavender & English Rose soy candles poured in frosted blush pink glass with Himalayan pink rock salt jar.',
        isFeatured: false,
        isBestSeller: false,
        isCombo: false,
        inStock: true
      },
      {
        id: 'p10',
        name: 'Bhaiya-Bhabhi Lumba Rakhi & Handcrafted Dry Fruit Potli Combo',
        category: 'combos',
        giftType: 'combos',
        price: 899,
        originalPrice: 1999,
        discountPercent: 55,
        rating: 4.9,
        reviewsCount: 430,
        badge: 'Popular Combo',
        image: 'https://i.pinimg.com/736x/28/7d/97/287d9747132d6347972553315c30bf5c.jpg',
        description: 'Matching pair of royal handcrafted Zardosi rakhi for brother and hanging latkan lumba for bhabhi with 200g California almonds and cashews.',
        isFeatured: true,
        isBestSeller: true,
        isCombo: true,
        inStock: true
      },
      {
        id: 'p11',
        name: 'Premium Belgian Dark & Milk Chocolate Truffles Gift Box (16 Pcs)',
        category: 'chocolates',
        giftType: 'surprise',
        price: 649,
        originalPrice: 1299,
        discountPercent: 50,
        rating: 4.8,
        reviewsCount: 360,
        badge: 'Festive Treat',
        image: 'https://i.pinimg.com/736x/9e/e3/28/9ee3283ae2088ee0b03e230160bf90c6.jpg',
        description: 'Artisan assortment of hazelnut praline, salted caramel, espresso swirl, and berry ganache truffles in golden embossed box.',
        isFeatured: false,
        isBestSeller: true,
        isCombo: false,
        inStock: true
      },
      {
        id: 'p12',
        name: 'Personalized Sister Spotify Acrylic Plaque with Wooden Stand',
        category: 'personalized',
        giftType: 'personalized',
        price: 549,
        originalPrice: 1499,
        discountPercent: 63,
        rating: 4.9,
        reviewsCount: 780,
        badge: 'Gen-Z Favorite',
        image: 'https://i.pinimg.com/736x/75/65/89/7565893bdb92238e93c9111aa5ddffc1.jpg',
        description: 'Scannable customized acrylic song plaque with your sibling childhood anthem, photo, and scannable code.',
        isFeatured: true,
        isBestSeller: false,
        isCombo: false,
        inStock: true
      }
    ];

    // Combo Highlight Data
    const COMBOS_DATA = [
      {
        id: 'combo-1',
        title: 'Sister\'s Luxury Chocolate & Kundan Rakhi Hamper',
        badge: 'MOST POPULAR',
        mrp: 2999,
        price: 1499,
        savings: 1500,
        discountPercent: 50,
        image: 'https://i.pinimg.com/1200x/61/67/a7/6167a7d5852adb4fb95120c1f455f514.jpg',
        items: ['Gold Kundan Rakhi', '12 Belgian Truffles', 'Roasted Almonds', 'Roli Chawal', 'Handwritten Note'],
        description: 'The definitive Raksha Bandhan gift combo designed to evoke tears of joy and pure celebration.'
      },
      {
        id: 'combo-2',
        title: 'Personalized Photo Frame + Velvet Keepsake Gift Box',
        badge: 'BEST VALUE',
        mrp: 3499,
        price: 1699,
        savings: 1800,
        discountPercent: 51,
        image: 'https://i.pinimg.com/736x/d8/d6/8d/d8d68ded4cbc3f7559df4bed6e081f6f.jpg',
        items: ['Engraved LED Frame', 'Velvet Jewelry Box', 'Cadbury Celebration', 'Designer Rakhi', 'Festive Pouch'],
        description: 'Capture nostalgic childhood memories that your sister will cherish on her bedside table forever.'
      },
      {
        id: 'combo-3',
        title: 'Grand Royal Celebration Trunk (Limited Mega Hamper)',
        badge: 'LIMITED OFFER',
        mrp: 6999,
        price: 2999,
        savings: 4000,
        discountPercent: 57,
        image: 'https://i.pinimg.com/1200x/54/ed/68/54ed68cc4d2db93ea2fe42b846b49da0.jpg',
        items: ['Handcrafted Trunk', 'Silver Rakhi Pair', 'Organic Mist & Candles', 'Cashews & Walnuts', 'Brass Thali'],
        description: 'Our most luxurious festival box packed in an antique brass-latched trunk for an unforgettable surprise.'
      }
    ];

    // Customer Testimonials
    const REVIEWS_DATA = [
      {
        id: 1,
        name: 'Priya Sharma',
        city: 'Janakpuri, New Delhi',
        avatar: 'https://i.pinimg.com/736x/71/4f/7b/714f7b49e172ff08a676c6dcb5eff371.jpg',
        rating: 5,
        product: 'Royal Kundan Rakhi & Chocolate Hamper',
        text: 'My brother ordered this surprise gift box from APNA GIFT and it reached on exact time! The packaging was so royal and the chocolate quality was mind-blowing. Truly made my Rakhi unforgettable!'
      },
      {
        id: 2,
        name: 'Rohan Mehra',
        city: 'Gurugram, NCR',
        avatar: 'https://i.pinimg.com/1200x/a3/86/60/a386600985ccda2b7fabfba130fa37bb.jpg',
        rating: 5,
        product: 'Personalized Photo Lamp & Gift Box',
        text: 'I live away for work, so I was worried about delivery. APNA GIFT delivered to my sister’s doorstep in Janakpuri within 24 hours. When she opened the glowing photo lamp, she literally cried with joy!'
      },
      {
        id: 3,
        name: 'Ananya Verma',
        city: 'Noida, UP',
        avatar: 'https://i.pinimg.com/736x/4b/ee/0d/4bee0dbf55ec096d901a9512bfdc9f4d.jpg',
        rating: 5,
        product: 'Bhaiya-Bhabhi Lumba & Dry Fruits Combo',
        text: 'The best Raksha Bandhan gifting portal! The discounts are authentic (got almost 55% off) and the Kundan work on the rakhis looked like pure gold jewelry. Super recommended!'
      },
      {
        id: 4,
        name: 'Vikramaditya Rao',
        city: 'South Extension, Delhi',
        avatar: 'https://i.pinimg.com/736x/68/2e/41/682e418fb87e6c0bb68f0e81231416d6.jpg',
        rating: 5,
        product: 'Grand Royal Rakhi Celebration Trunk',
        text: 'Spectacular packaging! The velvet finish, brass lock and premium dry fruits made my sister feel like royalty. Customer support team on WhatsApp was also super prompt.'
      }
    ];

    // ==========================================================================
    // 2. STATE MANAGEMENT (Client-Side Local State)
    // ==========================================================================
    let cart = [];
    let wishlist = [];
    let activeCategory = 'all';
    let activeSort = 'featured';
    let activeBudgetFilter = 'all';
    let currentSlideIndex = 0;
    let slideInterval = null;
    let currentReviewIndex = 0;

    // Load cart & wishlist from localStorage if available
    try {
      const savedCart = localStorage.getItem('apnagift_cart');
      if (savedCart) cart = JSON.parse(savedCart);

      const savedWishlist = localStorage.getItem('apnagift_wishlist');
      if (savedWishlist) wishlist = JSON.parse(savedWishlist);
    } catch (e) {
      console.log('Storage access init');
    }

    // ==========================================================================
    // 3. DOM ELEMENT REFERENCES
    // ==========================================================================
    document.addEventListener('DOMContentLoaded', () => {
      initApp();
    });

    function initApp() {
      renderProductGrid();
      renderComboSection();
      renderReviewsSlider();
      renderBestSellersSlider();
      initHeroSlider();
      initCountdownTimer();
      initFaqAccordion();
      initEventListeners();
      updateCartCounters();
      updateWishlistCounters();
    }

    // ==========================================================================
    // 4. RENDERING FUNCTIONS
    // ==========================================================================

    function formatCurrency(amount) {
      return '₹' + amount.toLocaleString('en-IN');
    }

    function renderProductGrid(filterList = null) {
      const gridContainer = document.getElementById('featured-products-grid');
      if (!gridContainer) return;

      let itemsToRender = filterList ? [...filterList] : [...PRODUCTS_DATA];

      // Apply category filter
      if (activeCategory !== 'all' && !filterList) {
        itemsToRender = itemsToRender.filter(p => p.category === activeCategory);
      }

      // Apply budget filter
      if (activeBudgetFilter !== 'all' && !filterList) {
        if (activeBudgetFilter === 'under500') {
          itemsToRender = itemsToRender.filter(p => p.price <= 500);
        } else if (activeBudgetFilter === 'under1000') {
          itemsToRender = itemsToRender.filter(p => p.price <= 1000);
        } else if (activeBudgetFilter === 'under2000') {
          itemsToRender = itemsToRender.filter(p => p.price <= 2000);
        } else if (activeBudgetFilter === 'premium') {
          itemsToRender = itemsToRender.filter(p => p.price > 2000);
        }
      }

      // Apply sorting
      if (activeSort === 'price-low-high') {
        itemsToRender.sort((a, b) => a.price - b.price);
      } else if (activeSort === 'price-high-low') {
        itemsToRender.sort((a, b) => b.price - a.price);
      } else if (activeSort === 'highest-discount') {
        itemsToRender.sort((a, b) => b.discountPercent - a.discountPercent);
      } else if (activeSort === 'best-selling') {
        itemsToRender.sort((a, b) => (b.reviewsCount || 0) - (a.reviewsCount || 0));
      }

      if (itemsToRender.length === 0) {
        gridContainer.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
        <div class="empty-icon-circle" style="margin: 0 auto 16px;">🎁</div>
        <h3 style="font-family: var(--font-heading); font-size: 1.6rem; color: var(--deep-wine); margin-bottom: 8px;">No Gifts Found</h3>
        <p style="color: var(--rose-text-muted); margin-bottom: 20px;">Try adjusting your filters or search keywords to discover more Rakhi specials.</p>
        <button class="btn btn-primary" onclick="resetFilters()">Reset All Filters</button>
      </div>
    `;
        return;
      }

      gridContainer.innerHTML = itemsToRender.map(product => {
        const isWishlisted = wishlist.includes(product.id);
        const savings = product.originalPrice - product.price;

        return `
      <div class="product-card" id="card-${product.id}">
        <div class="product-image-wrap">
          <img class="product-image" src="${product.image}" alt="${product.name}" loading="lazy" />
          
          <div class="product-badges-top">
            <span class="badge badge-discount">${product.discountPercent}% OFF</span>
            ${product.badge ? `<span class="badge badge-popular">${product.badge}</span>` : ''}
          </div>

          <button class="product-wishlist-btn ${isWishlisted ? 'active' : ''}" 
                  onclick="toggleWishlist('${product.id}')" 
                  title="${isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}"
                  aria-label="Wishlist">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
            </svg>
          </button>

          <button class="product-quick-view-btn" onclick="openQuickView('${product.id}')">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
            Quick View
          </button>
        </div>

        <div class="product-content">
          <span class="product-category-tag">${product.category}</span>
          <h3 class="product-title" title="${product.name}">${product.name}</h3>
          
          <div class="product-rating-row">
            <div class="star-rating">
              ★★★★★
            </div>
            <span class="reviews-count">(${product.reviewsCount} reviews)</span>
          </div>

          <div class="product-price-box">
            <div class="price-row">
              <span class="discounted-price">${formatCurrency(product.price)}</span>
              <span class="original-price">${formatCurrency(product.originalPrice)}</span>
            </div>
            <span class="savings-label">You Save ${formatCurrency(savings)} (${product.discountPercent}% OFF)</span>
          </div>

          <button class="product-add-btn" onclick="addToCart('${product.id}')">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
              <path d="M3 6h18"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            Add to Cart
          </button>
        </div>
      </div>
    `;
      }).join('');
    }

    function renderComboSection() {
      const container = document.getElementById('combos-grid');
      if (!container) return;

      container.innerHTML = COMBOS_DATA.map(combo => `
    <div class="combo-card">
      <div class="combo-image-wrap">
        <img class="combo-image" src="${combo.image}" alt="${combo.title}" loading="lazy" />
        <span class="combo-badge-floating">${combo.badge}</span>
        <span class="combo-discount-tag">${combo.discountPercent}% OFF</span>
      </div>

      <div class="combo-content">
        <div class="combo-items-includes">
          ${combo.items.map(item => `<span class="combo-item-chip">✓ ${item}</span>`).join('')}
        </div>

        <h3 class="combo-title">${combo.title}</h3>
        <p class="combo-description">${combo.description}</p>

        <div class="combo-price-card">
          <div class="combo-price-left">
            <span class="combo-mrp">MRP: ${formatCurrency(combo.mrp)}</span>
            <span class="combo-deal-price">${formatCurrency(combo.price)}</span>
          </div>
          <div class="combo-save-pill">
            Save ${formatCurrency(combo.savings)} (${combo.discountPercent}% OFF)
          </div>
        </div>

        <button class="btn btn-primary combo-action-btn" onclick="addComboToCart('${combo.id}')">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
            <path d="M3 6h18"/>
            <path d="M16 10a4 4 0 0 1-8 0"/>
          </svg>
          Claim Combo Deal
        </button>
      </div>
    </div>
  `).join('');
    }

    function renderReviewsSlider() {
      const track = document.getElementById('reviews-track');
      if (!track) return;

      track.innerHTML = REVIEWS_DATA.map(review => `
    <div class="review-card">
      <div class="review-header">
        <img class="reviewer-avatar" src="${review.avatar}" alt="${review.name}" loading="lazy" />
        <div class="reviewer-info">
          <h4 class="reviewer-name">${review.name}</h4>
          <span class="reviewer-verified">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
            Verified Buyer • ${review.city}
          </span>
        </div>
      </div>
      <div class="review-stars">★★★★★</div>
      <p class="review-text">"${review.text}"</p>
      <span class="review-product-tag">Purchased: ${review.product}</span>
    </div>
  `).join('');
    }

    function renderBestSellersSlider() {
      const track = document.getElementById('bestsellers-track');
      if (!track) return;

      const bestSellers = PRODUCTS_DATA.filter(p => p.isBestSeller);
      track.innerHTML = bestSellers.map(product => {
        const isWishlisted = wishlist.includes(product.id);
        return `
      <div class="carousel-item">
        <div class="product-card">
          <div class="product-image-wrap">
            <img class="product-image" src="${product.image}" alt="${product.name}" loading="lazy" />
            <div class="product-badges-top">
              <span class="badge badge-discount">${product.discountPercent}% OFF</span>
              <span class="badge badge-bestseller">Top Seller</span>
            </div>
            <button class="product-wishlist-btn ${isWishlisted ? 'active' : ''}" onclick="toggleWishlist('${product.id}')">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
            </button>
          </div>
          <div class="product-content">
            <h3 class="product-title">${product.name}</h3>
            <div class="product-price-box">
              <div class="price-row">
                <span class="discounted-price">${formatCurrency(product.price)}</span>
                <span class="original-price">${formatCurrency(product.originalPrice)}</span>
              </div>
            </div>
            <button class="product-add-btn" onclick="addToCart('${product.id}')">Add to Cart</button>
          </div>
        </div>
      </div>
    `;
      }).join('');
    }

    // ==========================================================================
    // 5. HERO SLIDER FUNCTIONALITY
    // ==========================================================================
    function initHeroSlider() {
      const slides = document.querySelectorAll('.hero-slide');
      const dotsContainer = document.getElementById('hero-slider-dots');
      const prevBtn = document.getElementById('hero-prev-btn');
      const nextBtn = document.getElementById('hero-next-btn');
      const wrapper = document.getElementById('hero-slides-wrapper');

      if (!slides.length || !wrapper) return;

      // Render dots
      if (dotsContainer) {
        dotsContainer.innerHTML = '';
        slides.forEach((_, idx) => {
          const dot = document.createElement('div');
          dot.className = `slider-dot ${idx === 0 ? 'active' : ''}`;
          dot.addEventListener('click', () => goToSlide(idx));
          dotsContainer.appendChild(dot);
        });
      }

      function goToSlide(index) {
        currentSlideIndex = index;
        if (currentSlideIndex >= slides.length) currentSlideIndex = 0;
        if (currentSlideIndex < 0) currentSlideIndex = slides.length - 1;

        wrapper.style.transform = `translateX(-${currentSlideIndex * 100}%)`;

        // Update dots
        const dots = document.querySelectorAll('.slider-dot');
        dots.forEach((d, i) => {
          d.classList.toggle('active', i === currentSlideIndex);
        });
      }

      if (prevBtn) {
        prevBtn.addEventListener('click', () => {
          goToSlide(currentSlideIndex - 1);
          resetAutoSlide();
        });
      }

      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          goToSlide(currentSlideIndex + 1);
          resetAutoSlide();
        });
      }

      function startAutoSlide() {
        slideInterval = setInterval(() => {
          goToSlide(currentSlideIndex + 1);
        }, 5000);
      }

      function resetAutoSlide() {
        clearInterval(slideInterval);
        startAutoSlide();
      }

      const container = document.getElementById('hero-slider-box');
      if (container) {
        container.addEventListener('mouseenter', () => clearInterval(slideInterval));
        container.addEventListener('mouseleave', () => startAutoSlide());
      }

      startAutoSlide();
    }

    // ==========================================================================
    // 6. VIDEO MODAL FUNCTIONALITY
    // ==========================================================================
    function openVideoModal() {
      const modal = document.getElementById('video-modal');
      const video = document.getElementById('festival-video-player');
      if (!modal) return;

      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
      if (video) {
        video.currentTime = 0;
        video.play().catch(e => console.log('Autoplay handled', e));
      }
    }

    function closeVideoModal() {
      const modal = document.getElementById('video-modal');
      const video = document.getElementById('festival-video-player');
      if (!modal) return;

      modal.classList.remove('active');
      document.body.style.overflow = '';
      if (video) {
        video.pause();
      }
    }

    // ==========================================================================
    // 7. INTERACTIVE GIFT FINDER LOGIC
    // ==========================================================================
    function executeGiftFinder() {
      const budgetInput = document.querySelector('input[name="finder-budget"]:checked');
      const typeInput = document.querySelector('input[name="finder-type"]:checked');

      const budget = budgetInput ? budgetInput.value : 'all';
      const type = typeInput ? typeInput.value : 'all';

      let results = PRODUCTS_DATA.filter(product => {
        let matchBudget = true;
        let matchType = true;

        if (budget === 'under500') matchBudget = product.price <= 500;
        else if (budget === '500to1000') matchBudget = product.price > 500 && product.price <= 1000;
        else if (budget === '1000to2000') matchBudget = product.price > 1000 && product.price <= 2000;
        else if (budget === '2000plus') matchBudget = product.price > 2000;

        if (type !== 'all') {
          matchType = product.giftType === type || product.category === type;
        }

        return matchBudget && matchType;
      });

      // Scroll to featured section
      const section = document.getElementById('featured-section');
      if (section) {
        section.scrollIntoView({behavior: 'smooth'});
      }

      // Update pills and filter state
      renderProductGrid(results);
      showToast(`Found ${results.length} perfect gifts for your sister! 🎁`, 'gold');
    }

    // ==========================================================================
    // 8. SHOPPING CART SYSTEM
    // ==========================================================================
    function addToCart(productId) {
      const product = PRODUCTS_DATA.find(p => p.id === productId);
      if (!product) return;

      const existingItem = cart.find(item => item.id === productId);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({
          id: product.id,
          name: product.name,
          price: product.price,
          originalPrice: product.originalPrice,
          image: product.image,
          quantity: 1
        });
      }

      saveCart();
      updateCartCounters();
      renderCartDrawer();
      showToast(`Added "${product.name.substring(0, 24)}..." to cart!`);
      openCartDrawer();
    }

    function addComboToCart(comboId) {
      const combo = COMBOS_DATA.find(c => c.id === comboId);
      if (!combo) return;

      const existingItem = cart.find(item => item.id === comboId);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({
          id: combo.id,
          name: combo.title,
          price: combo.price,
          originalPrice: combo.mrp,
          image: combo.image,
          quantity: 1
        });
      }

      saveCart();
      updateCartCounters();
      renderCartDrawer();
      showToast(`Exclusive Combo added to Cart! 🎁`, 'gold');
      openCartDrawer();
    }

    function updateCartQuantity(productId, change) {
      const itemIndex = cart.findIndex(i => i.id === productId);
      if (itemIndex === -1) return;

      cart[itemIndex].quantity += change;
      if (cart[itemIndex].quantity <= 0) {
        cart.splice(itemIndex, 1);
      }

      saveCart();
      updateCartCounters();
      renderCartDrawer();
    }

    function removeFromCart(productId) {
      cart = cart.filter(i => i.id !== productId);
      saveCart();
      updateCartCounters();
      renderCartDrawer();
      showToast('Item removed from cart');
    }

    function saveCart() {
      try {
        localStorage.setItem('apnagift_cart', JSON.stringify(cart));
      } catch (e) { }
    }

    function updateCartCounters() {
      const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
      const badges = document.querySelectorAll('.cart-count-badge');
      badges.forEach(b => {
        b.textContent = totalCount;
        b.style.display = totalCount > 0 ? 'flex' : 'none';
      });
    }

    function renderCartDrawer() {
      const itemsContainer = document.getElementById('cart-drawer-items');
      const subtotalEl = document.getElementById('cart-subtotal');
      const totalEl = document.getElementById('cart-total');
      const savingsEl = document.getElementById('cart-savings');
      const footerEl = document.getElementById('cart-drawer-footer');

      if (!itemsContainer) return;

      if (cart.length === 0) {
        itemsContainer.innerHTML = `
      <div class="drawer-empty-state">
        <div class="empty-icon-circle">🛍️</div>
        <h4 class="empty-title">Your Cart is Empty</h4>
        <p class="empty-desc">Discover our festive Raksha Bandhan gift hampers and make your sister smile today.</p>
        <button class="btn btn-primary" onclick="closeCartDrawer(); scrollToShop();">Explore Gifts</button>
      </div>
    `;
        if (footerEl) footerEl.style.display = 'none';
        return;
      }

      if (footerEl) footerEl.style.display = 'flex';

      const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      const totalMRP = cart.reduce((sum, item) => sum + (item.originalPrice * item.quantity), 0);
      const totalSavings = totalMRP - subtotal;

      itemsContainer.innerHTML = cart.map(item => `
    <div class="cart-item-row">
      <img class="cart-item-img" src="${item.image}" alt="${item.name}" />
      <div class="cart-item-info">
        <h4 class="cart-item-name">${item.name}</h4>
        <span class="cart-item-price">${formatCurrency(item.price)}</span>
        <div class="cart-qty-control">
          <button class="qty-btn" onclick="updateCartQuantity('${item.id}', -1)">-</button>
          <span class="qty-val">${item.quantity}</span>
          <button class="qty-btn" onclick="updateCartQuantity('${item.id}', 1)">+</button>
        </div>
      </div>
      <button class="cart-remove-item" onclick="removeFromCart('${item.id}')" title="Remove item">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
      </button>
    </div>
  `).join('');

      if (subtotalEl) subtotalEl.textContent = formatCurrency(subtotal);
      if (totalEl) totalEl.textContent = formatCurrency(subtotal);
      if (savingsEl) savingsEl.textContent = `You Save ${formatCurrency(totalSavings)} on this order!`;
    }

    function openCartDrawer() {
      const drawer = document.getElementById('cart-drawer');
      const backdrop = document.getElementById('drawer-backdrop');
      if (drawer && backdrop) {
        renderCartDrawer();
        drawer.classList.add('active');
        backdrop.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    }

    function closeCartDrawer() {
      const drawer = document.getElementById('cart-drawer');
      const backdrop = document.getElementById('drawer-backdrop');
      if (drawer && backdrop) {
        drawer.classList.remove('active');
        backdrop.classList.remove('active');
        document.body.style.overflow = '';
      }
    }

    // ==========================================================================
    // 9. WISHLIST MANAGEMENT
    // ==========================================================================
    function toggleWishlist(productId) {
      const index = wishlist.indexOf(productId);
      const product = PRODUCTS_DATA.find(p => p.id === productId);

      if (index > -1) {
        wishlist.splice(index, 1);
        showToast('Removed from Wishlist');
      } else {
        wishlist.push(productId);
        showToast(`Added "${product ? product.name.substring(0, 20) : 'Gift'}..." to Wishlist! ❤️`);
      }

      try {
        localStorage.setItem('apnagift_wishlist', JSON.stringify(wishlist));
      } catch (e) { }

      updateWishlistCounters();
      renderProductGrid();
    }

    function updateWishlistCounters() {
      const count = wishlist.length;
      const badges = document.querySelectorAll('.wishlist-count-badge');
      badges.forEach(b => {
        b.textContent = count;
        b.style.display = count > 0 ? 'flex' : 'none';
      });
    }

    function openWishlistDrawer() {
      const drawer = document.getElementById('wishlist-drawer');
      const backdrop = document.getElementById('drawer-backdrop');
      const itemsContainer = document.getElementById('wishlist-drawer-items');

      if (!drawer || !backdrop) return;

      const wishlistedProducts = PRODUCTS_DATA.filter(p => wishlist.includes(p.id));

      if (wishlistedProducts.length === 0) {
        itemsContainer.innerHTML = `
      <div class="drawer-empty-state">
        <div class="empty-icon-circle">❤️</div>
        <h4 class="empty-title">Your Wishlist is Empty</h4>
        <p class="empty-desc">Click the heart icon on any gift box or combo to save your favorites for later.</p>
        <button class="btn btn-primary" onclick="closeWishlistDrawer(); scrollToShop();">Browse Gifts</button>
      </div>
    `;
      } else {
        itemsContainer.innerHTML = wishlistedProducts.map(p => `
      <div class="cart-item-row">
        <img class="cart-item-img" src="${p.image}" alt="${p.name}" />
        <div class="cart-item-info">
          <h4 class="cart-item-name">${p.name}</h4>
          <span class="cart-item-price">${formatCurrency(p.price)}</span>
          <button class="btn btn-sm btn-primary" style="margin-top: 6px; width: fit-content;" onclick="addToCart('${p.id}'); toggleWishlist('${p.id}');">
            Move to Cart
          </button>
        </div>
        <button class="cart-remove-item" onclick="toggleWishlist('${p.id}'); openWishlistDrawer();" title="Remove">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      </div>
    `).join('');
      }

      drawer.classList.add('active');
      backdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeWishlistDrawer() {
      const drawer = document.getElementById('wishlist-drawer');
      const backdrop = document.getElementById('drawer-backdrop');
      if (drawer && backdrop) {
        drawer.classList.remove('active');
        backdrop.classList.remove('active');
        document.body.style.overflow = '';
      }
    }

    // ==========================================================================
    // 10. QUICK VIEW MODAL
    // ==========================================================================
    function openQuickView(productId) {
      const product = PRODUCTS_DATA.find(p => p.id === productId);
      const modal = document.getElementById('quick-view-modal');
      const container = document.getElementById('quick-view-content');

      if (!product || !modal || !container) return;

      const savings = product.originalPrice - product.price;

      container.innerHTML = `
    <div class="quick-view-grid">
      <div class="quick-view-img-wrap">
        <img class="quick-view-img" src="${product.image}" alt="${product.name}" />
      </div>
      <div class="quick-view-details">
        <span class="product-category-tag">${product.category}</span>
        <h2 style="font-family: var(--font-heading); font-size: 1.8rem; color: var(--deep-wine); margin-bottom: 8px;">${product.name}</h2>
        
        <div class="product-rating-row" style="margin-bottom: 16px;">
          <div class="star-rating">★★★★★</div>
          <span class="reviews-count">(${product.reviewsCount} verified reviews)</span>
        </div>

        <p style="color: var(--rose-text-muted); font-size: 0.95rem; line-height: 1.6; margin-bottom: 20px;">
          ${product.description}
        </p>

        <div class="product-price-box" style="margin-bottom: 24px;">
          <div class="price-row">
            <span class="discounted-price" style="font-size: 1.7rem;">${formatCurrency(product.price)}</span>
            <span class="original-price" style="font-size: 1.1rem;">${formatCurrency(product.originalPrice)}</span>
            <span class="badge badge-discount">${product.discountPercent}% OFF</span>
          </div>
          <span class="savings-label">You Save ${formatCurrency(savings)} on this festive pack!</span>
        </div>

        <div style="display: flex; gap: 12px; margin-bottom: 20px;">
          <button class="btn btn-primary" style="flex: 1;" onclick="addToCart('${product.id}'); closeQuickView();">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            Add To Cart Now
          </button>
          <button class="btn btn-secondary btn-icon" onclick="toggleWishlist('${product.id}')" title="Wishlist">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
          </button>
        </div>

        <div style="background: var(--light-cream); padding: 12px 16px; border-radius: var(--radius-sm); font-size: 0.85rem; color: var(--rose-text-muted); border: 1px dashed var(--border-light);">
          📍 <strong>Dispatched from Janakpuri, New Delhi</strong> • Free Express Delivery by Rakhi Day.
        </div>
      </div>
    </div>
  `;

      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeQuickView() {
      const modal = document.getElementById('quick-view-modal');
      if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    }

    // ==========================================================================
    // 11. CHECKOUT MODAL & DEMO PURCHASE
    // ==========================================================================
    function openCheckoutModal() {
      if (cart.length === 0) {
        showToast('Your cart is empty!');
        return;
      }
      closeCartDrawer();

      const modal = document.getElementById('checkout-modal');
      const summaryEl = document.getElementById('checkout-order-summary');
      if (!modal || !summaryEl) return;

      const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

      summaryEl.innerHTML = `
    <div style="background: var(--light-cream); padding: 16px; border-radius: var(--radius-md); margin-bottom: 20px; border: 1px solid var(--border-light);">
      <h4 style="font-weight: 700; color: var(--deep-wine); margin-bottom: 8px;">Order Items (${cart.reduce((s, i) => s + i.quantity, 0)})</h4>
      ${cart.map(item => `
        <div style="display: flex; justify-content: space-between; font-size: 0.9rem; margin-bottom: 4px;">
          <span>${item.name} x${item.quantity}</span>
          <span style="font-weight: 700;">${formatCurrency(item.price * item.quantity)}</span>
        </div>
      `).join('')}
      <div style="display: flex; justify-content: space-between; font-size: 1.1rem; font-weight: 800; color: var(--deep-wine); border-top: 1px dashed var(--border-light); padding-top: 10px; margin-top: 10px;">
        <span>Total Payable:</span>
        <span style="color: var(--primary-pink);">${formatCurrency(subtotal)}</span>
      </div>
    </div>
  `;

      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeCheckoutModal() {
      const modal = document.getElementById('checkout-modal');
      if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    }

    function handleCompleteOrder(e) {
      e.preventDefault();
      closeCheckoutModal();
      cart = [];
      saveCart();
      updateCartCounters();
      renderCartDrawer();

      showToast('🎉 Order Placed Successfully! Express delivery from Janakpuri initiated.', 'gold');
    }

    // ==========================================================================
    // 12. COUNTDOWN TIMER
    // ==========================================================================
    function initCountdownTimer() {
      // Set Raksha Bandhan Target date (4 days from current load time)
      const targetDate = new Date();
      targetDate.setDate(targetDate.getDate() + 3);
      targetDate.setHours(targetDate.getHours() + 18);
      targetDate.setMinutes(targetDate.getMinutes() + 45);

      const daysEl = document.getElementById('timer-days');
      const hoursEl = document.getElementById('timer-hours');
      const minutesEl = document.getElementById('timer-minutes');
      const secondsEl = document.getElementById('timer-seconds');

      function updateTimer() {
        const now = new Date().getTime();
        const distance = targetDate.getTime() - now;

        if (distance < 0) {
          if (daysEl) daysEl.textContent = '00';
          if (hoursEl) hoursEl.textContent = '00';
          if (minutesEl) minutesEl.textContent = '00';
          if (secondsEl) secondsEl.textContent = '00';
          return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
        if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
        if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
        if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
      }

      updateTimer();
      setInterval(updateTimer, 1000);
    }

    // ==========================================================================
    // 13. FAQ ACCORDION
    // ==========================================================================
    function initFaqAccordion() {
      const faqItems = document.querySelectorAll('.faq-item');
      faqItems.forEach(item => {
        const header = item.querySelector('.faq-header-btn');
        if (header) {
          header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            faqItems.forEach(other => other.classList.remove('active'));
            if (!isActive) {
              item.classList.add('active');
            }
          });
        }
      });
    }

    // ==========================================================================
    // 14. SEARCH & FILTERING SYSTEM
    // ==========================================================================
    function handleSearch(query) {
      if (!query || query.trim() === '') {
        renderProductGrid();
        return;
      }

      const q = query.toLowerCase().trim();
      const matched = PRODUCTS_DATA.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.giftType.toLowerCase().includes(q)
      );

      const section = document.getElementById('featured-section');
      if (section) {
        section.scrollIntoView({behavior: 'smooth'});
      }

      renderProductGrid(matched);
      showToast(`Found ${matched.length} results for "${query}"`);
    }

    function setCategoryFilter(category) {
      activeCategory = category;
      document.querySelectorAll('.category-pill').forEach(pill => {
        pill.classList.toggle('active', pill.dataset.category === category);
      });
      renderProductGrid();
    }

    function handleSortChange(sortValue) {
      activeSort = sortValue;
      renderProductGrid();
    }

    function setBudgetFilter(budgetValue) {
      activeBudgetFilter = budgetValue;
      renderProductGrid();
    }

    function resetFilters() {
      activeCategory = 'all';
      activeSort = 'featured';
      activeBudgetFilter = 'all';
      document.querySelectorAll('.category-pill').forEach(pill => {
        pill.classList.toggle('active', pill.dataset.category === 'all');
      });
      const sortSelect = document.getElementById('product-sort-select');
      if (sortSelect) sortSelect.value = 'featured';
      renderProductGrid();
    }

    // ==========================================================================
    // 15. CAROUSELS & SLIDER NAVIGATIONS
    // ==========================================================================
    function slideCarousel(carouselId, direction) {
      const track = document.getElementById(carouselId);
      if (!track) return;

      const scrollAmount = direction * 320;
      track.scrollBy({left: scrollAmount, behavior: 'smooth'});
    }

    // ==========================================================================
    // 16. TOAST NOTIFICATIONS
    // ==========================================================================
    function showToast(message, type = 'normal') {
      const container = document.getElementById('toast-container');
      if (!container) return;

      const toast = document.createElement('div');
      toast.className = `toast ${type === 'gold' ? 'toast-gold' : ''}`;
      toast.innerHTML = `
    <span>${type === 'gold' ? '✨' : '💖'}</span>
    <span>${message}</span>
  `;

      container.appendChild(toast);

      setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 300);
      }, 3500);
    }

    function copyCouponCode(code) {
      navigator.clipboard.writeText(code).then(() => {
        showToast(`Coupon code "${code}" copied! Use at checkout for extra savings.`, 'gold');
      }).catch(() => {
        showToast(`Coupon code is: ${code}`);
      });
    }

    function scrollToShop() {
      const el = document.getElementById('featured-section');
      if (el) el.scrollIntoView({behavior: 'smooth'});
    }

    function scrollToCombos() {
      const el = document.getElementById('combos-section');
      if (el) el.scrollIntoView({behavior: 'smooth'});
    }

    // ==========================================================================
    // 17. GLOBAL EVENT LISTENERS & DRAWER CONTROLS
    // ==========================================================================
    function initEventListeners() {
      // Search Form Desktop & Mobile
      const searchForm = document.getElementById('header-search-form');
      const searchInput = document.getElementById('header-search-input');
      if (searchForm && searchInput) {
        searchForm.addEventListener('submit', (e) => {
          e.preventDefault();
          handleSearch(searchInput.value);
        });
      }

      const mobileSearchForm = document.getElementById('mobile-search-form');
      const mobileSearchInput = document.getElementById('mobile-search-input');
      if (mobileSearchForm && mobileSearchInput) {
        mobileSearchForm.addEventListener('submit', (e) => {
          e.preventDefault();
          handleSearch(mobileSearchInput.value);
          closeMobileMenu();
        });
      }

      // Sorting Select
      const sortSelect = document.getElementById('product-sort-select');
      if (sortSelect) {
        sortSelect.addEventListener('change', (e) => handleSortChange(e.target.value));
      }

      // Category Pills
      const pills = document.querySelectorAll('.category-pill');
      pills.forEach(p => {
        p.addEventListener('click', () => setCategoryFilter(p.dataset.category));
      });

      // Back to Top Button
      const backToTopBtn = document.getElementById('back-to-top');
      window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
          backToTopBtn?.classList.add('visible');
        } else {
          backToTopBtn?.classList.remove('visible');
        }
      });

      if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
          window.scrollTo({top: 0, behavior: 'smooth'});
        });
      }

      // Newsletter Form
      const newsletterForm = document.getElementById('newsletter-form');
      if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
          e.preventDefault();
          const emailInput = newsletterForm.querySelector('input[type="email"]');
          if (emailInput && emailInput.value) {
            showToast('Subscribed! Welcome to APNA GIFT Rakhi family.', 'gold');
            emailInput.value = '';
          }
        });
      }

      // Escape key closes modals
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          closeVideoModal();
          closeCartDrawer();
          closeWishlistDrawer();
          closeQuickView();
          closeCheckoutModal();
          closeMobileMenu();
        }
      });
    }

    function toggleMobileMenu() {
      const drawer = document.getElementById('mobile-nav-drawer');
      const backdrop = document.getElementById('drawer-backdrop');
      if (drawer && backdrop) {
        drawer.classList.toggle('active');
        backdrop.classList.toggle('active');
      }
    }

    function closeMobileMenu() {
      const drawer = document.getElementById('mobile-nav-drawer');
      const backdrop = document.getElementById('drawer-backdrop');
      if (drawer && backdrop) {
        drawer.classList.remove('active');
        backdrop.classList.remove('active');
      }
    }
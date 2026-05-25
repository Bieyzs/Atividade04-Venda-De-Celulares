/* ============================================
   TECHNOVA — Complete JavaScript Engine
   ============================================ */

// ===== PRODUCT DATABASE =====
const PRODUCTS = [
    {
        id: "iphone16promax",
        name: "iPhone 16 Pro Max 256GB",
        image: "https://http2.mlstatic.com/D_NQ_NP_841858-MLA95934002967_102025-O.webp",
        brand: "Apple",
        category: "apple",
        price: 8999,
        originalPrice: 10499,
        installment: "12x R$ 749,92",
        rating: 5,
        reviews: 1243,
        badge: "top",
        flash: false,
        launch: true,
        colors: ["Titânio Natural", "Titânio Preto", "Titânio Branco"],
        description: "O iPhone mais avançado de todos os tempos. Com o chip A18 Pro, câmera de 48MP com zoom óptico 5x, tela Super Retina XDR de 6,9 polegadas e Controle de Câmera dedicado.",
        specs: {
            "Tela": "6,9\" Super Retina XDR OLED, 2868x1320, 120Hz ProMotion",
            "Processador": "Apple A18 Pro (3nm)",
            "RAM": "8 GB",
            "Armazenamento": "256 GB",
            "Câmera Principal": "48 MP (f/1.78), sensor-shift OIS",
            "Câmera Ultra-wide": "12 MP (f/2.2), 120° campo de visão",
            "Câmera Telefoto": "12 MP (f/2.8), zoom óptico 5x",
            "Câmera Frontal": "12 MP TrueDepth (f/1.9)",
            "Bateria": "4.685 mAh",
            "Carregamento": "USB-C, 27W com fio, 25W MagSafe",
            "Sistema": "iOS 18",
            "Resistência": "IP68 (até 6m por 30 min)",
            "Peso": "227 g",
            "Dimensões": "163 x 77,6 x 8,25 mm"
        },
        reviewList: [
            { name: "Marcos A.", rating: 5, text: "Melhor iPhone que já tive. A câmera é simplesmente perfeita, especialmente no modo noturno. A bateria dura tranquilamente o dia inteiro.", date: "15/05/2026" },
            { name: "Fernanda L.", rating: 5, text: "O controle de câmera é uma revolução. Consigo tirar fotos profissionais de forma muito intuitiva. Vale cada centavo!", date: "10/05/2026" }
        ],
        svgColor1: "#4a4a6a",
        svgColor2: "#3a3a5a",
        svgScreen: "linear-gradient(135deg, #667eea40, #764ba210)"
    },
    {
        id: "s25ultra",
        name: "Samsung Galaxy S25 Ultra 512GB",
        image: "https://http2.mlstatic.com/D_NQ_NP_611744-MLA85674470022_062025-O.webp",
        brand: "Samsung",
        category: "samsung",
        price: 7499,
        originalPrice: 9999,
        installment: "12x R$ 624,92",
        rating: 5,
        reviews: 892,
        badge: "discount",
        flash: true,
        launch: true,
        colors: ["Titânio Preto", "Titânio Prata", "Titânio Violeta"],
        description: "O Galaxy S25 Ultra redefine o que um smartphone pode fazer. Com processador Snapdragon 8 Elite, câmera de 200MP e S Pen integrada para produtividade máxima.",
        specs: {
            "Tela": "6,9\" Dynamic AMOLED 2X, 3120x1440, 120Hz LTPO",
            "Processador": "Snapdragon 8 Elite (3nm)",
            "RAM": "12 GB",
            "Armazenamento": "512 GB",
            "Câmera Principal": "200 MP (f/1.7), OIS",
            "Câmera Ultra-wide": "12 MP (f/2.2), 120°",
            "Câmera Telefoto 1": "10 MP (f/2.4), zoom óptico 3x",
            "Câmera Telefoto 2": "50 MP (f/3.4), zoom óptico 5x",
            "Câmera Frontal": "12 MP (f/2.2)",
            "Bateria": "5.000 mAh",
            "Carregamento": "USB-C, 45W com fio, 15W sem fio",
            "Sistema": "Android 15 com One UI 7",
            "Resistência": "IP68",
            "Peso": "218 g",
            "Dimensões": "162,8 x 77,6 x 8,2 mm"
        },
        reviewList: [
            { name: "Lucas P.", rating: 5, text: "A câmera de 200MP é absurda. Consigo capturar detalhes que nem imaginava. A S Pen é essencial para o meu trabalho.", date: "20/05/2026" },
            { name: "Camila R.", rating: 4, text: "Excelente celular, muito rápido e com tela incrível. Só achei o preço um pouco alto, mas a qualidade compensa.", date: "18/05/2026" }
        ],
        svgColor1: "#3a5a8a",
        svgColor2: "#2a3a5a",
        svgScreen: "linear-gradient(135deg, #00d2ff30, #3a7bd510)"
    },
    {
        id: "edge50ultra",
        name: "Motorola Edge 50 Ultra 512GB",
        image: "https://http2.mlstatic.com/D_NQ_NP_920690-MLA100089053193_122025-O.webp",
        brand: "Motorola",
        category: "motorola",
        price: 5299,
        originalPrice: 6999,
        installment: "12x R$ 441,58",
        rating: 4,
        reviews: 445,
        badge: "new",
        flash: true,
        launch: true,
        colors: ["Peach Fuzz", "Forest Grey", "Midnight Blue"],
        description: "Design premium em couro vegano com câmera Pantone Validated. Tela pOLED curva de 6,7 polegadas e carregamento ultra-rápido de 125W.",
        specs: {
            "Tela": "6,7\" pOLED curva, 2712x1220, 144Hz",
            "Processador": "Snapdragon 8s Gen 3",
            "RAM": "12 GB",
            "Armazenamento": "512 GB",
            "Câmera Principal": "50 MP (f/1.6), OIS, Pantone Validated",
            "Câmera Ultra-wide": "50 MP (f/2.0), macro",
            "Câmera Telefoto": "64 MP (f/2.4), zoom óptico 3x",
            "Câmera Frontal": "50 MP (f/1.9)",
            "Bateria": "4.500 mAh",
            "Carregamento": "USB-C, 125W com fio, 50W sem fio",
            "Sistema": "Android 14",
            "Resistência": "IP68",
            "Peso": "197 g",
            "Dimensões": "161,1 x 72,4 x 8,6 mm"
        },
        reviewList: [
            { name: "Ricardo M.", rating: 5, text: "O design em couro vegano é lindo demais! E o carregamento de 125W é surreal, carrega totalmente em menos de 20 minutos.", date: "22/05/2026" },
            { name: "Patrícia S.", rating: 4, text: "Câmera excelente, especialmente para retratos. A tela é muito fluida com 144Hz. Recomendo!", date: "19/05/2026" }
        ],
        svgColor1: "#5a3a6a",
        svgColor2: "#4a3a5a",
        svgScreen: "linear-gradient(135deg, #f093fb30, #f5576c10)"
    },
    {
        id: "s24ultra",
        name: "Samsung Galaxy S24 Ultra 256GB",
        image: "https://http2.mlstatic.com/D_NQ_NP_950821-MLA99885966645_112025-O.webp",
        brand: "Samsung",
        category: "samsung",
        price: 5849,
        originalPrice: 8999,
        installment: "12x R$ 487,42",
        rating: 4,
        reviews: 328,
        badge: "discount",
        flash: true,
        launch: false,
        colors: ["Titânio Preto", "Titânio Violeta", "Titânio Amarelo"],
        description: "Galaxy AI integrado, câmera de 200MP com zoom espacial de 100x, tela plana de 6,8 polegadas e estrutura em titânio.",
        specs: {
            "Tela": "6,8\" Dynamic AMOLED 2X, 3120x1440, 120Hz",
            "Processador": "Snapdragon 8 Gen 3",
            "RAM": "12 GB",
            "Armazenamento": "256 GB",
            "Câmera Principal": "200 MP (f/1.7), OIS",
            "Câmera Ultra-wide": "12 MP (f/2.2)",
            "Câmera Telefoto 1": "10 MP (f/2.4), zoom 3x",
            "Câmera Telefoto 2": "50 MP (f/3.4), zoom 5x",
            "Câmera Frontal": "12 MP",
            "Bateria": "5.000 mAh",
            "Carregamento": "45W com fio, 15W sem fio",
            "Sistema": "Android 14 com One UI 6",
            "Resistência": "IP68",
            "Peso": "232 g",
            "Dimensões": "162,3 x 79 x 8,6 mm"
        },
        reviewList: [
            { name: "André B.", rating: 5, text: "Ainda é um dos melhores celulares do mercado. O Galaxy AI facilita muito no dia a dia.", date: "12/05/2026" }
        ],
        svgColor1: "#3a5a8a",
        svgColor2: "#2a3a5a",
        svgScreen: "linear-gradient(135deg, #1428a030, #3a5a8a10)"
    },
    {
        id: "iphone16pro",
        name: "iPhone 16 Pro 256GB",
        image: "https://http2.mlstatic.com/D_NQ_NP_841858-MLA95934002967_102025-O.webp",
        brand: "Apple",
        category: "apple",
        price: 7499,
        originalPrice: 0,
        installment: "12x R$ 624,92",
        rating: 5,
        reviews: 512,
        badge: "top",
        flash: false,
        launch: false,
        colors: ["Titânio Natural", "Titânio Deserto"],
        description: "Chip A18 Pro, câmera de 48MP com zoom óptico 5x, tela de 6,3 polegadas e botão de ação personalizável.",
        specs: {
            "Tela": "6,3\" Super Retina XDR OLED, 2622x1206, 120Hz",
            "Processador": "Apple A18 Pro",
            "RAM": "8 GB",
            "Armazenamento": "256 GB",
            "Câmera Principal": "48 MP (f/1.78)",
            "Câmera Ultra-wide": "48 MP (f/2.2)",
            "Câmera Telefoto": "12 MP, zoom 5x",
            "Câmera Frontal": "12 MP TrueDepth",
            "Bateria": "3.582 mAh",
            "Carregamento": "USB-C, 27W",
            "Sistema": "iOS 18",
            "Resistência": "IP68",
            "Peso": "199 g",
            "Dimensões": "149,6 x 71,5 x 8,25 mm"
        },
        reviewList: [
            { name: "Beatriz C.", rating: 5, text: "Perfeito em todos os aspectos. Câmera incrível e o tamanho é ideal.", date: "25/05/2026" }
        ],
        svgColor1: "#4a4a6a",
        svgColor2: "#3a3a5a",
        svgScreen: "linear-gradient(135deg, #667eea40, #764ba210)"
    },
    {
        id: "edge40neo",
        name: "Motorola Edge 40 Neo 256GB",
        image: "https://http2.mlstatic.com/D_NQ_NP_941010-MLA94805297160_102025-O.webp",
        brand: "Motorola",
        category: "motorola",
        price: 2099,
        originalPrice: 3499,
        installment: "12x R$ 174,92",
        rating: 4,
        reviews: 189,
        badge: "discount",
        flash: true,
        launch: false,
        colors: ["Preto", "Azul", "Rosa"],
        description: "Excelente custo-benefício com tela pOLED de 144Hz, câmera de 50MP com OIS e design em couro vegano.",
        specs: {
            "Tela": "6,55\" pOLED, 2400x1080, 144Hz",
            "Processador": "MediaTek Dimensity 7030",
            "RAM": "12 GB",
            "Armazenamento": "256 GB",
            "Câmera Principal": "50 MP (f/1.8), OIS",
            "Câmera Ultra-wide": "13 MP",
            "Câmera Frontal": "32 MP",
            "Bateria": "4.310 mAh",
            "Carregamento": "68W com fio, 15W sem fio",
            "Sistema": "Android 13",
            "Resistência": "IP68",
            "Peso": "170 g",
            "Dimensões": "159,6 x 71,9 x 7,9 mm"
        },
        reviewList: [
            { name: "Gabriel F.", rating: 4, text: "Pelo preço, é imbatível. Tela fluida, câmera decente e bateria que dura o dia todo.", date: "14/05/2026" }
        ],
        svgColor1: "#5a3a6a",
        svgColor2: "#4a3a5a",
        svgScreen: "linear-gradient(135deg, #f093fb30, #f5576c10)"
    },
    {
        id: "xiaomi14ultra",
        name: "Xiaomi 14 Ultra 512GB",
        image: "https://http2.mlstatic.com/D_NQ_NP_697084-MLA99483184544_112025-O.webp",
        brand: "Xiaomi",
        category: "xiaomi",
        price: 6299,
        originalPrice: 0,
        installment: "12x R$ 524,92",
        rating: 5,
        reviews: 634,
        badge: "top",
        flash: false,
        launch: true,
        colors: ["Preto", "Branco"],
        description: "Câmera Leica Summilux com sensor de 1 polegada. Snapdragon 8 Gen 3. Tela AMOLED 2K de 6,73 polegadas.",
        specs: {
            "Tela": "6,73\" AMOLED LTPO, 3200x1440, 120Hz",
            "Processador": "Snapdragon 8 Gen 3",
            "RAM": "16 GB",
            "Armazenamento": "512 GB",
            "Câmera Principal": "50 MP (f/1.63), sensor 1\", Leica Summilux",
            "Câmera Ultra-wide": "50 MP (f/1.8)",
            "Câmera Telefoto 1": "50 MP (f/1.8), zoom 3.2x",
            "Câmera Telefoto 2": "50 MP (f/2.5), zoom 5x",
            "Câmera Frontal": "32 MP",
            "Bateria": "5.300 mAh",
            "Carregamento": "90W com fio, 80W sem fio",
            "Sistema": "Android 14 com HyperOS",
            "Resistência": "IP68",
            "Peso": "227 g",
            "Dimensões": "161,4 x 75,3 x 9,2 mm"
        },
        reviewList: [
            { name: "Thiago W.", rating: 5, text: "A câmera Leica é de outro nível. As fotos parecem tiradas com câmera profissional. Impressionante!", date: "21/05/2026" }
        ],
        svgColor1: "#6a3a3a",
        svgColor2: "#5a3a3a",
        svgScreen: "linear-gradient(135deg, #ff690030, #ff950010)"
    },
    {
        id: "redminote13",
        name: "Xiaomi Redmi Note 13 Pro 5G 256GB",
        image: "https://http2.mlstatic.com/D_NQ_NP_628017-MLA100007417181_122025-O.webp",
        brand: "Xiaomi",
        category: "xiaomi",
        price: 1749,
        originalPrice: 2499,
        installment: "12x R$ 145,75",
        rating: 4,
        reviews: 276,
        badge: "discount",
        flash: true,
        launch: false,
        colors: ["Preto", "Azul", "Verde"],
        description: "O melhor custo-benefício da Xiaomi. Câmera de 200MP, tela AMOLED de 6,67 polegadas e 5G integrado.",
        specs: {
            "Tela": "6,67\" AMOLED, 2400x1080, 120Hz",
            "Processador": "Snapdragon 7s Gen 2",
            "RAM": "8 GB",
            "Armazenamento": "256 GB",
            "Câmera Principal": "200 MP (f/1.65)",
            "Câmera Ultra-wide": "8 MP",
            "Câmera Macro": "2 MP",
            "Câmera Frontal": "16 MP",
            "Bateria": "5.100 mAh",
            "Carregamento": "67W com fio",
            "Sistema": "Android 13 com MIUI 14",
            "Resistência": "IP54",
            "Peso": "188 g",
            "Dimensões": "161,1 x 74,2 x 7,98 mm"
        },
        reviewList: [
            { name: "Diego N.", rating: 4, text: "Câmera de 200MP por esse preço é inacreditável. Excelente compra!", date: "16/05/2026" }
        ],
        svgColor1: "#6a3a3a",
        svgColor2: "#5a3a3a",
        svgScreen: "linear-gradient(135deg, #ff690030, #ff950010)"
    },
    {
        id: "galaxyzfold6",
        name: "Samsung Galaxy Z Fold 6 512GB",
        image: "https://http2.mlstatic.com/D_NQ_NP_802751-MLA95696768762_102025-O.webp",
        brand: "Samsung",
        category: "samsung",
        price: 13999,
        originalPrice: 0,
        installment: "12x R$ 1.166,58",
        rating: 5,
        reviews: 156,
        badge: "new",
        flash: false,
        launch: true,
        colors: ["Phantom Black", "Silver Shadow", "Navy"],
        description: "O dobrável mais fino e leve da Samsung. Tela interna de 7,6 polegadas, Snapdragon 8 Gen 3 e multitarefa avançada.",
        specs: {
            "Tela Interna": "7,6\" Dynamic AMOLED 2X, 2160x1856, 120Hz",
            "Tela Externa": "6,3\" Dynamic AMOLED 2X, 2376x968, 120Hz",
            "Processador": "Snapdragon 8 Gen 3",
            "RAM": "12 GB",
            "Armazenamento": "512 GB",
            "Câmera Principal": "50 MP (f/1.8), OIS",
            "Câmera Ultra-wide": "12 MP",
            "Câmera Telefoto": "10 MP, zoom 3x",
            "Câmera Frontal": "10 MP (externa) + 4 MP (interna)",
            "Bateria": "4.400 mAh",
            "Carregamento": "25W com fio, 15W sem fio",
            "Sistema": "Android 14 com One UI 6.1",
            "Resistência": "IP48",
            "Peso": "239 g",
            "Dimensões (aberto)": "153,5 x 132,6 x 5,6 mm"
        },
        reviewList: [
            { name: "Roberto K.", rating: 5, text: "Ter um tablet no bolso é surreal. A experiência de multitarefa é incomparável.", date: "24/05/2026" }
        ],
        svgColor1: "#3a5a8a",
        svgColor2: "#2a3a5a",
        svgScreen: "linear-gradient(135deg, #1428a030, #3a5a8a10)"
    },
    {
        id: "xiaomi15pro",
        name: "Xiaomi 15 Pro 256GB",
        image: "https://http2.mlstatic.com/D_NQ_NP_885251-MLA106114196484_022026-O.webp",
        brand: "Xiaomi",
        category: "xiaomi",
        price: 5999,
        originalPrice: 0,
        installment: "12x R$ 499,92",
        rating: 4,
        reviews: 89,
        badge: "new",
        flash: false,
        launch: true,
        colors: ["Preto", "Verde", "Branco"],
        description: "Câmera Leica Summilux com sensor de 1 polegada. Snapdragon 8 Elite. Tela AMOLED 2K de 6,73 polegadas.",
        specs: {
            "Tela": "6,73\" AMOLED LTPO, 3200x1440, 120Hz",
            "Processador": "Snapdragon 8 Elite",
            "RAM": "12 GB",
            "Armazenamento": "256 GB",
            "Câmera Principal": "50 MP (f/1.6), Leica Summilux",
            "Câmera Ultra-wide": "50 MP",
            "Câmera Telefoto": "50 MP, zoom 5x",
            "Câmera Frontal": "32 MP",
            "Bateria": "5.400 mAh",
            "Carregamento": "120W com fio, 50W sem fio",
            "Sistema": "Android 15 com HyperOS 2",
            "Resistência": "IP68",
            "Peso": "213 g",
            "Dimensões": "161,1 x 75,1 x 8,3 mm"
        },
        reviewList: [
            { name: "Amanda G.", rating: 4, text: "Bateria incrível e carregamento ultra-rápido. O HyperOS 2 está muito fluido.", date: "23/05/2026" }
        ],
        svgColor1: "#6a3a3a",
        svgColor2: "#5a3a3a",
        svgScreen: "linear-gradient(135deg, #ff690030, #ff950010)"
    }
];

// ===== SVG GENERATOR =====
function generatePhoneSVG(product, size = 'normal') {
    const w = size === 'large' ? 260 : 150;
    return `<img src="${product.image}" alt="${product.name}" width="${w}" style="max-width:100%; height:auto;" loading="lazy">`;
}

// ===== CART ENGINE =====
let cart = JSON.parse(localStorage.getItem('technova_cart') || '[]');
let compareList = JSON.parse(localStorage.getItem('technova_compare') || '[]');

function saveCart() {
    localStorage.setItem('technova_cart', JSON.stringify(cart));
    updateCartUI();
}

function addToCart(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;
    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ id: productId, qty: 1 });
    }
    saveCart();
    // Button feedback
    const btns = document.querySelectorAll(`.btn-add-cart[data-id="${productId}"]`);
    btns.forEach(btn => {
        btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg> Adicionado!';
        btn.style.background = 'var(--success)';
        btn.style.borderColor = 'var(--success)';
        setTimeout(() => {
            btn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg> Adicionar';
            btn.style.background = '';
            btn.style.borderColor = '';
        }, 1500);
    });
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
}

function updateQty(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
        removeFromCart(productId);
        return;
    }
    saveCart();
}

function clearCart() {
    cart = [];
    saveCart();
}

function getCartTotal() {
    return cart.reduce((sum, item) => {
        const product = PRODUCTS.find(p => p.id === item.id);
        return sum + (product ? product.price * item.qty : 0);
    }, 0);
}

function getCartCount() {
    return cart.reduce((sum, item) => sum + item.qty, 0);
}

function updateCartUI() {
    const countEl = document.getElementById('cartCount');
    const itemCountEl = document.getElementById('cartItemCount');
    const itemsEl = document.getElementById('cartItems');
    const emptyEl = document.getElementById('cartEmpty');
    const footerEl = document.getElementById('cartFooter');
    const subtotalEl = document.getElementById('cartSubtotal');
    const totalEl = document.getElementById('cartTotal');

    if (countEl) countEl.textContent = getCartCount();
    if (itemCountEl) itemCountEl.textContent = getCartCount();

    if (!itemsEl) return;

    if (cart.length === 0) {
        emptyEl.style.display = '';
        footerEl.style.display = 'none';
        // Remove cart items but keep empty message
        itemsEl.querySelectorAll('.cart-item').forEach(el => el.remove());
        return;
    }

    emptyEl.style.display = 'none';
    footerEl.style.display = '';

    // Remove old items
    itemsEl.querySelectorAll('.cart-item').forEach(el => el.remove());

    cart.forEach(item => {
        const product = PRODUCTS.find(p => p.id === item.id);
        if (!product) return;
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <div class="cart-item-image">${generatePhoneSVG(product, 'small')}</div>
            <div class="cart-item-info">
                <div class="cart-item-brand">${product.brand}</div>
                <div class="cart-item-name">${product.name}</div>
                <div class="cart-item-price">R$ ${(product.price * item.qty).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
                <div class="cart-item-controls">
                    <button class="qty-btn" onclick="updateQty('${product.id}', -1)">−</button>
                    <span class="cart-item-qty">${item.qty}</span>
                    <button class="qty-btn" onclick="updateQty('${product.id}', 1)">+</button>
                </div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart('${product.id}')">×</button>
        `;
        itemsEl.insertBefore(div, emptyEl);
    });

    if (subtotalEl) subtotalEl.textContent = 'R$ ' + getCartTotal().toLocaleString('pt-BR', { minimumFractionDigits: 2 });
    if (totalEl) totalEl.textContent = 'R$ ' + getCartTotal().toLocaleString('pt-BR', { minimumFractionDigits: 2 });
}

// ===== COMPARE ENGINE =====
function toggleCompare(productId) {
    const idx = compareList.indexOf(productId);
    if (idx > -1) {
        compareList.splice(idx, 1);
    } else {
        if (compareList.length >= 3) {
            alert('Você pode comparar no máximo 3 produtos ao mesmo tempo.');
            return;
        }
        compareList.push(productId);
    }
    localStorage.setItem('technova_compare', JSON.stringify(compareList));
    updateCompareButtons();
}

function updateCompareButtons() {
    document.querySelectorAll('.compare-btn').forEach(btn => {
        const id = btn.getAttribute('data-id');
        if (compareList.includes(id)) {
            btn.classList.add('active');
            btn.querySelector('svg').setAttribute('fill', 'currentColor');
        } else {
            btn.classList.remove('active');
            btn.querySelector('svg').setAttribute('fill', 'none');
        }
    });
}

function openCompareModal() {
    const modal = document.getElementById('compareModal');
    const selectedEl = document.getElementById('compareSelected');
    const tableWrapper = document.getElementById('compareTableWrapper');
    const table = document.getElementById('compareTable');
    const actionBtn = document.getElementById('compareActionBtn');

    // Show selected items
    selectedEl.innerHTML = '';
    if (compareList.length === 0) {
        selectedEl.innerHTML = '<div class="compare-empty-msg"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/><polyline points="15 18 9 12 15 6"/></svg><p>Clique em "Comparar" nos produtos para adicioná-los aqui</p></div>';
        tableWrapper.style.display = 'none';
        actionBtn.style.display = 'none';
    } else {
        compareList.forEach(id => {
            const product = PRODUCTS.find(p => p.id === id);
            if (!product) return;
            const div = document.createElement('div');
            div.className = 'compare-selected-item';
            div.innerHTML = `${generatePhoneSVG(product, 'small')}<span>${product.name}</span><button onclick="toggleCompare('${id}');openCompareModal();">×</button>`;
            selectedEl.appendChild(div);
        });

        if (compareList.length >= 2) {
            actionBtn.style.display = '';
        } else {
            actionBtn.style.display = 'none';
            tableWrapper.style.display = 'none';
        }
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function executeCompare() {
    const table = document.getElementById('compareTable');
    const products = compareList.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);
    if (products.length < 2) return;

    let html = '<thead><tr><th>Especificações</th>';
    products.forEach(p => {
        html += `<th><div style="display:flex;flex-direction:column;align-items:center;gap:6px;">${generatePhoneSVG(p, 'small')}<span style="font-size:0.8rem">${p.name}</span><span style="color:var(--success);font-weight:600">R$ ${p.price.toLocaleString('pt-BR')}</span></div></th>`;
    });
    html += '</tr></thead><tbody>';

    // Collect all spec keys
    const allKeys = new Set();
    products.forEach(p => Object.keys(p.specs).forEach(k => allKeys.add(k)));

    allKeys.forEach(key => {
        html += `<tr><td>${key}</td>`;
        products.forEach(p => {
            html += `<td>${p.specs[key] || '—'}</td>`;
        });
        html += '</tr>';
    });

    html += '</tbody>';
    table.innerHTML = html;
    document.getElementById('compareTableWrapper').style.display = '';
}

// ===== RENDER PRODUCT CARD =====
function renderProductCard(product) {
    let badgeHTML = '';
    if (product.badge === 'discount') {
        const disc = Math.round((1 - product.price / product.originalPrice) * 100);
        badgeHTML = `<div class="product-badge badge-discount">-${disc}%</div>`;
    } else if (product.badge === 'top') {
        badgeHTML = `<div class="product-badge badge-top"><svg width="12" height="12" viewBox="0 0 24 24" fill="#fff"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> Destaque</div>`;
    } else if (product.badge === 'new') {
        badgeHTML = `<div class="product-badge badge-new">Novo</div>`;
    }

    const starsHTML = Array.from({ length: 5 }, (_, i) => {
        const fill = i < product.rating ? '#FFD700' : '#666';
        return `<svg width="14" height="14" viewBox="0 0 24 24" fill="${fill}"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
    }).join('');

    const priceHTML = product.originalPrice > 0
        ? `<span class="original-price">R$ ${product.originalPrice.toLocaleString('pt-BR')}</span><span class="sale-price">R$ ${product.price.toLocaleString('pt-BR')}</span>`
        : `<span class="sale-price">R$ ${product.price.toLocaleString('pt-BR')}</span>`;

    const isCompared = compareList.includes(product.id);

    return `
    <div class="product-card" data-category="${product.category}" data-brand="${product.category}">
        ${badgeHTML}
        <div class="product-image-wrap" onclick="window.location.href='product.html?id=${product.id}'">
            ${generatePhoneSVG(product)}
            <button class="wishlist-btn" onclick="event.stopPropagation();this.classList.toggle('active')">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
            </button>
            <button class="compare-btn ${isCompared ? 'active' : ''}" data-id="${product.id}" onclick="event.stopPropagation();toggleCompare('${product.id}')">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="${isCompared ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/><polyline points="15 18 9 12 15 6"/></svg>
            </button>
        </div>
        <div class="product-info">
            <span class="product-brand">${product.brand}</span>
            <h3 class="product-name">${product.name}</h3>
            <div class="product-rating">
                <div class="stars">${starsHTML}</div>
                <span>(${product.reviews})</span>
            </div>
            <div class="product-pricing">${priceHTML}</div>
            <div class="product-installment">${product.installment} sem juros</div>
            <button class="btn-add-cart" data-id="${product.id}" onclick="addToCart('${product.id}')">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>
                Adicionar
            </button>
        </div>
    </div>`;
}

// ===== RENDER LAUNCH CARD =====
function renderLaunchCard(product) {
    return `
    <div class="launch-card">
        <div class="launch-badge">Novo</div>
        <div class="launch-image" onclick="window.location.href='product.html?id=${product.id}'" style="cursor:pointer">${generatePhoneSVG(product, 'large')}</div>
        <div class="launch-info">
            <span class="launch-brand">${product.brand}</span>
            <h3>${product.name}</h3>
            <p>${product.description.substring(0, 100)}...</p>
            <div class="launch-price"><span>R$ ${product.price.toLocaleString('pt-BR')}</span><span class="launch-installment">${product.installment}</span></div>
            <button class="btn-add-cart" data-id="${product.id}" onclick="addToCart('${product.id}')">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>
                Adicionar
            </button>
        </div>
    </div>`;
}

// ===== INIT MAIN PAGE =====
function initMainPage() {
    // Flash deals
    const flashGrid = document.getElementById('flashDealsGrid');
    if (flashGrid) {
        const flashProducts = PRODUCTS.filter(p => p.flash);
        flashGrid.innerHTML = flashProducts.map(p => renderProductCard(p)).join('');
    }

    // All products
    const allGrid = document.getElementById('allProductsGrid');
    if (allGrid) {
        allGrid.innerHTML = PRODUCTS.map(p => renderProductCard(p)).join('');
    }

    // Launches
    const launchesGrid = document.getElementById('launchesGrid');
    if (launchesGrid) {
        const launchProducts = PRODUCTS.filter(p => p.launch);
        launchesGrid.innerHTML = launchProducts.map(p => renderLaunchCard(p)).join('');
    }

    updateCompareButtons();
}

// ===== PRODUCT DETAIL PAGE =====
function initProductPage() {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');
    const product = PRODUCTS.find(p => p.id === productId);

    if (!product) {
        document.getElementById('productDetail').innerHTML = '<div class="container" style="text-align:center;padding:80px 20px;"><h1>Produto não encontrado</h1><a href="index.html" class="btn-primary" style="margin-top:20px;display:inline-flex;">Voltar à loja</a></div>';
        return;
    }

    // Breadcrumb
    document.getElementById('breadcrumb').innerHTML = `<a href="index.html">Início</a><span class="breadcrumb-sep">›</span><a href="index.html#${product.category}">${product.brand}</a><span class="breadcrumb-sep">›</span><span>${product.name}</span>`;

    // Page title
    document.title = `${product.name} — TechNova`;

    // Image
    document.getElementById('productImage').innerHTML = generatePhoneSVG(product, 'large');

    // Info
    const starsHTML = Array.from({ length: 5 }, (_, i) => {
        const fill = i < product.rating ? '#FFD700' : '#666';
        return `<svg width="16" height="16" viewBox="0 0 24 24" fill="${fill}"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
    }).join('');

    const priceHTML = product.originalPrice > 0
        ? `<div class="pd-old-price">R$ ${product.originalPrice.toLocaleString('pt-BR')}</div><div class="pd-current-price">R$ ${product.price.toLocaleString('pt-BR')}</div>`
        : `<div class="pd-current-price">R$ ${product.price.toLocaleString('pt-BR')}</div>`;

    const disc = product.originalPrice > 0 ? Math.round((1 - product.price / product.originalPrice) * 100) : 0;

    document.getElementById('productInfo').innerHTML = `
        <span class="pd-brand">${product.brand}</span>
        <h1 class="pd-name">${product.name}</h1>
        <div class="pd-rating">
            <div class="stars">${starsHTML}</div>
            <span>${product.rating}.0 (${product.reviews} avaliações)</span>
        </div>
        ${disc > 0 ? `<div style="display:inline-block;padding:4px 12px;background:var(--grad-flash);color:#1a1a2e;border-radius:50px;font-size:0.8rem;font-weight:700;">-${disc}% OFF</div>` : ''}
        <div class="pd-price-box">
            ${priceHTML}
            <div class="pd-installment">${product.installment} sem juros</div>
            <div class="pd-shipping">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                Frete grátis para todo o Brasil
            </div>
        </div>
        <p style="color:var(--text2);font-size:0.95rem;line-height:1.7;">${product.description}</p>
        <div style="display:flex;flex-wrap:wrap;gap:8px;">
            <span style="font-size:0.85rem;color:var(--text3);margin-right:8px;">Cores:</span>
            ${product.colors.map(c => `<span style="padding:6px 12px;background:var(--bg-surface);border:1px solid var(--border);border-radius:var(--r-sm);font-size:0.8rem;cursor:pointer;">${c}</span>`).join('')}
        </div>
        <div class="pd-specs-preview">
            ${Object.entries(product.specs).slice(0, 6).map(([key, val]) => `
                <div class="pd-spec-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
                    <div><span>${key}</span><br><strong>${val.split(',')[0]}</strong></div>
                </div>
            `).join('')}
        </div>
        <div class="pd-actions">
            <button class="btn-primary" data-id="${product.id}" onclick="addToCart('${product.id}')">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>
                Adicionar ao Carrinho
            </button>
            <button class="btn-outline" onclick="toggleCompare('${product.id}')">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/><polyline points="15 18 9 12 15 6"/></svg>
                Comparar
            </button>
        </div>
    `;

    // Specs table
    document.getElementById('productSpecs').innerHTML = `
        <h3 class="specs-section-title">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#specGrad)" stroke-width="2" stroke-linecap="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><defs><linearGradient id="specGrad" x1="0" y1="0" x2="24" y2="24"><stop stop-color="#7c3aed"/><stop offset="1" stop-color="#2563eb"/></linearGradient></defs></svg>
            Especificações Técnicas
        </h3>
        <table class="specs-table">
            ${Object.entries(product.specs).map(([key, val]) => `<tr><td>${key}</td><td>${val}</td></tr>`).join('')}
        </table>
    `;

    // Reviews
    document.getElementById('productReviews').innerHTML = `
        <h3 class="specs-section-title">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#revGrad)" stroke-width="2" stroke-linecap="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/><defs><linearGradient id="revGrad" x1="0" y1="0" x2="24" y2="24"><stop stop-color="#FFD700"/><stop offset="1" stop-color="#FF6B00"/></linearGradient></defs></svg>
            Avaliações dos Clientes
        </h3>
        ${product.reviewList.map(r => `
            <div class="product-review-item">
                <div class="product-review-header">
                    <div class="review-stars">${Array.from({ length: r.rating }, () => '<svg width="14" height="14" viewBox="0 0 24 24" fill="#FFD700"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>').join('')}</div>
                    <h4>${r.name}</h4>
                    <span style="margin-left:auto;font-size:0.8rem;color:var(--text3)">${r.date}</span>
                </div>
                <p class="product-review-text">${r.text}</p>
            </div>
        `).join('')}
    `;
}

// ===== EVENT LISTENERS =====
document.addEventListener('DOMContentLoaded', function () {

    // Init cart UI
    updateCartUI();

    // Determine which page
    if (window.location.pathname.includes('product.html')) {
        initProductPage();
    } else {
        initMainPage();
    }

    // ===== MOBILE MENU =====
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const closeMenuBtn = document.getElementById('closeMenuBtn');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');

    function openMobileMenu() { mobileMenu.classList.add('active'); mobileMenuOverlay.classList.add('active'); document.body.style.overflow = 'hidden'; }
    function closeMobileMenu() { mobileMenu.classList.remove('active'); mobileMenuOverlay.classList.remove('active'); document.body.style.overflow = ''; }

    if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openMobileMenu);
    if (closeMenuBtn) closeMenuBtn.addEventListener('click', closeMobileMenu);
    if (mobileMenuOverlay) mobileMenuOverlay.addEventListener('click', closeMobileMenu);

    document.querySelectorAll('.mobile-categories a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            closeMobileMenu();
            filterByCategory(this.getAttribute('data-category'));
        });
    });

    if (document.getElementById('mobileLoginBtn')) {
        document.getElementById('mobileLoginBtn').addEventListener('click', function () { closeMobileMenu(); openAuthModal(); });
    }

    // ===== AUTH MODAL =====
    const authModal = document.getElementById('authModal');
    function openAuthModal() { if (authModal) { authModal.classList.add('active'); document.body.style.overflow = 'hidden'; } }
    function closeAuthModal() { if (authModal) { authModal.classList.remove('active'); document.body.style.overflow = ''; } }

    if (document.getElementById('loginBtn')) document.getElementById('loginBtn').addEventListener('click', openAuthModal);
    if (document.getElementById('modalClose')) document.getElementById('modalClose').addEventListener('click', closeAuthModal);
    if (authModal) authModal.addEventListener('click', function (e) { if (e.target === authModal) closeAuthModal(); });

    document.querySelectorAll('.auth-tab').forEach(tab => {
        tab.addEventListener('click', function () {
            document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
            this.classList.add('active');
            document.getElementById(this.getAttribute('data-tab') + 'Form').classList.add('active');
        });
    });

    document.querySelectorAll('.toggle-password').forEach(btn => {
        btn.addEventListener('click', function () {
            const input = document.getElementById(this.getAttribute('data-target'));
            input.type = input.type === 'password' ? 'text' : 'password';
        });
    });

    const regPassword = document.getElementById('regPassword');
    const passwordStrength = document.getElementById('passwordStrength');
    if (regPassword) {
        regPassword.addEventListener('input', function () {
            const val = this.value;
            if (!val.length) { passwordStrength.classList.remove('active'); return; }
            passwordStrength.classList.add('active');
            let strength = 'weak';
            if (val.length >= 8 && /[A-Z]/.test(val) && /[0-9]/.test(val)) strength = 'strong';
            else if (val.length >= 6) strength = 'medium';
            passwordStrength.setAttribute('data-strength', strength);
            const st = passwordStrength.querySelector('.strength-text');
            st.textContent = strength === 'weak' ? 'Fraca' : strength === 'medium' ? 'Média' : 'Forte';
        });
    }

    if (document.getElementById('loginForm')) {
        document.getElementById('loginForm').addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Login realizado com sucesso! Bem-vindo!');
            closeAuthModal();
        });
    }
    if (document.getElementById('registerForm')) {
        document.getElementById('registerForm').addEventListener('submit', function (e) {
            e.preventDefault();
            if (document.getElementById('regPassword').value !== document.getElementById('regConfirmPassword').value) {
                alert('As senhas não coincidem!'); return;
            }
            alert('Conta criada com sucesso! Bem-vindo à TechNova!');
            closeAuthModal();
        });
    }

    // ===== CART SIDEBAR =====
    const cartSidebar = document.getElementById('cartSidebar');
    const cartOverlay = document.getElementById('cartOverlay');

    if (document.getElementById('cartBtn')) {
        document.getElementById('cartBtn').addEventListener('click', function () {
            cartSidebar.classList.add('active');
            cartOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    function closeCart() {
        cartSidebar.classList.remove('active');
        cartOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (document.getElementById('cartClose')) document.getElementById('cartClose').addEventListener('click', closeCart);
    if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

    if (document.getElementById('clearCartBtn')) document.getElementById('clearCartBtn').addEventListener('click', clearCart);

    // ===== COMPARE MODAL =====
    const compareModal = document.getElementById('compareModal');
    if (compareModal) {
        compareModal.addEventListener('click', function (e) { if (e.target === compareModal) { compareModal.classList.remove('active'); document.body.style.overflow = ''; } });
    }
    if (document.getElementById('compareModalClose')) {
        document.getElementById('compareModalClose').addEventListener('click', function () { compareModal.classList.remove('active'); document.body.style.overflow = ''; });
    }
    if (document.getElementById('compareActionBtn')) {
        document.getElementById('compareActionBtn').addEventListener('click', executeCompare);
    }

    // Add compare button listener for header
    // We handle compare buttons directly in the product cards

    // ===== CATEGORY FILTERING =====
    function filterByCategory(category) {
        document.querySelectorAll('.cat-link').forEach(l => l.classList.remove('active'));
        document.querySelector(`.cat-link[data-category="${category}"]`)?.classList.add('active');

        document.querySelectorAll('.product-card').forEach(card => {
            if (category === 'all') {
                card.style.display = '';
            } else if (category === 'ofertas') {
                const p = PRODUCTS.find(pr => pr.id === card.querySelector('.btn-add-cart')?.getAttribute('data-id'));
                card.style.display = (p && (p.flash || p.originalPrice > 0)) ? '' : 'none';
            } else if (category === 'lancamentos') {
                const p = PRODUCTS.find(pr => pr.id === card.querySelector('.btn-add-cart')?.getAttribute('data-id'));
                card.style.display = (p && p.launch) ? '' : 'none';
            } else {
                card.style.display = card.getAttribute('data-category') === category ? '' : 'none';
            }
        });

        // Scroll to products
        const section = document.getElementById('allProducts');
        if (section) section.scrollIntoView({ behavior: 'smooth' });
    }

    document.querySelectorAll('.cat-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            filterByCategory(this.getAttribute('data-category'));
        });
    });

    // Category cards click
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', function () {
            filterByCategory(this.getAttribute('data-category'));
        });
    });

    // ===== SEARCH =====
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                const query = this.value.toLowerCase().trim();
                if (!query) return;
                document.querySelectorAll('.product-card').forEach(card => {
                    const name = card.querySelector('.product-name')?.textContent.toLowerCase() || '';
                    const brand = card.querySelector('.product-brand')?.textContent.toLowerCase() || '';
                    const match = name.includes(query) || brand.includes(query);
                    card.style.display = match ? '' : 'none';
                    if (match) card.style.order = '-1';
                });
                const section = document.getElementById('allProducts');
                if (section) section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // ===== HERO CAROUSEL =====
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    let carouselInterval;

    function goToSlide(index) {
        if (slides.length === 0) return;
        slides[currentSlide].classList.remove('active');
        dots[currentSlide]?.classList.remove('active');
        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        dots[currentSlide]?.classList.add('active');
    }

    function startCarousel() { carouselInterval = setInterval(() => goToSlide(currentSlide + 1), 5000); }
    function stopCarousel() { clearInterval(carouselInterval); }

    if (document.getElementById('nextBtn')) document.getElementById('nextBtn').addEventListener('click', () => { stopCarousel(); goToSlide(currentSlide + 1); startCarousel(); });
    if (document.getElementById('prevBtn')) document.getElementById('prevBtn').addEventListener('click', () => { stopCarousel(); goToSlide(currentSlide - 1); startCarousel(); });
    dots.forEach(dot => dot.addEventListener('click', function () { stopCarousel(); goToSlide(+this.getAttribute('data-index')); startCarousel(); }));

    // Touch swipe
    let touchStartX = 0;
    const carouselEl = document.querySelector('.carousel-container');
    if (carouselEl) {
        carouselEl.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
        carouselEl.addEventListener('touchend', e => {
            const diff = touchStartX - e.changedTouches[0].screenX;
            if (Math.abs(diff) > 50) { stopCarousel(); goToSlide(diff > 0 ? currentSlide + 1 : currentSlide - 1); startCarousel(); }
        }, { passive: true });
    }
    startCarousel();

    // ===== COUNTDOWN =====
    function updateCountdown() {
        const now = new Date();
        const end = new Date();
        end.setHours(23, 59, 59, 999);
        const diff = end - now;
        const h = document.getElementById('hours');
        const m = document.getElementById('minutes');
        const s = document.getElementById('seconds');
        if (h) h.textContent = Math.floor(diff / 3600000).toString().padStart(2, '0');
        if (m) m.textContent = Math.floor((diff % 3600000) / 60000).toString().padStart(2, '0');
        if (s) s.textContent = Math.floor((diff % 60000) / 1000).toString().padStart(2, '0');
    }
    updateCountdown();
    setInterval(updateCountdown, 1000);

    // ===== REVIEWS CAROUSEL =====
    const reviewsTrack = document.getElementById('reviewsTrack');
    if (reviewsTrack) {
        const reviewCards = reviewsTrack.querySelectorAll('.review-card');
        let currentReview = 0;
        let cardWidth = 0;
        let perView = 3;

        function updateReviewWidth() {
            if (reviewCards.length === 0) return;
            cardWidth = reviewCards[0].offsetWidth + 20;
            if (window.innerWidth <= 480) perView = 1;
            else if (window.innerWidth <= 768) perView = 2;
            else perView = 3;
        }

        function moveReview(dir) {
            const max = Math.max(0, reviewCards.length - perView);
            currentReview = Math.max(0, Math.min(currentReview + dir, max));
            reviewsTrack.style.transform = `translateX(-${currentReview * cardWidth}px)`;
        }

        if (document.getElementById('prevReview')) document.getElementById('prevReview').addEventListener('click', () => moveReview(-1));
        if (document.getElementById('nextReview')) document.getElementById('nextReview').addEventListener('click', () => moveReview(1));

        updateReviewWidth();
        window.addEventListener('resize', () => { updateReviewWidth(); currentReview = 0; reviewsTrack.style.transform = 'translateX(0)'; });
    }

    // ===== NEWSLETTER =====
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const email = this.querySelector('input').value;
            alert('Obrigado! Você recebeu 10% de desconto. Verifique seu e-mail: ' + email);
            this.querySelector('input').value = '';
        });
    }

    // ===== BACK TO TOP =====
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', function () {
            backToTop.classList.toggle('visible', window.scrollY > 400);
            if (window.scrollY > 10) document.getElementById('header')?.style.setProperty('box-shadow', 'var(--shadow)');
            else document.getElementById('header')?.style.setProperty('box-shadow', 'none');
        });
        backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    // ===== HEADER AUTO-HIDE =====
    let lastScroll = 0;
    window.addEventListener('scroll', function () {
        const current = window.scrollY;
        if (current > lastScroll && current > 200) document.getElementById('header').style.transform = 'translateY(-100%)';
        else document.getElementById('header').style.transform = 'translateY(0)';
        lastScroll = current;
    });

    // ===== INTERSECTION OBSERVER =====
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.product-card, .category-card, .launch-card, .review-card, .promo-card').forEach(el => observer.observe(el));

    // ===== KEYBOARD =====
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeAuthModal();
            closeMobileMenu();
            closeCart();
            if (compareModal) { compareModal.classList.remove('active'); document.body.style.overflow = ''; }
        }
    });
});
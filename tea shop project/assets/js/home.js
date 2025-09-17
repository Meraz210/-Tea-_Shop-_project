// Enhanced Tea menu data with more varieties
        const teaMenu = [
            {
                id: 1,
                name: "Sylhet Special Black Tea",
                price: 150,
                description: "Premium black tea from Sylhet gardens with rich, bold flavor and malty notes",
                image: "🫖",
                category: "Black Tea",
                rating: 4.8,
                inStock: true,
                featured: true
            },
            {
                id: 2,
                name: "Chittagong Green Tea",
                price: 180,
                description: "Fresh green tea with delicate taste and natural antioxidants from coastal gardens",
                image: "🍵",
                category: "Green Tea",
                rating: 4.7,
                inStock: true,
                featured: false
            },
            {
                id: 3,
                name: "Masala Chai Special",
                price: 120,
                description: "Traditional spiced tea with cardamom, cinnamon, ginger, and secret spice blend",
                image: "☕",
                category: "Spiced Tea",
                rating: 4.9,
                inStock: true,
                featured: true
            },
            {
                id: 4,
                name: "Earl Grey Premium",
                price: 200,
                description: "Classic Earl Grey with bergamot oil, cornflower petals, and lavender hints",
                image: "🫖",
                category: "Black Tea",
                rating: 4.6,
                inStock: true,
                featured: false
            },
            {
                id: 5,
                name: "Jasmine Dragon Pearls",
                price: 250,
                description: "Hand-rolled green tea pearls scented with fresh jasmine flowers",
                image: "🍵",
                category: "Green Tea",
                rating: 4.8,
                inStock: true,
                featured: true
            },
            {
                id: 6,
                name: "Lemon Honey Tea",
                price: 140,
                description: "Refreshing blend with natural lemon zest and pure Sundarbans honey",
                image: "🍋",
                category: "Herbal Tea",
                rating: 4.5,
                inStock: true,
                featured: false
            },
            {
                id: 7,
                name: "Oolong Supreme",
                price: 220,
                description: "Semi-fermented tea with complex flavor profile and floral undertones",
                image: "🫖",
                category: "Oolong Tea",
                rating: 4.7,
                inStock: true,
                featured: false
            },
            {
                id: 8,
                name: "Mint Fresh Tea",
                price: 130,
                description: "Cooling mint tea perfect for hot Bangladesh weather with spearmint leaves",
                image: "🌿",
                category: "Herbal Tea",
                rating: 4.4,
                inStock: true,
                featured: false
            },
            {
                id: 9,
                name: "Royal Breakfast Blend",
                price: 170,
                description: "Strong morning blend perfect with milk and sugar, energizing start",
                image: "☕",
                category: "Black Tea",
                rating: 4.6,
                inStock: true,
                featured: false
            },
            {
                id: 10,
                name: "Darjeeling Muscatel",
                price: 280,
                description: "Premium Darjeeling with distinctive muscatel flavor from high-altitude gardens",
                image: "🫖",
                category: "Black Tea",
                rating: 4.9,
                inStock: true,
                featured: true
            },
            {
                id: 11,
                name: "White Peony Tea",
                price: 320,
                description: "Delicate white tea with subtle sweetness and floral notes, rare variety",
                image: "🤍",
                category: "White Tea",
                rating: 4.8,
                inStock: true,
                featured: true
            },
            {
                id: 12,
                name: "Ginger Turmeric Blend",
                price: 110,
                description: "Warming spice blend with anti-inflammatory benefits and healing properties",
                image: "🧡",
                category: "Herbal Tea",
                rating: 4.3,
                inStock: true,
                featured: false
            },
            {
                id: 13,
                name: "Rose Garden Tea",
                price: 190,
                description: "Romantic blend with dried rose petals and black tea, aromatic experience",
                image: "🌹",
                category: "Floral Tea",
                rating: 4.5,
                inStock: true,
                featured: false
            },
            {
                id: 14,
                name: "Chamomile Dreams",
                price: 125,
                description: "Soothing chamomile flowers for relaxation and peaceful sleep",
                image: "🌼",
                category: "Herbal Tea",
                rating: 4.6,
                inStock: true,
                featured: false
            },
            {
                id: 15,
                name: "Pu-erh Aged Tea",
                price: 300,
                description: "Aged fermented tea with deep, earthy complexity and smooth finish",
                image: "🍂",
                category: "Pu-erh Tea",
                rating: 4.7,
                inStock: true,
                featured: true
            },
            {
                id: 16,
                name: "Cardamom Elaichi Tea",
                price: 135,
                description: "Aromatic green cardamom with black tea base, traditional Bengali style",
                image: "💚",
                category: "Spiced Tea",
                rating: 4.4,
                inStock: true,
                featured: false
            },
            {
                id: 17,
                name: "Himalayan Gold",
                price: 260,
                description: "High-altitude tea from Nepal with golden tips and mountain freshness",
                image: "🏔️",
                category: "Black Tea",
                rating: 4.8,
                inStock: true,
                featured: true
            },
            {
                id: 18,
                name: "Lavender Mint Fusion",
                price: 155,
                description: "Calming lavender with refreshing mint leaves, perfect evening blend",
                image: "💜",
                category: "Herbal Tea",
                rating: 4.5,
                inStock: true,
                featured: false
            },
            {
                id: 19,
                name: "Dragon Well Green",
                price: 210,
                description: "Classic Chinese green tea with flat, tender leaves and nutty flavor",
                image: "🐉",
                category: "Green Tea",
                rating: 4.7,
                inStock: true,
                featured: false
            },
            {
                id: 20,
                name: "Cinnamon Spice Chai",
                price: 115,
                description: "Warming cinnamon with traditional chai spices, comfort in a cup",
                image: "🤎",
                category: "Spiced Tea",
                rating: 4.3,
                inStock: true,
                featured: false
            },
            {
                id: 21,
                name: "Lychee Oolong",
                price: 240,
                description: "Taiwanese oolong infused with sweet lychee flavor, exotic taste",
                image: "🍑",
                category: "Oolong Tea",
                rating: 4.6,
                inStock: true,
                featured: false
            },
            {
                id: 22,
                name: "Hibiscus Berry Blend",
                price: 145,
                description: "Tart hibiscus with mixed berry flavors, caffeine-free and refreshing",
                image: "🌺",
                category: "Herbal Tea",
                rating: 4.4,
                inStock: true,
                featured: false
            },
            {
                id: 23,
                name: "Assam Bold Breakfast",
                price: 160,
                description: "Strong Assam tea perfect for morning energy boost with robust flavor",
                image: "☕",
                category: "Black Tea",
                rating: 4.5,
                inStock: true,
                featured: false
            },
            {
                id: 24,
                name: "Vanilla Rooibos",
                price: 165,
                description: "Naturally sweet South African red bush with vanilla, caffeine-free",
                image: "🍦",
                category: "Rooibos Tea",
                rating: 4.4,
                inStock: true,
                featured: false
            },
            {
                id: 25,
                name: "Matcha Premium",
                price: 350,
                description: "Ceremonial grade Japanese matcha powder, vibrant green and energizing",
                image: "🍃",
                category: "Green Tea",
                rating: 4.9,
                inStock: true,
                featured: true
            },
            {
                id: 26,
                name: "Smoky Lapsang",
                price: 230,
                description: "Distinctive smoky black tea with pine-smoked flavor, unique experience",
                image: "🔥",
                category: "Black Tea",
                rating: 4.2,
                inStock: true,
                featured: false
            },
            {
                id: 27,
                name: "Butterfly Pea Flower",
                price: 175,
                description: "Color-changing blue tea with antioxidants, magical visual experience",
                image: "🦋",
                category: "Herbal Tea",
                rating: 4.6,
                inStock: true,
                featured: true
            },
            {
                id: 28,
                name: "Moroccan Mint",
                price: 140,
                description: "Traditional North African mint tea with spearmint and green tea base",
                image: "🌿",
                category: "Green Tea",
                rating: 4.5,
                inStock: true,
                featured: false
            },
            {
                id: 29,
                name: "Thai Iced Tea Mix",
                price: 185,
                description: "Sweet and creamy Thai-style tea blend, perfect for iced preparation",
                image: "🧊",
                category: "Spiced Tea",
                rating: 4.7,
                inStock: true,
                featured: false
            },
            {
                id: 30,
                name: "Bengal Spice Masala",
                price: 125,
                description: "Local Bengali spice blend with black pepper, cloves, and bay leaves",
                image: "🌶️",
                category: "Spiced Tea",
                rating: 4.8,
                inStock: true,
                featured: true
            }
        ];

        let cart = [];
        let filteredTeas = [...teaMenu];
        let currentCategory = 'all';

        // Initialize the website
        document.addEventListener('DOMContentLoaded', function() {
            // Hide loading screen after 2 seconds
            setTimeout(() => {
                document.getElementById('loadingScreen').style.display = 'none';
                document.body.style.overflow = 'auto';
            }, 2000);

            renderMenu();
            updateCartDisplay();
            setupCategoryFilters();
            setupSearch();
            animateStats();
            setupScrollEffects();
        });

        // Setup category filters
        function setupCategoryFilters() {
            const categories = [...new Set(teaMenu.map(tea => tea.category))];
            const filtersContainer = document.getElementById('categoryFilters');
            
            categories.forEach(category => {
                const button = document.createElement('button');
                button.className = 'category-filter px-4 py-2 rounded-full bg-gray-200 text-gray-700 font-medium';
                button.textContent = category;
                button.setAttribute('data-category', category.toLowerCase().replace(' ', '-'));
                button.addEventListener('click', () => filterByCategory(category));
                filtersContainer.appendChild(button);
            });
        }

        // Filter teas by category
        function filterByCategory(category) {
            currentCategory = category === 'All Teas' ? 'all' : category;
            
            // Update active filter button
            document.querySelectorAll('.category-filter').forEach(btn => {
                btn.classList.remove('active');
            });
            event.target.classList.add('active');
            
            // Filter teas
            if (category === 'All Teas') {
                filteredTeas = [...teaMenu];
            } else {
                filteredTeas = teaMenu.filter(tea => tea.category === category);
            }
            
            renderMenu();
        }

        // Setup search functionality
        function setupSearch() {
            const searchInput = document.getElementById('searchInput');
            searchInput.addEventListener('input', (e) => {
                const searchTerm = e.target.value.toLowerCase();
                
                if (searchTerm === '') {
                    filteredTeas = currentCategory === 'all' ? 
                        [...teaMenu] : 
                        teaMenu.filter(tea => tea.category === currentCategory);
                } else {
                    const baseFilter = currentCategory === 'all' ? 
                        teaMenu : 
                        teaMenu.filter(tea => tea.category === currentCategory);
                    
                    filteredTeas = baseFilter.filter(tea => 
                        tea.name.toLowerCase().includes(searchTerm) ||
                        tea.description.toLowerCase().includes(searchTerm) ||
                        tea.category.toLowerCase().includes(searchTerm)
                    );
                }
                
                renderMenu();
            });
        }

        // Render menu items
        function renderMenu() {
            const menuGrid = document.getElementById('menuGrid');
            const noResults = document.getElementById('noResults');
            
            if (filteredTeas.length === 0) {
                menuGrid.innerHTML = '';
                noResults.classList.remove('hidden');
                return;
            }
            
            noResults.classList.add('hidden');
            menuGrid.innerHTML = '';

            filteredTeas.forEach((tea, index) => {
                const teaCard = document.createElement('div');
                teaCard.className = 'tea-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 fade-in';
                teaCard.style.animationDelay = `${index * 0.1}s`;
                
                const stockStatus = tea.inStock ? 
                    '<span class="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">In Stock</span>' :
                    '<span class="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">Out of Stock</span>';
                
                const featuredBadge = tea.featured ? 
                    '<div class="absolute top-3 left-3 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">⭐ Featured</div>' : '';
                
                const ratingStars = '⭐'.repeat(Math.floor(tea.rating)) + (tea.rating % 1 >= 0.5 ? '⭐' : '');
                
                teaCard.innerHTML = `
                    <div class="relative">
                        ${featuredBadge}
                        <div class="p-6">
                            <div class="text-5xl mb-4 text-center tea-steam">${tea.image}</div>
                            <h3 class="text-xl font-bold mb-2 text-gray-900">${tea.name}</h3>
                            <p class="text-gray-600 mb-3 text-sm leading-relaxed">${tea.description}</p>
                            <div class="flex justify-between items-center mb-3">
                                <span class="text-2xl font-bold text-green-600">৳${tea.price}</span>
                                <div class="text-right">
                                    <div class="text-xs text-gray-500 mb-1">${ratingStars} ${tea.rating}</div>
                                    ${stockStatus}
                                </div>
                            </div>
                            <div class="mb-4">
                                <span class="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full">${tea.category}</span>
                            </div>
                            <div class="flex items-center space-x-2">
                                <button onclick="decreaseQuantity(${tea.id})" class="bg-gray-200 hover:bg-gray-300 text-gray-700 w-10 h-10 rounded-full flex items-center justify-center transition-all transform hover:scale-110">
                                    <i class="fas fa-minus text-sm"></i>
                                </button>
                                <input type="number" id="qty-${tea.id}" value="1" min="1" max="10" class="w-16 text-center border border-gray-300 rounded-lg px-2 py-2 font-semibold">
                                <button onclick="increaseQuantity(${tea.id})" class="bg-gray-200 hover:bg-gray-300 text-gray-700 w-10 h-10 rounded-full flex items-center justify-center transition-all transform hover:scale-110">
                                    <i class="fas fa-plus text-sm"></i>
                                </button>
                                <button onclick="addToCart(${tea.id})" class="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-semibold transition-all transform hover:scale-105 ml-2 ${!tea.inStock ? 'opacity-50 cursor-not-allowed' : ''}" ${!tea.inStock ? 'disabled' : ''}>
                                    <i class="fas fa-cart-plus mr-2"></i>Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                `;
                menuGrid.appendChild(teaCard);
            });
        }

        // Quantity controls
        function increaseQuantity(teaId) {
            const qtyInput = document.getElementById(`qty-${teaId}`);
            const currentQty = parseInt(qtyInput.value);
            if (currentQty < 10) {
                qtyInput.value = currentQty + 1;
            }
        }

        function decreaseQuantity(teaId) {
            const qtyInput = document.getElementById(`qty-${teaId}`);
            const currentQty = parseInt(qtyInput.value);
            if (currentQty > 1) {
                qtyInput.value = currentQty - 1;
            }
        }

        // Add to cart functionality
        function addToCart(teaId) {
            const tea = teaMenu.find(t => t.id === teaId);
            if (!tea.inStock) {
                showNotification('Sorry, this tea is currently out of stock!', 'error');
                return;
            }
            
            const quantity = parseInt(document.getElementById(`qty-${teaId}`).value);
            const existingItem = cart.find(item => item.id === teaId);
            
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                cart.push({
                    ...tea,
                    quantity: quantity
                });
            }
            
            updateCartDisplay();
            showNotification(`Added ${quantity} ${tea.name} to cart!`, 'success');
            
            // Reset quantity to 1
            document.getElementById(`qty-${teaId}`).value = 1;
        }

        // Update cart display
        function updateCartDisplay() {
            const cartCount = document.getElementById('cartCount');
            const mobileCartCount = document.getElementById('mobileCartCount');
            const cartItems = document.getElementById('cartItems');
            const cartSubtotal = document.getElementById('cartSubtotal');
            const cartTotal = document.getElementById('cartTotal');
            const deliveryFee = document.getElementById('deliveryFee');
            const checkoutBtn = document.getElementById('checkoutBtn');
            
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const delivery = subtotal >= 500 ? 0 : (subtotal > 0 ? 50 : 0);
            const total = subtotal + delivery;
            
            cartCount.textContent = totalItems;
            mobileCartCount.textContent = totalItems;
            cartSubtotal.textContent = `৳${subtotal}`;
            cartTotal.textContent = `৳${total}`;
            deliveryFee.textContent = delivery === 0 ? 'Free' : `৳${delivery}`;
            
            if (cart.length === 0) {
                cartItems.innerHTML = `
                    <div class="text-center py-12">
                        <div class="text-6xl mb-4">🛒</div>
                        <p class="text-gray-500">Your cart is empty</p>
                        <p class="text-sm text-gray-400 mt-2">Add some delicious teas to get started!</p>
                    </div>
                `;
                checkoutBtn.disabled = true;
            } else {
                cartItems.innerHTML = cart.map(item => `
                    <div class="flex items-center justify-between py-4 border-b border-gray-100">
                        <div class="flex-1">
                            <div class="flex items-center mb-2">
                                <span class="text-lg mr-2">${item.image}</span>
                                <h4 class="font-semibold text-sm">${item.name}</h4>
                            </div>
                            <p class="text-gray-600 text-xs mb-1">৳${item.price} × ${item.quantity}</p>
                            <p class="text-green-600 font-semibold text-sm">৳${item.price * item.quantity}</p>
                        </div>
                        <div class="flex items-center space-x-2 ml-4">
                            <button onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})" class="text-gray-500 hover:text-gray-700 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
                                <i class="fas fa-minus text-xs"></i>
                            </button>
                            <span class="w-8 text-center text-sm font-semibold">${item.quantity}</span>
                            <button onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})" class="text-gray-500 hover:text-gray-700 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
                                <i class="fas fa-plus text-xs"></i>
                            </button>
                            <button onclick="removeFromCart(${item.id})" class="text-red-500 hover:text-red-700 ml-2 w-8 h-8 rounded-full bg-red-50 hover:bg-red-100 flex items-center justify-center transition-colors">
                                <i class="fas fa-trash text-xs"></i>
                            </button>
                        </div>
                    </div>
                `).join('');
                checkoutBtn.disabled = false;
            }
        }

        // Update cart item quantity
        function updateCartQuantity(teaId, newQuantity) {
            if (newQuantity <= 0) {
                removeFromCart(teaId);
                return;
            }
            
            const item = cart.find(item => item.id === teaId);
            if (item) {
                item.quantity = Math.min(newQuantity, 10); // Max 10 items
                updateCartDisplay();
            }
        }

        // Remove from cart
        function removeFromCart(teaId) {
            const item = cart.find(item => item.id === teaId);
            cart = cart.filter(item => item.id !== teaId);
            updateCartDisplay();
            showNotification(`Removed ${item.name} from cart`, 'info');
        }

        // Toggle cart sidebar
        function toggleCart() {
            const cartSidebar = document.getElementById('cartSidebar');
            const cartOverlay = document.getElementById('cartOverlay');
            
            if (cartSidebar.classList.contains('translate-x-full')) {
                cartSidebar.classList.remove('translate-x-full');
                cartOverlay.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            } else {
                cartSidebar.classList.add('translate-x-full');
                cartOverlay.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }
        }

        // Toggle mobile menu
        function toggleMobileMenu() {
            const mobileMenu = document.getElementById('mobileMenu');
            mobileMenu.classList.toggle('hidden');
        }

        // Checkout functionality
        function checkout() {
            if (cart.length === 0) return;
            
            const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const delivery = subtotal >= 500 ? 0 : 50;
            const total = subtotal + delivery;
            const orderSummary = cart.map(item => `${item.name} × ${item.quantity} = ৳${item.price * item.quantity}`).join('\n');
            
            const orderDetails = `
🐍 SNAKE TEA SHOP ORDER CONFIRMATION 🐍

${orderSummary}

Subtotal: ৳${subtotal}
Delivery: ${delivery === 0 ? 'Free (Order over ৳500)' : `৳${delivery}`}
Total: ৳${total}

Thank you for your order! 
📞 We'll call you within 30 minutes to confirm delivery details.
🚚 Expected delivery: 1-2 hours within Sylhet
📍 Free delivery for orders over ৳500

Order ID: #ST${Date.now().toString().slice(-6)}
            `;
            
            alert(orderDetails);
            
            // Clear cart after order
            cart = [];
            updateCartDisplay();
            toggleCart();
            
            showNotification('Order placed successfully! Check your phone for confirmation call.', 'success');
        }

        // Contact form submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('contactName').value;
            const email = document.getElementById('contactEmail').value;
            const phone = document.getElementById('contactPhone').value;
            const subject = document.getElementById('contactSubject').value;
            const message = document.getElementById('contactMessage').value;
            
            // Simulate form submission with loading
            const submitBtn = e.target.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                showNotification('Thank you for your message! We\'ll get back to you within 24 hours.', 'success');
                this.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });

        // Show notification with enhanced styling
        function showNotification(message, type = 'info') {
            const notification = document.createElement('div');
            const icons = {
                success: 'fas fa-check-circle',
                error: 'fas fa-exclamation-circle',
                info: 'fas fa-info-circle'
            };
            const colors = {
                success: 'bg-green-500',
                error: 'bg-red-500',
                info: 'bg-blue-500'
            };
            
            notification.className = `notification fixed top-20 right-4 z-50 px-6 py-4 rounded-lg shadow-2xl text-white transform translate-x-full transition-all duration-300 max-w-sm ${colors[type]}`;
            notification.innerHTML = `
                <div class="flex items-center">
                    <i class="${icons[type]} mr-3 text-lg"></i>
                    <span class="font-medium">${message}</span>
                </div>
            `;
            
            document.body.appendChild(notification);
            
            // Slide in
            setTimeout(() => {
                notification.classList.remove('translate-x-full');
            }, 100);
            
            // Slide out and remove
            setTimeout(() => {
                notification.classList.add('translate-x-full');
                setTimeout(() => {
                    if (document.body.contains(notification)) {
                        document.body.removeChild(notification);
                    }
                }, 300);
            }, 4000);
        }

        // Animate statistics counters
        function animateStats() {
            const counters = document.querySelectorAll('.stats-counter');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const counter = entry.target;
                        const target = parseInt(counter.getAttribute('data-target'));
                        const increment = target / 50;
                        let current = 0;
                        
                        const updateCounter = () => {
                            if (current < target) {
                                current += increment;
                                counter.textContent = Math.ceil(current);
                                setTimeout(updateCounter, 40);
                            } else {
                                counter.textContent = target;
                            }
                        };
                        
                        updateCounter();
                        observer.unobserve(counter);
                    }
                });
            });
            
            counters.forEach(counter => observer.observe(counter));
        }

        // Setup scroll effects
        function setupScrollEffects() {
            const backToTop = document.getElementById('backToTop');
            
            window.addEventListener('scroll', () => {
                if (window.pageYOffset > 300) {
                    backToTop.classList.remove('hidden');
                } else {
                    backToTop.classList.add('hidden');
                }
            });
            
            backToTop.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

        // Smooth scrolling for navigation links
        function scrollToSection(sectionId) {
            const target = document.getElementById(sectionId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            
            // Close mobile menu if open
            const mobileMenu = document.getElementById('mobileMenu');
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        }

        // Enhanced navigation link handling
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                scrollToSection(targetId);
            });
        });

        // Add some interactive features
        document.addEventListener('keydown', function(e) {
            // Press 'C' to toggle cart
            if (e.key.toLowerCase() === 'c' && !e.ctrlKey && !e.altKey) {
                const activeElement = document.activeElement;
                if (activeElement.tagName !== 'INPUT' && activeElement.tagName !== 'TEXTAREA') {
                    toggleCart();
                }
            }
            
            // Press 'Escape' to close cart
            if (e.key === 'Escape') {
                const cartSidebar = document.getElementById('cartSidebar');
                if (!cartSidebar.classList.contains('translate-x-full')) {
                    toggleCart();
                }
            }
        });

        // Add fade-in animation for elements when they come into view
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);

        // Observe all sections for fade-in animation
        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });

(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'98079b4cc016a48e',t:'MTc1ODEwMTY1NC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();
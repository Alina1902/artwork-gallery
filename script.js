// Simulated data (in a real application, this would come from an API)
const artworks = [
    { id: 1, title: "Sunset Boulevard", artist: "Jane Doe", image: "https://picsum.photos/id/10/300/200", price: 500, category: "Landscape" },
    { id: 2, title: "Mountain Majesty", artist: "John Smith", image: "https://picsum.photos/id/29/300/200", price: 750, category: "Landscape" },
    { id: 3, title: "Ocean Breeze", artist: "Alice Johnson", image: "https://picsum.photos/id/37/300/200", price: 600, category: "Seascape" },
    { id: 4, title: "City Lights", artist: "Bob Wilson", image: "https://picsum.photos/id/42/300/200", price: 800, category: "Urban" },
    { id: 5, title: "Forest Dreams", artist: "Carol Brown", image: "https://picsum.photos/id/65/300/200", price: 550, category: "Landscape" },
    { id: 6, title: "Desert Mirage", artist: "David Lee", image: "https://picsum.photos/id/87/300/200", price: 700, category: "Landscape" },
];


const artists = [
    { id: 1, name: "Jane Doe", bio: "Contemporary artist focusing on urban landscapes", image: "https://picsum.photos/id/64/200/200" },
    { id: 2, name: "John Smith", bio: "Nature photographer turned painter", image: "https://picsum.photos/id/65/200/200" },
    { id: 3, name: "Alice Johnson", bio: "Abstract expressionist with a love for ocean themes", image: "https://picsum.photos/id/66/200/200" },
    { id: 4, name: "Bob Wilson", bio: "Specializes in night scenes and cityscapes", image: "https://picsum.photos/id/67/200/200" },
    { id: 5, name: "Emily Chen", bio: "Watercolor artist inspired by Asian traditions", image: "https://picsum.photos/id/68/200/200" },
    { id: 6, name: "Michael Brown", bio: "Sculptor working with recycled materials", image: "https://picsum.photos/id/69/200/200" },
    { id: 7, name: "Sophia Rodriguez", bio: "Digital artist exploring futuristic themes", image: "https://picsum.photos/id/70/200/200" },
    { id: 8, name: "Ahmed Hassan", bio: "Calligraphy artist blending traditional and modern styles", image: "https://picsum.photos/id/71/200/200" }
];

function createArtworkCard(artwork, index) {
    return `
        <div class="artwork-card" style="animation-delay: ${index * 0.1}s">
            <img src="${artwork.image}" alt="${artwork.title}">
            <h3>${artwork.title}</h3>
            <p>by ${artwork.artist}</p>
            <p>$${artwork.price}</p>
        </div>
    `;
}

function createArtistCard(artist, index) {
    return `
        <div class="artist-card" style="animation-delay: ${index * 0.1}s">
            <img src="${artist.image}" alt="${artist.name}">
            <h3>${artist.name}</h3>
            <p>${artist.bio}</p>
        </div>
    `;
}

let cart = [];

function createArtworkCard(artwork, index) {
    return `
        <div class="artwork-card" style="animation-delay: ${index * 0.1}s">
            <img src="${artwork.image}" alt="${artwork.title}">
            <h3>${artwork.title}</h3>
            <p>by ${artwork.artist}</p>
            <p>$${artwork.price}</p>
            <button class="btn view-details" data-id="${artwork.id}">View Details</button>
            <button class="btn add-to-cart" data-id="${artwork.id}">Add to Cart</button>
        </div>
    `;
}

function createArtistCard(artist, index) {
    return `
        <div class="artist-card" style="animation-delay: ${index * 0.1}s">
            <img src="${artist.image}" alt="${artist.name}">
            <h3>${artist.name}</h3>
            <p>${artist.bio}</p>
            <button class="btn view-profile" data-id="${artist.id}">View Profile</button>
        </div>
    `;
}
function populateCategories() {
    const categories = ['all', ...new Set(artworks.map(artwork => artwork.category))];
    const categoryFilter = document.getElementById('category-filter');
    categoryFilter.innerHTML = ''; // Clear existing options
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category.toLowerCase();
        option.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        categoryFilter.appendChild(option);
    });
}

function populateFeatured() {
    const featured = artworks[0]; // Just use the first artwork as featured for this example
    document.getElementById('featured-artwork').innerHTML = `
        <img src="${featured.image}" alt="${featured.title}">
        <h3>${featured.title}</h3>
        <p>by ${featured.artist}</p>
        <p>$${featured.price}</p>
    `;
}

function populateNewArrivals() {
    const newArrivals = artworks.slice(1, 4); // Use the next 3 artworks as new arrivals
    const grid = document.getElementById('new-arrivals-grid');
    grid.innerHTML = newArrivals.map(createArtworkCard).join('');
}

function populatePopular() {
    const popular = artworks.slice(-3); // Use the last 3 artworks as popular
    const grid = document.getElementById('popular-grid');
    grid.innerHTML = popular.map(createArtworkCard).join('');
}

function populateAllArtworks() {
    const grid = document.getElementById('all-artworks-grid');
    grid.innerHTML = artworks.map(createArtworkCard).join('');
}

function populateArtists() {
    const list = document.getElementById('artists-list');
    list.innerHTML = artists.map(createArtistCard).join('');
}

function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');

    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[href="#${sectionId}"]`).classList.add('active');
}

function showArtworkDetails(artworkId) {
    const artwork = artworks.find(a => a.id === artworkId);
    const detailsHtml = `
        <h2>${artwork.title}</h2>
        <img src="${artwork.image}" alt="${artwork.title}">
        <p>Artist: ${artwork.artist}</p>
        <p>Price: $${artwork.price}</p>
        <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    `;
    document.getElementById('artwork-details').innerHTML = detailsHtml;
    document.getElementById('artwork-details-modal').style.display = 'block';
}

// Function to show artist profile
function showArtistProfile(artistId) {
    const artist = artists.find(a => a.id === artistId);
    if (artist) {
        const profileHtml = `
            <h2>${artist.name}</h2>
            <p>${artist.bio}</p>
            <img src="${artist.image}" alt="${artist.name}">
        `;
        document.getElementById('artist-profile').innerHTML = profileHtml;
        document.getElementById('artist-profile-modal').style.display = 'block'; // Show the modal
    }
}

function addToCart(artworkId) {
    const artwork = artworks.find(a => a.id === artworkId);
    const existingItem = cart.find(item => item.id === artworkId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...artwork, quantity: 1 });
    }
    
    updateCartDisplay();
    showCart();
}

function updateCartDisplay() {
    const cartItemsHtml = cart.map(item => `
        <div class="cart-item">
            <h4>${item.title}</h4>
            <p>$${item.price} x ${item.quantity}</p>
            <button class="btn remove-from-cart" data-id="${item.id}">Remove</button>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    document.getElementById('cart-items').innerHTML = cartItemsHtml;
    document.getElementById('cart-total').innerHTML = `Total: $${total.toFixed(2)}`;
}

function removeFromCart(artworkId) {
    const index = cart.findIndex(item => item.id === artworkId);
    if (index !== -1) {
        if (cart[index].quantity > 1) {
            cart[index].quantity -= 1;
        } else {
            cart.splice(index, 1);
        }
        updateCartDisplay();
    }
}

function showCart() {
    updateCartDisplay();
    document.getElementById('cart-modal').style.display = 'block';
}

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide) => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

function startSlideshow() {
    setInterval(nextSlide, 3000); // Change slide every 3 seconds
}
function createArtworkCard(artwork, index) {
    return `
        <div class="artwork-card" style="animation-delay: ${index * 0.1}s" data-category="${artwork.category}">
            <img src="${artwork.image}" alt="${artwork.title}">
            <h3>${artwork.title}</h3>
            <p>by ${artwork.artist}</p>
            <p>$${artwork.price}</p>
            <p>Category: ${artwork.category}</p>
            <button class="btn view-details" data-id="${artwork.id}">View Details</button>
            <button class="btn add-to-cart" data-id="${artwork.id}">Add to Cart</button>
        </div>
    `;
}
function showCheckout() {
    document.getElementById('checkout-modal').style.display = 'block';
}

function handleCheckoutSubmit(e) {
    e.preventDefault();
    // Here you would typically send the form data to a server
    alert('Thank you for your purchase!');
    cart = [];
    updateCartDisplay();
    document.getElementById('checkout-modal').style.display = 'none';
}

function filterArtworks(category) {
    const artworkCards = document.querySelectorAll('.artwork-card');
    artworkCards.forEach(card => {
        if (category === 'all' || card.dataset.category.toLowerCase() === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function searchArtworks(query) {
    const lowercaseQuery = query.toLowerCase();
    const artworkCards = document.querySelectorAll('.artwork-card');
    artworkCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const artist = card.querySelector('p').textContent.toLowerCase();
        const category = card.dataset.category.toLowerCase();
        if (title.includes(lowercaseQuery) || artist.includes(lowercaseQuery) || category.includes(lowercaseQuery)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}


// Populate the page when it loads
window.addEventListener('load', () => {
    populateFeatured();
    populateNewArrivals();
    populatePopular();
    populateAllArtworks();
    populateArtists();
    startSlideshow();
    populateCategories();
    // Add event listeners for navigation
    document.getElementById('home-btn').addEventListener('click', () => showSection('home-section'));
    document.getElementById('artworks-btn').addEventListener('click', () => showSection('artworks-section'));
    document.getElementById('artists-btn').addEventListener('click', () => showSection('artists-section'));
    document.getElementById('about-btn').addEventListener('click', () => showSection('about-section'));
    const categoryFilter = document.getElementById('category-filter');
    const searchInput = document.getElementById('search-input');
    document.addEventListener('DOMContentLoaded', () => {
        const buttons = document.querySelectorAll('.view-profile-btn');
        buttons.forEach(button => {
            button.addEventListener('click', (event) => {
                const artistId = parseInt(event.target.closest('.artist-card').dataset.artistId);
                showArtistProfile(artistId);
            });
        });
    
        // Close modal functionality
        document.querySelector('.close').addEventListener('click', function() {
            document.getElementById('artist-profile-modal').style.display = 'none';
        });
    });
    // Event listeners for category filter and search
    categoryFilter.addEventListener('change', (e) => filterArtworks(e.target.value));
    searchInput.addEventListener('input', (e) => searchArtworks(e.target.value));

    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('view-details')) {
            showArtworkDetails(parseInt(e.target.dataset.id));
        } else if (e.target.classList.contains('add-to-cart')) {
            addToCart(parseInt(e.target.dataset.id));
        } else if (e.target.classList.contains('view-profile')) {
            showArtistProfile(parseInt(e.target.dataset.id));
        } else if (e.target.classList.contains('close')) {
            e.target.closest('.modal').style.display = 'none';
        } else if (e.target.classList.contains('remove-from-cart')) {
            removeFromCart(parseInt(e.target.dataset.id));
       
        }
    });

    document.getElementById('checkout-btn').addEventListener('click', showCheckout);
    document.getElementById('checkout-form').addEventListener('submit', handleCheckoutSubmit);
    document.querySelector('.slider-nav .next').addEventListener('click', nextSlide);
    document.querySelector('.slider-nav .prev').addEventListener('click', prevSlide);
    document.getElementById('checkout-btn').addEventListener('click', showCheckout);
    document.getElementById('checkout-form').addEventListener('submit', handleCheckoutSubmit);
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
    }
});
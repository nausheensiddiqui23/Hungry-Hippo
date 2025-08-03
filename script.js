const restaurants = [
  {
    name: "Burger King",
    cuisine: "Burger",
    location: "Chowk",
    rating: 4.3,
    image: "assets/images/burger_king.png"
  },
  {
    name: "Pizza Hut",
    cuisine: "Pizza",
    location: "Hazratganj",
    rating: 4.0,
    image: "assets/images/Pizza_hut.svg"
  },
  {
    name: "Behrouz",
    cuisine: "Biryani",
    location: "Lulu Mall",
    rating: 4.5,
    image: "assets/images/behrouz.jpeg"
  },
  {
    name: "Chinese wok",
    cuisine: "Chinese",
    location: "Hazratganj",
    rating: 4.1,
    image: "assets/images/chinese_wok.avif"
  },
  {
    name: "Mubeens",
    cuisine: "Mughlai",
    location: "Akbari Gate",
    rating: 4.5,
    image: "assets/images/mubeens.jpeg"
  },
  {
    name: "The Hazelnut Factory",
    cuisine: "Dessert",
    location: "Aliganj",
    rating: 3.9,
    image: "assets/images/thf.jpeg"
  }
];

const listContainer = document.getElementById('restaurant-list');

function displayRestaurants(data) {
  listContainer.innerHTML = '';

  data.forEach((res) => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
      <img src="${res.image}" alt="${res.name}">
      <div class="card-body">
        <h3>${res.name}</h3>
        <p>${res.cuisine} | ${res.location}</p>
        <p>⭐ ${res.rating}</p>
        <button class="view-btn" data-name="${res.name}">View More</button>
        <button class="cart-btn" data-name="${res.name}">Add to Cart</button>

      </div>
    `;
    listContainer.appendChild(card);
  });
}

displayRestaurants(restaurants);

// 🔍 Search filter
const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('keyup', (event) => {
  const query = event.target.value.toLowerCase();
  const filtered = restaurants.filter((res) =>
    res.name.toLowerCase().includes(query) ||
    res.cuisine.toLowerCase().includes(query) ||
    res.location.toLowerCase().includes(query)
  );
  displayRestaurants(filtered);
});

// 👆 View More modal handler
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('view-btn')) {
    const name = e.target.getAttribute('data-name');
    const restaurant = restaurants.find(r => r.name === name);
    if (restaurant) {
      showDetails(restaurant);
    }
  }
});

// 💡 Modal function
function showDetails(restaurant) {
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-btn">&times;</span>
      <h2>${restaurant.name}</h2>
      <img src="${restaurant.image}" alt="${restaurant.name}" />
      <p><strong>Cuisine:</strong> ${restaurant.cuisine}</p>
      <p><strong>Location:</strong> ${restaurant.location}</p>
      <p><strong>Rating:</strong> ⭐ ${restaurant.rating}</p>
      <p><strong>Description:</strong> A great place to enjoy ${restaurant.cuisine} food.</p>
    </div>
  `;
  document.body.appendChild(modal);

  document.querySelector('.close-btn').onclick = () => modal.remove();
}
const cartItems = [];
const cartList = document.getElementById('cart-items');
const emptyCartMsg = document.getElementById('empty-cart-msg');
const clearCartBtn = document.getElementById('clear-cart');
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('cart-btn')) {
    const name = e.target.getAttribute('data-name');
    const restaurant = restaurants.find(r => r.name === name);
    if (restaurant) {
      addToCart(restaurant);
    }
  }
});
function addToCart(restaurant) {
  cartItems.push(restaurant);
  renderCart();
}
function renderCart() {
  cartList.innerHTML = '';
  if (cartItems.length === 0) {
    emptyCartMsg.style.display = 'block';
  } else {
    emptyCartMsg.style.display = 'none';
    cartItems.forEach((item, index) => {
      const li = document.createElement('li');
      li.textContent = `${item.name} (${item.cuisine})`;
      cartList.appendChild(li);
    });
  }
}
clearCartBtn.addEventListener('click', () => {
  cartItems.length = 0; // Clear the cart array
  renderCart(); // Re-render the cart
});

// 🍔 Category buttons
document.addEventListener('DOMContentLoaded', () => {
  displayRestaurants(restaurants);
  
const categoryButtons = document.querySelectorAll('.category');
categoryButtons.forEach(button => {
  button.addEventListener('click', () => {
    categoryButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const selectedCuisine = button.textContent.trim();
    if (selectedCuisine === 'All') {
      displayRestaurants(restaurants);
    } else {
      const filtered = restaurants.filter(res =>
        res.cuisine.toLowerCase() === selectedCuisine.toLowerCase()
      );
      displayRestaurants(filtered);
    }
  });
});

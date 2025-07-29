const restaurants = [
{
    name: "Burger King",
    cuisine: "Burger",
    location: "Delhi",
    rating: 4.3,
    image: "assets/images/burger_king.png"

},

{
    name: "Pizza Hut",
    cuisine: "Pizza",
    location: "Mumbai",
    rating: 4.0,
    image: "assets/images/Pizza_hut.svg",


},

{
    name: "Behrouz",
    cuisine: "Biryani",
    location: "Hyderabad",
    rating: 4.5,
    image: "assets/images/behrouz.jpeg"
},
{
  name: "Chinese wok",
  cuisine: "Chinese",
  location: "Kolkata",
  rating: 4.1 , 
  image: "assets/images/chinese_wok.avif"

},
{
  name: "Mubeens",
  cuisine: "Mughlai",
  location: "Lucknow",
  rating: 4.5 , 
  image: "assets/images/mubeens.jpeg"

},
{
  name: "The Hazelnut Factory",
  cuisine: "Dessert",
  location: "Lucknow",
  rating: 3.9 , 
  image: "assets/images/thf.jpeg"

}
];


const listContainer = document.getElementById('restaurant-list');

function displayRestaurants(data) {
    listContainer.innerHTML = '';

    data.forEach ((res) => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
         <img src="${res.image}" alt="${res.name}">
         <div class="card-body">
         <h3>${res.name}</h3>
         <p>${res.cuisine} | ${res.location}</p>
         <p>⭐ ${res.rating}</p>
         <button class="view-btn" data-name="${res.name}">View More</button>
         </div>
         
         `;
         listContainer.appendChild(card);
    });
}

displayRestaurants(restaurants);
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
const categoryButtons = document.querySelectorAll('.category');

categoryButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove 'active' from all
    categoryButtons.forEach(btn => btn.classList.remove('active'));

    // Add 'active' to clicked
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

const restaurants = [
{
    name: "Burger King",
    cuisine: "Fast Food",
    location: "Delhi",
    rating: 4.3,
    image: "assets/images/burger_king.png"

},

{
    name: "Pizza Hut",
    cuisine: "Italian",
    location: "Mumbai",
    rating: 4.0,
    image: "assets/images/Pizza_hut.svg",


},

{
    name: "Behrouz",
    cuisine: "Indian",
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
         </div>
         
         `;
         listContainer.appendChild(card);
    });
}

displayRestaurants(restaurants);
const searchBar = document.getElementById('searchbar');

searchBar.addEventListener('keyup', (event) => {
  const query = event.target.value.toLowerCase();

  
})
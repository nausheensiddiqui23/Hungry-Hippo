const restaurants = [
{
    name: "Burger King",
    cuisine: "Fast Food",
    location: "Delhi",
    rating: 4.3,
    image: "assets/images/burger king.png"

},

{
    name: "Pizza Hut",
    cuisine: "Italian",
    location: "Mumbai",
    rating: 4.0,
    image: "assets/images/Pizza_hut_logo_international.svg"

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
  image: "assets/images/chinese wok.avif"

}
];


const listContainer = document.getElementById('restaurent-list');

function displayRestaurants(data) {
    listContainer.innerHTML = '';

    data.forEach ((res) => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
        <img src=">
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
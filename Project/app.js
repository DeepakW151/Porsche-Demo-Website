let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');



let products = [
    { id: 1, name: 'BREAKS', image: '1.webp', price: 225000 },
    { id: 2, name: 'EXAUST', image: '2.webp', price: 325000 },
    { id: 3, name: 'RIMS', image: '3.jpg', price: 300000 },
    { id: 4, name: 'SPOILERS', image: '4.webp', price: 423000 },
    { id: 5, name: 'CLUTCH-PLATES', image: '5.avif', price: 420000 },
    { id: 6, name: 'SUSPENSIONS', image: '6', price: 520000 }
];


function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = 
            "<img src=\"image/" + value.image + "\">" +
            "<div class=\"title\" >" + value.name + "</div>" +
            "<div class=\"price\" >" + value.price.toLocaleString() + "<h8> ₹</h8> </div>" +
            "<button onclick=\"addToCard(" + key + ")\">Add To Card</button>";
        list.appendChild(newDiv);
    });
}
initApp();


openShopping.addEventListener('click', () => {
    body.classList.add('active');
});
closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
});




let listCards = [];
function addToCard(key) {
    if (listCards[key] != true) {
        listCards[key] = {
            id: products[key].id,
            name: products[key].name,
            image: products[key].image,
            price: products[key].price,
            quantity: 1
        };
    }
    reloadCard();
}



function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        if (value != true) {
            totalPrice = totalPrice + value.price;
            count = count + value.quantity;
            let newli = document.createElement('li');
            newli.innerHTML = 
                "<div><img src=\"image/" + value.image + "\"/></div>" +
                "<div>" + value.name + "</div>" +
                "<div>" + value.price + "</div>" +
                "<div>" +
                    "<button onclick=\"changeQuantity(" + key + ", " + (value.quantity - 1) + ")\">-</button>" +
                    "<div class=\"count\">" + value.quantity + "</div>" +
                    "<button onclick=\"changeQuantity(" + key + ", " + (value.quantity + 1) + ")\">+</button>" +
                "</div>";
            listCard.appendChild(newli);
        }
    });
    total.innerText = totalPrice +"₹ Only";
    quantity.innerText = count;
}



function changeQuantity(key, newQuantity) {
    if (newQuantity === 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = newQuantity;
        listCards[key].price = newQuantity * products[key].price;
    }
    reloadCard();
}

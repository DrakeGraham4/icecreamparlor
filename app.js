const iceCream = [{
    id: 1,
    name: 'Cookie Dough',
    image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg', price: 1
},
    {
        id: 2,
        name: 'Vanilla',
        image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg', price: 1
    }, {
        id: 3,
        name: 'Strawberry',
        image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
        price: 2
    }
]


const vessels = [
    {
        id: 5,
        name: 'Waffle Cone',
        image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
        price: 2
    },
    {
        id: 6,
        name: 'Waffle Bowl',
        image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
        price: 4
    }]

    // TODO PAY ATTENTION TO GLOBAL VARIABLES
    cart = []
    total = 0

function drawMenu() {
    
    let template = ''
    for (let i = 0; i < iceCream.length; i++) {
        // Alias, iceCream turns to item
        const item = iceCream[i];
        template +=`
        <div class="iceCream-item col-6 p-2 selectable" onclick="buyIceCream(${item.id})">
            <img class="img-fluid" src="${item.image}" alt="">
            <div class="d-flex justify-content-between">
                <h6>${item.name}</h6>
                    <b>$${item.price}</b>
            </div>
        </div>`
    }
    // console.log(template);
    document.getElementById('ice-cream').innerHTML = template
}

function drawVessels() {
    let template = ''
    for (let i = 0; i < vessels.length; i++) {
        const cones = vessels[i];
        template += `<div class="vessel-item col-6 p-2 selectable" onclick="buyVessels(${cones.id})">
            <img class="img-fluid" src="${cones.image}" alt="">
            <div class="d-flex justify-content-between">
                <h6>${cones.name}</h6>
                    <b>$${cones.price}</b>
            </div>
        </div>`
        
    }
    console.log(template);
    document.getElementById('vessel').innerHTML = template
}

function drawCart() {
    let template = ''
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        template +=` <div class="col-12">
        <div class="d-flex justify-content-between p-2">
        <h6>${item.name}</h6>
        <b>$${item.price}</b>
        </div>
        </div>`
        
    }
    document.getElementById('cart').innerHTML = template
    document.getElementById('total').innerText = total
}

function buyIceCream(iceCreamId) {
    let itemToAdd = iceCream.find(ici => ici.id == iceCreamId)
    console.log('hers is our item: ', iceCreamId);
    cart.push(itemToAdd)
    total += itemToAdd.price
    console.log(total);
    drawCart()
}

function buyVessels(vesselsId) {
    
}

function purchase() {
    cart = []
    total = 0
    drawCart()
}


drawVessels()
drawMenu()
drawCart()
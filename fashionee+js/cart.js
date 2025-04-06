const products = [
    {
        "id": 1,
        "name": "Textured turtleneck with zip",
        "price": 52.99,
        "oldPrice": 53.99,
        "isSale": true,
        "isNew": false,
        "categories": [
            "Men"
        ],
        "color": "Brown",
        "image": "https://fs-thb01.getcourse.ru/fileservice/file/thumbnail/h/54cdbf69f8e60ba13e2e795cd495567f.png/s/f1200x/a/534336/sc/265"
    },
    {
        "id": 2,
        "name": "Spray wrap skirt",
        "price": 35.99,
        "oldPrice": null,
        "isSale": false,
        "isNew": false,
        "categories": [
            "Women"
        ],
        "color": "Red",
        "image": "https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/061c4e0891851d157cbcf6984295b7ed.png/s/f1200x/a/534336/sc/111"
    },
    {
        "id": 3,
        "name": "Short shorts with straps",
        "price": 20.99,
        "oldPrice": null,
        "isSale": false,
        "isNew": false,
        "categories": [
            "Men"
        ],
        "color": "Blue",
        "image": "https://fs-thb02.getcourse.ru/fileservice/file/thumbnail/h/b56c73f8da5404fddf58b7a5a540130f.png/s/f1200x/a/534336/sc/238"
    },
    {
        "id": 4,
        "name": "Fashionee - catton shirt",
        "price": 110.99,
        "oldPrice": null,
        "isSale": false,
        "isNew": false,
        "categories": [
            "Men"
        ],
        "color": "Brown",
        "image": "https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/911e17505fb10478ce04f078943bf74e.png/s/f1200x/a/534336/sc/55"
    },
    {
        "id": 5,
        "name": "Warm casual sweater",
        "price": 80.99,
        "oldPrice": null,
        "isSale": false,
        "isNew": true,
        "categories": [
            "Women"
        ],
        "color": "Brown",
        "image": "https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/ec9bc0e735f3c75eab9d4d8c4f8630fe.png/s/f1200x/a/534336/sc/400"
    },
    {
        "id": 6,
        "name": "Retro style handbag",
        "price": 45.99,
        "oldPrice": 52.99,
        "isSale": true,
        "isNew": false,
        "categories": [
            "Women",
            "Accessories"
        ],
        "color": "Brown",
        "image": "https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/c3d454c3b46f6a62d4d036f928a56705.png/s/f1200x/a/534336/sc/100"
    },
    {
        "id": 7,
        "name": "Style Handbag",
        "price": 180.99,
        "oldPrice": null,
        "isSale": false,
        "isNew": false,
        "categories": [
            "Women",
            "Accessories"
        ],
        "color": "Black",
        "image": "https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/14e10d5f0aaf5e8405fad852e8344182.png/s/f1200x/a/534336/sc/138"
    },
    {
        "id": 8,
        "name": "Blouse with insert and ruffles",
        "price": 30.99,
        "oldPrice": null,
        "isSale": false,
        "isNew": true,
        "categories": [
            "Women"
        ],
        "color": "Blue",
        "image": "https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/2b269ee1c83fd5758f3763f9a45a5605.png/s/f1200x/a/534336/sc/116"
    },
    {
        "id": 9,
        "name": "Long oversized T-shirt",
        "price": 30.99,
        "oldPrice": 52.99,
        "isSale": true,
        "isNew": false,
        "categories": [
            "Men"
        ],
        "color": "Blue",
        "image": "https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/92be8394b48b6911690745902643f92d.png/s/f1200x/a/534336/sc/439"
    },
    {
        "id": 10,
        "name": "Stylish and comfortable cap",
        "price": 40.99,
        "oldPrice": null,
        "isSale": false,
        "isNew": false,
        "categories": [
            "Accessories"
        ],
        "color": "White",
        "image": "https://fs-thb02.getcourse.ru/fileservice/file/thumbnail/h/aa0d17c1bd58fc6066aa1f602fe8ab59.png/s/f1200x/a/534336/sc/325"
    },
    {
        "id": 11,
        "name": "Shoulder bag",
        "price": 210.99,
        "oldPrice": null,
        "isSale": false,
        "isNew": true,
        "categories": [
            "Women",
            "Accessories"
        ],
        "color": "Red",
        "image": "https://fs-thb02.getcourse.ru/fileservice/file/thumbnail/h/ad5a7f75f7e3463aaafec1149cd2bfbd.png/s/f1200x/a/534336/sc/477"
    },
    {
        "id": 12,
        "name": "High-heeled shoes",
        "price": 52.99,
        "oldPrice": 70.99,
        "isSale": true,
        "isNew": false,
        "categories": [
            "Women"
        ],
        "color": "Black",
        "image": "https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/b14b37c5f1fbd94505697d827305348b.png/s/f1200x/a/534336/sc/57"
    },
    {
        "id": 13,
        "name": "Textured turtleneck with zip (2)",
        "price": 45.99,
        "oldPrice": 53.99,
        "isSale": true,
        "isNew": false,
        "categories": [
            "Men"
        ],
        "color": "Brown",
        "image": "https://fs-thb01.getcourse.ru/fileservice/file/thumbnail/h/54cdbf69f8e60ba13e2e795cd495567f.png/s/f1200x/a/534336/sc/265"
    },
    {
        "id": 14,
        "name": "Spray wrap skirt (2)",
        "price": 25.99,
        "oldPrice": null,
        "isSale": false,
        "isNew": false,
        "categories": [
            "Women"
        ],
        "color": "Red",
        "image": "https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/061c4e0891851d157cbcf6984295b7ed.png/s/f1200x/a/534336/sc/111"
    },
    {
        "id": 15,
        "name": "Short shorts with straps (2)",
        "price": 30.99,
        "oldPrice": null,
        "isSale": false,
        "isNew": false,
        "categories": [
            "Men"
        ],
        "color": "Blue",
        "image": "https://fs-thb02.getcourse.ru/fileservice/file/thumbnail/h/b56c73f8da5404fddf58b7a5a540130f.png/s/f1200x/a/534336/sc/238"
    },
    {
        "id": 16,
        "name": "Fashionee - catton shirt (2)",
        "price": 99.99,
        "oldPrice": null,
        "isSale": false,
        "isNew": false,
        "categories": [
            "Men"
        ],
        "color": "Brown",
        "image": "https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/911e17505fb10478ce04f078943bf74e.png/s/f1200x/a/534336/sc/55"
    },
    {
        "id": 17,
        "name": "Warm casual sweater (2)",
        "price": 70.99,
        "oldPrice": null,
        "isSale": false,
        "isNew": true,
        "categories": [
            "Women"
        ],
        "color": "Brown",
        "image": "https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/ec9bc0e735f3c75eab9d4d8c4f8630fe.png/s/f1200x/a/534336/sc/400"
    },
    {
        "id": 18,
        "name": "Retro style handbag (2)",
        "price": 35.99,
        "oldPrice": 52.99,
        "isSale": true,
        "isNew": false,
        "categories": [
            "Women",
            "Accessories"
        ],
        "color": "Brown",
        "image": "https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/c3d454c3b46f6a62d4d036f928a56705.png/s/f1200x/a/534336/sc/100"
    },
    {
        "id": 19,
        "name": "Style Handbag (2)",
        "price": 170.99,
        "oldPrice": null,
        "isSale": false,
        "isNew": false,
        "categories": [
            "Women",
            "Accessories"
        ],
        "color": "Black",
        "image": "https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/14e10d5f0aaf5e8405fad852e8344182.png/s/f1200x/a/534336/sc/138"
    },
    {
        "id": 20,
        "name": "Blouse with insert and ruffles (2)",
        "price": 25.99,
        "oldPrice": null,
        "isSale": false,
        "isNew": true,
        "categories": [
            "Women"
        ],
        "color": "Blue",
        "image": "https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/2b269ee1c83fd5758f3763f9a45a5605.png/s/f1200x/a/534336/sc/116"
    },
    {
        "id": 21,
        "name": "Long oversized T-shirt (2)",
        "price": 25.99,
        "oldPrice": 52.99,
        "isSale": true,
        "isNew": false,
        "categories": [
            "Men"
        ],
        "color": "Blue",
        "image": "https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/92be8394b48b6911690745902643f92d.png/s/f1200x/a/534336/sc/439"
    },
    {
        "id": 22,
        "name": "Stylish and comfortable cap (3)",
        "price": 35.99,
        "oldPrice": null,
        "isSale": false,
        "isNew": false,
        "categories": [
            "Accessories"
        ],
        "color": "White",
        "image": "https://fs-thb02.getcourse.ru/fileservice/file/thumbnail/h/aa0d17c1bd58fc6066aa1f602fe8ab59.png/s/f1200x/a/534336/sc/325"
    },
    {
        "id": 23,
        "name": "Shoulder bag (2)",
        "price": 200.99,
        "oldPrice": null,
        "isSale": false,
        "isNew": true,
        "categories": [
            "Women",
            "Accessories"
        ],
        "color": "Red",
        "image": "https://fs-thb02.getcourse.ru/fileservice/file/thumbnail/h/ad5a7f75f7e3463aaafec1149cd2bfbd.png/s/f1200x/a/534336/sc/477"
    },
    {
        "id": 24,
        "name": "High-heeled shoes (2)",
        "price": 45.99,
        "oldPrice": 70.99,
        "isSale": true,
        "isNew": false,
        "categories": [
            "Women"
        ],
        "color": "Black",
        "image": "https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/b14b37c5f1fbd94505697d827305348b.png/s/f1200x/a/534336/sc/57"
    }

]

const PRODUCT_IN_BASKET_KEY = 'pruduct-in-basket';

const PRODUCT_IN_FAVOURITE_KEY = 'product-in-favourite';

const orderInfo = {
    orderPrice: 0,
    discount: 0,
    delivery: 0
}

const promoCodes = ["FREE15", "TTTT"]

const getFromLS = (key) => {
    try {
        return JSON.parse(localStorage.getItem(key));
    } catch (err) {
        console.log(err);
    }
}

const setToLS = (key, value) => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
        console.log(err);
    }
}

const updateHeaderInfo = () => {
    const basketCounter = document.getElementsByClassName('js-basket-counter');
    const favouritesCounter = document.getElementsByClassName('js-favourites-counter');
  
    if(!basketCounter.length && !favouritesCounter.length){
      return false
    }
  
    const productsInBasket = getFromLS(PRODUCT_IN_BASKET_KEY);
    const productsInFavourite = getFromLS(PRODUCT_IN_FAVOURITE_KEY);
  
    if (!productsInBasket && !productsInFavourite){
      return false
    }
  
    let countInBasket = 0;
    let countInFavourite = 0;
  
    if (productsInBasket) {
      productsInBasket.forEach(product => {
        countInBasket += product.quantity;
      });
    }
  
    if (productsInFavourite) {
    productsInFavourite.forEach(product => {
      countInFavourite += product.favouriteQuantity;
    });
    }
  
    basketCounter[0].innerHTML = countInBasket;
    favouritesCounter[0].innerHTML = countInFavourite;
}

const minusOrPlus = (product, operation) => {
    const productsInBasket = getFromLS(PRODUCT_IN_BASKET_KEY);

    const updatedBasket = productsInBasket.map((productInBasket) => {
        if (productInBasket.id === product.id) {
            if (operation === '-') {
                productInBasket.quantity -= 1;
            } else if (operation === '+') {
                productInBasket.quantity += 1;
            }    
        }

        return productInBasket;
    }).filter((productInBasket) => { return productInBasket.quantity > 0})

    setToLS(PRODUCT_IN_BASKET_KEY, updatedBasket)
    updateHeaderInfo()
    createCheckoutList(updatedBasket)
    updateOrderInfo(orderInfo)
} 

const removeFromBasket = (product) => {
    const productsInBasket = getFromLS(PRODUCT_IN_BASKET_KEY);

    if (!productsInBasket) {
        return;
    }

    const updatedBasket = productsInBasket.filter((productInBasket) =>productInBasket.id !== product.id)  

    setToLS(PRODUCT_IN_BASKET_KEY, updatedBasket)
    updateHeaderInfo()
    createCheckoutList(updatedBasket)
    updateOrderInfo(orderInfo)
}

const createProduct = (product) => {
    const productWrapper = document.createElement('div');
    productWrapper.classList.add('product')

    const productPhoto = document.createElement('div');
    productPhoto.classList.add('product-photo');

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info')

    const title = document.createElement('div');
    title.classList.add('title')
    title.innerHTML = product.name;

    const priceWrapper = document.createElement('div');
    priceWrapper.classList.add('price-wrapper')

    const priceAndQuantity = document.createElement('div');
    priceAndQuantity.classList.add('price-and-quantity')

    const price = document.createElement('div');
    price.classList.add('price')

    const currentPrice = document.createElement('div');
    currentPrice.classList.add('current-price')
    currentPrice.innerHTML = `$${product.price}`;

    price.appendChild(currentPrice)

    if(product.oldPrice) {
        const oldPrice = document.createElement('div');
        oldPrice.classList.add('old-price')
        oldPrice.innerHTML = `$${product.oldPrice}`;
        price.appendChild(oldPrice)    
    }

    const quantity = document.createElement('div');
    quantity.classList.add('quantity')

    const countBtnMinus = document.createElement('div');
    countBtnMinus.classList.add('count-button')
    countBtnMinus.innerHTML = '-';
    countBtnMinus.addEventListener('click', (e) => {
        orderInfo.orderPrice = 0;
        const minus = e.target.innerHTML;
        minusOrPlus(product, minus)
    })

    const count = document.createElement('div');
    count.classList.add('count')
    count.innerHTML = product.quantity;

    const countBtnPlus = document.createElement('div');
    countBtnPlus.classList.add('count-button')
    countBtnPlus.innerHTML = '+';
    countBtnPlus.addEventListener('click', (e) => {
        orderInfo.orderPrice = 0;
        const plus = e.target.innerHTML;        
        minusOrPlus(product, plus)
    })

    quantity.appendChild(countBtnMinus)
    quantity.appendChild(count)
    quantity.appendChild(countBtnPlus)

    const totalPrice = document.createElement('div');
    totalPrice.classList.add('total-price')
    totalPrice.innerHTML = `$${(product.price * product.quantity).toFixed(2)}`;

    const photo = document.createElement('img');
    photo.classList.add('photo');
    photo.src = product.image;
    
    priceAndQuantity.appendChild(price)
    priceAndQuantity.appendChild(quantity)

    priceWrapper.appendChild(priceAndQuantity)
    priceWrapper.appendChild(totalPrice)

    const closeBtn = document.createElement('div');
    closeBtn.classList.add('close')
    closeBtn.innerHTML = 'X';
    closeBtn.addEventListener('click', () => {
        orderInfo.orderPrice = 0;
        removeFromBasket(product)
    })

    productInfo.appendChild(title)
    productInfo.appendChild(priceWrapper)

    productPhoto.appendChild(photo)

    productWrapper.appendChild(productPhoto)
    productWrapper.appendChild(productInfo)
    productWrapper.appendChild(closeBtn)

    orderInfo.orderPrice += Number((product.price * product.quantity).toFixed(2));

    return(productWrapper);
}

const productsInBasket = getFromLS(PRODUCT_IN_BASKET_KEY);

const createCheckoutList = (products) => {
    const jsProducts = document.getElementsByClassName('js-products');

    if(!jsProducts.length) {
      return;
    }

    jsProducts[0].innerHTML = '';

    for (const product of products) {
        const createdProduct = createProduct(product);
        jsProducts[0].appendChild(createdProduct)
    }  
}

const updateOrderInfo = (orderInfo) => {
    const orderPrice = document.getElementById('js-order-price');
    const discountValue = document.getElementById('js-discount-value');
    const deliveryPrice = document.getElementById('js-delivery-price');
    const totalPrice = document.getElementById('js-total-price');

    let discount = 0;

    orderInfo.delivery = 16;

    orderPrice.innerHTML = `$${orderInfo.orderPrice.toFixed(2)}`;

    if (orderInfo.discount > 0) {
        discountValue.innerHTML = `-${orderInfo.discount}%`;
        discount = orderInfo.orderPrice / 100 * orderInfo.discount;  
    }

    deliveryPrice.innerHTML = `$${orderInfo.delivery}`;

    const totalPriceValue = orderInfo.orderPrice - discount + orderInfo.delivery;

    totalPrice.innerHTML = `$${totalPriceValue.toFixed(2)}`;
}

const checkoutBtn = document.getElementById('checkoutBtn');

checkoutBtn.addEventListener('click', () => {
    console.log(orderInfo)
})

const usingPromoCode = (promo) => {
    const promoFeedback = document.querySelector('.promo-feedback');
    let discountValue = 0;

    for ( let i = 0; i < promoCodes.length; i++) {
        if (promoCodes[i].toLowerCase() === promo.toLowerCase()) {
            
            let isPromoCodeActivated = false;

            switch(promo.toLowerCase()) {
                case ('FREE15').toLowerCase():
                    discountValue = 15;
                    promoFeedback.style.color = "rgba(68, 68, 68, 1)";
                    promoFeedback.innerHTML = `Promo code <span class='bold-promo'> ${promo} </span> successfully activated`;
                    break;
                case ('TTTT').toLowerCase():
                    discountValue = 10;
                    promoFeedback.style.color = "rgba(68, 68, 68, 1)";
                    promoFeedback.innerHTML = `Promo code <span class='bold-promo'> ${promo} </span> successfully activated`;
                    break;
                default:
                    break;
            }   
            orderInfo.discount = discountValue;
            updateOrderInfo(orderInfo)
            isPromoCodeActivated = true
            promoFeedback.classList.add('active');
            setTimeout( () => {promoFeedback.classList.remove('active')}, 7000);
            return;
        }
    }
    promoFeedback.style.color = "rgb(214, 38, 53)";
    promoFeedback.innerHTML = "This promo code was not found.";
    promoFeedback.classList.add('active');
    setTimeout( () => {promoFeedback.classList.remove('active')}, 7000);
}

const promoBtn = document.getElementById('promoBtn');

promoBtn.addEventListener('click', () => {
    const enteredPromo = document.getElementById("promo-input").value;

    usingPromoCode(enteredPromo)
})


createCheckoutList(productsInBasket)
updateHeaderInfo()
updateOrderInfo(orderInfo)
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
      "image":"https://fs-thb01.getcourse.ru/fileservice/file/thumbnail/h/54cdbf69f8e60ba13e2e795cd495567f.png/s/f1200x/a/534336/sc/265"
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

const paginationInfo = {
  activePage: 0,
  perPage: 12
}

const PRODUCT_IN_BASKET_KEY = 'pruduct-in-basket';

const PRODUCT_IN_FAVOURITE_KEY = 'product-in-favourite';

let searchValue = '';

let sort = '';

let oldFilter = {
  category: 'All',
  price: {
    min: 0,
    max: 999999
  },
  colors: []
}

const currentFilter = {
  category: 'All',
  price: {
    min: 0,
    max: 999999
  },
  colors: []
}

const debounce = (f, t) => {
  return function (args) {
    let previousCall = this.lastCall;
    this.lastCall = Date.now();
    if (previousCall && ((this.lastCall - previousCall) <= t)) {
      clearTimeout(this.lastCallTimer);
    }
    this.lastCallTimer = setTimeout(() => f(args), t);
  }
}


const getFromLS = (key) => {
  try{
    return JSON.parse(localStorage.getItem(key));
  } catch (err) {
    console.log(err);
  }
}

const setToLS = (key, value) => {
  try{
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

const buyProduct = (product) => {

  const productsInBasket = getFromLS(PRODUCT_IN_BASKET_KEY);

  if (!productsInBasket) {
    setToLS(PRODUCT_IN_BASKET_KEY, [{...product, quantity: 1 }])
    updateHeaderInfo()

    return true;
  }

  let hasProductInBasket = false;

  const updatedProducts = productsInBasket.map((productInBasket) => {
    if(productInBasket.id === product.id) {
      hasProductInBasket = true;

      return {
        ...productInBasket, quantity: productInBasket.quantity + 1
      }
    }
    return productInBasket;
  })

  if (hasProductInBasket) {
    setToLS(PRODUCT_IN_BASKET_KEY, updatedProducts);
    updateHeaderInfo()

    return true;
  }

  productsInBasket.push({...product, quantity: 1});

  setToLS(PRODUCT_IN_BASKET_KEY, productsInBasket);
  updateHeaderInfo()
}

const addFavourite = (product) => {

  const productsInFavourite = getFromLS(PRODUCT_IN_FAVOURITE_KEY);

  if (!productsInFavourite) {
    setToLS(PRODUCT_IN_FAVOURITE_KEY, [{...product, favouriteQuantity: 1 }])
    updateHeaderInfo()

    return true;
  }
  
  let alreadyFavourite = false;

  const updatedFavourite = productsInFavourite.map((productInFavourite) => {
    if (productInFavourite.id === product.id) {
      alreadyFavourite = true;

      return {
        ...productInFavourite, favouriteQuantity: productInFavourite.favouriteQuantity +1
      }
    }

    return productInFavourite;
  })

  if (alreadyFavourite) {
    setToLS(PRODUCT_IN_FAVOURITE_KEY, updatedFavourite);
    updateHeaderInfo()

    return true;  
  }

  productsInFavourite.push({ ...product, favouriteQuantity: 1 })

  setToLS(PRODUCT_IN_FAVOURITE_KEY, productsInFavourite);
  updateHeaderInfo()
}

const removeFavourite = (product) => {

  const productsInFavourite = getFromLS(PRODUCT_IN_FAVOURITE_KEY);

  if (!productsInFavourite) {
    return;
  }

  const updatedFavourite = productsInFavourite.filter((productInFavourite) => productInFavourite.id !== product.id)  

  setToLS(PRODUCT_IN_FAVOURITE_KEY, updatedFavourite)
  updateHeaderInfo()
}

const createProduct = (product) => {

    const productWrapper = document.createElement('div');
    productWrapper.classList = ('product');
    
    const productPhoto = document.createElement('div');
    productPhoto.classList.add('product-photo');

    const topBar = document.createElement('div');
    topBar.classList.add('top-bar');

    const labels = document.createElement('div');
    labels.classList.add('labels');

    if(product.isSale) {

        const label = document.createElement('div');
        label.classList.add('label');
        label.innerHTML = 'Sale';

        labels.appendChild(label);
    }

    if(product.isNew) {

        const label = document.createElement('div');
        label.classList.add('label');
        label.classList.add('new');
        label.innerHTML = 'New';

        labels.appendChild(label);
    }

    topBar.appendChild(labels);

    const favourite = document.createElement('div');
    favourite.classList.add("favourites");

    const favouriteIcon = document.createElement('img');
    
    topBar.appendChild(favourite);   
    
    const productsInFavourite = getFromLS(PRODUCT_IN_FAVOURITE_KEY);
    
    let isFavourite = false;
    
    if (productsInFavourite) {
      productsInFavourite.forEach((productInFavourite) => {
        if (productInFavourite.id === product.id) {
          isFavourite = true;
        }  
      })
    }

    if (isFavourite) {
      favouriteIcon.src = './icons/red-heart.svg';
      favouriteIcon.alt = 'red-heart';
    } else {
      favouriteIcon.src = './icons/heart.svg';
      favouriteIcon.alt = 'heart';
    }

    favourite.appendChild(favouriteIcon);

    favourite.addEventListener('click', () => {
      if (!isFavourite) {
        addFavourite(product)
        favouriteIcon.src = './icons/red-heart.svg';
        favouriteIcon.alt = 'red-heart';  
        isFavourite = true;
      } else {
        removeFavourite(product)
        favouriteIcon.src = './icons/heart.svg';
        favouriteIcon.alt = 'heart';
        isFavourite = false;
      }
    })

    const photo = document.createElement('img');
    photo.classList.add('photo');
    photo.src = `${product.image}`;

    const info = document.createElement('div');
    info.classList.add('info');

    const productDescription = document.createElement('div');
    productDescription.classList.add('product-description');
    productDescription.innerHTML = `${product.name}`;

    const price = document.createElement('div');
    price.classList.add('price');

    const currentPrice = document.createElement('div');
    currentPrice.classList.add('current-price');
    currentPrice.innerHTML = `$${product.price}`;

    price.appendChild(currentPrice);

    if(product.oldPrice) {
        const oldPrice = document.createElement('div');
        oldPrice.classList.add('old-price');
        oldPrice.innerHTML = `$${product.oldPrice}`;
        price.appendChild(oldPrice);
    }
    
    info.appendChild(productDescription);
    info.appendChild(price);
    
    const buyButton = document.createElement('button');
    buyButton.classList.add('buy-button');
    buyButton.innerHTML = 'Купить';
    buyButton.addEventListener('click', () => {
      buyProduct(product);
    })

    productPhoto.appendChild(topBar);
    productPhoto.appendChild(photo);    

    productWrapper.appendChild(productPhoto);
    productWrapper.appendChild(info);
    productWrapper.appendChild(buyButton);

    return(productWrapper);
}

const createPagination = (productsCount) => {
  const pagination = document.getElementById('pagination');
  const jsPages = document.getElementsByClassName('js-pages')
  
  if(!productsCount) {
    pagination.classList.add('hide');
    return;
  }

  if(!jsPages.length) {
    return;
  }

  pagination.classList.remove('hide');
  
  const jsPagesContainer = jsPages[0];

  jsPagesContainer.innerHTML = '';

  const pageCount = Math.ceil(productsCount / paginationInfo.perPage)
  
  const leftBtn = document.getElementById('left-arrow');
  const rightBtn = document.getElementById('right-arrow');

  const disableArrow = () => {
    if (paginationInfo.activePage === 0) {
      leftBtn.classList.add('disabled')
    } else {
      leftBtn.classList.remove('disabled')
    }

    if (paginationInfo.activePage === pageCount - 1) {
      rightBtn.classList.add('disabled')
    } else {
      rightBtn.classList.remove('disabled')
    }
  }

  for (let i = 0; i < pageCount; i++) {
    const page = document.createElement('div');
    page.classList.add('page');

    if(i === paginationInfo.activePage) {
      page.classList.add('active')
    }

    page.innerHTML = i + 1;
    page.dataset.index = i;
  
    page.addEventListener('click', (e) => {
      const currentElement = e.target;
        
      const alreadyActive = document.querySelectorAll('.page.active')

      if(alreadyActive.length) {
        alreadyActive[0].classList.remove('active');
      }

      currentElement.classList.add('active')

      paginationInfo.activePage = Number(currentElement.dataset.index);

      disableArrow()

      const {filteredProducts, productsCount} = filterProducts(searchValue, oldFilter, sort, paginationInfo)
      createProductList(filteredProducts, productsCount)
    })

    jsPagesContainer.appendChild(page);
  }

  disableArrow()

  leftBtn.addEventListener('click', (e) => {
    leftBtn.classList.add('shrink');
    if (paginationInfo.activePage > 0) {
      paginationInfo.activePage -= 1;

      const {filteredProducts, productsCount} = filterProducts(searchValue, oldFilter, sort, paginationInfo)
      createProductList(filteredProducts, productsCount)
    }
    setTimeout(() => {
      leftBtn.classList.remove('shrink');
    }, 100)
  })

  rightBtn.addEventListener('click', (e) => {
    rightBtn.classList.add('shrink');
    if (paginationInfo.activePage < pageCount - 1) {
      paginationInfo.activePage += 1;

      const {filteredProducts, productsCount} = filterProducts(searchValue, oldFilter, sort, paginationInfo)
      createProductList(filteredProducts, productsCount)
    }
    setTimeout(() => {
      rightBtn.classList.remove('shrink');
    }, 100)
  })
}

const createProductList = (products, productsCount) => {
    const jsProducts = document.getElementsByClassName('js-products');

    if(!jsProducts.length) {
      return;
    }

    jsProducts[0].innerHTML = '';

    for (const product of products) {
        const createdProduct = createProduct(product);
        jsProducts[0].appendChild(createdProduct)
    }  

    createPagination(productsCount)
}

const filterBySearchValue = (products, value) => {
  return products.filter((product) => {
    return product.name.toLowerCase().includes(value.toLowerCase())
  })
}

const filterProductsByFilterInfo = (products, filter) => {
  let filteredProducts = products;

  if (Object.keys(filter).length){
    if(filter.category && filter.category != 'All') {
      filteredProducts = filteredProducts.filter((product) => {
        return product.categories.includes(filter.category);
      })
    }

    if(filter.price.min !== 0 || filter.price.max !== 999999) {
      filteredProducts = filteredProducts.filter((product) => {
        return filter.price.min <= product.price && filter.price.max >= product.price
      })
    }

    if (filter.colors.length) {
      filteredProducts = filteredProducts.filter((product) => {
        return filter.colors.includes(product.color);
      })
    } 
  }  

  return filteredProducts;
}

const sortProducts = (products, sort) => {  
  products.sort((a, b) => {
    if (sort === 'Asc') {
      if (a.name > b.name) return 1;
      if (a.name === b.name) return 0;
      if (a.name < b.name) return -1;
    }
    if (sort === 'Desc') {
      if (a.name < b.name) return 1;
      if (a.name === b.name) return 0;
      if (a.name > b.name) return -1;
    }
  })
}

const paginateProducts = (products, paginInfo) => {
  const productsCount = products.length;

  const { activePage, perPage } = paginInfo;
  
  const firstIndex = activePage * perPage;
  const paginatedProducts = products.slice(firstIndex, ((activePage + 1) * perPage));

  return {
    productsCount,
    paginatedProducts
  }
}

const filterProducts = (searchValue, filter, sort, pagination) => {
  let filteredProducts = [...products];
  
  if (searchValue) {
    filteredProducts = filterBySearchValue(filteredProducts, searchValue)
  }

  filteredProducts = filterProductsByFilterInfo(filteredProducts, filter)

  if (sort) {
    sortProducts(filteredProducts, sort)
  }

  const { paginatedProducts, productsCount} = paginateProducts(filteredProducts, pagination)

  return {
    filteredProducts: paginatedProducts,
    productsCount
  }
}

const updateProductsCount = (count) => {
  document.getElementById('js-products-count').innerHTML = count;
}

const deepEqual = (obj1, obj2) => {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
} 

const toggleBlockFilterBtn = () => {
  const applyFilter = document.getElementById('apply-filter');

  if(currentFilter.category !== oldFilter.category) {
    applyFilter.removeAttribute("disabled");
    return;
  } else {
    applyFilter.setAttribute("disabled", "disabled");
  }
  
  if(deepEqual(currentFilter.price, oldFilter.price)) {
    applyFilter.setAttribute("disabled", "disabled");
  } else {
    applyFilter.removeAttribute("disabled");
    return;
  }

  if(deepEqual(currentFilter.colors, oldFilter.colors)) {
    applyFilter.setAttribute("disabled", "disabled");
  } else {
    applyFilter.removeAttribute("disabled");
    return;
  }
}

document.getElementById('search-row').addEventListener('keyup', debounce( (e) => {

  searchValue = e.target.value;

  paginationInfo.activePage = 0;
  const {filteredProducts, productsCount} = filterProducts(searchValue, oldFilter, sort, paginationInfo)

  createProductList(filteredProducts, productsCount)
  updateProductsCount(productsCount)
}, 500)
)

const categoryItems = document.getElementsByClassName('js-category');

for (let i = 0; i < categoryItems.length; i++) {
  categoryItems[i].addEventListener('click', (e) => {

    currentFilter['category'] = e.target.dataset.category;

    if(e.target.classList.contains('active')){
      e.target.classList.remove('active')
      categoryItems[0].classList.add('active')
      currentFilter['category'] = 'All';

      toggleBlockFilterBtn()

      return
    }

    const alreadyActive = document.querySelectorAll('.js-category.active');

    
    if(alreadyActive.length) {
      alreadyActive[0].classList.remove('active')
    }

    e.target.classList.add('active')

    toggleBlockFilterBtn()
  })
}

const minPrice = document.getElementById('js-min-input');

minPrice.addEventListener('keyup', debounce((e) => {
  currentFilter['price']['min'] = e.target.value;
  
  if(e.target.value < 0) {
    e.target.value = '';
    return;
  }

  if(!e.target.value) {
    currentFilter['price']['min'] = 0;

    toggleBlockFilterBtn()
    return;
  }

  toggleBlockFilterBtn()
}), 500)

const maxPrice = document.getElementById('js-max-input');

maxPrice.addEventListener('keyup', debounce((e) => {
  currentFilter['price']['max'] = e.target.value;

  if(e.target.value > 999999) {
    e.target.value = '';
    return;
  }

  if(!e.target.value) {
    currentFilter['price']['max'] = 999999;

    toggleBlockFilterBtn()
    return;
  }

  toggleBlockFilterBtn()
}), 500)

const colorItems = document.getElementsByClassName('js-color');

for (let i = 0; i < colorItems.length; i++) {
  colorItems[i].addEventListener('click', (e) => {

    if (e.target !== e.currentTarget) {
      return;
    }
    
    const color = e.currentTarget.dataset.color;

    if (!currentFilter.colors.includes(color)) {
      currentFilter.colors.push(color)
      toggleBlockFilterBtn()
    } else {
      const index = currentFilter.colors.indexOf(color);
      currentFilter.colors.splice(index, 1);
      toggleBlockFilterBtn()
    }

  })
}

document.getElementById('apply-filter').addEventListener('click', (e) => {
  paginationInfo.activePage = 0;

  const {filteredProducts, productsCount} = filterProducts(searchValue, currentFilter, sort, paginationInfo)

  createProductList(filteredProducts, productsCount)
  updateProductsCount(productsCount)

  e.target.setAttribute("disabled", "disabled")

  oldFilter = JSON.parse(JSON.stringify(currentFilter));
})

document.getElementById("sort").addEventListener('change', (e) => {
  sort = e.target.value; 

  const {filteredProducts, productsCount} = filterProducts(searchValue, oldFilter, sort, paginationInfo)

  createProductList(filteredProducts, productsCount)
  updateProductsCount(productsCount)
})

const getRandomProducts = (products, count) => {
  const newProducts =[ ...products ];
  const randProducts = [];

  do {
    const randomNumber = Math.floor(Math.random() * newProducts.length);

    randProducts[randProducts.length] = newProducts.splice(
      randomNumber, 1)[0];

  } while (randProducts.length < count)

  return randProducts;
}

const createRandomProduct = (product) => {
  const productWrapper = document.createElement('div');
  productWrapper.classList = ('product');

  const productPhoto = document.createElement('div');
  productPhoto.classList.add('product-photo');
  
  const photo = document.createElement('img');
  photo.classList.add('photo');
  photo.src = `${product.image}`;

  const info = document.createElement('div');
  info.classList.add('info');

  const productDescription = document.createElement('div');
  productDescription.classList.add('product-description');
  productDescription.innerHTML = `${product.name}`;

  const price = document.createElement('div');
  price.classList.add('price');

  const currentPrice = document.createElement('div');
  currentPrice.classList.add('current-price');
  currentPrice.innerHTML = `$${product.price}`;

  price.appendChild(currentPrice);

  if(product.oldPrice) {
    const oldPrice = document.createElement('div');
    oldPrice.classList.add('old-price');
    oldPrice.innerHTML = `$${product.oldPrice}`;
    price.appendChild(oldPrice);
  }
  
  info.appendChild(productDescription);
  info.appendChild(price);

  productPhoto.appendChild(photo);

  productWrapper.appendChild(productPhoto);
  productWrapper.appendChild(info);

  return(productWrapper);
}

const generateReviewedByYouProducts = () => {
  const randomProducts = getRandomProducts(products, 3);
  const container = document.getElementsByClassName('js-reviewed-products')[0];

  container.innerHTML = '';
  
  randomProducts.forEach((product) => {
    const randomProduct = createRandomProduct(product);
    container.appendChild(randomProduct);
  })
}

generateReviewedByYouProducts()

const {paginatedProducts, productsCount} = paginateProducts(products, paginationInfo)

createProductList(paginatedProducts, productsCount)
updateHeaderInfo()
updateProductsCount(products.length)
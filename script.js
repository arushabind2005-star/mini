import products from './data.js';


const displayProducts = (products) => {
  productDiplay.innerHTML = ``;
  products.forEach((currentProduct) => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
    <Img src=${currentProduct.imgUrl} alt=${currentProduct.name}/>
    <h3>${currentProduct.name}</h3>
    <p class="card-rating-discount-strip">
    <span>${currentProduct.rating} 🌟</span>
    <span>${currentProduct.discountPercentage}% off</span></p>
    <p class="card-cart-button-strip">
    <span class="price">₹${currentProduct.discountedPrice}</span>
    <span class="original-price">₹${currentProduct.price}</span>
    <button class="product-button">Add to cart</button>
    </p>
    `;
    productDiplay.append(card);
  });
};
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

displayProducts(products);

genderSelection.addEventListener('change', (e) => {
  const filter = e.target.value;
  const filteredProducts = products.filter((curr) => curr.gender === filter);
  console.log(filteredProducts);
  displayProducts(filteredProducts);
  if (filter === '') {
    displayProducts(products);
  }
});
genderRadios.forEach((radio) => {
  radio.addEventListener('change', (e) => {
    const selectedGender = e.target.value;
    const filteredProducts = products.filter(
      (p) => p.gender === selectedGender
    );
    displayProducts(filteredProducts);
  });
});

ratingInput.addEventListener('change', (e) => {
  const rating = Number(e.target.value);
  ratingValue.innerText = rating;
  const filteredProducts = products.filter((curr) => curr.rating >= rating);
  displayProducts(filteredProducts);
});
searchInput.addEventListener('change', (e) => {
  const searchText = e.target.value.toLowerCase();

  if (searchText === '') {
    displayProducts(products);
  }
  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchText) ||
      product.description.toLowerCase().includes(searchText)
    );
  });
  console.log(filteredProducts);
  displayProducts(filteredProducts);
});

categoryCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    const selectCategories = [];
    categoryCheckboxes.forEach((cb) => {
      if (cb.checked) {
        selectCategories.push(cb.value);
      }
    });
    if (selectCategories.length === 0) {
      displayProducts(products);
      return;
    }
    const filteredProducts = products.filter((p) =>
      selectCategories.includes(p.category)
    );
    displayProducts(filteredProducts);
  });
});

clearbtn.addEventListener('click', () => {
  genderSelection.value = '';
  genderRadios.forEach((radio) => (radio.checked = false));
  categoryCheckboxes.forEach((cb) => (cb.checked = false));
  ratingInput.value = 0;
  ratingValue.textContent = 0;
  searchInput.value = '';
  displayProducts(products);
});

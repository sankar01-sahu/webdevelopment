// --------- Get products from the Local Storage--------------

document.addEventListener("DOMContentLoaded", () => {
  let productDetails = document.getElementById("productDetails");
  // console.log(productDetails)
  let allProducts = JSON.parse(localStorage.getItem("allproducts"));
  // console.log(allProducts);

  let productId = localStorage.getItem("productId");
  // console.log(productId);

  // ---------- Find the Product-----------

  if (allProducts && productId) {
    let selectedProduct = allProducts.find((v) => {
      return v.id == productId
    })
    if (selectedProduct) {
      productDetails.innerHTML =
        `
 <main>
          <div class="product-container">
            <div class="product-image">
              <img src="${selectedProduct.thumbnail}" alt="${selectedProduct.title}">
            </div>

            <div class="product-info">
              <h1q34wyuz5ei9ovgb>${selectedProduct.title}</h1q34wyuz5ei9ovgb>
              <p><b>Brand:</b> ${selectedProduct.brand}</p>
              <p><b>Category:</b> ${selectedProduct.category}</p>
              <p><b>Description:</b> ${selectedProduct.description}</p>
            <p class="price">₹ ${selectedProduct.price * 90}</p>


              <div class="btn-group">
                <button class="add-cart" id = "addToCart" onclick="addToCart(${selectedProduct})">Add to Cart</button>
                <button class="back-home" onclick="history.back()">Back to Home</button>
              </div>
            </div>
          </div>

          <div class="reviews">
            <h2>Customer reviews</h2>
<hr>
            <div class="review">
              <div class="stars">❤️❤️❤️❤️🖤</div>
              <p>Great product!</p>
              <small>By Liam Garcia</small>
            </div>
<hr>
            <div class="review">
              <div class="stars">❤️❤️❤️🖤🖤</div>
              <p>Great product!</p>
              <small>By Ruby Andrews</small>
            </div>
<hr>
            <div class="review">
              <div class="stars">❤️❤️❤️❤️❤️</div>
              <p>Worth buying!</p>
              <small>By Emma Brown</small>
            </div>
          </div>
        </main>

            `
      document.getElementById("addToCart").addEventListener("click", () => {
        addToCart(selectedProduct);

      });
    }
    else {
      productDetails.innerHTML = `<p>Product not Available..`
    }
    // console.log(selectedProduct);
  }
  else {
    productDetails.innerHTML = `<p>Product not found..`
  }

});

function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Product added to cart...");

}
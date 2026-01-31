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
        `<main>
          <div class="product_container">
            <div class="product_image">
              <img src="${selectedProduct.thumbnail}" alt="${selectedProduct.title}">
            </div>

            <div class="product_info">
              <h1>${selectedProduct.title}</h1>
              <p><b>Brand:</b> ${selectedProduct.brand}</p>
              <p><b>Category:</b> ${selectedProduct.category}</p>
              <p><b>Description:</b> ${selectedProduct.description}</p>
              <p class="price">₹ ${selectedProduct.price * 90}</p>

              <div class="btn_group">
                <button class="addTocart" id = "addToCart" onclick="addToCart(${selectedProduct})">Add to Cart</button>
                <button class="backTohome" onclick="history.back()">Back to Home</button>
              </div>
            </div>
          </div>

        <div class="reviews">
          <h2>Customer reviews</h2>
<hr>
          ${selectedProduct.reviews.map((review)=>`
            <div class="ratings">${"❤️".repeat(review.rating)}${"🖤".repeat(5 - review.rating)}</div>
            <p id ="comment">${review.comment}</p>
            <p id ="name">By <strong>${review.reviewerName}</strong> on ${new Date(review.date)}</p>
<hr>
            `
          )} 
        </div>
      </main>
           `;
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
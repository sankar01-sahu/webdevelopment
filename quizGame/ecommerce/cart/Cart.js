document.addEventListener("DOMContentLoaded",()=>{
    displayCart();
})

function displayCart(){
    let cart =JSON.parse(localStorage.getItem("cart")) || [];
    let cartContent = document.getElementById("cartContent");
    let totalPrice = document.getElementById("totalPrice");
    // console.log(cart);
    // console.log(cartContent);
    // console.log(totalPrice);
    cartContent.innerHTML="";
    let totalBill =0;
    if(cart.length ===0){
        cartContent.innerHTML =`Your cart is Empty. Start Shopping...`;
    }
    cart.map((product,i)=>{
        // console.log(product);
        cartContent.innerHTML += `
        <main>
            <div class="cart-item">
                <img src="${product.thumbnail}" alt="${product.title}">
            <div class="item-info">
                <h3>${product.title}</h3>
                <p>₹ ${product.price * 90}</p>
                <button id="remove" onclick="removeFromCart(${i})">Remove</button>
            </div>
        </div>
        </main>
    `;
    document.getElementById("remove").addEventListener("click",()=>{
        remove.cartContent;
    })
        
    })
}
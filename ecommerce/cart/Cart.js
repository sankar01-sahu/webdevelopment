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
        totalBill +=Math.floor((product.price)*90)
        console.log(product,i);
        let newProd =document.createElement("div")
        newProd.setAttribute("class","Prod-info")
        
        newProd.innerHTML += `
        <main>
            <div class="cart_items">
                <div id="image">
                    <img src="${product.images[0]}" alt="${product.title}" />
                </div>
                <div class="product_details">
                    <h2>${product.title}</h2>
                    <p><b>AvailabilityStatus :</b>${product.availabilityStatus}</p>
                    <p><b>Category :</b>${product.category}</p>
                    <p><b>Return Policy :</b>${product.returnPolicy}</p>
                    <p><b>Shipping Information :</b>${product.shippingInformation}</p>
                    <p><b>Stock :</b>${product.stock}</p>
                    <p><b>Warranty Information :</b>${product.warrantyInformation}</p>
                    <p><b>Price :₹ </b>${product.price * 90}</p>
                </div>
                <button id="remove" onclick="removeFromCart(${i})">Remove</button>
            </div>
        </main>
    `;
    cartContent.append(newProd);
    });
    totalPrice.innerHTML = `<h2 id="total_Price">Total Price :₹ ${totalBill}</h2>`

    // document.getElementById("remove").addEventListener("click",()=>{
    //     remove.cartContent;
    // })
}

function removeFromCart(index){
    // console.log(index,"removeCart");
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.splice(index,1);
    localStorage.setItem("cart",JSON.stringify(cart));
    displayCart();
}
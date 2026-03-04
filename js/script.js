let cart = [];
let total = 0;


function addToCart(item, price) {
  cart.push({ item, price });
  total += price;
  updateCart();
}


function updateCart() {
  const cartItems = document.getElementById("cartItems");
  cartItems.innerHTML = "";
  cart.forEach(c => {
    const li = document.createElement("li");
    li.textContent = `${c.item} - ₹${c.price}`;
    cartItems.appendChild(li);
  });
  document.getElementById("cartCount").textContent = cart.length;
  document.getElementById("cartTotal").textContent = total;

}


function checkout() {
  alert("Order placed successfully! Total: ₹" + total);
  cart = [];
  total = 0;
  updateCart();
}




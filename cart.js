
// this function dynamically displays the shoping carts content on the webpage using the data which is stored in the local storage
function renderCart() {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const cartContainer = document.getElementById("cartItems");
  
   cartContainer.innerHTML = " ";
  

   // Here is the message displayed when items are not in the cart
    if (cartItems.length === 0) {
      cartContainer.innerHTML = "<p>No items in your cart.</p>";
      return;
    }
  
    cartItems.forEach((item, index) => {
      const cartItemCard = document.createElement("div");
      cartItemCard.classList.add("cart-item-card");
  
      cartItemCard.innerHTML = `
       <img src="${item.imageSrc}" alt="${item.title}" class="cart-item-image" />
      <div class="cart-item-details">
        <h2>${item.title}</h2>
        <p>Price: ${item.price}</p>
        <p>Quantity: ${item.quantity}</p>
        <button class="remove-button">Remove from cart</button>
      `;
  
      
      // Here is the remove button, when the remoce button is clicked the item is removed from the cart array and the updated
      // cart array is eventually saved back to local storage
      const removeButton = cartItemCard.querySelector(".remove-button");
      removeButton.addEventListener("click", () => {
        cartItems.splice(index, 1); 
        localStorage.setItem("cart", JSON.stringify(cartItems));
        renderCart(); 
      });
  
      cartContainer.appendChild(cartItemCard);
    });
  }
  

  // The cart is rendered as soon the page is loaded 
  window.onload = renderCart;


    // This function is to make the burger menu interactive, it takes the element by id and when it is pressed the options for navigation are appearing via the style display code
    function toggleMenu()
    {
      const menu = document.getElementById("mobileMenu");
      if(menu.style.display === " block"){
        menubar.style.display = " none "
      } else{
        menu.style.display = " block "
      }
    
    }
    


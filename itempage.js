
// The code here dynamically displays the details and the information about the selected product

// the product details are retrieved from the sesion storage using the parse into the jJavaScript.
const selectedProduct = JSON.parse(
    sessionStorage.getItem("selectedProduct")
);


// Here im checking if the product exists, the following details are dynamically inserted into the HTML element with the ID productDetails
if(selectedProduct){
    const {title, color, description, price, imageSrc} = selectedProduct;

    const productDetails = document.getElementById("productDetails");
    productDetails.innerHTML = `
    <img src="${imageSrc}" alt="${title}" />
<h1>${title} (${color})</h1>
<p>${description}</p>
<p><strong>Price:</strong> ${price}</p>
<button onclick="buy('${title}', '${color}', '${price}', '${imageSrc}')">Buy</button>
`;
    
}

// 
  // The function buy is used for when the user clicks the buy button, a pop up is shown using the alert command
  // Also by pressing the buy button it is stored inside the Local storage anf afterwards the product can be found in the cart
function buy (title, color, price, imageSrc){
    alert(`${title} (${color}) was added to the Cart!`);

    const product = {title, color, price, imageSrc, quantity: 1};
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = cart.find(
      (item) => item.title === title && item.color === color
    );

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  }


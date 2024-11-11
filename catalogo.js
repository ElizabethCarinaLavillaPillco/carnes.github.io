// Asegúrate de que este código esté al final del archivo catalogo.js

document.getElementById("search-btn").addEventListener("click", function() {
    // Obtén el texto de búsqueda ingresado por el usuario
    const searchTerm = document.getElementById("search").value.toLowerCase();
    
    // Obtén todos los productos (en este caso, los elementos con clase 'carousel-item')
    const products = document.querySelectorAll(".carousel-item");
  
    // Filtrar los productos según el término de búsqueda
    products.forEach(function(product) {
      const productName = product.querySelector("h3").textContent.toLowerCase();
      
      // Si el nombre del producto contiene el término de búsqueda, muestra el producto
      if (productName.includes(searchTerm)) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  });

// Función que agrega producto al carrito--------------------------------------------------------------------------------------------
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []; // Obtiene el carrito del localStorage o un array vacío
    const existingProductIndex = cart.findIndex(item => item.name === product.name); // Verificar si el producto ya está en el carrito

    if (existingProductIndex !== -1) {
        // Si el producto ya está en el carrito, incrementamos la cantidad
        cart[existingProductIndex].quantity += 1;
    } else {
        // Si no está en el carrito, lo añadimos
        cart.push({...product, quantity: 1}); // Añadimos el producto con cantidad 1
    }

    localStorage.setItem('cart', JSON.stringify(cart)); // Guarda el carrito actualizado en localStorage
    alert('Producto añadido al carrito');
}

// Espera a que la página cargue para asignar el evento al botón
window.addEventListener('load', function() {
    // Asigna el evento click al botón de "Añadir al carrito" para cada producto
    const cartButtons = document.querySelectorAll('.btn-cart'); // Selecciona todos los botones "Añadir al carrito"

    cartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const product = {
                name: button.dataset.name,  // Obtén el nombre del producto desde un atributo 'data-name' del botón
                price: button.dataset.price, // Obtén el precio del producto desde un atributo 'data-price' del botón
                image: button.dataset.image  // Obtén la imagen del producto desde un atributo 'data-image' del botón
            };

            addToCart(product); // Llama a la función para añadir el producto al carrito
        });
    });
});

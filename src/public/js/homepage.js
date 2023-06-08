     // Retrieve the token value passed from the server-side
     var token = "{{token}}";

     // Save the token to local storage
     function saveTokenToLocalStorage(token) {
       localStorage.setItem('token', token);
     }

     saveTokenToLocalStorage(token);

//      const addProductForm = document.getElementById('addProductForm');
//      addProductForm.addEventListener('submit', function (event) {
//        event.preventDefault();
     
//        const title = document.getElementById('title').value;
//        const description = document.getElementById('description').value;
//        const price = document.getElementById('price').value;
     
//        const data = {
//          title: title,
//          description: description,
//          price: price
//        };
//        console.log(data)
//       //  Retrieve the token from local storage
//        const token = localStorage.getItem('token');
//        console.log(token)
//       //sending to server with authheader 
//        fetch('http://localhost:3000/products/new-product', {
//          method: 'POST',
//          headers: {
//            'Content-Type': 'application/json',
//            'Authorization': `Bearer ${token}`
//          },
//          body: JSON.stringify(data)
//        })
//          .then(response => response.json())
//          .then(responseData => {
//            console.log('Response:', responseData);
//            // Handle the response data
//          })
//          .catch(error => {
//            console.error('Error:', error);
//            // Handle the error
//          });
     
//      });
     
     
//     //  // Display All Products Button
//     //  const displayProductsButton = document.getElementById('displayProductsButton');
//     //  displayProductsButton.addEventListener('click', function () {
//     //    // Send a request to the server to retrieve and display all products
//     //    console.log('Display all products button clicked');
       
//     //    // Perform necessary server requests and update the product list dynamically
//     //    const productList = document.getElementById('productList');
//     //    productList.innerHTML = '<p>Product 1</p><p>Product 2</p><p>Product 3</p>';
//     //  });

// // Edit Product Form
// // const editProductForm = document.getElementById('editProductForm');
// // editProductForm.addEventListener('submit', function (event) {
// //  event.preventDefault();
 
// //  // Retrieve form values
// //  const productId = document.getElementById('editProductId').value;
// //  const editTitle = document.getElementById('editTitle').value;
// //  const editDescription = document.getElementById('editDescription').value;
// //  const editPrice = document.getElementById('editPrice').value;
 
// //  // Send the data to the server or perform further processing
// //  console.log('Product ID:', productId);
// //  console.log('Edit Title:', editTitle);
// //  console.log('Edit Description:', editDescription);
// //  console.log('Edit Price:', editPrice);
 
// //  // Clear form inputs
// //  editProductForm.reset();
// // });


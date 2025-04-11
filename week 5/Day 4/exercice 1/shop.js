
const products = require('./products');

function findProduct(productName) {
  const product = products.find(p => p.name.toLowerCase() === productName.toLowerCase());
  
  if (product) {
    console.log(`Found product: ${product.name}`);
    console.log(`Price: $${product.price}`);
    console.log(`Category: ${product.category}`);
  } else {
    console.log(`Product "${productName}" not found.`);
  }
  
  console.log('-------------------');
}

findProduct('Laptop');
findProduct('Coffee Mug');
findProduct('Keyboard'); 
// console.clear();

let contentTitle;

// Update cart badge function
function updateCartBadge() {
    const cart = JSON.parse(localStorage.getItem('cart') || '{}');
    const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);
    const badge = document.getElementById('badge');
    if (badge) badge.textContent = totalItems;
}

console.log(document.cookie);
function dynamicClothingSection(ob) {
  let boxDiv = document.createElement("div");
  boxDiv.id = "box";

  let boxLink = document.createElement("a");
  // boxLink.href = '#'
  boxLink.href = "contentDetails.html?" + ob.id;
  // console.log('link=>' + boxLink);

  let imgTag = document.createElement("img");
  // imgTag.id = 'image1'
  // imgTag.id = ob.photos
  imgTag.src = ob.preview;

  let detailsDiv = document.createElement("div");
  detailsDiv.id = "details";

  let h3 = document.createElement("h3");
  let h3Text = document.createTextNode(ob.name);
  h3.appendChild(h3Text);

  let h4 = document.createElement("h4");
  let h4Text = document.createTextNode(ob.brand);
  h4.appendChild(h4Text);

  let h2 = document.createElement("h2");
  let h2Text = document.createTextNode("₦" + ob.price);
  h2.appendChild(h2Text);

  boxDiv.appendChild(boxLink);
  boxLink.appendChild(imgTag);
  boxLink.appendChild(detailsDiv);
  detailsDiv.appendChild(h3);
  detailsDiv.appendChild(h4);
  detailsDiv.appendChild(h2);

  return boxDiv;
}

//  TO SHOW THE RENDERED CODE IN CONSOLE
// console.log(dynamicClothingSection());

// console.log(boxDiv)

let mainContainer = document.getElementById("mainContainer");
let containerClothing = document.getElementById("containerClothing");
let containerAccessories = document.getElementById("containerAccessories");
// mainContainer.appendChild(dynamicClothingSection('hello world!!'))

// FIREBASE API CALLING
async function loadProducts() {
  try {
    const products = await FirebaseProductsAPI.getProducts();
    contentTitle = products;
    
    updateCartBadge();
    
    for (let i = 0; i < products.length; i++) {
      const product = {
        ...products[i],
        preview: products[i].image || products[i].imageURL || 'https://via.placeholder.com/300x200',
        photos: [products[i].image || products[i].imageURL || 'https://via.placeholder.com/300x200'],
        brand: products[i].brand || 'Lorena',
        isAccessory: products[i].isAccessory || products[i].category === 'accessories'
      };
      
      if (product.isAccessory) {
        if(containerAccessories) containerAccessories.appendChild(
          dynamicClothingSection(product)
        );
      } else {
        if(containerClothing) containerClothing.appendChild(
          dynamicClothingSection(product)
        );
      }
    }
    
    // Also populate products grid on home page
    const productsGrid = document.getElementById('products-grid');
    if (productsGrid) {
      productsGrid.innerHTML = '';
      products.slice(0, 8).forEach(product => {
        const productData = {
          ...product,
          preview: product.image || product.imageURL || 'https://via.placeholder.com/300x200',
          brand: product.brand || 'Lorena'
        };
        productsGrid.appendChild(dynamicClothingSection(productData));
      });
    }
  } catch (error) {
    console.log('Failed to load products:', error);
    if(containerClothing) {
      containerClothing.innerHTML = '<p style="text-align: center; color: #666;">Unable to load products. Please try again later.</p>';
    }
  }
}

// Load products when page loads
loadProducts();

// Functions for specific page rendering
async function renderAccessories() {
  try {
    const products = await FirebaseProductsAPI.getProducts();
    const container = document.getElementById('containerAccessories');
    if(container) {
      container.innerHTML = '';
      products.filter(p => p.isAccessory || p.category === 'accessories').forEach(product => {
        const productData = {
          ...product,
          preview: product.image || product.imageURL || 'https://via.placeholder.com/300x200',
          photos: [product.image || product.imageURL || 'https://via.placeholder.com/300x200'],
          brand: product.brand || 'Lorena',
          isAccessory: true
        };
        container.appendChild(dynamicClothingSection(productData));
      });
    }
  } catch (error) {
    console.log('Failed to load accessories:', error);
  }
}

async function renderClothing() {
  try {
    const products = await FirebaseProductsAPI.getProducts();
    const container = document.getElementById('containerClothing');
    if(container) {
      container.innerHTML = '';
      products.filter(p => !p.isAccessory && p.category !== 'accessories').forEach(product => {
        const productData = {
          ...product,
          preview: product.image || product.imageURL || 'https://via.placeholder.com/300x200',
          photos: [product.image || product.imageURL || 'https://via.placeholder.com/300x200'],
          brand: product.brand || 'Lorena',
          isAccessory: false
        };
        container.appendChild(dynamicClothingSection(productData));
      });
    }
  } catch (error) {
    console.log('Failed to load clothing:', error);
  }
}

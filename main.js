const header = document.querySelector('header');
header.addEventListener('click', (e) => {
    const menu= document.querySelector('.menu');
    const menuOpen = document.querySelector('#menu-open');
    if (e.target.id === 'menu-open') {
        menu.style.right = '0';
        menu.style.transition = '0.5s';
        menuOpen.style.display = 'none';
    }
    else if (e.target.id === 'menu-close') {
        menu.style.right = '-100%';
        menu.style.transition = '0.5s';
        menuOpen.style.display = '';
    }
});

// The following code is for the hero section
const heroBox = document.querySelector('.hero');
const toggle = document.querySelector('.toggle-change');
var products = [ ];
toggle.addEventListener('click', (e) =>{
    console.log(toggle.childNodes);
    if(e.target.id === "blue"){
        heroBox.childNodes[1].scrollIntoView({behavior: "smooth"});
        toggle.childNodes[1].style.backgroundColor = "#0083BB";
        toggle.childNodes[3].style.backgroundColor = "#F0F0F0";
    }
    else if(e.target.id === "grey"){
        heroBox.childNodes[3].scrollIntoView({behavior: "smooth"});
        toggle.childNodes[3].style.backgroundColor = "#0083BB";
        toggle.childNodes[1].style.backgroundColor = "#F0F0F0";
    }
});
heroBox.addEventListener('scroll', (e) =>{
    // Calculate the scroll depth as a percentage
    const scrollDepth = (heroBox.scrollLeft / (heroBox.scrollWidth - heroBox.clientWidth)) * 100;
    if(scrollDepth < 50){
        toggle.childNodes[1].style.backgroundColor = "#0083BB";
        toggle.childNodes[3].style.backgroundColor = "#F0F0F0";
    }
    else{
        toggle.childNodes[3].style.backgroundColor = "#0083BB";
        toggle.childNodes[1].style.backgroundColor = "#F0F0F0";
    }
});
// The following code is for the product Section 
var products= [];
const productContainer = document.querySelector('.product-container');
function createProductCard(product){
    const productCard  = `
    <div class="product">
        <div class="product-img">
                    <img src="${product.img}" alt="">
                </div>
                <div class="product-specs">
                    <h3>
                        ${product.name}
                    </h3>
                    <div class="specs">
                        <div class="spec">
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M8.47644 3.47626C7.15036 3.47626 5.87859 4.00304 4.94091 4.94072C4.00323 5.87841 3.47644 7.15018 3.47644 8.47626C3.47644 9.80234 4.00323 11.0741 4.94091 12.0118C5.87859 12.9495 7.15036 13.4763 8.47644 13.4763C9.80252 13.4763 11.0743 12.9495 12.012 12.0118C12.9497 11.0741 13.4764 9.80234 13.4764 8.47626C13.4764 7.15018 12.9497 5.87841 12.012 4.94072C11.0743 4.00304 9.80252 3.47626 8.47644 3.47626ZM1.47644 8.47626C1.47644 4.61026 4.61044 1.47626 8.47644 1.47626C12.3424 1.47626 15.4764 4.61026 15.4764 8.47626C15.4764 12.3423 12.3424 15.4763 8.47644 15.4763C4.61044 15.4763 1.47644 12.3423 1.47644 8.47626Z" fill="black"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.47649 3.47626C7.18741 3.47351 5.94762 3.97138 5.01849 4.86493C4.826 5.0429 4.57133 5.13817 4.3093 5.13023C4.04727 5.12229 3.79884 5.01177 3.61749 4.82246C3.43614 4.63316 3.33637 4.38021 3.33968 4.11808C3.34298 3.85595 3.44909 3.6056 3.63515 3.42093C4.93651 2.17069 6.67187 1.47363 8.47649 1.47626C8.7417 1.47626 8.99606 1.58162 9.18359 1.76916C9.37113 1.95669 9.47649 2.21105 9.47649 2.47626C9.47649 2.74148 9.37113 2.99584 9.18359 3.18337C8.99606 3.37091 8.7417 3.47626 8.47649 3.47626Z" fill="black"/>
                            </svg>                                
                            <p>
                                ${product.space}
                            </p>
                        </div>
                        <div class="spec">
                            <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_40_683)">
                                <path d="M3.24117 2.13149C3.24117 2.27631 3.1841 2.41519 3.08252 2.5176C2.98094 2.62 2.84316 2.67753 2.6995 2.67753C2.55584 2.67753 2.41807 2.62 2.31649 2.5176C2.21491 2.41519 2.15784 2.27631 2.15784 2.13149C2.15784 1.98667 2.21491 1.84778 2.31649 1.74538C2.41807 1.64298 2.55584 1.58545 2.6995 1.58545C2.84316 1.58545 2.98094 1.64298 3.08252 1.74538C3.1841 1.84778 3.24117 1.98667 3.24117 2.13149ZM5.40784 2.13149C5.40784 2.27631 5.35077 2.41519 5.24919 2.5176C5.1476 2.62 5.00983 2.67753 4.86617 2.67753C4.72251 2.67753 4.58474 2.62 4.48315 2.5176C4.38157 2.41519 4.3245 2.27631 4.3245 2.13149C4.3245 1.98667 4.38157 1.84778 4.48315 1.74538C4.58474 1.64298 4.72251 1.58545 4.86617 1.58545C5.00983 1.58545 5.1476 1.64298 5.24919 1.74538C5.35077 1.84778 5.40784 1.98667 5.40784 2.13149ZM7.03284 2.67753C7.1765 2.67753 7.31427 2.62 7.41585 2.5176C7.51743 2.41519 7.5745 2.27631 7.5745 2.13149C7.5745 1.98667 7.51743 1.84778 7.41585 1.74538C7.31427 1.64298 7.1765 1.58545 7.03284 1.58545C6.88918 1.58545 6.7514 1.64298 6.64982 1.74538C6.54824 1.84778 6.49117 1.98667 6.49117 2.13149C6.49117 2.27631 6.54824 2.41519 6.64982 2.5176C6.7514 2.62 6.88918 2.67753 7.03284 2.67753ZM9.74117 2.13149C9.74117 2.27631 9.6841 2.41519 9.58252 2.5176C9.48094 2.62 9.34316 2.67753 9.1995 2.67753C9.05584 2.67753 8.91807 2.62 8.81649 2.5176C8.7149 2.41519 8.65784 2.27631 8.65784 2.13149C8.65784 1.98667 8.7149 1.84778 8.81649 1.74538C8.91807 1.64298 9.05584 1.58545 9.1995 1.58545C9.34316 1.58545 9.48094 1.64298 9.58252 1.74538C9.6841 1.84778 9.74117 1.98667 9.74117 2.13149ZM11.3662 2.67753C11.5098 2.67753 11.6476 2.62 11.7492 2.5176C11.8508 2.41519 11.9078 2.27631 11.9078 2.13149C11.9078 1.98667 11.8508 1.84778 11.7492 1.74538C11.6476 1.64298 11.5098 1.58545 11.3662 1.58545C11.2225 1.58545 11.0847 1.64298 10.9832 1.74538C10.8816 1.84778 10.8245 1.98667 10.8245 2.13149C10.8245 2.27631 10.8816 2.41519 10.9832 2.5176C11.0847 2.62 11.2225 2.67753 11.3662 2.67753ZM3.24117 10.8681C3.24117 11.0129 3.1841 11.1518 3.08252 11.2542C2.98094 11.3566 2.84316 11.4141 2.6995 11.4141C2.55584 11.4141 2.41807 11.3566 2.31649 11.2542C2.21491 11.1518 2.15784 11.0129 2.15784 10.8681C2.15784 10.7233 2.21491 10.5844 2.31649 10.482C2.41807 10.3796 2.55584 10.3221 2.6995 10.3221C2.84316 10.3221 2.98094 10.3796 3.08252 10.482C3.1841 10.5844 3.24117 10.7233 3.24117 10.8681ZM5.40784 10.8681C5.40784 11.0129 5.35077 11.1518 5.24919 11.2542C5.1476 11.3566 5.00983 11.4141 4.86617 11.4141C4.72251 11.4141 4.58474 11.3566 4.48315 11.2542C4.38157 11.1518 4.3245 11.0129 4.3245 10.8681C4.3245 10.7233 4.38157 10.5844 4.48315 10.482C4.58474 10.3796 4.72251 10.3221 4.86617 10.3221C5.00983 10.3221 5.1476 10.3796 5.24919 10.482C5.35077 10.5844 5.40784 10.7233 5.40784 10.8681ZM7.03284 11.4141C7.1765 11.4141 7.31427 11.3566 7.41585 11.2542C7.51743 11.1518 7.5745 11.0129 7.5745 10.8681C7.5745 10.7233 7.51743 10.5844 7.41585 10.482C7.31427 10.3796 7.1765 10.3221 7.03284 10.3221C6.88918 10.3221 6.7514 10.3796 6.64982 10.482C6.54824 10.5844 6.49117 10.7233 6.49117 10.8681C6.49117 11.0129 6.54824 11.1518 6.64982 11.2542C6.7514 11.3566 6.88918 11.4141 7.03284 11.4141ZM9.74117 10.8681C9.74117 11.0129 9.6841 11.1518 9.58252 11.2542C9.48094 11.3566 9.34316 11.4141 9.1995 11.4141C9.05584 11.4141 8.91807 11.3566 8.81649 11.2542C8.7149 11.1518 8.65784 11.0129 8.65784 10.8681C8.65784 10.7233 8.7149 10.5844 8.81649 10.482C8.91807 10.3796 9.05584 10.3221 9.1995 10.3221C9.34316 10.3221 9.48094 10.3796 9.58252 10.482C9.6841 10.5844 9.74117 10.7233 9.74117 10.8681ZM11.3662 11.4141C11.5098 11.4141 11.6476 11.3566 11.7492 11.2542C11.8508 11.1518 11.9078 11.0129 11.9078 10.8681C11.9078 10.7233 11.8508 10.5844 11.7492 10.482C11.6476 10.3796 11.5098 10.3221 11.3662 10.3221C11.2225 10.3221 11.0847 10.3796 10.9832 10.482C10.8816 10.5844 10.8245 10.7233 10.8245 10.8681C10.8245 11.0129 10.8816 11.1518 10.9832 11.2542C11.0847 11.3566 11.2225 11.4141 11.3662 11.4141ZM3.24117 6.4998C3.38483 6.4998 3.5226 6.44227 3.62419 6.33987C3.72577 6.23747 3.78284 6.09858 3.78284 5.95376C3.78284 5.80894 3.72577 5.67005 3.62419 5.56765C3.5226 5.46525 3.38483 5.40772 3.24117 5.40772C3.09751 5.40772 2.95974 5.46525 2.85815 5.56765C2.75657 5.67005 2.6995 5.80894 2.6995 5.95376C2.6995 6.09858 2.75657 6.23747 2.85815 6.33987C2.95974 6.44227 3.09751 6.4998 3.24117 6.4998ZM11.3662 7.04584C11.3662 7.19066 11.3091 7.32954 11.2075 7.43194C11.1059 7.53435 10.9682 7.59188 10.8245 7.59188C10.6808 7.59188 10.5431 7.53435 10.4415 7.43194C10.3399 7.32954 10.2828 7.19066 10.2828 7.04584C10.2828 6.90102 10.3399 6.76213 10.4415 6.65973C10.5431 6.55733 10.6808 6.4998 10.8245 6.4998C10.9682 6.4998 11.1059 6.55733 11.2075 6.65973C11.3091 6.76213 11.3662 6.90102 11.3662 7.04584Z" fill="black"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.532837 4.86169C0.532837 4.42723 0.704042 4.01057 1.00879 3.70336C1.31354 3.39616 1.72686 3.22357 2.15784 3.22357H11.9078C12.3388 3.22357 12.7521 3.39616 13.0569 3.70336C13.3616 4.01057 13.5328 4.42723 13.5328 4.86169V8.13792C13.5328 8.57238 13.3616 8.98904 13.0569 9.29624C12.7521 9.60345 12.3388 9.77604 11.9078 9.77604H2.15784C1.72686 9.77604 1.31354 9.60345 1.00879 9.29624C0.704042 8.98904 0.532837 8.57238 0.532837 8.13792L0.532837 4.86169ZM2.15784 4.31565H11.9078C12.0515 4.31565 12.1893 4.37318 12.2909 4.47558C12.3924 4.57798 12.4495 4.71687 12.4495 4.86169V8.13792C12.4495 8.28274 12.3924 8.42163 12.2909 8.52403C12.1893 8.62643 12.0515 8.68396 11.9078 8.68396H2.15784C2.01418 8.68396 1.8764 8.62643 1.77482 8.52403C1.67324 8.42163 1.61617 8.28274 1.61617 8.13792V4.86169C1.61617 4.71687 1.67324 4.57798 1.77482 4.47558C1.8764 4.37318 2.01418 4.31565 2.15784 4.31565Z" fill="black"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_40_683">
                                <rect width="13" height="11" fill="white" transform="translate(0.532837 0.210449)"/>
                                </clipPath>
                                </defs>
                            </svg>
                            <p>
                                ${product.ram}
                            </p>
                        </div>
                        <div class="spec">
                            <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <rect x="0.132324" y="0.0325317" width="16.7857" height="17.1901" fill="url(#pattern0_40_708)"/>
                                <defs>
                                <pattern id="pattern0_40_708" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlink:href="#image0_40_708" transform="matrix(0.00512047 0 0 0.005 -0.0120467 0)"/>
                                </pattern>
                                <image id="image0_40_708" width="200" height="200" xlink:href="data:image/png;base64,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"/>
                                </defs>
                                </svg>                                
                            <p>
                                ${product.screen}"
                            </p>
                        </div>
                    </div>
                    <div class="price-action">
                    <p>
                       $${product.price}
                    </p>
                    <button>
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    `;
    productContainer.innerHTML += productCard;
}
async function fetchAndDisplayProducts() {
    try {
      const response = await fetch("./assets/products.json");
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    } 
  
    const data = await response.json();

    console.log(data);

    // This is the laptops array
    var laptops = data.Laptops;
    const laptopArray = Object.values(laptops);
    var laptops = [];
    for (let key in laptopArray) {
        if (Object.prototype.hasOwnProperty.call(laptopArray, key)) {
            const element = laptopArray[key];
            laptops.push(element); 
        }
    }
    // This is the Tablets array
    var tablets = data.Tablets;
    const tabletArray = Object.values(tablets);
    var tablets = [];
    for (let key in tabletArray) {
        if (Object.prototype.hasOwnProperty.call(tabletArray, key)) {
            const element = tabletArray[key];
            tablets.push(element); 
        }
    }

    if (!Array.isArray(laptopArray)) {
        throw new Error('Invalid data structure - expected laptops to be an object of products');
    }

    // This is the phones array
    var phones = data.phones;
    const phoneArray = Object.values(phones);
    var phones = [];

    for (let key in phoneArray) {
        if (Object.prototype.hasOwnProperty.call(phoneArray, key)) {
            const element = phoneArray[key];
            phones.push(element); 
        }
    }

    
    products.push(laptops);
    products.push(tablets);
    products.push(phones);
    
    if (!Array.isArray(phoneArray)) {
        throw new Error('Invalid data structure - expected phones to be an object of products');
    }
    products.push(Object.keys(phones));

    } catch (error) {
        console.error('Error loading or processing products:', error);
        // You might want to display an error message to the user here
    }
}
async function displayProducts() {
    await fetchAndDisplayProducts();
    products.pop();
    var productBox= [];
    for (let index = products.length - 1; index >= 0; index--) {
        products[index].forEach(product => {
            createProductCard(product);
        });
    }
}
  
// Usage
displayProducts();

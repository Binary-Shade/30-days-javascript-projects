let products = [];
let itemsPerPage = 12;
let initialPage = 1;

const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const loader = document.querySelector('.spinner');
const container = document.querySelector('.container');
const searchBtn = document.getElementById('searchBtn');

const getProduct = async () => {
    const url = "https://dummyjson.com/products";
    showLoader();
    const response = await fetch(url);
    const data = await response.json();
    hideLoader();
    products = data.products;
    console.log(products);
}

const showProduct = (products) => {
    const indexOfLastPage = initialPage * itemsPerPage;
    const indexOfFirstPage = indexOfLastPage - itemsPerPage;
    const currentItems = products.slice(indexOfFirstPage, indexOfLastPage); //-> it will give 5,6,7,8,9 products

    const productContainer = document.getElementById('product_container');
    productContainer.innerHTML = currentItems.map((product) => {
        return `
            <div class='col-lg-3 col-md-4 col-sm-6 productBox'> 
                <img src='${product.images[0]}' alt='${product.title}' /> 
                <h4 > ${product.title} </h4>
                <p> Price : ${product.price} $</p>
            </div>`;
    }).join("");
}

const loadproduct = async () => {
    await getProduct();
    console.log(products);
    //-> pagination here

    const pages = [];
    for (let i = 0; i <= Math.ceil(products.length / itemsPerPage); i++) {
        pages.push(products[i]);
    }
    showProduct(products);
}

loadproduct();

prevBtn.onclick = () => {
    if ((initialPage - 1) * itemsPerPage) {
        initialPage--;
        loadproduct();
    }
}
nextBtn.onclick = () => {
    const nextItemOfPage = (initialPage) * itemsPerPage;
    if (nextItemOfPage < products.length) {
        initialPage++;
        loadproduct();
    }
}

function showLoader() {
    loader.classList.remove('hide');
    container.classList.add('blur');
}

function hideLoader() {
    loader.classList.add('hide');
    container.classList.remove('blur');
}

const searchProduct = (text) => {
    let filterItems = [];
    showLoader();
    let searchQuery = text.trim().toLowerCase();
    products.filter(item => {
        if (item.category && item.category.toLowerCase().includes(searchQuery) ||
            item.title && item.title.toLowerCase().includes(searchQuery) ||
            item.description && item.description.toLowerCase().includes(searchQuery)) {
            filterItems.push(item);
        }
    });
    initialPage = 1; // Reset initialPage regardless of whether a match is found or not
    console.log(filterItems);
    hideLoader();
    showProduct(filterItems);
}

searchBtn.onclick = () => {
    let searchText = document.getElementById('search');
    console.log(searchText.value);
    searchProduct(searchText.value);
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prod_1 = require("./prod");
class Productsarray {
    constructor(products) {
        this.products = products;
    }
    addProduct(productname, productimage, productdescription, productprice, productquantity) {
        const newProduct = {
            id: this.products.length + 1,
            productname,
            productimage,
            productdescription,
            productprice,
            productquantity,
        };
        this.products.push(newProduct);
        console.log(this.products);
        console.log(`Product added: ${productname}`);
    }
    getProducts() {
        return this.products;
    }
}
const productsarray = new Productsarray(prod_1.product);
class DisplayProducts {
    constructor(productsarray, productListElement) {
        this.productsarray = productsarray;
        this.productListElement = productListElement;
    }
    displayProducts() {
        // const productList = document.getElementById("content") as HTMLDivElement;
        // console.log(productList);
        const productElement = this.productsarray.getProducts();
        this.productListElement.innerHTML = "";
        productElement.forEach((product) => {
            const productElement = document.createElement("div");
            productElement.className = "comm";
            productElement.innerHTML = `ID: ${product.id}<h1> Name: ${product.productname}</h1>
          <img src="${product.productimage}" alt= "">
          <h3> Price: Ksh${product.productprice}</h3>
          <p> Description: ${product.productdescription}</p>
          <h6> Quantity: ${product.productquantity}</h6>
          <button class="cart">Add to cart</button>
          `;
            this.productListElement.appendChild(productElement);
        });
    }
}
const productList = document.getElementById("content");
const display = new DisplayProducts(productsarray, productList);
const productForm = document.getElementById("formprod");
if (productForm) {
    productForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const productName = document.getElementById("productname").value;
        const productImage = document.getElementById("productimage").value;
        const productDescription = document.getElementById("productdescription").value;
        const productPrice = parseInt(document.getElementById("productprice").value);
        const productQuantity = parseInt(document.getElementById("productquantity").value);
        productsarray.addProduct(productName, productImage, productDescription, productPrice, productQuantity);
        display.displayProducts();
        console.log(productName, productImage, productDescription, productPrice, productQuantity);
    });
    //   display.displayProducts();
}
else {
    console.log("products do not exist");
}
document.addEventListener("DOMContentLoaded", () => {
    display.displayProducts();
});
// display.displayProducts();

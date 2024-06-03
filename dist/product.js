"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const productURL = "http://localhost:3000/products";
class Productsarray {
    constructor(products) {
        Productsarray.products = products;
    }
    fetchProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(productURL);
            const data = yield response.json();
            productsarray.getProducts = data;
            console.log(data);
            return data;
        });
    }
    addProduct(productname, productimage, productdescription, productprice, productquantity) {
        return __awaiter(this, void 0, void 0, function* () {
            const newProduct = {
                id: Productsarray.products.length + 1,
                productname,
                productimage,
                productdescription,
                productprice,
                productquantity,
            };
            // Productsarray.products.push(newProduct);
            // console.log(Productsarray.products);
            if ((productForm === null || productForm === void 0 ? void 0 : productForm.textContent) === "Add Product") {
                yield fetch(productURL, {
                    method: "POST",
                    body: JSON.stringify(newProduct),
                });
            }
            alert(`Product added: ${productname}`);
            console.log(`Product added: ${productname}`);
            yield this.fetchProducts();
            // await display.displayProducts();
        });
    }
    getProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!Productsarray.products.length) {
                yield this.fetchProducts();
            }
            return Productsarray.products;
        });
    }
    deleteProduct(ID) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(productURL + "/" + ID, {
                method: "DELETE",
            });
            if (response.ok) {
                console.log(`Product deleted:`);
                yield this.fetchProducts();
            }
            console.error(`failed to delete`);
        });
    }
}
const productsarray = new Productsarray([]);
class DisplayProducts {
    constructor(productsarray, productListElement) {
        this.productsarray = productsarray;
        this.productListElement = productListElement;
    }
    displayProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            // const productList = document.getElementById("content") as HTMLDivElement;
            // console.log(productList);
            // const products = await this.productsarray.getProducts();
            const products = yield productsarray.fetchProducts();
            // console.log(products);
            this.productListElement.innerHTML = "";
            products.forEach((product) => {
                const productElement = document.createElement("div");
                productElement.className = "comm";
                productElement.innerHTML = `ID: ${product.id}<h1> Name: ${product.productname}</h1>
          <img src="${product.productimage}" alt= "">
          <h3> Price: Ksh${product.productprice}</h3>
          <p> Description: ${product.productdescription}</p>
          <h6> Quantity: ${product.productquantity}</h6>
          <button class="cart">Add to cart</button>
          <button class="delete" data-id="${product.id}">Delete</button>
          <button class="edit">Edit</button>
          `;
                this.productListElement.appendChild(productElement);
            });
        });
    }
}
const productList = document.getElementById("content");
const display = new DisplayProducts(productsarray, productList);
// function validateForm(): boolean {
//   const productName = (
//     document.getElementById("productname") as HTMLInputElement
//   ).value;
//   const productImage = (
//     document.getElementById("productimage") as HTMLInputElement
//   ).value;
//   const productDescription = (
//     document.getElementById("productdescription") as HTMLInputElement
//   ).value;
//   const productPrice = parseFloat(
//     (document.getElementById("productprice") as HTMLInputElement).value
//   );
//   const productQuantity = parseInt(
//     (document.getElementById("productquantity") as HTMLInputElement).value,
//     10
//   );
//   let isValid = true;
//   const errorMessages = [];
//   if (!productName) {
//     errorMessages.push("Product name is required.");
//     isValid = false;
//   }
//   if (!productImage) {
//     errorMessages.push("Product image URL is required.");
//     isValid = false;
//   }
//   if (!productDescription) {
//     errorMessages.push("Product description is required.");
//     isValid = false;
//   }
//   if (isNaN(productPrice) || productPrice <= 0) {
//     errorMessages.push("Product price must be a valid number greater than 0.");
//     isValid = false;
//   }
//   if (isNaN(productQuantity) || productQuantity < 0) {
//     errorMessages.push(
//       "Product quantity must be a valid number and cannot be negative."
//     );
//     isValid = false;
//   }
//   const errorContainer = document.getElementById(
//     "form-errors"
//   ) as HTMLDivElement;
//   errorContainer.innerHTML = "";
//   if (!isValid) {
//     errorMessages.forEach((message) => {
//       const errorMessage = document.createElement("p");
//       errorMessage.className = "error";
//       errorMessage.textContent = message;
//       errorContainer.appendChild(errorMessage);
//     });
//   }
//   return isValid;
// }
const productForm = document.getElementById("formprod");
if (productForm) {
    productForm.addEventListener("click", (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        // console.log("hhjh");
        // if (!validateForm()) {
        //   return;
        // }
        const productName = document.getElementById("productname").value;
        const productImage = document.getElementById("productimage").value;
        const productDescription = document.getElementById("productdescription").value;
        const productPrice = parseInt(document.getElementById("productprice").value);
        const productQuantity = parseInt(document.getElementById("productquantity").value);
        yield productsarray.addProduct(productName, productImage, productDescription, productPrice, productQuantity);
        // console.log(Productsarray.products);
        display.displayProducts();
    }));
}
else {
    console.log("products do not exist");
}
const deleteButtons = document.querySelector(".delete");
if (deleteButtons) {
    deleteButtons.addEventListener("click", (event) => __awaiter(void 0, void 0, void 0, function* () {
        const target = event.target;
        const productId = target.getAttribute("data-id");
        if (productId) {
            yield productsarray.deleteProduct(parseInt(productId));
            yield display.displayProducts();
        }
    }));
}
else {
    console.log("product does not exist");
}
document.addEventListener("DOMContentLoaded", () => {
    display.displayProducts();
});
// display.displayProducts();

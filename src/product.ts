import { Iproduct } from "./prod";
const productURL = "http://localhost:3000/products";
class Productsarray {
  static products: Iproduct[];

  constructor(products: Iproduct[]) {
    Productsarray.products = products;
  }

  async fetchProducts(): Promise<Iproduct[]> {
    const response = await fetch(productURL);
    const data = await response.json();
    productsarray.getProducts = data;
    console.log(data);

    return data;
  }
  async addProduct(
    productname: string,
    productimage: string,
    productdescription: string,
    productprice: number,
    productquantity: number
  ): Promise<void> {
    const newProduct: Iproduct = {
      id: Productsarray.products.length + 1,
      productname,
      productimage,
      productdescription,
      productprice,
      productquantity,
    };
    // Productsarray.products.push(newProduct);
    // console.log(Productsarray.products);
    if (productForm?.textContent === "Add Product") {
      await fetch(productURL, {
        method: "POST",
        body: JSON.stringify(newProduct),
      });
    }

    alert(`Product added: ${productname}`);
    console.log(`Product added: ${productname}`);
    await this.fetchProducts();
    // await display.displayProducts();
  }
  async getProducts(): Promise<Iproduct[]> {
    if (!Productsarray.products.length) {
      await this.fetchProducts();
    }
    return Productsarray.products;
  }

  async deleteProduct(ID: number): Promise<void> {
    const response = await fetch(productURL + "/" + ID, {
      method: "DELETE",
    });
    if (response.ok) {
      console.log(`Product deleted:`);
      await this.fetchProducts();
    }
    console.error(`failed to delete`);
  }
}

const productsarray = new Productsarray([]);

class DisplayProducts {
  private productsarray: Productsarray;
  private productListElement: HTMLElement;
  constructor(productsarray: Productsarray, productListElement: HTMLElement) {
    this.productsarray = productsarray;
    this.productListElement = productListElement;
  }

  async displayProducts(): Promise<void> {
    // const productList = document.getElementById("content") as HTMLDivElement;
    // console.log(productList);

    // const products = await this.productsarray.getProducts();
    const products = await productsarray.fetchProducts();
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
  }
}

const productList = document.getElementById("content") as HTMLDivElement;
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
  productForm.addEventListener("click", async (e) => {
    e.preventDefault();
    // console.log("hhjh");
    // if (!validateForm()) {
    //   return;
    // }

    const productName = (
      document.getElementById("productname") as HTMLInputElement
    ).value;
    const productImage = (
      document.getElementById("productimage") as HTMLInputElement
    ).value;
    const productDescription = (
      document.getElementById("productdescription") as HTMLInputElement
    ).value;
    const productPrice = parseInt(
      (document.getElementById("productprice") as HTMLInputElement).value
    );
    const productQuantity = parseInt(
      (document.getElementById("productquantity") as HTMLInputElement).value
    );

    await productsarray.addProduct(
      productName,
      productImage,
      productDescription,
      productPrice,
      productQuantity
    );
    // console.log(Productsarray.products);

    display.displayProducts();
  });
} else {
  console.log("products do not exist");
}

const deleteButtons = document.querySelector(".delete");

if (deleteButtons) {
  deleteButtons.addEventListener("click", async (event) => {
    const target = event.target as HTMLElement;
    const productId = target.getAttribute("data-id");
    if (productId) {
      await productsarray.deleteProduct(parseInt(productId));
      await display.displayProducts();
    }
  });
} else {
  console.log("product does not exist");
}

document.addEventListener("DOMContentLoaded", () => {
  display.displayProducts();
});
// display.displayProducts();

import { Iproduct, product1, product } from "./prod";
class Productsarray {
  private products: Iproduct[];

  constructor(products: Iproduct[]) {
    this.products = products;
  }

  addProduct(
    productname: string,
    productimage: string,
    productdescription: string,
    productprice: number,
    productquantity: number
  ): void {
    const newProduct: Iproduct = {
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
  getProducts(): Iproduct[] {
    return this.products;
  }
}

const productsarray = new Productsarray(product);

class DisplayProducts {
  private productsarray: Productsarray;
  private productListElement: HTMLElement;
  constructor(productsarray: Productsarray, productListElement: HTMLElement) {
    this.productsarray = productsarray;
    this.productListElement = productListElement;
  }

  displayProducts(): void {
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

const productList = document.getElementById("content") as HTMLDivElement;
const display = new DisplayProducts(productsarray, productList);
const productForm = document.getElementById("formprod");
if (productForm) {
  productForm.addEventListener("submit", (e) => {
    e.preventDefault();
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

    productsarray.addProduct(
      productName,
      productImage,
      productDescription,
      productPrice,
      productQuantity
    );
    display.displayProducts();
    console.log(
      productName,
      productImage,
      productDescription,
      productPrice,
      productQuantity
    );
  });

  //   display.displayProducts();
} else {
  console.log("products do not exist");
}

document.addEventListener("DOMContentLoaded", () => {
  display.displayProducts();
});
// display.displayProducts();

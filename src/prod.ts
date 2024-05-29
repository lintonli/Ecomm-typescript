export interface Iproduct {
  id: number;
  productname: string;
  productimage: string;
  productdescription: string;
  productprice: number;
  productquantity: number;
}

export const product: Iproduct[] = [
  {
    id: 1,
    productname: "Airmax 90",
    productimage:
      "https://i.pinimg.com/236x/59/cc/16/59cc167a4e54ff788e35f68d4541737f.jpg",
    productdescription: "Top shoe in the game",
    productprice: 3500,
    productquantity: 10,
  },
  {
    id: 2,
    productname: "Nike SB",
    productimage:
      "https://i.pinimg.com/236x/43/03/8c/43038cf9cda62641d98349fa3ed6ebec.jpg",
    productdescription: "Top shoe in the game",
    productprice: 3500,
    productquantity: 10,
  },
  {
    id: 3,
    productname: "Yeezy",
    productimage:
      "https://i.pinimg.com/236x/43/03/8c/43038cf9cda62641d98349fa3ed6ebec.jpg",
    productdescription: "Top shoe in the game",
    productprice: 2000,
    productquantity: 10,
  },
];

export const product1: Iproduct[] = [];

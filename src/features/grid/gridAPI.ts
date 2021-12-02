import { Product } from "./gridSlice";

interface FetchProductsRespose {
  data: Product[];
}

export function fetchProducts(): Promise<FetchProductsRespose> {
  return new Promise<FetchProductsRespose>((resolve) =>
    setTimeout(
      () =>
        resolve({
          data: [
            {
              id: "1",
              name: "Cerveja Patagonia Amber Lager 740ml",
              price: 12.99,
            },
            {
              id: "2",
              name: "Cerveja Colorado Cauim 600ml",
              price: 12.99,
            },
            {
              id: "3",
              name: "Cerveja Patagonia Bohemian Pilsener 740ml",
              price: 12.99,
            },
            {
              id: "4",
              name: "Cerveja X Wals 600ml",
              price: 15.99,
            },
            {
              id: "5",
              name: "Cerveja Patagonia Amber Lager 740ml",
              price: 12.99,
            },
            {
              id: "6",
              name: "Cerveja Colorado Cauim 600ml",
              price: 12.99,
            },
            {
              id: "7",
              name: "Cerveja Patagonia Bohemian Pilsener 740ml",
              price: 12.99,
            },
            {
              id: "8",
              name: "Cerveja X Wals 600ml",
              price: 15.99,
            },
          ],
        }),
      500
    )
  );
}

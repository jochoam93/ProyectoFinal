import ProductCard from "../components/ProductCard";

const products = [
  { id: 1, name: "iPhone 15", price: 2749, img: "https://d1aqw5mz0wngqe.cloudfront.net/images/spree/images/2435082/attachments/large/Apple_iPhone_15_Black_1.jpg?1695393363" },
  { id: 2, name: "Samsung Galaxy S25", price: 2599, img: "https://claroperupoc.vtexassets.com/arquivos/ids/2503391/galaxys25plus-compo-400x400-silvershadow--1-.png" },
  { id: 3, name: "Xiaomi T14", price: 1699, img: "https://claroperupoc.vtexassets.com/arquivos/ids/2505378/xiaomi14t-portada-400x400-negro.png" },
  { id: 4, name: "Honor 400 Lite", price: 1169, img: "https://claroperupoc.vtexassets.com/arquivos/ids/2548786/honor-400lite-grey-16.png" },
  { id: 5, name: "Motorola Edge 60", price: 1329, img: "https://claroperupoc.vtexassets.com/arquivos/ids/2603320/motorola-edge60-verde-9.png" },
  { id: 6, name: "Oppo A5 Pro", price: 1239, img: "https://claroperupoc.vtexassets.com/arquivos/ids/2317112/oppo-A5-256gb-rosa-02.png" },
];

export default function Catalog({ addToCart }) {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} addToCart={addToCart} />
      ))}
    </div>
  );
}

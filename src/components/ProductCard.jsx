export default function ProductCard({ product, addToCart }) {
  return (
    <div className="border rounded-xl shadow p-4 flex flex-col items-center">
      <img src={product.img} alt={product.name} className="w-32 h-32 object-cover mb-4" />
      <h2 className="font-bold text-lg">{product.name}</h2>
      <p className="text-gray-600">S/. {product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Agregar al carrito
      </button>
    </div>
  );
}

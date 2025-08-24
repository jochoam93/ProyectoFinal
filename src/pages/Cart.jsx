import { useState } from "react";

export default function Cart({ cart, updateQty, removeFromCart,finalizePurchase }) {

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🛒 Tu carrito</h1>
      {cart.length === 0 ? (
        <p>No tienes productos en el carrito</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center border p-4 rounded-lg">
              <div>
                <h2 className="font-bold">{item.name}</h2>
                <p>S/. {item.price}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="px-2 bg-gray-300 rounded"
                  onClick={() => updateQty(item.id, item.qty - 1)}
                >
                  -
                </button>
                <span>{item.qty}</span>
                <button
                  className="px-2 bg-gray-300 rounded"
                  onClick={() => updateQty(item.id, item.qty + 1)}
                >
                  +
                </button>
                <button
                  className="ml-4 bg-red-500 text-white px-3 py-1 rounded"
                  onClick={() => removeFromCart(item.id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
          <h2 className="text-xl font-bold">Total: S/. {total}</h2>
          <button
            onClick={finalizePurchase}
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Finalizar compra
          </button>
        </div>
      )}
    </div>
  );
}

export default function MisCompras({ compras }) {
    console.log(compras)
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">📑 Mis Compras</h1>
      {compras.length === 0 ? (
        <p>No tienes compras aún</p>
      ) : (
        compras.map(compra => (
          <div key={compra.id} className="border p-4 mb-2 rounded bg-gray-100">
            <h2 className="font-bold">Compra #{compra.id}</h2>
            <ul>
              {compra.items.map(i => (
                <li key={i.id}>{i.name} x {i.qty} - S/. {i.price * i.qty}</li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
}

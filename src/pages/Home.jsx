export default function Home() {
  return (
    <div className="text-center p-6 space-y-10">
      {/* Banner */}
      <div className="bg-blue-500 text-white rounded-xl p-10">
        <h1 className="text-4xl font-bold">Bienvenido a CellStore</h1>
        <p className="mt-4">Tu tienda de celulares al mejor precio 🚀</p>
      </div>

      {/* Beneficios */}
      <section>
        <h2 className="text-2xl font-bold mb-4">¿Por qué elegirnos?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 border rounded-lg shadow">📦 Envío gratis</div>
          <div className="p-4 border rounded-lg shadow">🔒 Pago seguro</div>
          <div className="p-4 border rounded-lg shadow">⚡ Entrega rápida</div>
        </div>
      </section>

      {/* Testimonios */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Opiniones de nuestros clientes</h2>
        <div className="space-y-4">
          <blockquote className="p-4 bg-gray-100 rounded">
            <p>“Compré mi iPhone y llegó en 2 días, excelente servicio.”</p>
            <span class="text-yellow-400 text-2xl">★★★★★</span>
            <p>Katherine Quispe</p>
          </blockquote>
          <blockquote className="p-4 bg-gray-100 rounded">
            <p>“Muy buenos precios y atención rápida.”</p>
            <span class="text-yellow-400 text-2xl">★★★★★</span>
            <p>Carlos Huaman</p>
            
          </blockquote>
          <blockquote className="p-4 bg-gray-100 rounded">
            <p>“Excelente calidad de los productos, definitivamente volveré a comprar”</p>
            <span class="text-yellow-400 text-2xl">★★★★★</span>  
            <p>Cristopher Lazaro</p>  
          </blockquote>

          

        </div>
      </section>
    </div>
  );
}


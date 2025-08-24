import { useState } from "react";
import { Link } from "react-router-dom";
import menuIcon from "../assets/menu.svg";
import closeIcon from "../assets/close.svg";
// opcional: import cartIcon from "../assets/cart.svg";

export default function Navbar({ cartCount, user, logout }) {
  const [open, setOpen] = useState(false);

  const closeDrawer = () => setOpen(false);
  const toggleDrawer = () => setOpen((v) => !v);

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center relative">
      {/* Logo */}
      <Link to="/" className="font-bold text-lg">
        📱 CellStore
      </Link>

      {/* Botón hamburguesa (solo mobile) */}
      <button
        className="md:hidden p-2 rounded hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-white/50"
        onClick={toggleDrawer}
        aria-label="Abrir menú"
        aria-expanded={open}
        aria-controls="mobile-drawer"
      >
        <img src={menuIcon} alt="menu" className="w-7 h-7" />
      </button>

      {/* Links en escritorio */}
      <div className="hidden md:flex gap-4 items-center">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/catalog" className="hover:underline">Catálogo</Link>
        {user && (
          <Link to="/cart" className="hover:underline">
            Carrito ({cartCount})
          </Link>
        )}

        {user && (
          <Link to="/mis-compras" className="hover:underline">
            Mis Compras
          </Link>
        )}
        {user && (<div className="text-yellow-300 font-medium px-2 uppercase">{user.email}</div> )}
        {user ? (
          <button
            onClick={logout}
            className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
          >
            Logout
          </button>
        ) : (
          <Link to="/login" className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-blue-50">
            Login
          </Link>
        )}
      </div>

      {/* Overlay (click para cerrar) */}
      {open && (
        <button
          className="fixed inset-0 bg-black/40 backdrop-blur-[1px] md:hidden"
          onClick={closeDrawer}
          aria-label="Cerrar menú"
          tabIndex={-1}
        />
      )}

      {/* Drawer lateral (mobile) */}
      <aside
        id="mobile-drawer"
        className={`fixed top-0 left-0 h-full w-72 bg-blue-700 md:hidden z-50
          transform ${open ? "translate-x-0" : "-translate-x-full"}
          transition-transform duration-300 ease-in-out shadow-2xl`}
        role="dialog"
        aria-modal="true"
      >
        {/* Header del drawer */}
        <div className="p-4 flex justify-between items-center border-b border-blue-500">
          <h2 className="font-bold text-lg">📱 CellStore</h2>
          <button
            onClick={closeDrawer}
            className="p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Cerrar menú"
          >
            <img src={closeIcon} alt="cerrar" className="w-7 h-7" />
          </button>
        </div>

        {/* Links del drawer */}
        <div className="flex flex-col gap-2 p-4 text-white">
          <Link to="/" onClick={closeDrawer} className="px-2 py-2 rounded hover:bg-blue-600">
            Home
          </Link>
          <Link to="/catalog" onClick={closeDrawer} className="px-2 py-2 rounded hover:bg-blue-600">
            Catálogo
          </Link>

          {user && (
            <Link to="/cart" onClick={closeDrawer} className="px-2 py-2 rounded hover:bg-blue-600">
              Carrito ({cartCount})
            </Link>
          )}

          {user && (
            <Link to="/mis-compras" onClick={closeDrawer} className="px-2 py-2 rounded hover:bg-blue-600">
              Mis Compras
            </Link>
          )}

          {user ? (
            <button
              onClick={() => {
                logout();
                closeDrawer();
              }}
              className="mt-2 bg-red-500 px-3 py-2 rounded hover:bg-red-600 text-left"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              onClick={closeDrawer}
              className="mt-2 bg-white text-blue-700 px-3 py-2 rounded hover:bg-blue-50"
            >
              Login
            </Link>
          )}
        </div>
      </aside>
    </nav>
  );
}

import { useState } from "react";
import { Link } from "react-router-dom";
import menuIcon from "../assets/menu.svg";
import closeIcon from "../assets/close.svg";
import smartphoneIcon from "../assets/logo.svg";



export default function Navbar({ cartCount, user, logout }) {
  const [open, setOpen] = useState(false);

  const closeDrawer = () => setOpen(false);
  const toggleDrawer = () => setOpen((v) => !v);

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center relative">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 font-bold text-lg"><img src={smartphoneIcon} alt="logo" className="w-10 h-10" />
        CellStore
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
        <Link to="/" className="flex items-center gap-1 hover:underline"><svg width="40px" height="40px" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M56.87 25.981L50.27 21.031L47.27 18.781L35.57 10.001C34.4423 9.16327 33.0748 8.71094 31.67 8.71094C30.2652 8.71094 28.8977 9.16327 27.77 10.001L21.67 14.581V14.371C21.6684 13.8411 21.4572 13.3333 21.0825 12.9586C20.7077 12.5838 20.1999 12.3726 19.67 12.371H12.47C11.9396 12.371 11.4309 12.5817 11.0558 12.9568C10.6807 13.3319 10.47 13.8406 10.47 14.371V23.161L6.44002 26.291C6.23227 26.4524 6.05838 26.6531 5.92833 26.8817C5.79827 27.1103 5.71459 27.3624 5.68208 27.6234C5.64957 27.8844 5.66888 28.1493 5.73887 28.4028C5.80887 28.6564 5.92819 28.8936 6.09001 29.101C6.276 29.3427 6.51546 29.538 6.7896 29.6716C7.06373 29.8052 7.36505 29.8734 7.67 29.871C8.11211 29.8709 8.54152 29.7231 8.89 29.451L10.47 28.231V48.281C10.4716 50.0044 11.1569 51.6568 12.3756 52.8755C13.5942 54.0941 15.2466 54.7794 16.97 54.781H25.6C25.9594 54.7808 26.3121 54.6831 26.6203 54.4981C26.9285 54.3132 27.1807 54.0481 27.35 53.731C27.5142 53.4413 27.6003 53.114 27.6 52.781C27.6017 52.7109 27.5983 52.6407 27.59 52.571V46.851C27.5916 45.7703 28.0223 44.7345 28.7874 43.9713C29.5525 43.2081 30.5893 42.7799 31.67 42.781C32.7491 42.7821 33.7837 43.2112 34.5468 43.9742C35.3098 44.7373 35.7389 45.7719 35.74 46.851V52.781C35.7397 53.114 35.8259 53.4413 35.99 53.731C36.1624 54.0477 36.4167 54.3122 36.7263 54.4969C37.0359 54.6816 37.3895 54.7797 37.75 54.781H46.37C48.0929 54.7776 49.7442 54.0917 50.9624 52.8734C52.1807 51.6552 52.8666 50.0039 52.87 48.281V27.981L54.47 29.181C54.8129 29.4398 55.2305 29.5801 55.66 29.581C55.9718 29.5802 56.2792 29.5076 56.5584 29.3689C56.8376 29.2301 57.081 29.029 57.27 28.781C57.5883 28.3567 57.7249 27.8233 57.6499 27.2982C57.5749 26.7731 57.2944 26.2993 56.87 25.981Z" fill="#ffffff"></path> </g></svg>Home</Link>
        
        <Link to="/catalog" className="flex items-center gap-1 hover:underline"><svg fill="#FFFFFF" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="35px" height="35px" viewBox="0 0 210 256" enable-background="new 0 0 210 256" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M174.55,144.5L174.55,144.5c-1.4-4-5-6.5-9.2-6.5H159V23c0-11.708-9.292-21-21-21H25C12.57,2,2,12.57,2,25v183 c0,11.9,10.95,22,22.75,22l114.213,0c1.207,0,2.27,0.984,2.18,2.188c-0.095,1.266-1.153,1.812-2.393,1.812h-45.5L128,254h80 L174.55,144.5z M82.05,220.2c-3.199,0-5.599-2.399-5.6-5.598c-0.001-3.045,2.557-5.602,5.602-5.602 c3.199,0.001,5.598,2.401,5.598,5.6C87.55,217.8,85.25,220.2,82.05,220.2z M144,138h-19.65c-5.3,0-9.8,4.7-9.8,10l0,0 c0,5.3,4.5,10,9.8,10h19.8v42H18V31h126V138z M29.577,136.494l29.266-27.895c0.471-0.471,1.114-0.9,1.585-1.371 c-3.814-5.613-6.299-12.598-6.77-20.01C52.287,65.622,68.955,46.469,91.023,45.14s40.964,15.297,42.292,37.364 c1.371,22.067-15.297,40.964-37.364,42.292c-8.998,0.471-17.311-1.8-24.295-6.513c-0.214,0.471-0.686,0.9-0.9,1.371l-29.266,27.895 c-1.371,1.585-3.385,2.485-5.399,2.485c-2.014,0.214-4.285-0.686-5.87-2.014C26.878,144.807,26.621,139.879,29.577,136.494z M61.5,87.004c1.114,17.568,16.197,31.065,33.765,29.909c17.568-1.157,31.065-16.197,29.909-33.765 c-1.157-17.568-16.197-31.065-33.765-29.909C73.883,54.139,60.6,69.436,61.5,87.004z"></path> </g></svg>Catálogo</Link>
        {user && (
          <Link to="/cart" className="flex items-center gap-2 hover:underline"><svg version="1.1" id="svg2" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" sodipodi:docname="shopping-cart.svg" inkscape:version="0.48.4 r9939" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="31px" height="31px" viewBox="0 0 1200 1200" enable-background="new 0 0 1200 1200" xml:space="preserve" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="path20982" inkscape:connector-curvature="0" d="M1199.398,403.537l-50.323,288.696 c-6.206,31.891-31.615,51.282-60.917,51.646H354.5l-14.566,82.106h699.226c36.818,2.798,61.793,28.88,62.242,62.24 c-2.678,36.743-28.758,61.786-62.242,62.242H265.773c-41.827-3.762-66.768-37.103-62.242-74.16l33.107-180.104l-50.323-505.88 L43.292,145.3C8.341,131.423-5.924,99.805,2.239,67.167c13.573-34.015,46.096-49.556,78.133-41.053l182.752,58.269 c24.62,9.229,38.783,29.382,42.377,52.972l10.594,100.646l829.006,92.7C1183.191,338.952,1203.87,369.123,1199.398,403.537 L1199.398,403.537z M455.272,1081.156c0,52.476-42.54,95.017-95.018,95.017c-52.477,0-95.017-42.541-95.017-95.017 c0-52.478,42.541-95.019,95.017-95.019C412.731,986.138,455.272,1028.68,455.272,1081.156z M1022.524,1081.156 c0,52.476-42.541,95.017-95.019,95.017c-52.477,0-95.017-42.541-95.017-95.017c0-52.478,42.54-95.019,95.017-95.019 C979.983,986.138,1022.524,1028.68,1022.524,1081.156z"></path> </g></svg>
            Carrito ({cartCount})
          </Link>
        )}

        {user && (
          <Link to="/mis-compras" className="flex items-center gap-2 hover:underline"><svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.9844 10C21.9473 8.68893 21.8226 7.85305 21.4026 7.13974C20.8052 6.12523 19.7294 5.56066 17.5777 4.43152L15.5777 3.38197C13.8221 2.46066 12.9443 2 12 2C11.0557 2 10.1779 2.46066 8.42229 3.38197L6.42229 4.43152C4.27063 5.56066 3.19479 6.12523 2.5974 7.13974C2 8.15425 2 9.41667 2 11.9415V12.0585C2 14.5833 2 15.8458 2.5974 16.8603C3.19479 17.8748 4.27063 18.4393 6.42229 19.5685L8.42229 20.618C10.1779 21.5393 11.0557 22 12 22C12.9443 22 13.8221 21.5393 15.5777 20.618L17.5777 19.5685C19.7294 18.4393 20.8052 17.8748 21.4026 16.8603C21.8226 16.1469 21.9473 15.3111 21.9844 14" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M21 7.5L17 9.5M12 12L3 7.5M12 12V21.5M12 12C12 12 14.7426 10.6287 16.5 9.75C16.6953 9.65237 17 9.5 17 9.5M17 9.5V13M17 9.5L7.5 4.5" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
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

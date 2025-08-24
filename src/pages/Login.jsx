import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email) {
      setUser({ email });
      navigate("/catalog");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-80">
      <h1 className="text-2xl font-bold mb-4">🔐 Login</h1>
      <input 
        type="email" 
        placeholder="Correo" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 rounded mb-4"
      />
      <input 
        type="password" 
        placeholder="Contraseña" 
        value={pass} 
        onChange={(e) => setPass(e.target.value)}
        className="border p-2 rounded mb-4"
      />
      <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded">
        Ingresar
      </button>
    </div>
  );
}

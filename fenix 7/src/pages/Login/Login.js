import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { FaUser, FaLock } from 'react-icons/fa';

const Login = () => {
    return (
        <div className='wrapper'>
            <form action="">
                <h1>Iniciar sesión</h1>
                <div className="input-box">
                    <input type="text" placeholder='Usuario requerido' /><FaUser className="icon" />
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Contraseña' required /><FaLock className="icon" />
                </div>
                <div className="remember-forgot">
                    <label ><input type="checkbox" />Recordarme </label>
                    <Link to="/recuperar">¿Olvidaste tu contraseña?</Link> {/* Redireccionar a la página de recuperación de contraseña */}
                </div>
                <Link to="/indexjefe">
                    <button type="submit">Iniciar sesión</button>
                </Link>
                <Link to="/" className="return-link">REGRESAR</Link>
            </form>
        </div>
    );
};

export default Login;

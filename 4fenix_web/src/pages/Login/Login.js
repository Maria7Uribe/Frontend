import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { FaUser, FaLock } from 'react-icons/fa';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('jefe'); // Por defecto, iniciar sesión como jefe

    const handleLogin = (e) => {
        e.preventDefault();
        // Aquí puedes implementar la lógica de autenticación
        const bodeguerosCredenciales = [
            { username: '1000132592', password: '0123' },
            { username: '1032541520', password: '456' },
            // Puedes agregar más documentos y contraseñas aquí
        ];

        if (role === 'jefe' && username === '1017062044' && password === '123') {
            // Autenticación exitosa para jefe
            // Redireccionar a la página de inicio del jefe
            window.location.href = "/Indexjefe";
        } else if (role === 'bodeguero' && bodeguerosCredenciales.some(credencial => credencial.username === username && credencial.password === password)) {
            // Autenticación exitosa para bodeguero
            // Redireccionar a la página de inicio del bodeguero
            window.location.href = "/IndexBodega    ";
        } else {
            // Autenticación fallida
            alert('Usuario, contraseña o rol  incorrectos');
        }
    };

    return (
        <div className='wrapper'>
            <form onSubmit={handleLogin}>
                <h1>Iniciar sesión</h1>
                <div className="login-type">
                    <label>
                        <input type="radio" value="jefe" checked={role === 'jefe'} onChange={() => setRole('jefe')} />
                        Jefe
                    </label>
                    <label>
                        <input type="radio" value="bodeguero" checked={role === 'bodeguero'} onChange={() => setRole('bodeguero')} />
                        Bodeguero
                    </label>
                </div>
                <div className="input-box">
                    <input type="text" placeholder='Documento' value={username} onChange={(e) => setUsername(e.target.value)} required />
                    <FaUser className="icon" />
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Contraseña' value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <FaLock className="icon" />
                </div>
                <div className="forgot-password">
                    <Link to="/recuperar">¿Olvidaste tu contraseña?</Link>
                </div>
                <button type="submit">Iniciar sesión</button>
                <Link to="/" className="return-link">REGRESAR</Link>
            </form>
        </div>
    );
};

export default Login;

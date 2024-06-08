import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { FaUser, FaLock } from 'react-icons/fa';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        
        const jefeCredenciales = { username: '1017062044', password: '123' };
        const bodeguerosCredenciales = [
            { username: '1000132592', password: '0123' },
            { username: '1032541520', password: '456' },
            // Puedes agregar más credenciales aquí
        ];

        if (username === jefeCredenciales.username && password === jefeCredenciales.password) {
            window.location.href = "/Indexjefe";
        } else if (bodeguerosCredenciales.some(credencial => credencial.username === username && credencial.password === password)) {
            window.location.href = "/IndexBodega";
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    };

    return (
        <div className='wrapper'>
            <form onSubmit={handleLogin}>
                <h1>Iniciar sesión</h1>
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
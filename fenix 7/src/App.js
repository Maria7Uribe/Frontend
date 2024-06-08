
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import RecuperarContraseña from './pages/Recuperar/Recuperar'; // Ajustado el nombre del componente
import IndexJefe from './pages/IndexJefe/IndexJefe';
import Home from './pages/Home/Home';
import Usuarios from './pages/Usuarios/Usuarios';
import Agregar from './pages/Agregar/Agregar';  
import Editar from './pages/Editar/Editar';  
import Inventariojefeprincipal from './pages/Inventariojefeprincipal/Inventariojefeprincipal';  
import Inventariojefebodega from './pages/Inventariojefebodega/Inventariojefebodega';  
import AdidasCaballeros from './pages/AdidasCaballeros/AdidasCaballeros';
import AdidasDamas from './pages/AdidasDamas/AdidasDamas';
import AdidasDamas1  from './pages/AdidasDamas1/AdidasDamas1';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/recuperar" element={<RecuperarContraseña />} /> {/* Ajustada la ruta para la recuperación de contraseña */}
                <Route path="/indexjefe" element={<IndexJefe />} /> 
                <Route path="/" element={<Home />} /> {/* Ruta para el componente IndexJefe */}
                <Route path="/usuarios" element={<Usuarios />} />
                <Route path="/agregar" element={<Agregar />} />
                <Route path="/editar" element={<Editar />} />
                <Route path="/inventariojefeprincipal" element={<Inventariojefeprincipal />} />
                <Route path="/inventariojefebodega" element={<Inventariojefebodega />} />
                <Route path="/adidascaballeros" element={<AdidasCaballeros />} />
                <Route path="/adidasdamas" element={<AdidasDamas />} />
                <Route path="/adidasdamas1" element={<AdidasDamas1 />} />
            </Routes>
        </Router>
    );
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import RecuperarContraseña from './pages/Recuperar/Recuperar';
import IndexJefe from './pages/IndexJefe/IndexJefe';
import IndexBodega0 from './pages/IndexBodega/IndexBodega';
import Productosjefe from './pages/Productosjefe/Productosjefe';
import ProductosBodega from './pages/ProductosBodega/ProductosBodega';
import Home from './pages/Home/Home';
import Usuarios from './pages/Usuarios/Usuarios';
import Agregar from './pages/Agregar/Agregar';  
import Editar from './pages/Editar/Editar';  
import AdidasCaballeros from './pages/AdidasCaballeros/AdidasCaballeros';
import AdidasDamas from './pages/AdidasDamas/AdidasDamas';
import AdidasDamas1  from './pages/AdidasDamas1/AdidasDamas1';
import NikeDamas from './pages/NikeDamas/NikeDamas';
import FilaDamas from './pages/FilaDamas/FilaDamas';
import PumaDamas from './pages/PumaDamas/PumaDamas';
import NikeCaballeros from './pages/NikeCaballeros/NikeCaballeros';
import FilaCaballeros from './pages/FilaCaballeros/FilaCaballeros';
import PumaCaballeros from './pages/PumaCaballeros/PumaCaballeros';
import Adidascaballeros1 from './pages/Adidascaballeros1/Adidascaballeros3';
import Filadamas1 from './pages/Filadamas1/Filadamas2';
import IndexBodega from './pages/IndexBodega/IndexBodega';



function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/recuperar" element={<RecuperarContraseña />} /> {/* Ajustada la ruta para la recuperación de contraseña */}
                <Route path="/indexjefe" element={<IndexJefe />} /> 
                <Route path="/indexBodega" element={<IndexBodega />} /> 
                <Route path="/Productosjefe" element={<Productosjefe />} /> 
                <Route path="/ProductosBodega" element={<ProductosBodega />} /> 
                <Route path="/" element={<Home />} /> {/* Ruta para el componente IndexJefe */}
                <Route path="/usuarios" element={<Usuarios />} />
                <Route path="/agregar" element={<Agregar />} />
                <Route path="/editar" element={<Editar />} />
                <Route path="/adidascaballeros" element={<AdidasCaballeros />} />
                <Route path="/adidasdamas" element={<AdidasDamas />} />
                <Route path="/adidasdamas1" element={<AdidasDamas1 />} />
                <Route path="/nikedamas" element={<NikeDamas />} />
                <Route path="/filadamas" element={<FilaDamas />} />
                <Route path="/pumadamas" element={<PumaDamas />} />
                <Route path="/nikecaballeros" element={<NikeCaballeros />} />
                <Route path="/filacaballeros" element={<FilaCaballeros />} />
                <Route path="/pumacaballeros" element={<PumaCaballeros />} />
                <Route path="/Adidascaballeros3" element={< Adidascaballeros1/>} />
                <Route path="/Filadamas2" element={< Filadamas1/>} />



                

            </Routes>
        </Router>
    );
}

export default App;
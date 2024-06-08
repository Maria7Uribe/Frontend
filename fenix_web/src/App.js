import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import RecuperarContraseña from './pages/Recuperar/Recuperar';
import Usuarios from './pages/Usuarios/Usuarios';
import Agregar from './pages/Agregar/Agregar';  
import Editar from './pages/Editar/Editar';  
import IndexJefe from './pages/IndexJefe/IndexJefe';
import Marcasjefe from './pages/Marcasjefe/Marcasjefe';
import IndexBodega from './pages/IndexBodega/IndexBodega';
import MarcasBodega from './pages/MarcasBodega/MarcasBodega';
import AdidasDamasB from './pages/AdidasDamasB/AdidasDamasB';
import NikeDamasB from './pages/NikeDamasB/NikeDamasB';
import FilaDamasB from './pages/FilaDamasB/FilaDamasB';
import PumaDamasB from './pages/PumaDamasB/PumaDamasB';
import JordanDamasB from './pages/JordanDamasB/JordandamasB';
import AdidasCaballerosB from './pages/AdidasCaballerosB/AdidasCaballerosB';
import NikeCaballerosB from './pages/NikeCaballerosB/NikeCaballerosB';
import FilaCaballerosB from './pages/FilaCaballerosB/FilaCaballerosB';
import PumaCaballerosB from './pages/PumaCaballerosB/PumaCaballerosB';
import JordanCaballerosB from './pages/JordanCaballerosB/JordanCaballerosB';
import AdidasDamas1  from './pages/AdidasDamas1/AdidasDamas1';
import Adidascaballeros1 from './pages/Adidascaballeros1/Adidascaballeros3';
import Filadamas1 from './pages/Filadamas1/Filadamas2';




function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/recuperar" element={<RecuperarContraseña />} />
                <Route path="/usuarios" element={<Usuarios />} />
                <Route path="/agregar" element={<Agregar />} />
                <Route path="/editar" element={<Editar />} />
                <Route path="/indexjefe" element={<IndexJefe />} /> 
                <Route path="/Marcasjefe" element={<Marcasjefe />} /> 
                <Route path="/indexBodega" element={<IndexBodega />} /> 
                <Route path="/MarcasBodega" element={<MarcasBodega />} /> 
                <Route path="/adidasdamasb" element={<AdidasDamasB />} />
                <Route path="/nikedamasb" element={<NikeDamasB />} />
                <Route path="/filadamasb" element={<FilaDamasB />} />
                <Route path="/jordandamasb" element={< JordanDamasB/>} />
                <Route path="/pumadamasb" element={<PumaDamasB />} />
                <Route path="/adidascaballerosb" element={<AdidasCaballerosB />} />
                <Route path="/nikecaballerosb" element={<NikeCaballerosB />} />
                <Route path="/filacaballerosb" element={<FilaCaballerosB />} />
                <Route path="/pumacaballerosb" element={<PumaCaballerosB />} />
                <Route path="/jordancaballerosb" element={< JordanCaballerosB/>} />
                <Route path="/Adidascaballeros3" element={< Adidascaballeros1/>} />
                <Route path="/adidasdamas1" element={<AdidasDamas1 />} />
                <Route path="/Filadamas2" element={< Filadamas1/>} />


            </Routes>
        </Router>
    );
}

export default App;
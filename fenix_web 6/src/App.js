import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import RecuperarContraseña from './pages/Recuperar/Recuperar';
import Usuarios from './pages/Usuarios/Usuarios';
import Agregar from './pages/Agregar/Agregar';  
import Editar from './pages/Editar/Editar';  
import IndexJefe from './pages/IndexJefe/IndexJefe';
import IndexBodega from './pages/IndexBodega/IndexBodega';
import AdidasDamasB from './pages/AdidasDamasB/AdidasDamasB';
import AdidasDamasj from './pages/AdidasDamasj/AdidasDamasj';
import NikeDamasB from './pages/NikeDamasB/NikeDamasB';
import NikeDamasj from './pages/NikeDamasj/NikeDamasj';
import FilaDamasB from './pages/FilaDamasB/FilaDamasB';
import FilaDamasj from './pages/FilaDamasj/FilaDamasj';
import PumaDamasB from './pages/PumaDamasB/PumaDamasB';
import PumaDamasj from './pages/PumaDamasj/PumaDamasj';
import JordanDamasB from './pages/JordanDamasB/JordandamasB';
import JordanDamasj from './pages/JordanDamasj/JordanDamasj';
import AdidasCaballerosB from './pages/AdidasCaballerosB/AdidasCaballerosB';
import AdidasCaballerosj from './pages/AdidasCaballerosj/AdidasCaballerosj';
import NikeCaballerosB from './pages/NikeCaballerosB/NikeCaballerosB';
import NikeCaballerosj from './pages/NikeCaballerosj/NikeCaballerosj';
import FilaCaballerosB from './pages/FilaCaballerosB/FilaCaballerosB';
import FilaCaballerosj from './pages/FilaCaballerosj/FilaCaballerosj';
import PumaCaballerosB from './pages/PumaCaballerosB/PumaCaballerosB';
import PumaCaballerosj from './pages/PumaCaballerosj/PumaCaballerosj';
import JordanCaballerosB from './pages/JordanCaballerosB/JordanCaballerosB';
import JordanCaballerosj from './pages/JordanCaballerosj/JordanCaballerosj';
import AdidasDamas1  from './pages/AdidasDamas1/AdidasDamas1';
import Adidascaballeros1 from './pages/Adidascaballeros1/Adidascaballeros3';





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
                <Route path="/indexBodega" element={<IndexBodega />} /> 
                <Route path="/adidasdamasb" element={<AdidasDamasB />} />
                <Route path="/adidasdamasj" element={<AdidasDamasj />} />
                <Route path="/nikedamasb" element={<NikeDamasB />} />
                <Route path="/nikedamasj" element={<NikeDamasj />} />
                <Route path="/filadamasb" element={<FilaDamasB />} />
                <Route path="/filadamasj" element={<FilaDamasj />} />
                <Route path="/jordandamasb" element={< JordanDamasB/>} />
                <Route path="/jordandamasj" element={< JordanDamasj/>} />
                <Route path="/pumadamasb" element={<PumaDamasB />} />
                <Route path="/pumadamasj" element={<PumaDamasj />} />
                <Route path="/adidascaballerosb" element={<AdidasCaballerosB />} />
                <Route path="/adidascaballerosj" element={<AdidasCaballerosj />} />
                <Route path="/nikecaballerosb" element={<NikeCaballerosB />} />
                <Route path="/nikecaballerosj" element={<NikeCaballerosj />} />
                <Route path="/filacaballerosb" element={<FilaCaballerosB />} />
                <Route path="/filacaballerosj" element={<FilaCaballerosj />} />
                <Route path="/pumacaballerosb" element={<PumaCaballerosB />} />
                <Route path="/pumacaballerosj" element={<PumaCaballerosj />} />
                <Route path="/jordancaballerosb" element={< JordanCaballerosB/>} />
                <Route path="/jordancaballerosj" element={< JordanCaballerosj/>} />
                <Route path="/Adidascaballeros3" element={< Adidascaballeros1/>} />
                <Route path="/adidasdamas1" element={<AdidasDamas1 />} />
               


            </Routes>
        </Router>
    );
}

export default App;
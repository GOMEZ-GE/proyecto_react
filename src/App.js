import './App.css';
import Header from './componentes/layout/Header';
import Footer from './componentes/layout/Footer';

import InicioPages from './pages/inicioPages';
import NoticiasPages from './pages/noticiasPages';
import HistoriaPages from './pages/historiaPages';
import JugadoresPages from './pages/jugadoresPages';
import ContactoPages from './pages/contactoPages';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Header></Header>

        <Routes>
          <Route path="/" element={<InicioPages />} />
          <Route path="/noticias" element={<NoticiasPages />} />
          <Route path="/historia" element={<HistoriaPages />} />
          <Route path="/plantel" element={<JugadoresPages />} />
          <Route path="/contacto" element={<ContactoPages />} />
        </Routes>

      </BrowserRouter>

      <Footer></Footer>

    </div>
  );
}

export default App;

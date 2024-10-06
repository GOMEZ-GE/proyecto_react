import './App.css';
import Header from './componentes/layout/Header';
import Footer from './componentes/layout/Footer';

import InicioPages from './pages/inicioPages';
import NoticiasPages from './pages/noticiasPages';
import HistoriaPages from './pages/historiaPages';
import JugadoresPages from './pages/jugadoresPages';
import ContactoPages from './pages/contactoPages';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './styles/header_nav.css';
import './styles/footer.css';
import './styles/inicio.css';
import './styles/noticias.css';
import './styles/historia.css';
import './styles/plantel.css';
import './styles/contacto.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <header>
          <Header></Header>
        </header>

        <main>
        <Routes>
          <Route path="/" element={<InicioPages />} />
          <Route path="/noticias" element={<NoticiasPages />} />
          <Route path="/historia" element={<HistoriaPages />} />
          <Route path="/plantel" element={<JugadoresPages />} />
          <Route path="/contacto" element={<ContactoPages />} />
        </Routes>
        </main>
        
      </BrowserRouter>

      <footer>
      <Footer></Footer>
      </footer>

    </div>
  );
}

export default App;

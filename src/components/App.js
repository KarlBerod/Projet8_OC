import '../styles/App.css';
import Header from "./Header"
import Footer from "./Footer"
import Banner from "./Banner"
import CardContainer from "./CardContainer"
import Accueil from "./Accueil"
import APropos from "./APropos"
import PageErreur from "./PageErreur"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FicheLogement from './FicheLogement';

function App(){
  return(
    <div className='app'>
      <Router>
        <Header/>
        <main>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/a-propos" element={<APropos />} />
            <Route path="/logement" element={<FicheLogement />} />
            <Route path="*" element={<PageErreur />} />
          </Routes>
           
        </main>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

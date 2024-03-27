import '../styles/App.css';
import Header from "./Header"
import Footer from "./Footer"
import Accueil from "./Accueil"
import APropos from "./APropos"
import PageErreur from "./PageErreur"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FicheLogement from './FicheLogement';
import data from '../data.json';

function App(){
  return(
    <div className='app'>
      <Router>
        <Header/>
        <main>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/a-propos" element={<APropos />} />
            {data.map((item, index) => (
              <Route key={index} path={`/logement/${item.id}`} element={<FicheLogement index={index} />}/>
            ))}
            {/* <Route path="/logement/:id" element={<FicheLogement index={index} />} /> */}
            <Route path="*" element={<PageErreur />} />
          </Routes>
           
        </main>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

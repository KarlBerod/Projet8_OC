import '../styles/App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
// import Component1 from "./";
// import Component2 from "./";

function App(){
  return(
    <Router>
      <div>
        {/* <Routes>
          <Route path="./" element={<Component1 />} />
          <Route path="./" element={<Component2 />} />
        </Routes> */}
      </div>
      <p>yo</p>
    </Router>
  );
}

export default App;

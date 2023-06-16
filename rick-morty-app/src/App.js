import {BrowserRouter, Routes, Route} from "react-router-dom"
//import Navbar from "./components/Navbar";
import Personaje from "./components/Personaje"
import Inicio from "./components/Inicio"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element ={<Inicio></Inicio>}>
        </Route>
        <Route path="/personaje/:id" element ={<Personaje></Personaje>}>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
    //<Navbar brand ="RickAndMorty-App"></Navbar>
  );
}

export default App;

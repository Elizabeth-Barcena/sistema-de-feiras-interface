import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './Components/Pages/Contact';
import Home from './Components/Pages/Home';
import Container from './Components/layout/Container';
import Navbar from './Components/layout/Navbar';
import Footer from './Components/layout/Footer';
import Feiras from './Components/Pages/Feiras';
import Arremate from './Components/Pages/Arremate';
import GerenciarTarefas from './Components/Pages/GerenciarTarefas';
import MostrarArremates from './Components/Cadastro/MostrarArremates';
import CadastroArremate from './Components/Cadastro/CadastroArremate'
function App() {

  return (
    <Router> 
      <Navbar/>
        <Container customClass="min-height">
          <Routes>
            <Route path= "/" element={<Home/>}/> 
            <Route path= "/Contact" element={<Contact/>}/> 
            <Route path= "/Feiras" element={<Feiras/>}/> 
            <Route path= "/Arremate" element={<Arremate/>}/>
            <Route path= "/GerenciarTarefas" element={<GerenciarTarefas/>}/>
            <Route path= "/Home" element={<Home/>}/>
            <Route path= "/MostrarArremates" element={<MostrarArremates/>}/>
            <Route path= "/CadastroArremate" element={<CadastroArremate/>}/>
          </Routes>
        </Container>
      <Footer/>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Convidados from "./components/pages/Convidados"
import Home from "./components/pages/Home"
import Presentes from "./components/pages/Presentes"
import SobreNós from "./components/pages/SobreNós"
import Projects from "./components/pages/Projects"
import NewProject from "./components/pages/NewProject"

import Container from "./components/layout/Container"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"

function App() {
  return (
   <Router>
    <Navbar />
    <Routes>
        <Route element={<Home />} exact path="/">
        </Route>
        <Route element={<SobreNós />} path="/sobre nós">
        </Route>
        <Route element={<Presentes />} path="/presentes">
        </Route>
        <Route element={<Convidados />} path="/convidados">
        </Route>
        <Route element={<NewProject />} path="/newproject">
        </Route>
    </Routes>
    <Footer />
   </Router>
  )
}

export default App;

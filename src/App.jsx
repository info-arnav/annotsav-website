import OrganisationForm from "./components/OrganisationForm"
import VolunteerForm from './components/VolunteerForm'
import ContactForm from "./components/ContactForm"
import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import "./index.css";
function App() {
  return (
    <>
    <Navigation/>
    <Routes>
      <Route path="/" element={  <Home />}/>
      <Route path="/organisation" element={  <OrganisationForm />}/>
      <Route path="/volunteer" element={  <VolunteerForm />}/>
      <Route path="/contact" element={  <ContactForm />}/>
    </Routes>
     <Footer/>

    </>
  );
}

export default App;

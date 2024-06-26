import './App.css'
import { Outlet } from 'react-router-dom'
import NavBarr from './Components/NavBarr'
import Footerr from './Components/Footerr'
import ContactForm from './Components/ContactForm'
import ProjectCard from './Components/ProjectCard'

function App() {
  return (
    <div>
      <NavBarr/>
        <ContactForm/>
        <ProjectCard/>
        <Outlet/>
      <Footerr/>
    </div>
  )
}

export default App

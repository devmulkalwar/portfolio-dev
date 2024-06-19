import './App.css'
import { Outlet } from 'react-router-dom'
import NavBarr from './Components/NavBarr'
import Footerr from './Components/Footerr'

function App() {
  return (
    <div>
      <NavBarr/>
        {/* <Outlet/> */}
      <Footerr/>
    </div>
  )
}

export default App

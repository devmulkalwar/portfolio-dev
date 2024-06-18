import './App.css'
import { Outlet } from 'react-router-dom'
import { Button } from 'flowbite-react'
import NavBar from './Components/NavBarr'
import Footerr from './Components/Footerr'

function App() {
  return (
    <div>
      <NavBar/>
      <main className='main'>
        <Outlet/>
      </main>
      <Footerr/>
    </div>
  )
}

export default App

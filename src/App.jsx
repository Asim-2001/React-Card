import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Navbar />

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="box">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <div className='cards'>
        <Card title="Iron-Man"image="https://wallpapercave.com/wp/wp3405080.jpg"/>
        <Card title="Spider-Man"image="https://res.cloudinary.com/jerrick/image/upload/v1639751710/61bca01d669560001de11d38.jpg"/>
        <Card title="Thor"image="https://www.film-nerd.com/wp-content/uploads/2019/04/THOR-RAGNAROK-Blu-ray.jpg"/>
        <Card title="Captain America"image="https://www.vintagemovieposters.co.uk/wp-content/uploads/2018/05/IMG_3190.jpg"/>
      </div>

      <Footer />
    </>
  )
}

export default App

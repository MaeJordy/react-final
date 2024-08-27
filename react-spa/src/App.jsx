import { useState } from 'react'
import Cabeza from './Componentes/Cabeza'
import Banner from './Componentes/Banner'
import Formulario from './Componentes/Formulario'
import Pie from './Componentes/Pie'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Cabeza />
     <Banner />
     <Formulario />
     <Pie />
    </>
  )
}

export default App

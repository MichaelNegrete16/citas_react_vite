import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPaciente from "./components/ListadoPaciente"
import {useState, useEffect} from 'react'

function App() {

  const [pacientes, setPasientes] = useState([])
  const [paciente, setPasiente] = useState({})

  //Local Storage con UseEffect
  useEffect(()=>{
    const obtenerLS = () =>{
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes'))  ?? []
      setPasientes(pacientesLS)
    }
    obtenerLS()
  }, [])

  useEffect(()=>{
    // console.log('Componente listo o cambio de pacientes')
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  },[pacientes])

  const eliminarPaciente=(id)=>{
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
    setPasientes(pacientesActualizados)
  }
  return (
   <div className="container mx-auto mt-2">
      <Header/>

      <div className="mt-12 md:flex">

      <Formulario 
        pacientes = {pacientes} //props
        setPasientes = {setPasientes} //props
        paciente = {paciente} //Porp para editar pasiente
        setPasiente={setPasiente}
      />

      <ListadoPaciente
        pacientes = {pacientes}
        setPasiente = {setPasiente} // Porp para guardar el edit de pasiente
        eliminarPaciente = {eliminarPaciente}
      />
      </div>

   </div>
  )
}

export default App

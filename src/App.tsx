import Navigation from "./Components/Navigation"
import Project from "./Components/Project"
import { Introduce } from "./Components/Introduce"
import { Hobbies } from "./Components/Hobbies"
import"./App.css"
function App() {
  
  return (
    <>
    <div className="layout">
      <Introduce/>
      <Project/>
      <Hobbies/>
      <Navigation/>
    </div>
    </>
  )
}

export default App

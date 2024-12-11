import { Header } from "./Components/Header/Header"
import { Examples } from "./Components/Examples/Examples"
import './App.css'
import { CoreConcepts } from "./Components/CoreConcepts/CoreConcepts"

function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <CoreConcepts />
        <Examples />
      </main>
    </div>
  )
}

export default App

import { CoreConcept } from "./Components/CoreConcept/CoreConcept"
import { Header } from "./Components/Header/Header"
import { Examples } from "./Components/Examples/Examples"
import { CORE_CONCEPTS } from "./data"
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <section className="core-concepts">
          <h2 className="section-title">Core Concepts</h2>
          <ul className="core-concepts__list">
            {CORE_CONCEPTS.map(item => (
              <CoreConcept key={item.title} {...item}/>
            ))}
          </ul>
        </section>
        <Examples />
      </main>
    </div>
  )
}

export default App

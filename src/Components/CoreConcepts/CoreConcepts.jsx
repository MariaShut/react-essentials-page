import { CoreConcept } from "./CoreConcept"
import { CORE_CONCEPTS } from "../../data"
import { Section } from "../Section"

export const CoreConcepts = () => {
  return (
    <Section title="Core Concepts" className="core-concepts">
      <ul className="core-concepts__list">
        {CORE_CONCEPTS.map(item => (
          <CoreConcept key={item.title} {...item}/>
        ))}
      </ul>
    </Section>
  )
}
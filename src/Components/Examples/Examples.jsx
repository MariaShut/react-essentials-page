import { useState } from "react"
import { TabButton } from "./TabButton"
import { EXAMPLES } from "../../data"
import './Examples.css'

export const Examples = () => {
  const [selectedTopic, setSelectedTopic] = useState();

  // conditional rendering of the tab content
  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    const { title, description, code } = EXAMPLES[selectedTopic];

    tabContent = (
      <div className="tab-content">
        <h3 className="tab-content__title">
          {title}
        </h3>
        <p>{description}</p>
        <pre>
          <code className="tab-content__code">{code}</code>
        </pre>
      </div>
    )
  }

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  const tabs = [
    { key: 'components', title: 'Components' },
    { key: 'jsx', title: 'JSX' },
    { key: 'props', title: 'Props' },
    { key: 'state', title: 'State' },
  ];

  return (
    <section className="examples">
      <h2 className="section-title examples__title">Examples</h2>
      <menu className="examples__menu">
        {tabs.map(({ key, title }) => (
          <TabButton 
            key={key} 
            onSelect={() => handleSelect(key)}
            isSelected={selectedTopic === key}
          >
            {title}
          </TabButton>
        ))}
      </menu>
      {tabContent}
    </section>
  )
}
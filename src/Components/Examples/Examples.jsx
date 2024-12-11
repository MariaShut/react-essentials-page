import { useState } from "react"
import { Section } from "../Section"
import { Tabs } from "../Tabs/Tabs";
import { TabButton } from "../Tabs/TabButton"
import { EXAMPLES } from "../../data"
import './Examples.css'

export const Examples = () => {
  const [selectedTopic, setSelectedTopic] = useState();

  const tabs = [
    { key: 'components', title: 'Components' },
    { key: 'jsx', title: 'JSX' },
    { key: 'props', title: 'Props' },
    { key: 'state', title: 'State' },
  ];

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  // conditional rendering of the tab content
  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    const { title, description, code } = EXAMPLES[selectedTopic];

    tabContent = (
      <div className="tab-content">
        <h3 className="tab-content__title">{title}</h3>
        <p>{description}</p>
        <pre>
          <code className="tab-content__code">{code}</code>
        </pre>
      </div>
    )
  }

  return (
    <Section title="Examples" className="examples examples__title">
      <Tabs 
        buttons={tabs.map(({ key, title }) => (
          <TabButton 
            key={key} 
            onClick={() => handleSelect(key)}
            isSelected={selectedTopic === key}
          >
            {title}
          </TabButton>
        ))}
      >
        {tabContent}
      </Tabs>
    </Section>
  )
}
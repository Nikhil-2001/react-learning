import { EXAMPLES } from "../data";
import { useState} from 'react';
import TabButton from './TabButton'
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples()
{
    console.log('Examples Component Executing')
    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton) {
      // selectedButton => 'components', 'jsx', 'props', 'state'
      setSelectedTopic(selectedButton);
      // console.log(selectedTopic);
    }
    
    let tabContent = <p>Please select a topic.</p>;
  
    if (selectedTopic) {
      tabContent = (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      );
    }

    return (
        <Section title="Examples" id="examples">
        <Tabs buttons = {
                        <>
                        <TabButton
                          isSelected={selectedTopic === 'components'}
                          onSelect={() => handleSelect('components')}
                        >
                          Components
                        </TabButton>
                        <TabButton
                          isSelected={selectedTopic === 'jsx'}
                          onSelect={() => handleSelect('jsx')}
                        >
                          JSX
                        </TabButton>
                        <TabButton
                          isSelected={selectedTopic === 'props'}
                          onSelect={() => handleSelect('props')}
                        >
                          Props
                        </TabButton>
                        <TabButton
                          isSelected={selectedTopic === 'state'}
                          onSelect={() => handleSelect('state')}
                        >
                          State
                        </TabButton>
                        </>
        }>{tabContent}
        </Tabs>    
        </Section>
    )
}
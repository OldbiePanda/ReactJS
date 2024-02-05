import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept/CoreConcept';
import TabButton from './components/TabButton/TabButton';
import { useState } from 'react';
import { EXAMPLES } from './data.js'

function App() {
  const [tabContent, setTabContent] = useState();

  function selectHandle(selectedButton) {
    setTabContent(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept concept = {CORE_CONCEPTS[0]}/>
            <CoreConcept concept = {CORE_CONCEPTS[1]}/>
            <CoreConcept concept = {CORE_CONCEPTS[2]}/>
            <CoreConcept concept = {CORE_CONCEPTS[3]}/>
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={tabContent === 'components'} onSelect={() => selectHandle('components')}>Components</TabButton>
            <TabButton isSelected={tabContent === 'jsx'} onSelect={() => selectHandle('jsx')}>JSX</TabButton>
            <TabButton isSelected={tabContent === 'props'} onSelect={() => selectHandle('props')}>Props</TabButton>
            <TabButton isSelected={tabContent === 'state'} onSelect={() => selectHandle('state')}>State</TabButton>
          </menu>
          { tabContent && (
            <div id='tab-content'>
              <h3>{EXAMPLES[tabContent].title}</h3>
              <p>{EXAMPLES[tabContent].description}</p>
              <pre>
                <code>
                  {EXAMPLES[tabContent].code}
                </code>
              </pre>
            </div> )}
          { !tabContent && <p>Please select topic</p>}
        </section>
      </main>
    </div>
  );
}

export default App;

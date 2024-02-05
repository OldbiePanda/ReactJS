import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept/CoreConcept';
import TabButton from './components/TabButton/TabButton';
import { useState } from 'react';

function App() {
  const [tabContent, setTabContent] = useState('Please click a button');

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
            <TabButton onSelect={() => selectHandle('Components')}>Components</TabButton>
            <TabButton onSelect={() => selectHandle('JSX')}>JSX</TabButton>
            <TabButton onSelect={() => selectHandle('Props')}>Props</TabButton>
            <TabButton onSelect={() => selectHandle('State')}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;

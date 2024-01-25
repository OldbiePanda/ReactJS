import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcepts/CoreConcept';

function App() {
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
      </main>
    </div>
  );
}

export default App;

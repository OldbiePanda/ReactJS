import { Header } from './components/Header';
import { FormSection } from './components/FormSection';
import { Grid } from './components/Grid';
import { useState } from 'react';
import { calculateInvestmentResults } from "./util/investment";

const calculateResults = (data) => {
  return [...calculateInvestmentResults(data)];
}

function App() {
    const [result, setResult] = useState([]);

    const handleFormChange = (data) => {
      const newResult = [...calculateInvestmentResults(data)];
      setResult(newResult);
    }

  return (
    <>
      <Header />
      <FormSection
        handleFormChange={handleFormChange}
      />
      <Grid result={result} />
    </>
  )
}

export default App

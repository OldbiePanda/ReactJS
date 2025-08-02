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

      const initialInvestment = 
        newResult[0].valueEndOfYear -
        newResult[0].interest -
        newResult[0].annualInvestment;

      const updatedResult = newResult.map(row => ({
        ...row, totalInterest:
          row.valueEndOfYear - 
          row.annualInvestment * row.year - 
          initialInvestment
      }));
      setResult(updatedResult);
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

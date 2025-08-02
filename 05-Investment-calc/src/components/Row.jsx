import{ formatter } from '../util/investment';

export function Row({row}) {
  const { year, annualInvestment, interest, totalInterest, valueEndOfYear } = row;

  return (
    <tr>
      <td>{year}</td>
      <td>{formatter.format(annualInvestment)}</td>
      <td>{formatter.format(interest)}</td>
      <td>{formatter.format(totalInterest)}</td>
      <td>{formatter.format(valueEndOfYear)}</td>
    </tr>
  )
}       
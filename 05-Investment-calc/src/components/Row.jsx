import{ formatter } from '../util/investment';

export function Row({row}) {
  const {year, interest, valueEndOfYear, annualInvestment} = row;

  return (
    <tr>
      <td>{year}</td>
      <td>{formatter.format(interest)}</td>
      <td>{formatter.format(valueEndOfYear)}</td>
      <td>{formatter.format(annualInvestment)}</td>
    </tr>
  )
}       
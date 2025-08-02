import { Row } from './Row';

export function Grid({result}) {

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        { result.length > 0 &&
          result.map((item, index) => 
            <Row row={item} key={index} />
          )
        }
      </tbody>
    </table>
  )
}
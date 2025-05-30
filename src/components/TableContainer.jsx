import "../styles/table-container.css"

export default function TableContainer({ headers, data }) {
  return (
    <div class="table-container">
      <table>
        <thead>
          <tr>
            {headers.map((header) => (
              <td>{header}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr>
              <td className="due-cell">
                <div className="date-container">
                  <div className="month-cell">{row.month}</div>
                  <div className="date-cell">{row.date}</div>
                </div>
              </td>
              <td className="type-cell">{row.type}</td>
              <td className="ref-id-cell">
                <div>
                  <div>{row.refType}</div>
                  <div>{row.redID}</div>
                </div>
              </td>
              <td className="amount-cell">{row.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

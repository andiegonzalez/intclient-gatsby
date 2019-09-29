import React from "react"
import "../styles.scss"

const Table = ({ headings, rows, total }) => {
  const renderHeadings = () => {
    return headings.map((head, index) => {
      return <th key={index}>{head}</th>
    })
  }
  const renderRowData = () => {
    return rows.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.account}</td>
          <td className="money">${row.balance} MXN</td>
        </tr>
      )
    })
  }

  const renderTotal = () => {
    return (
      <tr
        style={{
          backgroundColor: "#E9F0FC",
          height: "2em",
        }}
      >
        <td>Total</td>
        <td className="money">{total}</td>
      </tr>
    )
  }

  return (
    <table style={{ width: "100%", maxWidth: "23em" }}>
      <thead>
        <tr
          style={{
            backgroundColor: "#E9F0FC",
          }}
        >
          {renderHeadings()}
        </tr>
      </thead>
      <tbody>{renderRowData()}</tbody>
      <tfoot>
        {total ? (
          renderTotal()
        ) : (
          <tr
            style={{
              backgroundColor: "#E9F0FC",
              height: "1.6em",
            }}
          >
            <td></td>
            <td></td>
          </tr>
        )}
      </tfoot>
    </table>
  )
}

export default Table

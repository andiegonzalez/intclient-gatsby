import React from "react"
import "../styles.scss"

const Table = ({ headings, rows, total }) => {
  const renderHeadings = () => {
    return headings.map((head, index) => {
      return <th key={index}>{head}</th>
    })
  }
  const renderRowData = row => {
    let tdArray = []
    Object.keys(row).forEach(key => {
      //format obj logic
      tdArray.push(<td>{row[key].toString()}</td>)
    })
    return tdArray
  }

  const renderTotal = () => {
    return (
      <tr
        style={{
          backgroundColor: "#E9F0FC",
          height: "2.5em",
        }}
      >
        <td>Total</td>
        <td className="money">${total} MXN</td>
      </tr>
    )
  }

  const renderFooter = () => {
    let count = headings.length
    let tds = []

    if (total) {
      for (let i = 0; i < count - 2; i++) {
        tds.push(<td></td>)
      }
      return (
        <>
          <td>Total</td>
          {tds}
          <td className="money">${total} MXN</td>
        </>
      )
    } else {
      for (let i = 0; i < count; i++) {
        tds.push(<td></td>)
      }
      return <>{tds}</>
    }
  }

  return (
    <table style={{ width: "100%" }}>
      <thead>
        <tr
          style={{
            backgroundColor: "#E9F0FC",
          }}
        >
          {renderHeadings()}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>{renderRowData(row)}</tr>
        ))}
      </tbody>
      <tfoot>
        <tr
          style={{
            backgroundColor: "#E9F0FC",
          }}
        >
          {renderFooter()}
        </tr>
      </tfoot>
    </table>
  )
}

export default Table

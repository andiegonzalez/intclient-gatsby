import React from "react"
import "../styles.scss"

const Table = ({ headings, rows, total, children, movement }) => {
  const formatCurrency = amount => {
    let formatted = amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
    return `$ ${formatted} MXN`
  }
  const renderHeadings = () => {
    let arr = headings.map((head, index) => {
      return (
        <th key={index} className={head === "Amount" ? "money" : ""}>
          {head}
        </th>
      )
    })

    if (movement) {
      arr.push(<th></th>)
    }
    return arr
  }

  const renderRowData = row => {
    let tdArray = []
    let value = ""
    Object.keys(row).forEach((key, index) => {
      //format obj logic
      if (key === "balance" || key === "amount") {
        value = formatCurrency(row[key])
      } else {
        value = row[key]
      }
      tdArray.push(
        <td className={key === "balance" ? "money" : ""} key={index}>
          {value.toString()}
        </td>
      )
    })
    return tdArray
  }

  const renderFooter = () => {
    let count = headings.length
    let tds = []
    if (total && movement) {
      for (let i = 0; i < count - 2; i++) {
        tds.push(<td></td>)
      }
      return (
        <>
          <td>Total</td>
          {tds}
          <td className="money">{formatCurrency(total)}</td>
          <td></td>
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
        {children
          ? children
          : rows.map((row, index) => <tr key={index}>{renderRowData(row)}</tr>)}
      </tbody>
      <tfoot>
        <tr
          style={{
            backgroundColor: "#E9F0FC",
            height: "2.5em",
          }}
        >
          {renderFooter()}
        </tr>
      </tfoot>
    </table>
  )
}

export default Table

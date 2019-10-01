import React, { useState } from "react"
import { IconButton, Input } from "@chakra-ui/core"

const Movement = ({ data }) => {
  const [editing, setEdit] = useState(false)
  const handleEditMode = () => {
    setEdit(!editing)
  }
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ]
  const formatDate = date => {
    return (
      date.getDate() + "/" + months[date.getMonth()] + "/" + date.getFullYear()
    )
  }
  const formatCurrency = amount => {
    let formatted = amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
    return `$ ${formatted} MXN`
  }
  if (editing) {
    return (
      <>
        <tr>
          <td>
            <Input type="date" value={data.date} />
          </td>
          <td>
            <Input type="text" value={data.account.toString()} />
          </td>
          <td style={{ maxWidth: "10rem" }}>
            <Input type="text" value={data.concept.toString()} />
          </td>
          <td>
            <Input type="text" value={data.category.toString()} />
          </td>
          <td className="money">
            <Input type="text" value={data.balance.toString()} />
          </td>
          <td style={{ width: "5rem" }}>
            <IconButton
              variantColor="green"
              aria-label="Save Movement"
              icon="check"
              isRound="true"
              onClick={handleEditMode}
              size="xs"
            />
            <IconButton
              variantColor="red"
              aria-label="Cancel Movement"
              icon="close"
              size="xs"
              isRound="true"
              ml={2}
            />
          </td>
        </tr>
      </>
    )
  } else {
    return (
      <>
        <tr>
          <td>{formatDate(data.date)}</td>
          <td>{data.account.toString()}</td>
          <td style={{ maxWidth: "10rem" }}>{data.concept.toString()}</td>
          <td>{data.category.toString()}</td>
          <td className="money">{formatCurrency(data.balance)}</td>
          <td style={{ width: "5rem" }}>
            <IconButton
              variantColor="blue"
              aria-label="Edit Movement"
              icon="edit"
              isRound="true"
              size="xs"
              onClick={handleEditMode}
            />
            <IconButton
              variantColor="red"
              aria-label="Delete Movement"
              icon="delete"
              size="xs"
              isRound="true"
              ml={2}
            />
          </td>
        </tr>
      </>
    )
  }
}

export default Movement

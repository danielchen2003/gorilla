// import "./App.css"
import { useState } from "react"
import { receipt1, receipt2, receipt3 } from "../data/data"
// import { receipt1, receipt2, receipt3 } from "../data/data"
// import from "../data/data"
import receipts from "../data/data"
// import receipts from "../data/data"
import Record from "./Record"
// import { v4 as uuidv4 } from "uuid"
import { v4 as uuidv4 } from "uuid"

function Main() {
  const [receipt, setReceipt] = useState([
    receipt1,
    receipt2,
    receipt3,
    ...receipts,
  ])
  // const [paid, setPaid] = useState
  // const [receipt, setReceipt] = useState()
  // receipt.map(x=>{...x,id:nanoid()})
  // receipt.forEach((item, i) => {
  //   item.id = i + 1
  // })

  // const filter = receipt1=>{
  //   if id === receipt1.id {
  //     return
  //   }
  //   else{

  //   }
  // }
  // console.log(receipt)
  // setReceipt(receipts)

  // setReceipt([receipt1])
  // setReceipt([...receipt, receipt2])
  // setReceipt([...receipt, receipt3])
  // console.log(receipt)
  // const addToReceipt = (getMoreOders) => {
  //   setReceipt([getMoreOders, ...receipt])
  // }
  const handleOnClick = (id) => {
    // addToReceipt(receipt1)
    // addToReceipt(receipt2)
    // addToReceipt(receipt3)
    const filtered = receipt.filter((rec) => {
      if (rec.id === id) {
        rec.paid = true
      }
    })
    setReceipt(filtered)
  }

  return (
    <div>
      {receipt.map((rec, index) => {
        const uuid = uuidv4()
        // console.log(uuid)
        return <Record receipt={rec} key={uuid} />
      })}
    </div>
  )
}

export default Main

// {cities.map((citi, index) => {
//   return <Citi citiData={citi} key={index} />
// })}

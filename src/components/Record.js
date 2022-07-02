import Toppings from "./Toppings"

function Record(props) {
  // const data = {props.receipt}
  // console.log(props.receipt)
  // const name = props.person
  const receipt1 = props.receipt
  // console.log(receipt1)
  // console.log(receipt1)
  // console.log(props.key)
  const name = receipt1.person
  const { main, protein, rice, sauce, drink, cost, toppings } = receipt1.order
  const paid = receipt1.paid
  const id = props.key

  console.log(props.key)
  const removeReceipt = (event) => {
    // console.log(event)
    let target = event.target
    console.log(props)
    let foundParent = false
    while (!foundParent) {
      // find the target have classList .records  else check the parent element  stop loop if no more parent
      let haveRecords = target.classList.contains("records")
      if (haveRecords) {
        target.remove()
        foundParent = true
      } else {
        if (!target.parentElement) {
          // reach the top of tree  window root
          foundParent = true
        }
        target = target.parentElement
      }
    }
  }

  return (
    <div
      className="records"
      onClick={(event) => {
        // console.log(event.target)
        receipt1.paid = true
        removeReceipt(event)

        // receipt1.remove()
        // event.target.remove()
      }}
    >
      <h1>{name}</h1>
      <p>Main:{main}</p>
      <p>Protein:{protein}</p>
      <p>Rice:{rice}</p>
      <p>Sauce:{sauce}</p>
      <p>Drink:{drink}</p>
      <p>Cost:{cost}</p>
      {toppings.map((top) => {
        return <Toppings topping={top} />
      })}
    </div>
  )
}
export default Record

// const receipt1 = {
//   person: "Andre",
//   order: {
//     main: "Burrito",
//     protein: "Organic Tofu",
//     rice: "Purple Rice",
//     sauce: "Green Crack",
//     toppings: ["Baby Bok Choy", "Cucumber Kimchi"],
//     drink: "Korchata",
//     cost: 22,
//   },
//   paid: false,
// }

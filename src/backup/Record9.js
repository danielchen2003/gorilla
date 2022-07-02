// import Toppings from "./Toppings"
//三种办法去element
function Record(props) {
  const receipt1 = props.receipt
  // console.log(receipt1)
  // console.log(receipt1)
  const name = receipt1.person
  const { main, protein, rice, sauce, drink, cost, toppings } = receipt1.order
  const paid = receipt1.paid

  // const key = props.key

  const removeReceipt = (event) => {
    console.log(event)
    let target = event.target

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
        console.log(event.target)
        receipt1.paid = true
        removeReceipt(event)
        // console.log(props.id)

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
      {/* {toppings.map((top, index) => {
        return <Toppings toppings={top} key={index} />
      })} */}
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

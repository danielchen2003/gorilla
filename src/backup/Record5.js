import Toppings from "../components/Toppings"

function Record(props) {
  // const data = {props.receipt}
  // console.log(props.receipt)
  // const name = props.person
  const receipt1 = props.receipt
  // console.log(receipt1)
  // console.log(receipt1)
  const name = receipt1.person
  const { main, protein, rice, sauce, drink, cost, toppings } = receipt1.order
  const paid = receipt1.paid
  console.log(toppings)
  const key = props.keys

  const removeReceipt = (event) => {
    console.log(receipt1.paid)
    //   let target = event.target

    //   let foundParent = false
    //  if target.
  }

  // updateTodo = (id, done) => {
  //   const todos = this.state.todos
  //   const updateTodos = todos.map((todo) => {
  //     if (todo.id === id) return { ...todo, done }
  //     else return todo
  //   })
  // }

  return (
    <div
      className="records"
      onClick={(event) => {
        console.log(event.target)
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
      <div>
        {toppings.map((top) => {
          return <Topping toppings={top} key={index} />
        })}
      </div>
    </div>
  )
}
export default Record
//   return (
//     <div
//       className="records"
//       onClick={(event) => {
//         console.log(event.target)
//         receipt1.paid = true
//         removeReceipt(event)
//         // receipt1.remove()
//         // event.target.remove()
//       }}
//     >
//       <h1>{name}</h1>
//       <p>Main:{main}</p>
//       <p>Protein:{protein}</p>
//       <p>Rice:{rice}</p>
//       <p>Sauce:{sauce}</p>
//       <p>Drink:{drink}</p>
//       <p>Cost:{cost}</p>

//     </div>
//   )
// }

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

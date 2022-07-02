import "./App.css"
import Main from "./components/Main"

// import { receipt1, receipt2, receipt3 } from "./data/data"

function App() {
  // addTodo = (todoObj) => {
  //   const todos = this.state.todos
  //   const newToDos = [todoObj, ...todos]
  //   // console.log({ todos })
  //   this.setState({ todos: newToDos })
  // }
  return (
    <div className="App">
      <Main />
    </div>
  )
}

export default App

// {cities.map((citi, index) => {
//   return <Citi citiData={citi} key={index} />
// })}

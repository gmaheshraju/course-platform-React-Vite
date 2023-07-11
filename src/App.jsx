import Signup from "./Signup.jsx"

function App() {
  
  return (
    <>
    <Signup></Signup>
    </>
  )
}

function TodoApp(props){
  return <div>
   {props.text} : Props passing from main component
   <br/>
    Todo App :Todo Component
    <br/>
    {props.yoyo} :Props passing from main component
  </div>
}

function BigText(){
  return <div>

   hello bigText :Bigtext Component
  </div>
}
export default App

import './App.css'

function App() {
  

  return (
    <>
      <Todos title='title' description='des' done={false}></Todos>
    </>
  )
}

interface todoInput{
  title: string,
  description: string,
  done: boolean
}

function Todos(props:todoInput){
  return <div>
    <div>{props.title}</div>
    <div>{props.description}</div>
  </div>
}
export default App

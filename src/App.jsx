import './App.css'
// import TodoForm from './components/ToDoForm'
import HobbiesFiller from './hobbies.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function App() {
  return (
    <>
      {/* <TodoForm /> */}
      <HobbiesFiller />
      <ToastContainer />
    </>
  )
}

export default App

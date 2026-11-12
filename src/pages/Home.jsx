import { useState } from "react"
import AddButton from "../components/Shared/addButton"
import DeleteButton from "../components/Shared/DeleteButton"
import EditButton from "../components/Shared/EditButton"

const Home = () => {


  const [todos, setTodos] = useState([
    { name: "Eat" },
    { name: "writing" },
    { name: "study" },
    { name: "playing" },
    { name: "sleep" },
  ])


  return (
    <div className='h-full flex flex-col gap-5 items-center mt-10'>
      <h1 className='text-center text-6xl font-bold'>Welcome  <span className='hover:text-amber-600 duration-300'>Shrouk</span>
      </h1>
      <form className="flex gap-4 shadow-2xl w-full ">
        <input
          className=" grow outline-0 border border-gray-300 hover:border-2 hover:border-indigo-500 rounded-lg"
          type="text" placeholder="write your task here..." />
        <AddButton></AddButton>
      </form>
      <div className="tasks w-full flex flex-col gap-5">
        {
          todos.map(({name}, i) => (

            <div 
            key={i}
            className="task group flex justify-between items-center rounded-lg shadow-xl p-4 ">
              <h2 className=" relative overflow-hidden  font-bold text-lg  tracking-wide uppercase">
                {name}
                <span className="w-full h-0.5 bg-indigo-400 group-hover:right-0 duration-300 block absolute right-full bottom-0 "></span>
              </h2>
              <div className="icons flex items-center gap-2">
                <EditButton></EditButton>
                <DeleteButton></DeleteButton>
              </div>

            </div>

          ))
        }


      </div>
    </div>
  )
}

export default Home

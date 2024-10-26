import React, { useState } from 'react';
import { FaBars, FaUser } from 'react-icons/fa';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';

function TodoList() {



  // get it
  const [getIt , upGetIt] = useState('')
  const [getItForCat , upGetItForCat] = useState([''])


  // main todo state
  const [ mainInPut , UpmainInPut] = useState('')
  const [ mainInPuttoSHOW , UpmainInPuttoSHOW] = useState([''])


  console.log(mainInPut ,'ai ta oi')









  const getIdToken = (e)=>{
    upGetIt(e.target.value)
  }
  
  const getForCat = ()=>{
    upGetItForCat([getIt.trim()])
  }


  // trynari
  const [ one , tow ] = useState()

  const flip = ()=>{
    tow(!one)
  }

  // main todo 
  const maiIputOnChange = (e)=>{
   
    UpmainInPut(e.target.value)
  }







  return (
    <div className="bg-gray-100 min-h-screen flex mainTodo ">
      <Navbar/>
      {/* Header */}
      <div className="w-full h-fit">
      <div className="w-full h-[100px] flex items-center pr-[10px]">
        <div className="w-[90px] h-[90px] border-[10px] flex flex-col items-center justify-center text-[#00000049] border-[#51cad3] pl-1 text-[17px] font-semibold rounded-full">
          <div className="w-[60px]">Task 0</div>
          <div className="w-[60px]">Done 0</div>
        </div>
        <Link className='ml-auto' to='/userprofile'> <FaUser className='text-[30px] text-white ' /> </Link>
        
      </div>

     <div className="w-full h-fit flex flex-col items-center ">
     <header className="w-full max-w-xl flex items-center justify-between mb-8   ">
        <h1 className=" text-2xl md:text-4xl font-bold text-blue-600 text-center w-full">
          To-Do List
        </h1>
        <div className="relative">
          <button className="px-10 py-2"> <FaBars className='text-white text-[25px] ' /> </button>
          <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2">
               
               {
                getItForCat.map((categoryOfTodo , index)=>(
                  <button key={index} className="block w-full text-left px-4 py-2 hover:bg-blue-100">
              <span className='text-[#ffa826] font-bold'> {categoryOfTodo} </span> <span className="text-blue-600">(0)</span>
            </button>
                ))
               }

            


          </div>
        </div>
      </header>

      {/* Category Add Section */}
      <div className="w-full max-w-xl mb-4">
        <button onClick={flip} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">
          Add Category
        </button>

          {
            one && <div className="flex mt-2">
          <input
            onChange={(e)=>getIdToken(e)}
            type="text"
            placeholder="Enter category name..."
            className="p-2 border border-gray-300 rounded-l-lg w-3/4"
          />
          <button onClick={getForCat} className="bg-blue-600 text-white p-2 rounded-r-lg hover:bg-blue-500">
            Add
          </button>
        </div>
          }

          

        


      </div>

      {/* Task Input */}
      <div className="w-full max-w-xl flex flex-col mb-4">
        <div className="flex">
          <input
            onChange={(e)=>maiIputOnChange(e)}
            type="text"
            placeholder="Add a task to General..."
            className="flex-grow p-2 border border-gray-300 rounded-l-lg"
          />
          <button className="bg-blue-600 text-white p-2 rounded-r-lg hover:bg-blue-500">
            Add Task
          </button>
        </div>
      </div>

      {/* Task List */}
      <div className="w-full h-[310px] max-w-xl space-y-4 overflow-scroll taxkScroll">
        <div className="w-full bg-white h-[40px] relative ">
          <input className='w-full h-[40px] ' type={one? 'text' : '' } />

          <div className="flex gap-3 absolute top-0 right-0">
          <button> edit</button>
          <button> add</button>
          </div>
        </div>
        <p className="text-gray-500 text-center">No tasks in <span className='text-[#ffa826] font-extrabold'>General</span>.</p>
      </div>

      {/* Footer */}
      <footer className="mt-8 text-[#000] text-sm">
        &copy; 2024 Todo List
      </footer>
     </div>



      </div>
    </div>
  );
}

export default TodoList;

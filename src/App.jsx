import Header from "./components/Header";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import Task from "./components/Task";
import AddTask from "./components/AddTask";
import { useEffect, useReducer, useState } from "react";
import Filter from "./components/Filter";
import {taskReducer,init} from "./hooks/taskReducer";

function App(){

  const [editingId,setEditingId] = useState();

  const [tasks,dispatch] =useReducer(taskReducer,[],init)

  const [filter,setFilter] = useState("all");
  const  [search,setSearch] = useState("");

function changeFilter(type){
    setFilter(type)
  }
  
const nextId = tasks.length === 0 ? 1 : tasks[tasks.length-1].id + 1;

function addTask(input){
  dispatch({
    type:'add',
    task:{
      id: nextId,
      text: input,
      completed: false
    }
  })
}

function deleteTask(clickedId){
  dispatch({
    type: "delete",
    id: clickedId
  });
}

function editTask(editId,editText){
  dispatch({
    type: 'edit',
    id: editId,
    text: editText
  });
}

function toggleTask(taskId){
  dispatch({
    type: "toggle",
    id: taskId,
  })
}

  let displayedTasks = tasks;
 
  if(filter === "completed") {
        displayedTasks =  tasks.filter(task=>task.completed);
        }

      else if( filter === "active")  {
          displayedTasks = tasks.filter(task=>!task.completed);     
        }
        
  if(search !==  ""){
    let serachText = search.toLowerCase()
     displayedTasks= displayedTasks.filter(task=>task.text.toLowerCase().includes(serachText))
  }
           
   // Saving tasks to local storage
    useEffect(()=>
      localStorage.setItem(
          "tasks",
          JSON.stringify(tasks)
        ),
         [tasks]);

  return (
    <>
    <Header 
     title="Task Manager"
     subtitle = "Organize your day"/>
     
     <Welcome
      name="Aditya"
      taskCount={tasks.length}
     />

      <AddTask add = {addTask} />
      <br />
       <Filter changeFilter = {changeFilter}/>
        <p>Filter is set to {filter}</p>

     <div>
      <input type="search" value={search} onChange={(e)=>setSearch(e.target.value)}/>&nbsp;

      
     </div>

     <ul>
      
      {
      displayedTasks.map(task=>
        <Task key={task.id} task={task}  deleteTask={deleteTask}
        editTask = {editTask}
        editingId= {editingId}
        setEditingId = {setEditingId}
        toggleTask={toggleTask}
        />
      )
      }
     </ul>
     {/* <Counter /> */}
     
     <Footer
      name = "@acodein"
      year = {2026}
      msg = "Made with ❤️ Built with React"
     />
     </>
  );
}


export default App; 

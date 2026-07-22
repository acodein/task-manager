import Header from "./components/Header";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
// import Counter from "./components/Counter";
import Task from "./components/Task";
import AddTask from "./components/AddTask";
import { useState } from "react";
import Filter from "./components/Filter";

function App(){

   const [editingId,setEditingId] = useState(null);
  const [tasks,setTasks] =useState([
  { id: 1, text: "Learn React", completed: false },
  { id: 2, text: "Build Project", completed: true },
  { id: 3, text: "Push to GitHub", completed:false },
])

const [filter,setFilter] = useState("all");

function changeFilter(type){
    setFilter(type)
  }
  


const nextId = tasks.length === 0 ? 1 : tasks[tasks.length-1].id + 1;

function addTask(input){
  setTasks([...tasks,{id:nextId,text:input,completed:false}])
}

function deleteTask(clickedId){
  setTasks(tasks.filter(task=>task.id !== clickedId))
}

function editTask(editId,editText){
//  console.log(editId,editText)
 
 setTasks(tasks.map(task=>{
   if(editId === task.id){
    return {...task,text:editText}
   };
   return task;
})
)}

function toggleTask(taskId){
  setTasks(tasks.map(task=>{
    if(taskId === task.id){
      return {...task,completed:(!task.completed)}
    }
    return task
  }))
}

  const displayedTasks = filter === "completed" ?
          tasks.filter(task=>task.completed): filter === "active" ? 
          tasks.filter(task=>!task.completed) : tasks
           
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

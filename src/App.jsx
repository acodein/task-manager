import Header from "./components/Header";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import Counter from "./components/Counter";
import Task from "./components/Task";
import AddTask from "./components/AddTask";
import { useState } from "react";

function App(){

   const [editingId,setEditingId] = useState(null);
  const [tasks,setTasks] =useState([
  { id: 1, text: "Learn React", completed: false },
  { id: 2, text: "Build Project", completed: true },
  { id: 3, text: "Push to GitHub", completed:false },
])

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
     
      {tasks.map(task=>{
        return <Task key={task.id} task={task}  deleteTask={deleteTask}
        editTask = {editTask}
        editingId= {editingId}
        setEditingId = {setEditingId}
        />
      })}
     
     <Counter />
     
     <Footer
      name = "acodein"
      year = {2026}
      msg = "Built with React"
     />
     </>
  );
}


export default App; 

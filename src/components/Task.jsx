import { useState } from "react";

function Task({task,deleteTask, editTask,editingId,setEditingId}){
  
   const [editText, setEditText] = useState(task.text)

    function handleClick(){
      deleteTask(task.id)
   }

   function handleEdit(){
      setEditingId(task.id)
   }

   function handleSave(){
      editTask(task.id,editText)
      setEditingId(null)
   }

   function getDisplayTask(){
      if (task.id === editingId) {
    return (
        <input
            type="text"
            value={editText}
            onChange={e => setEditText(e.target.value)}
        />
    );
}

if (task.completed) {
    return <del>{task.text}</del>;
}

   return <p>{task.text}</p>;
   }


   const isEditing = task.id === editingId
   const buttonName = isEditing ? "Save" : "Edit"


 return(
    <ul>
    <li>
       {getDisplayTask()} 
      <button type="button" 
              onClick={handleClick}>Delete
              </button>&nbsp;
      <button type="button" 
               onClick={ isEditing ? handleSave:handleEdit}>{buttonName}</button>
    </li>
    </ul>
 )
}

export default Task;



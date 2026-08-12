function init(initialValue){
    return JSON.parse(localStorage.getItem("tasks")) || initialValue
}

function taskReducer(state,action){
 switch (action.type){
        case "delete" : 
            return state.filter(task=>task.id !==
                action.id)

        case "add" : 
            return [...state,action.task]
        
        case "toggle":
            return state.map(task=>{
                if(action.id === task.id){
                    return {
                        ...task,
                        completed:(!task.completed)
                    };
                }
                return task
            }) 

        case "edit" : 
            return state.map(task=> {
                if(action.id === task.id){
                    return {
                        ...task,
                        text:action.text
                    }
                };

                return task;
            })

        default:
             return state;
    }
}

export {taskReducer,init};
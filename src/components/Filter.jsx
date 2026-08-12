function Filter({changeFilter}){


    return (
        <div id="filter-btns">
        <button onClick={()=>changeFilter("all")}>All</button>
        <button onClick={()=>changeFilter("active")}>Active</button>
        <button onClick={()=>changeFilter("completed")}>Completed</button>
        </div>
    )
}

export default Filter;
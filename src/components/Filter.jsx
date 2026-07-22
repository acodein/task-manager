function Filter({changeFilter}){


    return (
        <>
        <button onClick={()=>changeFilter("all")}>All</button>
        <button onClick={()=>changeFilter("active")}>Active</button>
        <button onClick={()=>changeFilter("completed")}>Completed</button>
        </>
    )
}

export default Filter;
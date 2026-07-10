function Welcome({name,taskCount}){
    return(<div>
        <h2>Welcome, {name}</h2>
        <p>Today you have {taskCount} tasks.</p>
    </div>
    );
}

export default Welcome;
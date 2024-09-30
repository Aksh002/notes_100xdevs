export function Todos({todos}){      //We r suing object destructuring here, we can also use props instead
    /*
    todos=[
    {
    title: "Workout"
    description: "30 mins cardio"
    }
    ]
    // we gotta render each elemnt of array, for that:-
    */
    return <div>
        {todos.map(function(todo,index){
            return (<div key={index}>                               {/* Ensure unique key for each item */}
                <h2>{todo.title}</h2>
                <h3>{todo.description}</h3>
                <button>{todo.done==true?"Completed":"Mark done"}</button>
            </div>)
        })}
    </div>
}
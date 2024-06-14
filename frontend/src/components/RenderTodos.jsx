export function RenderTodos({todos}){
    return <div>
        {
            todos.map((todo) => {
                return <div>
                    <h1>{todo.title}</h1>
                    <h3>{todo.desc}</h3>
                    <button type="button">{todo.completed == true ? "completed" : "Mark as completed"}</button>
                </div>
            })
        }
    </div>
} 
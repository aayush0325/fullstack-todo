
import { useState } from "react"

export function CreateTodo(){
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");
    return <div>
        <input type="text" name="" id="" placeholder="title" onChange={
            (event) => {
                const value = event.target.value;
                setTitle(value)
            }
        }/> <br />
        <input type="text" name="" id="" placeholder="desc" onChange={
            (event)=>{
                const value = event.target.value;
                setDesc(value)
            }
        }/> <br />
        <button type="button" onClick={
            ()=>{
                fetch('http://localhost:3000/todos',{
                    method: "POST",
                    body: JSON.stringify({
                        title: title,
                        desc: desc,
                    }),
                    headers:{ 
                        "Content-Type":"application/json"
                    } 
                }).then(async function (res){
                    const response = await res.json();
                    alert('todo added')
                })
            }
        }>Add Todo </button>
    </div>
}
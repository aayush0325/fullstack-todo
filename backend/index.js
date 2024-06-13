const express = require('express');
const { createTodo } = require('./types');
const{ updateTodo } = require('./types');
const { todo } = require('./db');

const app = express();
const port = 3000;
app.use(express.json());


app.post('/todo',async (req,res) => {
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload)
    if(!parsePayload.success){
        res.status(411).json({
            msg: 'u sent the wrong inputs'
        }) 
        return;
    }else{
        //put in mongodb, respond with 200 when done
        await todo.create({
        title:req.body.title,
        desc:req.body.desc,
        completed:false,
        })

        res.status(200).json({
            msg:'todo created'
        }) 
    }
})


app.get('/todos',async (req,res) => {
    const todos = await todo.find({});
    res.json({
        todos,
    })
})

app.put('/completed',async (req,res) => {
    const payload = req.body;
    const parsePayload = updateTodo.safeParse(payload);
    if(!parsePayload.success){ 
        res.status(411).json({
            msg: 'u sent the wrong inputs'
        })
        return;
    }else{
        await todo.updateMany({
            __id:req.body.id
        },{
            completed:true
        });

        res.json({
            msg:'todo completed',
        })
        
    }
})


app.use((err,req,res,next) => {
    res.json({
        msg:`${err}`
    })
})



app.listen(port,() => {
    console.log(`listening to port ${port}`);
})


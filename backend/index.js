const express = require('express');
const { createTodo } = require('./types');
const { todo } = require('./db');
const cors = require('cors')
const app = express()

/*const todoSchema = new mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean,
}) */
app.use(express.json())
app.use(cors())
// A post end point to create a new todo
app.post('/todo', async (req, res) => {
    const createPayload = req.body;
    try {
        // Validate the request body against the schema
        const parsedPayload = createTodo.parse(createPayload);

        // If validation passes, insert into MongoDB
        await todo.create({
            title: parsedPayload.title,
            description: parsedPayload.description,
            completed: false
        });

        // Respond with success message
        res.status(200).json({
            msg: "Todo Created"
        });
    } catch (error) {
        // If validation fails, respond with error message
        res.status(411).json({
            msg: "You Sent the wrong message",
            error: error // Optionally, you can send the validation error details
        });
    }
});

// A get endpoint to get all todos
app.get('/todos', async (req, res) => {
    const todos = await todo.find();
    res.json({todos})
})
// A put endpoint to mark a todo as completed
app.put('/completed', (req, res) => {
    const updatepayload = req.body;
    const parsePayload = updateTodo.parse(updatepayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg : "You Sent the wrong inputs",
        })
    }

    todo.update({
        _id : req.body.id,
    },{
        completed : true
    })                                                                      
    res.status(200).json({
        msg : "Todo Marked as completed"
    })
})

app.listen(3000);
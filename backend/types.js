// Here we add all our zod inputs
const zod = require('zod')

/*
Here we are xreating a zod for each endpoint
zod for a post to post a new todo we will have title and description of the tdodo
zod for a get to get all todos Here we will provide id of the todo
zod for a put to mark a todo as completed Here we will provide id of the todo
*/

const createTodo = zod.object({
    title: zod.string(),
    description: zod.string(),
    
})

const updateTodo = zod.object({
    id : zod.string(),
})

module.exports = {
    createTodo,
    updateTodo
}
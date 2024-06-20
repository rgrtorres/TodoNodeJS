const router = require('express').Router()
const TodoModel = require('../models/Todo')

router.post("/add/todo", (res, req) => {
    const { todo } = res.body
    const newTodo = new TodoModel({ todo })

    newTodo.save().then(() => {
        console.log('Successfully added todo!')
        req.redirect('/')
    }).catch(err => console.log(err))
})

router.get("/delete/todo/:_id", (res, req) => {
    const _id = res.params._id
    console.log(_id)
    TodoModel.deleteOne({ _id }).then(() => {
        req.redirect('/')
    }).catch(err => console.log(err))
})

module.exports = router
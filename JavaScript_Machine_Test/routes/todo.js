const express = require("express")

const router = express.Router()
router.use(express.urlencoded({extended:false}))

let toDoList = []
router.get("/", (req, res) => {
    console.log("ToDo App Started")
    toDoList = []
    res.render("todo")
})
router.post("/", (req, res) => {
    console.log("Items Added")
    const {items} = req.body
    
    toDoList.push(items)
    console.log(toDoList)
    res.render("todo", {toDoList})

})
router.post("/clearall", (req, res) => {
    console.log("ToDo App Started")
    toDoList = []
    res.render("todo")
})


module.exports = router
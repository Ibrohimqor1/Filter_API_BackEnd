const { Router } = require("express");
const router = Router();

const Todo = require("../models/filter");

//get all todos

router.get("/", async (req, res) => {
    try {
        const todo = await Todo.find({});

        res.json(todo);
    } catch (error) {
        console.log({
            error,
            message: "get metod iwlamadi,nmadr notogri !",
        });
    }
})

// add POST - todo 
router.post("/", async (req, res) => {
    const { title } = req.body;

    let todo = await Todo.findOne({ title });
    if (todo) return res.send("This todo already exists");

    todo = new Todo(req.body);
    await todo.save();

    res.send("Todo added: OK");
});


//get by ID
router.get("/:_id", async (req, res) => {
    try {
        const todo = await Todo.find({_id: req.params._id});

        res.json(todo);
    } catch (error) {
        console.log({
            err,
            message: "Get by ID ishlamadi, Nmadir xato"
        });
    }
});

// delete device
router.delete("/:_id", async (req, res) => {
    try {
        await Todo.findByIdAndDelete({ _id: req.params._id });

        res.send(`Todo with id: ${req.params._id} deleted:ok`);   
    } catch (error) {
        console.log({
            err,
            message: "Delete metod ishlamadi, Nmadr hato",
        });
    }
});

//edit device 
router.patch("/:_id", async (req, res) => {
    try {
        const  _id = req.params._id;
        const uptTodo = req.body;
        
        const result = await Todo.findByIdAndUpdate(_id, uptTodo);
        res.send(result);
    } catch (error) {
        console.log({
            error,
            message: "Patch metod ishlamadi, Nmadur notogri ketdi !",
        });
    }
})

module.exports = router;
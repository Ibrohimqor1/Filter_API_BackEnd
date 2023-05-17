require("dotenv").config();
const todosRouter = require('./routes/Filter');//esxpress
const express = require("express");
const { default: mongoose } = require("mongoose");
const cors = require("cors");

const app = express();//express () bn qoyilwi kere ctobi cistyro bosin!

app.use(cors())
app.use(express.json());
app.use('/filter', todosRouter);

const PORT = process.env.PORT || 8000;//env port ucun

function start () {
    try {
     mongoose.connect(process.env.MONGO_URL, {
        useNewURLParser: true,
     });
     app.listen(PORT, () => console.log(`Server: http://localhost:${PORT}`));
    } catch(error) {
        console.log(error);
    }
   
}
start()

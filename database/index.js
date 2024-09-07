import express from "express";
import mongoose from "mongoose";
import Medicine from "./model/medicine.js";
import User from "./model/user.js"

const app = express()
const port = 3000

mongoose.connect('mongodb://localhost:27017/hackathon');
app.set('view engine', 'ejs');

// const getRand= (arr)=>{
//    let rand = Math.floor(Math.random() * (arr.length - 1))
//     return arr[rand]
// }

app.get('/', (req, res) => {
    res.render('index', {foo: 'FOO'});
})

app.get('/generate', async (req, res) => {
     console.log("check")

    //await Employee.deleteMany({})

    
    
        let e =await User.create()
        console.log(e)
        await e.save()
    }
)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
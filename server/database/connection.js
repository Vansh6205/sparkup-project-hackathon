const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json()); //convert json data to js object


mongoose.connect("mongodb://127.0.0.1/hackathon").then(()=>{
    console.log("DB connected")
}).catch((err)=>{
    console.log(err)
})

// const connectDB = async () => {
//     try {
//         // MongoDB connection
//         const con = await mongoose.connect(process.env.MONGO_URL, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });

//         console.log(`MongoDB connected: ${con.connection.host}`);
//     } catch (err) {
//         console.log(err);
//         process.exit(1);
//     }
// };

module.exports = connectDB;

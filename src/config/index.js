import dotenv from 'dotenv';
import express from 'express';
import { BookReservations } from '../service/firebaseDB.js';
dotenv.config();


const PORT = process.env.PORT;
const app = express();

app.use(express.json());


app.get("/", (req, res) => {
    res.json({ message: "welcome my urban limos backend." });
});

app.post("/upload-reservations", (req, res) => {
    const  reservations = req.body;
    // res.json(reservations.user_name)
    if (typeof reservations == "object") {
        BookReservations(reservations,res).then((result)=>{
            res.status(201).json({message: "data upload in the firebase! current " + JSON.stringify(result) });
        });
    } else {
        res.json({message: "welcome my urban limos backend api please add data in body!"});
    }
});

app.listen(PORT, () => {
    console.log("Port Run From Adeel");
})
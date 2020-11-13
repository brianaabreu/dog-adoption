// const express = require('express');
// const sqlite3 = require('sqlite3').verbose();
// const cors = require("cors");
// const bcrypt = require('bcrypt');
// const bodyParser = require('body-parser');
// const cookieParser = require("cookie-parser");
// const session = require("express-session");

// const saltRounds = 10;
// const app = express();

// app.use(express.json());
// app.use(cors({
//     origin: ["http://localhost:3000"],
//     methods: ["GET", "POST"],
//     credentials: true
// }));
// app.use(cookieParser());
// app.use(bodyParser.urlencoded({ extended: true }));

// // app.use(session({
// //     key: "userId",
// //     secret: '343b88b40d4464bb66d2a',
// //     resave: false,
// //     saveUninitialized: false,
// //     cookie: {
// //         expires: 60 * 60 * 24,
// //     }
// // }));

// let db = new sqlite3.Database('../users1.db3', sqlite3.OPEN_READWRITE, (err) => {
//     if (err) {
//         console.error(err.message);
//     }
//     console.log('Connected to the donation table.');
// });

// app.post('/donation', (req, res) => {
//     const name = req.body.name;
//     const amount = req.body.amount;
//     const date = req.body.date;
//     const organization = req.body.organization;

//     db.all("INSERT INTO donation (name, amount, date, organization) VALUES (?,?,?,?)",
//         [name, amount, date, organization],
//         (err, res) => {
//             console.log(err);

//             if (res) {
//                 res.send({ message: "Donation created!" })
//             }
//         })
// })

// app.listen(3002, () => {
//     console.log('running server');
// });
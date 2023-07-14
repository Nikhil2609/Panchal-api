import express from 'express';
import cors from 'cors';
import { testDbConnection } from './dbConnection';
import { User } from './Modals/Users';

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: '*' }));


// database conection
testDbConnection();

app.get('/', async (req, res) => {

    const userList = await User.findAll({ where: { name: "Akshay" }, raw: true });
    console.log("Userlist===>>>", userList)
    res.send(`Hello World Node js `)
});

app.get('/user', (req, res) => {
    res.send("Hello Users")
});

app.get('*', function (req, res) {
    res.send("404 : Page Not Found ");
});

const port = process.env.PORT || 2000;
app.listen(port, () => {
    console.log("server running on port", port);
});

module.exports = app;
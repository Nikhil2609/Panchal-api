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
    const data = {
        error: "error object"
    }
    res.send(data)
});

app.get('/user', async (req, res) => {
    const userList = await User.findAll({ where: { name: "Akshay" }, raw: true });
    res.send(userList);
});

app.get('*', function (req, res) {
    res.send("404 : Page Not Found ");
});

const port = process.env.PORT || 2000;
app.listen(port, () => {
    console.log("server running on port", port);
});

module.exports = app;
const express = require('express');
const {engine} = require('express-handlebars');
const path = require("path");

const app = express();
const port = 7777;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', '.hbs');
app.engine('.hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));


const users = [];
let filteredUsers = [];

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/users', (req, res) => {
    if (req.query.city) {
        filteredUsers = (users.filter(user => user.city === req.query.city));
        res.render('users', {users: filteredUsers});
    }
    if (req.query.age) {
        filteredUsers = (users.filter(user => user.age === req.query.age));
        res.render('users', {users: filteredUsers});
    }

    res.render('users', {users});
});

app.get('/users/:id', (req, res) => {
    const {id} = req.params;
    const user = users[id - 1];
    res.render('user', {user});
});


app.post('/login', ({body}, res) => {
    const userExist = users.some(user => user.email === body.email);
    if (userExist) {
        res.redirect('/error');
        return;
    }
    users.push(body);
    res.redirect('/users');
    // users.filter(user => user.email === body.email).length ? res.redirect('/error') : users.push(body);
});

app.use((req, res) => {
    res.render('notFound');
});

app.listen(port, () => {
    console.log(`App is running on port ${port}`)
});
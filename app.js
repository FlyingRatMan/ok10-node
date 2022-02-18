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

app.get('/sign-in', ({body}, res) => {
    res.render('sign-in');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/users', (req, res) => {
    if (req.query.city) {
        filteredUsers = (users.filter(user => user.city === req.query.city));
        res.render('users', {users: filteredUsers});
        return;
    }
    if (req.query.age) {
        filteredUsers = (users.filter(user => user.age === req.query.age));
        res.render('users', {users: filteredUsers});
        return;
    }

    res.render('users', {users});
});

app.get('/users/:id', ({params}, res) => {
    const {id} = params;
    let user = users.find(user => user.id === +id);
    res.render('user', {user: user});
});

app.get('/error', (req, res) => {
    res.render('error');
});

app.post('/login', ({body}, res) => {
    const userExist = users.some(user => user.email === body.email);
    if (userExist) {
        res.redirect('/error');
        return;
    }

    users.push({...body, id: users.length? users.length + 1 : 1});
    res.redirect('/users');
});

app.post('/sign-in', ({body, params}, res) => {
    const signedUser = users.find(user => user.email === body.email && user.password === body.password);
    if (signedUser) {
        const id = signedUser.id;
        res.redirect(`/users/${id}`);
    }
});

app.post('/users/:id', ({body, query}, res) => {
    if (query.method === 'delete') {
        users.splice(users[body.id], 1);
    }

    res.redirect('/users');
});

app.use((req, res) => {
    res.render('notFound');
});

app.listen(port, () => {
    console.log(`App is running on port ${port}`)
});
const express = require('express');
const app = express();

const tasks = [
    {id: 1, 
        name: 'Nodejs',},
    {id: 2, 
        name: 'Javascript'},
    {id: 3, 
        name: 'Expressjs'},
];

app.get('/', (req, res) => {
    res.send('Hello World!!!');
});

app.get('/api/tasks', (req, res) => {
    res.send(tasks);
});

app.listen(3000, () => console.log('Listening on port 3000....'));
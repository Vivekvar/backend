const express = require('express');
const app = express();

app.use(express.json());

const tasks = [
    { id: 1, name: 'Nodejs' },
    { id: 2, name: 'Javascript' },
    { id: 3, name: 'Expressjs' },
];

app.get('/', (req, res) => {
    res.send('Hello World!!!');
});

app.get('/api/tasks', (req, res) => {
    res.send(tasks);
});

app.get('/api/tasks/:id', (req, res) => {
    var task = tasks.find(c => c.id === parseInt(req.params.id));
    if (!task) {
        res.status(404).send('The given task ID does not exists');
        return;
    }
    res.send(task);
});

app.post('/api/tasks', (req, res) => {
    const task = {
        id: tasks.length + 1,
        name: req.body.name
    };
    tasks.push(task);
    res.send(task);
});

app.listen(3000, () => console.log('Listening on port 3000....'));
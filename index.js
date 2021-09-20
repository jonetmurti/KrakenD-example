const express = require('express');
const app = express()

app.get('/hello', (req, res) => {
    res.json({
        'message': 'Hello, World!'
    });
});

app.get('/merge/a', (req, res) => {
    res.json({
        'a': 'Hello'
    });
});

app.get('/merge/b', (req, res) => {
    res.json({
        'b': 'World'
    });
});

app.get('/filter', (req, res) => {
    res.json({
        'a': 'field a',
        'b': 'field b',
        'c': 'field c',
        'd': 'field d',
        'e': 'field e'
    });
});

app.get('/group/a', (req, res) => {
    res.json({
        'a': 'group a'
    });
});

app.get('/group/b', (req, res) => {
    res.json({
        'b': 'group b'
    });
});

app.get('/target', (req, res) => {
    res.json({
        'api-version': '1.0',
        'data': {
            'a': 'data-a',
            'b': 'data-b',
            'c': 'data-c'
        }
    });
});

app.get('/collection', (req, res) => {
    res.json([
        {'a': 'data-a'},
        {'b': 'data-b'}
    ]);
});

app.listen(3000, () => {
    console.log('hello-server running on: http://localhost:3000');
});
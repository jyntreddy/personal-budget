const express = require('express');
const app = express();
const port = 3000;
const data = require("./server.json");

app.use('/', express.static('public'));

const budget = {
    myBudget:[
    {
        title: 'Eat out',
        budget: 300
    },
    {
        title: 'Rent',
        budget: 350
    },
    {
        title: 'Gas',
        budget: 85
    },
    {
        title: 'Groceries',
        budget: 30
    },
    {
        title: 'clothing',
        budget: 250
    },
    {
        title: 'Traveling',
        budget: 450
    },
    {
        title: 'Electronics',
        budget: 359
    },
    
]
};

app.get('/', (req, res) => {
    res.send('hello world!');
});

app.use('/budget', (req, res) => {
    res.sendFile("C:\\Users\\jayanth eswar reddy\\Desktop\\NBAD\\WEEK03\\personal-budget1\\server.json");
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

const express = require('express');
const app = express();
const cors = require('cors');

var corsOption = {
    origin: 'http://localhost:4200',
    optionsSucessStatus: 200
};

app.use(cors(corsOption));
app.use(express.json());

app.listen(4200, () =>{
    console.log('Server is running babe!')
});

app.route('/home/customers').get((req, res) => {
    console.log('all products');
      res.send([req.body]
      );
  });
app.route('/home/customers').post((req, res) => {
    console.log('Add customer');
    console.log(req.body);

    res.json(req.body);
});
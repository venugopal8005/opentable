const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true }).then(() => { 
 console.log('Connected to database!');}).catch(() => {  
  console.log('Connection failed!');
});

const userschema = new mongoose.Schema({
  name: String,
  gender: String,
});

const User = mongoose.model('User', userschema);
const user = new User({
  name: 'John',
  gender:'male'
});
const user2 = new User({
  name: 'Jane',
  gender:'female'
});
const user3 = new User({
  name: 'Dick',
  gender:'dick'
});

User.find({})
    .then(anythings =>{
      console.log(anythings.forEach(data=>console.log(data.name)));
   
    }
                  )
    .catch(error => console.error("Error fetching names:", error)); 


app.use(bodyParser.json());

app.listen(3000, () => {
 
  console.log('Server is running on port 3000');
});
app.get('/', (req, res) => {
  res.send('Hello World');
});
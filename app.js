const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const layout = require('./views/layout')
const {db, User, Page} = require('./models/index');


app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));

db.authenticate().
then(() => {
  console.log('connected to the database');
})

app.get('/', (req, res, next) => {
  res.send(layout(''))
})

const PORT = 1337;

async function init () {
  try {
  await User.sync()
  await Page.sync()

  app.listen(5432, () => {
    console.log(`Server is listening on port 5432!`);
  })
  }
  catch (error) {console.log(error)}
}

init()

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});

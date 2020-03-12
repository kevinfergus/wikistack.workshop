const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const layout = require('./views/layout')
const models = require('./models/index');
const wikiRouter = require('./routes/wiki')
const userRouter = require('./routes/user')


app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/wiki', wikiRouter)
//app.use('/user', userRouter)

models.db.authenticate().
then(() => {
  console.log('connected to the database');
})

app.get('/', (req, res, next) => {
  res.redirect(`/wiki/`)
})

async function init () {
  try {
  await models.db.sync({force: true})
  app.listen(5432, () => {
    console.log(`Server is listening on port 5432!`);
  })
  }
  catch (error) {console.log(error)}
}
init()

const PORT = 1337;
app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});

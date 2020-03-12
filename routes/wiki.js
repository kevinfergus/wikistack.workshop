const express = require('express');
const router = express.Router();
const models = require('../models/index');
const bodyParser = require('body-parser');
const addPage = require('../views/addPage');

router.use(bodyParser.urlencoded({ extended: false }));

router.get('/', (req,res,next) => {
  //res.send(models.Page.findAll())
  res.send('you are a great coder')
})

router.post('/', async (req,res,next) => {
  const newPost = req.body;
  await models.Page.create(newPost)

  //res.redirect(`/wiki/${newPost.title}`);
})

router.get('/add', (req, res, next) => {
  res.send(addPage())
})










module.exports = router;

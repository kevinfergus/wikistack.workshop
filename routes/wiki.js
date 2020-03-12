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
  const title = req.body.title;
  const content =req.body.content;

  const page = new models.Page({
    title, content
  })
  try {
    await page.save();
    res.redirect('/');
  } catch (error) { next(error) }

  //res.redirect(`/wiki/${newPost.title}`);
})

router.get('/add', (req, res, next) => {
  res.send(addPage())
})










module.exports = router;

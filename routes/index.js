var express = require('express');
const home = require('../controllers/home');
const articles = require('../controllers/articles')
var router = express.Router();

/* GET home page. */
router.get('/', home.homepage)
router.get('/edit/:id', articles.edit)
router.put('/edit/:id', articles.editPost)
router.get('/new', articles.new)
router.post('/new', articles.newPost)
router.get('/article/:slug', articles.show)
router.delete('/:id/delete', articles.delete)




module.exports = router;

const Article = require('../models/articles')

exports.new = function(req, res, next) {
    res.render('articles/new', { title: 'My Blog', article: {title: '', description: '', markdown: ''} })
}
exports.edit = function(req, res, next) {

    Article.findById(req.params.id).then(r => {
        if(!r) throw new Error('No post found')
        console.log(r)
        res.render('articles/edit', { title: 'My Blog', article: r  })
    })
}
exports.editPost = function(req, res, next) {
    Article.findById(req.params.id).then(r => {
        console.log(r)
        let article = r
        article.title = req.body.title
        article.description = req.body.description
        article.markdown = req.body.markdown
        article.save().then(r => {
            res.redirect('/article/' + r.slug), console.log(r)
        }).catch(err => {
            if(err) res.redirect(path), console.log(err)
        })
    })
}
exports.newPost = function(req, res, next) {
    const article = {
        title: req.body.title,
        description: req.body.description,
        markdown: req.body.markdown
    }
    Article.create(article).then(r => {
        console.log(r)
        res.redirect('/article/'+ r.slug)
    }).catch(err => {
        if(err) res.render('articles/new', { title: 'My Blog', article }), console.log(err)
    })
}
exports.show = function(req, res, next) {
    Article.findOne({ slug: req.params.slug }).then(r => {
        if(!r) throw new Error('No post found')
        console.log(r)
        const article = {
            id: r._id,
            title: r.title,
            description: r.description,
            markdown: r.markdown,
            sanitizedHTML: r.sanitizedHTML,
            createdAt: {
                day: new Intl.DateTimeFormat('en', { day: '2-digit' }).format(r.createdAt),
                month: new Intl.DateTimeFormat('en', { month: 'short' }).format(r.createdAt),
                year: new Intl.DateTimeFormat('en', { year: 'numeric' }).format(r.createdAt)
            }
        }
        res.render('articles/show', { title: 'My Blog', article })
    }).catch(err => {
        if(err) res.redirect('/'), console.log(err)
    })
    // res.render('articles/new', { title: 'My Blog' })
}

exports.delete = function(req, res, next) {
    Article.findByIdAndDelete(req.params.id).then(r => {
        res.redirect('/')
    }).catch(err =>{
        if(err) res.redirect('/'), console.log(err)
    })
}


  
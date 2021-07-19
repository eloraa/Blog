const articles = require('../models/articles');
const Article = require('../models/articles')

exports.homepage = function(req, res, next) {


    Article.find().sort({ createdAt: 'desc' }).then(r => {
        console.log(r)
        const articles = []
        r.forEach(e => {
            const article = {
                slug: e.slug,
                id: e._id,
                title: e.title,
                description: e.description,
                markdown: e.markdown,
                createdAt: {
                    day: new Intl.DateTimeFormat('en', { day: '2-digit' }).format(r.createdAt),
                    month: new Intl.DateTimeFormat('en', { month: 'short' }).format(r.createdAt),
                    year: new Intl.DateTimeFormat('en', { year: 'numeric' }).format(r.createdAt)
                }
            }
            articles.push(article)
        })
        res.render('index', { title: 'My Blog', articles: articles.length ? articles : null });
    })

}
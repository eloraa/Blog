exports.homepage = function(req, res, next) {

    const articles = [{
        title: 'Test1 Title',
        createdAt:  {
            day: new Intl.DateTimeFormat('en', { day: '2-digit' }).format(new Date()),
            month: new Intl.DateTimeFormat('en', { month: 'short' }).format(new Date()),
            year: new Intl.DateTimeFormat('en', { year: 'numeric' }).format(new Date())
        }
    }, {
        title: 'Test2 Title',
        createdAt:  {
            day: new Intl.DateTimeFormat('en', { day: '2-digit' }).format(new Date()),
            month: new Intl.DateTimeFormat('en', { month: 'short' }).format(new Date()),
            year: new Intl.DateTimeFormat('en', { year: 'numeric' }).format(new Date())
        }
    }, {
        title: 'Test3 Title',
        createdAt: {
            day: new Intl.DateTimeFormat('en', { day: '2-digit' }).format(new Date()),
            month: new Intl.DateTimeFormat('en', { month: 'short' }).format(new Date()),
            year: new Intl.DateTimeFormat('en', { year: 'numeric' }).format(new Date())
        }
    }]

    res.render('index', { title: 'My Blog', articles: articles || null });
}
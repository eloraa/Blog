const mongoose = require('mongoose')
const marked = require('marked')
const slugify = require('slugify')
const { JSDOM } = require('jsdom')
const domPurify = require('dompurify')(new JSDOM().window)

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }, description: {
        type: String,
        required: true
    }, markdown: {
        type: String,
        required: true
    }, createdAt: {
        type: Date,
        default: new Date()
    }, slug: {
        type: String,
        required: true,
        unique: true
    }, sanitizedHTML : {
        type: String,
        required: true
    }
})

articleSchema.pre('validate', function(next) {
    if(this.title) {
        this.slug = slugify(this.title, { lower: true, strict: true })
    }

    if(this.markdown) {
        console.log('sanitizing');
        this.sanitizedHTML = domPurify.sanitize(marked(this.markdown))
    }

     next()
})

module.exports = mongoose.model('Article', articleSchema)
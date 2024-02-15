const Course = require('../models/courses.js');

module.exports = new class SiteController{

    async index(req, res) {
        // Course.find({}, function(err, courses){
        //     if(!err) return res.json(courses);
        //     return res.status(404);
        // }).then
        const c = await Course.find().exec();
        res.json(c);
    };

    search(req, res) {
        res.render('search');
    };
}
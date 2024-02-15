const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app){

    //news page
    app.use('/news', newsRouter);
    
    // search page
    // app.use('/search', siteRouter);
    
    //home page and search page
    app.use(siteRouter); 
}

module.exports = route;

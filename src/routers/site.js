const express = require('express');
const homeRouter = express.Router();
const siteController = require('../app/controllers/SiteController');

// NewsController.index()
homeRouter.get('/', siteController.index);
homeRouter.get('/search', siteController.search)

module.exports = homeRouter;


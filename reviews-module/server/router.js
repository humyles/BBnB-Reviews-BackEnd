var reviewsRouter = require('express').Router();
var reviewsController = require('./controller');

reviewsRouter.get('/api/items/:listingId', reviewsController.retrieve);

module.exports = reviewsRouter;
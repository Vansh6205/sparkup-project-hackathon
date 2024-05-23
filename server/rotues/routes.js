const express = require('express');
const route = express.Router();

const controller = require('../controllers/controller');

route.get('/add-user', services.add_user)
/**
 *  @description for update user
 *  @method GET /update-user
 */


route.get('/', (req, res) => {
    res.render('signup');
});

route.post('/api/users', controller.create);

module.exports = route;

const express = require('express');

const router = express.Router();

router.get('/', (request, response, next) => {

    console.log('Test request');

    response.json({ message: 'Working' });

});

module.exports = router;
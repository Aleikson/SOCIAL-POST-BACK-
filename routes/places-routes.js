const express = require('express');

const router = express.Router();

const TEST = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world!',
        location: {
            lat: 40.7484474,
            lng: -73.9871516
        },
        address: '20 W 34th St, New York, NY 10001',
        creator: 'u1'
    }
];

router.get('/:pid', (req, res, next) => {
    const placeId = req.params.pid;
    const place = TEST.find(p => {
        return p.id === placeId;
    });
    res.json({ place });
});

router.get('/user/:uid', (req, res, next) => {
    const userId = req.params.uid;

    const place = TEST.find(p => {
        return p.creator === userId;
    });

    res.json({ place });
});

module.exports = router;

module.exports = router;
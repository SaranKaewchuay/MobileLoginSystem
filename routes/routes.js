const express = require('express');

const { signup, login, isAuth } = require('../controllers/auth');

const router = express.Router();

router.post('/login', login);

router.post('/signup', signup);

router.get('/private', isAuth);

// router.get('/user', getUser );

router.get('/public', (req, res, next) => {
    res.status(200).json({ message: "here is your public resource" });
});

// will match any other path
router.use('/', (req, res, next) => {
    res.status(404).json({ error: "page not found" });
});

module.exports = router;
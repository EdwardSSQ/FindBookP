const express = require("express");
const router = express.Router();
const titleIndex = "FindBook";


router.get('/', (req, res) => {
    res.render('index.html', { titleIndex });
});


module.exports = router;
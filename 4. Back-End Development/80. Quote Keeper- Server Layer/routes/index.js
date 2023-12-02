// routes/index.js
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    //#7
    const {source, attributed, quote} = req.body;
    //#8
    res.render('index', {source, attributed, quote});
    
});

//#10
router.get('/', (req, res) => {
    res.render('index');
  });
  

module.exports = router;

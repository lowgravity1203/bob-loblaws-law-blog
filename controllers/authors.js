const express = require('express')
const router = express.Router()
//only needs router functionality
// .get, .post, .put, .delete

router.get('/', (req, res) => {
    res.render('authors/index.ejs')
})


module.exports = router;
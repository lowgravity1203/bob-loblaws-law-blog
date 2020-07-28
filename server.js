const express = require('express')
const app = express()
const authorsController = require('./controllers/authors.js')




app.get('/', (req, res) => {
    res.render('index.ejs')
})

//when request withj a pathname that begins with '/authors' comes in, mount those request
//to the authors controller
app.use('/authors', authorsController)



const PORT = 3000
app.listen(PORT, () => {
    console.log('listening on port ' + PORT)
})
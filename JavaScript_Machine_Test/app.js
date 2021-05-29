const express = require("express")
const app = express()
const exphbs  = require('express-handlebars');
const todoRoute = require("./routes/todo")


app.engine('.hbs', exphbs({
    extname: '.hbs',
    defaultLayout: false
}));
app.set('view engine', '.hbs');

app.use(express.static("style"))
app.use("", todoRoute)


app.listen(process.env.PORT || 3000, () => {
    console.log("Server Started @ 3000")
})
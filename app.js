let express = require("express");
let bodyParser = require("body-parser");
require("dotenv").config();
let middlewares = require("./middlewares/common");
let allRoutes = require("./router");
var jwt = require('express-jwt');
var unless = require('express-unless');
let app = express();


app.use(middlewares.logger);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// const publicRoutePaths = ['/login'];
// app.use(jwt({ secret: 'marija'}).unless({path: publicRoutePaths}));
app.use(allRoutes);
app.use(middlewares.wrongRoute);
app.use(middlewares.errorHandler);

let port = process.env.PORT || 8080;

app.listen(port , () => {
    console.log(`Listening to:  ${port}`);
})









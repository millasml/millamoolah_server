const DATABASE_URL = "mongodb://mongodb:27017/millamoolah"

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
const mongoose = require("mongoose");

var indexRouter = require('./routes/index');
var userRouter = require('./routes/user');
var spendingRouter = require('./routes/spending');
var savingsRouter = require('./routes/savings');
var spendingRecurringRouter = require('./routes/spending_recurring');
var savingsRecurringRouter = require('./routes/savings_recurring')

var app = express();

var admin = require("firebase-admin");
var serviceAccount = require("./config/millamoolah-firebase-adminsdk-drw7o-4225396d79.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://millamoolah.firebaseio.com"
});

mongoose.connect(DATABASE_URL);
mongoose.connection.on("error", error => {
    console.log("Database connection error:", error);
});
mongoose.connection.once("open", () => {
    console.log("Connected to Database!");
});




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(checkAuth)

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/spending', spendingRouter);
app.use('/spending/recurring', spendingRecurringRouter);
app.use('/savings', savingsRouter);
app.use('/savings/recurring', savingsRecurringRouter)





function checkAuth(req, res, next) {
  if (req.headers.authorization) {
    admin.auth().verifyIdToken(req.headers.authorization.split(" ")[1])
      .then((claims) => {
        console.log("authorized")
        req.uid = claims.uid
        next()
      }).catch(() => {
        res.status(403).send('Unauthorized')
      });
  } else {
    res.status(403).send('Unauthorized')
  }
}


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

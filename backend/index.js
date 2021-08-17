// app.js

const AppConstants = require('./constants/AppConstant');
const AppUtils = require('./utils/AppUtils');

var express = require('express'),
  bodyParser = require('body-parser'),
  path = require('path'),
  app = express(),
  http = require('http').createServer(app),
  createError = require('http-errors'),
  dotenv = require('dotenv'),
  cors = require('cors')
  
dotenv.config({ path: path.join(__dirname, '.env') })

app.use(express.static('public'));

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())

// catch 404 and forward to error handler
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  const errors = ['Path not found'];
  if (err)
    AppUtils.formatAndSendResponse({ res, errors, status: AppConstants.API_RESPONSE_CODES.NOT_FOUND });

});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))

})

http.listen(process.env.PORT, () => {
  console.log('Server is up and running on port number ' + process.env.PORT);
});

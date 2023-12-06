const express = require('express');
const partials = require('express-partials');
const path = require('path');
const app = express();
const cookieParser = require('cookie-parser');
// Require csurf package here
//#2
const csurf = require('csurf');
const PORT = 4001;

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");
app.use(partials());

app.use(cookieParser());

app.set('trust proxy', 1) 

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, "/public")));

// Configure csurf middleware here
//#3
const csrfMiddleware = csurf({
  cookie: {
    maxAge: 3000,
    secure: true,
    sameSite: 'none'
   }
});
// Use csrf middleware at application level here
//#4
app.use(csrfMiddleware);
// Configure error message middleware here
//#5
const errorMessage = (err, req, res, next) => {
  //#6
  if (err.code === "EBADCSRFTOKEN") {
    res.render("csrfError");
  } else {
    next();
  }
};
// Use error message middleware at application level here
//#7
app.use(errorMessage);
app.get('/', (req, res) => {
  // Send CSRF token to form
  //#8
  res.render('order', { csrfToken: req.csrfToken() })
})


app.get('/contact', (req, res) => {
  // Send CSRF token to form
  //#9
  res.render('contact',  { csrfToken: req.csrfToken() })
})

app.post('/submit', (req, res) => {
  res.render('success');
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`) );
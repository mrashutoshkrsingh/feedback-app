const express=require("express");
const passport = require('passport');
const app=express();
const mongoose=require("mongoose");
const cookieSession = require('cookie-session');
const keys=require("./config/keys")

require("./services/passport");
require('./models/User');

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());
mongoose.connect(keys.mongoURI,{useNewUrlParser:true})
.then(console.log("database connected"));

require('./routes/authRoutes')(app);




app.listen(process.env.PORT,process.env.IP)
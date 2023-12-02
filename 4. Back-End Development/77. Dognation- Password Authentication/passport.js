const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const helper = require("../helpers/helper");

// Set up the Passport strategy:
//#2 #3
passport.use(new LocalStrategy(function(username,password,cb) {
  //#17 
  helper.findByUsername(username, async function(err,user) {
    //#18
    const matchedPassword = await bcrypt.compare(password, user.password);
    //#4 instead of done we used cb
    if (err) {
      return cb(err);
    }
    //#5
    if (!user) {
      return cb(null,false);
    }
    //#6 #19
    if (!matchedPassword) {
      return cb(null, false);
    }
    //#7
    return cb(null,user);
  });
}));
// Serialize a user
//#8
passport.serializeUser(function(user,cb) {
  cb(null,user.id);
});
// Deserialize a user
//#9
passport.deserializeUser(function(id,cb) {
  //#10
  helper.findById(id, function(err,user) {
    //#11
    if (err) {
      return err;
    }
    //#12
    cb(err,user);
  });
});
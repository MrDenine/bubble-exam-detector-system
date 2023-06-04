const loginModel = require('../models/login.model');

exports.render_loginPage = (req, res) => {
  res.render('login', { title: 'login' });
};

exports.handleLogin = async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.render('login', { error: 'Username and password are required.' });
    return;
  }
  try {
    const user = await loginModel.getUserByUsernameAndPassword(username, password);
    if (user.length > 0) {
      const userType = user[0].type;
      req.session.username = user[0].username;
      if (userType === 'teacher') {
        res.cookie('loggedIn', 'true');
        res.redirect('/');
      } else if (userType === 'student') {
        res.cookie('loggedIn', 'true');
        res.redirect('/restu');
      } else {
        res.render('login', { error: 'Invalid user type.' });
      }
    } else {
      res.render('login', { error: 'Invalid username or password.' });
    } 
  } catch (err) {
    next(err);
  }
};
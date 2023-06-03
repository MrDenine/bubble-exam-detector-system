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
      res.cookie('loggedIn', 'true');
      res.redirect('/');
    } else {
      res.render('login', { error: 'Invalid username or password.' });
    }
  } catch (err) {
    next(err);
  }
};
const db = require("../config/dbconnection");

exports.handleLogout = (req, res) => {
  res.clearCookie('loggedIn');
  res.redirect('/login');
};

exports.render_indexPage = async function (req, res) {
  const sql = "SELECT * FROM user";
  const username = req.session.username;

  try {
    const [results] = await db.execute(sql);
    res.render('index', { title: 'index', data: results, username: username });
  } catch (err) {
    console.error('Error executing SQL query: ', err);
  }
};
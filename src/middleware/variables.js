module.exports = function(req, res, next) {
    res.locals.isAuth = req.session.isAuthenticated;
    console.log(req.session.user);
    next();
}
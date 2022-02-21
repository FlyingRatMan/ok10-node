module.exports = {
    renderSignIn: (req, res) => {
        res.render('sign-in');
    },
    getSignedUser: ({user}, res) => {
        res.redirect(`/users/${user.id}`);
    },
}
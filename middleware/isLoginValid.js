function isLoginValid (req, res, next) {
   try {
       const {firstName, lastName, email, password, age, city} = req.body;

       if (!firstName || !lastName || !email || !password || !age || !city) {
           throw new Error('Some fields are empty!')
           // res.redirect('error');
       }

       next();
   } catch (err) {
       res.status(400).send(err.message);
   }
}

module.exports = isLoginValid;
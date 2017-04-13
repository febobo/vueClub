// showcase
exports.showBooks = function (req, res, next) {
  res.render('books/books', {
    pageTitle: 'Ionic app showcase'
  });
};

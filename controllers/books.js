// showcase
exports.showBooks = function (req, res, next) {
  res.render('books/books', {
    pageTitle: 'Vue books show'
  });
};

exports.addBook = function (req, res, next) {
  res.render('books/addbook', {
    pageTitle: 'Vue add books '
  });
};

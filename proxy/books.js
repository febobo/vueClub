var models = require('../models');
var Books = models.Books;

exports.saveBook = function (title, url, provider, cover, callback) {
  var book = new Books();
  book.title = title;
  book.url = url;
  book.provider = provider;
  book.cover = cover;
  book.save(callback);
};

exports.getBooks = function (callback) {
  Books.find({},function(err,books){
    callback(err,books)
  })
};

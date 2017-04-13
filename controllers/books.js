var validator = require('validator');
var Books = require('../proxy').Books;
var EventProxy = require('eventproxy');
// showcase
exports.showBooks = function (req, res, next) {
  Books.getBooks(function(err,books){
    if(err){
      console.log(err)
    }

    res.render('books/books', {
      pageTitle: 'Vue books show',
      books: books
    });
  });
};

exports.addBook = function (req, res, next) {
  res.render('books/addbook', {
    pageTitle: 'Vue add books '
  });
};

exports.put = function (req, res, next) {
  var title = validator.trim(req.body.title);
  title = validator.escape(title);
  var url = validator.trim(req.body.url);
  url = validator.escape(url);
  var cover = validator.trim(req.body.cover);
  cover = validator.escape(cover);
  var provider = validator.trim(req.body.provider) || '无名大虾';


  // 验证
  var editError;
  if (title === '') {
    editError = '标题不能是空的。';
  } else if (cover === '') {
    editError = '封面不可为空';
  } else if (url === '') {
    editError = 'url不可为空';
  }
  // END 验证

  if (editError) {
    res.status(422);
    return res.send({
      edit_error: editError,
      req: req.body
    });
  }

  Books.saveBook(title, url, provider, cover, function (err, topic) {
    if (err) {
      return next(err);
    }

    return res.send({
      msg: '提交成功，管理员会在3天之内审核您提供的书籍'
    })
  });
};

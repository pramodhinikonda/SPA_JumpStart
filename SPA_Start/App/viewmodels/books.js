define(['plugins/http', 'durandal/app', 'knockout'], function (http, app, ko) {

    var books = ko.observableArray(),
    book = ko.observable(),

    activate = function () {
        getBooks(false, '', function (data) {
            books(data);
        });
    },

    getBooks = function (IsSingle, data, callback) {
        var url = 'api/book';
        if (IsSingle) {
            url = url + '/' + data;
        }
        var results = undefined;
        $.getJSON(url).done(function (data) {
            callback(data);
        });
    },

    getBook = function (id) {
        getBooks(true, id, function (data) {
            book(data);
        });
    }

    return {
        activate: activate,
        books: books,
        book: book,
        getBooks: getBooks,
        getBook: getBook
    };
});
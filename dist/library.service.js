"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibraryService = void 0;
class LibraryService {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    getBooks() {
        return this.books;
    }
    getBookById(id) {
        return this.books.find(book => book.id === id);
    }
    removeBook(id) {
        this.books = this.books.filter(book => book.id !== id);
    }
}
exports.LibraryService = LibraryService;

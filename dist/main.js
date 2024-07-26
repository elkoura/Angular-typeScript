"use strict";
// src/main.ts
Object.defineProperty(exports, "__esModule", { value: true });
const library_service_1 = require("./library.service");
const libraryService = new library_service_1.LibraryService();
const book1 = { id: 1, title: '1984', author: 'George Orwell', publishedYear: 1949 };
const book2 = { id: 2, title: 'Brave New World', author: 'Aldous Huxley', publishedYear: 1932 };
libraryService.addBook(book1);
libraryService.addBook(book2);
console.log('All books in the library:');
console.log(libraryService.getBooks());
const book = libraryService.getBookById(2);
if (book) {
    console.log('Book with ID 2:');
    console.log(book);
}
libraryService.removeBook(1);
console.log('All books in the library after removing book with ID 1:');
console.log(libraryService.getBooks());

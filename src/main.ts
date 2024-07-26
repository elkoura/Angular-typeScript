// src/main.ts

import { Book } from './book.model';
import { LibraryService } from './library.service';

const libraryService = new LibraryService();

const book1: Book = { id: 1, title: '1984', author: 'George Orwell', publishedYear: 1949 };
const book2: Book = { id: 2, title: 'Brave New World', author: 'Aldous Huxley', publishedYear: 1932 };

libraryService.addBook(book1);
libraryService.addBook(book2);

console.log('All books in the library:');
console.log(libraryService.getBooks());

const book = libraryService.getBookById(2);
if (book) {
  console.log('Book with ID 2:');
  console.log(book);
}

libraryService.removeBook(2);
console.log('All books in the library after removing book with ID 1:');
console.log(libraryService.getBooks());

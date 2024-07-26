//src/library.service.ts
import { Book } from "./book.model";
export class LibraryService{
  private books: Book[] = [];
  addBook(book: Book): void {
    this.books.push(book);
  }
  getBooks(): Book[] {
    return this.books;
  }
  getBookById(id: number) :Book|undefined{
    return this.books.find(book => book.id === id);
  }
  removeBook(id: number): void{
    this.books=this.books.filter(book => book.id !== id);
  }
}
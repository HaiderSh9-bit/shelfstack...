// types
export type BookId = string;

export interface Book {
  readonly id: string;
  title: string;
  isbn: string;
  author: string;
}

export interface Loan {
  id: string;
  bookId: string;
  memberId: string;
}

// addBook (returns new array)
export function addBook(list: Book[], book: Book): Book[] {
  return [...list, book];
}

// findByIsbn
export function findByIsbn(list: Book[], isbn: string): Book | undefined {
  return list.find(b => b.isbn === isbn);
}

// ---- Demo ----
const books: Book[] = [];

const updated = addBook(books, {
  id: "b1",
  title: "Clean Code",
  isbn: "978-0132350884",
  author: "Martin"
});

const found = findByIsbn(updated, "978-0132350884");

console.log(found);
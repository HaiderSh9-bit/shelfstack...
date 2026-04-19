// Base class
class LibraryItem {
  constructor({ id, title }) {
    this.id = id;
    this.title = title;
    this.isAvailable = true;
  }

  describe() {
    return `${this.title} (ID: ${this.id})`;
  }

  borrow() {
    this.isAvailable = false;
  }

  returnItem() {
    this.isAvailable = true;
  }
}

// Subclass
class Book extends LibraryItem {
  constructor({ id, title, isbn, author }) {
    super({ id, title });
    this.isbn = isbn;
    this.author = author;
  }

  // override
  describe() {
    return `Book title: "${this.title}" created by ${this.author} (isbn: ${this.isbn})`;
  }
}

// Member with private field
class Member {
  #balance = 0;
  constructor(id) {this.id = id; }

  deposit(n) {
    this.#balance += n;
  }
  getBalance() {
    return this.#balance;
  }
}
// Catalog
class LibraryCatalog {
  constructor() {
    this.items = [];}
  addItem(book) {
    this.items.push(book);
 }
  // static method
  static makeId(prefix) {
    return prefix + Math.floor(Math.random() * 1000);
  }

  // object destructuring in params
  registerLoan({ memberId, itemId }) {
    const item = this.items.find(i => i.id === itemId);
    if (item && item.isAvailable) {
      item.borrow();
      console.log(`Member ${memberId} borrowed ${item.title}`);
    }
  }

  snapshotStats() {
    const total = this.items.length;
    const available = this.items.filter(i => i.isAvailable).length;
    return { total, available };
  }
}

                       // --- Demo ---

const catalog = new LibraryCatalog();

// array destructuring
const [id1, id2] = ["b1", "b2"];

catalog.addItem(
  new Book({ id: id1, title: "Clean Code", isbn: "978-0132350884", author: "Martin" })
);

catalog.addItem(
  new Book({ id: id2, title: "Refactoring", isbn: "978-0201485677", author: "Fowler" })
);

catalog.registerLoan({ memberId: "m1", itemId: "b1" });

console.log(catalog.items[0].describe());

const { total, available } = catalog.snapshotStats();
console.log(`Total: ${total}, Available: ${available}`);
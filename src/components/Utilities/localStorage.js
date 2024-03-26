// find
export const getBooks = () => {
  let books = [];
  const getBook = localStorage.getItem("books");
  if (getBook) {
    books = JSON.parse(getBook)
  }
  return books
}
// save
export const saveBooks = book => {
  const books = getBooks()
  const isExist = books.find(bookid => bookid.id === book.bookId)
  if (isExist) {
    alert("already exist");
  }
  books.push(book)
  localStorage.setItem('books', JSON.stringify(books))
}
// delete
export const deleteBook = id => {
  const books = getBooks();
  const remaining = books.filter(b => b.id !== id);
  localStorage.setItem('books', JSON.stringify(remaining))
}
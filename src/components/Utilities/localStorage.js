// find
export const getBooks = () => {
  let books = [];
  const getBook = localStorage.getItem("books");
  if (getBook) {
    return books = JSON.parse(getBook)
  }
  return books
}
// save
export const saveBooks = book => {
  const books = getBooks()
  const isExist = books.find(bookid => bookid.bookId === book.bookId)
  if (isExist) {
    alert("Already Exist");
    return
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
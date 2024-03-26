import { useEffect, useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import ReadBooks from "./ReadBooks";
import { getBooks } from "../Utilities/localStorage";
const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [readBooks, setReadBooks] = useState([]);
  useEffect(() => {
    const storedReadBooks = getBooks();
    setReadBooks(storedReadBooks);
  }, []);
  return (
    <div className="mt-10">
      <h1 className="text-2xl text-center font-bold bg-gray-100 py-3 rounded-lg">
        Books
      </h1>
      <div className="flex items-center justify-center mb-20">
        <details className="dropdown ">
          <summary className="m-1 btn bg-[#23BE0A] text-white font-semibold">
            <span>Sort By</span>
            <span>
              <IoIosArrowDropdown className="text-xl" />
            </span>
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a>Rating</a>
            </li>
            <li>
              <a>Number of Pages</a>
            </li>
            <li>
              <a>Published Years</a>
            </li>
          </ul>
        </details>
      </div>
      {/* tab */}
      <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
        <Link
          to="/"
          onClick={() => setTabIndex(0)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 0 ? "border border-b-0" : "border"
          } rounded-t-lg `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
          <span>Read Books</span>
        </Link>
        <Link
          to="/wishlists"
          onClick={() => setTabIndex(1)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 1 ? "border border-b-0" : "border"
          } rounded-t-lg `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
          <span>Wishlist Books</span>
        </Link>
      </div>
      {/* single book card */}
      {readBooks.map((readBook) => (
        <ReadBooks key={readBook.bookId} readBook={readBook}></ReadBooks>
      ))}
    </div>
  );
};

export default ListedBooks;

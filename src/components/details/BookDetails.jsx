import PropTypes from "prop-types";
import { useLoaderData, useParams } from "react-router-dom";
import { saveBooks } from "../Utilities/localStorage";

const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  // console.log(id);
  const book = books.find((book) => book.bookId === idInt);
  const handleReadBooks = (book) => {
    saveBooks(book);
  };
  // console.log(book);
  // console.log(book);
  return (
    <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className=" flex justify-center items-center bg-gray-100 rounded-2xl">
        <img src={book.image} alt="Book" className="h-full w-72 px-4 py-10" />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl">{book.author}</h1>
        <p>By : {book.author}</p>
        <hr />
        <p>{book.category}</p>
        <hr />
        <p>
          <span className="font-bold">Review:</span>
          {book.review}{" "}
        </p>
        <div className="flex gap-6">
          <p className="font-bold">Tag</p>
          {book.tags.map((tag) => (
            <p className="text-green-500">#{tag}</p>
          ))}
        </div>
        <hr />
        <div className="flex flex-col gap-2 justify-around">
          <div className="flex justify-between">
            No of Pages: <p>{book.totalPages}</p>
          </div>
          <div className="flex justify-between">
            Publishers: <p>{book.publisher}</p>
          </div>
          <div className="flex justify-between">
            Year of Publishing: <p>{book.yearOfPublishing}</p>
          </div>
          <div className="flex justify-between">
            Rating: <p>{book.rating}</p>
          </div>
          <div>
            <div className="flex gap-8">
              <button
                onClick={() => handleReadBooks(book)}
                className="btn btn-outline px-6"
              >
                Read
              </button>
              <button className="btn btn-info px-6">WishList</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BookDetails.propTypes = {
  book: PropTypes.object.isRequired,
};

export default BookDetails;

import { FaRegStar } from "react-icons/fa";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SingleBook = ({ book }) => {
  const { bookId, image, bookName, author, rating, category, tags } = book;
  return (
    <div>
      <Link
        to={`/book/${bookId}`}
        className="card bg-base-100  border-2 border-[#13131326]"
      >
        <figure className="px-5 pt-10">
          <img src={image} alt="Book" className="rounded-xl h-80" />
        </figure>
        <div className="card-body items-start text-start">
          <h2 className="card-title">{bookName}</h2>
          <div className="flex gap-4 text-base font-semibold text-green-700">
            {tags.map((tag) => (
              <p>{tag}</p>
            ))}
          </div>
          <p>By: {author} </p>
          <div className="card-actions flex justify-between w-full font-medium">
            <div>{category}</div>
            <div className="flex justify-center items-center gap-2 font-medium">
              <div>{rating}</div>
              <div className="mr-1">
                <FaRegStar></FaRegStar>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
SingleBook.propTypes = {
  book: PropTypes.object.isRequired,
};
export default SingleBook;

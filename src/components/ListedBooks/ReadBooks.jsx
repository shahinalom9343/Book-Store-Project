import { Link } from "react-router-dom";

const ReadBooks = ({ readBook }) => {
  // console.log(readBook);
  const {
    image,
    bookName,
    author,
    rating,
    category,
    tags,
    yearOfPublishing,
    publisher,
    totalPages,
  } = readBook;
  return (
    <div className="flex flex-col gap-4">
      <div className="p-10 border-[#13131326] flex gap-10 border-2 border-gray-200 border-opacity-70">
        <figure>
          <img src={image} alt="Book" className="rounded-xl h-80 w-80" />
        </figure>
        <div className="text-start flex flex-col gap-4 lg:pt-10">
          <h2 className="card-title">{bookName}</h2>
          <p>By: {author} </p>
          <div className="flex justify-between text-base font-semibold gap-10">
            <div className="flex gap-2">
              <div>Tags:</div>
              <div className="flex gap-4">
                {tags.map((tag) => (
                  <p className="text-green-500">#{tag}</p>
                ))}
              </div>
            </div>
            <div>Year of Publishing : {yearOfPublishing}</div>
          </div>
          <div className="flex gap-10">
            <div>Publisher: {publisher}</div>
            <div>Page: {totalPages}</div>
          </div>
          <hr />
          <div className="flex gap-10">
            <div className="bg-cyan-100 rounded-lg bg-opacity-65">
              <button className="btn btn-active btn-ghost text-sky-500">
                Category:{category}
              </button>
            </div>
            <div className="bg-orange-100 rounded-lg bg-opacity-65">
              <button className="btn btn-active btn-ghost text-red-500">
                Rating : {rating}
              </button>
            </div>
            <div className="bg-[#23BE0A] rounded-lg">
              <Link className="btn btn-active btn-ghost  text-white">
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadBooks;

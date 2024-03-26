import { FaRegStar } from "react-icons/fa";

const ReadBooks = ({ readBook }) => {
  // console.log(readBook);
  const { image, bookName, author, rating, category, tags } = readBook;
  return (
    <div className="flex flex-col gap-4">
      <div className="border-[#13131326] flex gap-4 border-2 border-gray-200 border-opacity-70">
        <figure className="px-5 pt-10">
          <img src={image} alt="Book" className="rounded-xl h-80" />
        </figure>
        <div className="card-body items-start text-start">
          <h2 className="card-title">{bookName}</h2>
          <div className="flex gap-4 text-base font-semibold text-green-700">
            {tags.map((tag) => (
              <p className="text-green-500">#{tag}</p>
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
      </div>
    </div>
  );
};

export default ReadBooks;

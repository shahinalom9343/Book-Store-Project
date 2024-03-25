import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import SingleBook from "./SingleBook";
const Home = () => {
  const books = useLoaderData();
  // console.log(books);
  return (
    <div>
      <div>
        <Banner></Banner>
      </div>
      {/* books container section */}
      <div className="flex flex-col gap-5 mt-6">
        <div className="text-3xl font-bold text-center">Books</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {books.map((book) => (
          <SingleBook key={book.bookId} book={book}></SingleBook>
        ))}
      </div>
    </div>
  );
};

export default Home;

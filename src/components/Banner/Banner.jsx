import { NavLink } from "react-router-dom";
import BookImage from "../../assets/banner.png";
const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 rounded-xl">
        <div className="hero-content flex-col lg:flex-row-reverse lg:px-20">
          <img src={BookImage} className="lg:w-2/6 rounded-lg shadow-2xl" />
          <div className="lg:w-2/3">
            <h1 className="text-3xl font-bold">
              Books to freshen up your bookshelf
            </h1>
            <p className="py-6">
              Reading books is not just a pastime;it is a pathway to
              enlightenment. With each turn of the page, meeting fascinating
              characters, and delving into the depths of human experience.
            </p>
            <NavLink to="listed_books" className="btn btn-success text-white">
              View the List
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

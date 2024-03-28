import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { getBooks } from "../Utilities/localStorage";

const PageToRead = () => {
  const storedBooks = getBooks();
  const colors = ["red", "yellow", "blue", "purple"];
  // console.log(storedBooks);
  return (
    <div>
      {storedBooks.map((storedBook) => (
        <BarChart
          key={storedBook.Id}
          width={400}
          height={400}
          data={storedBooks}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="bookName" />
          <YAxis />
          <Bar
            dataKey="totalPages"
            fill="purple"
            label={{ position: "top" }}
          ></Bar>
        </BarChart>
      ))}
    </div>
  );
};

export default PageToRead;

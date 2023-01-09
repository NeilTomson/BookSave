import { useState, useEffect } from "react";
import Axios from "axios";

function NewAuthor() {
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [finishDate, setFinishDate] = useState("");
  const [page, setPage] = useState(0);
  const [author, setAuthor] = useState("");

  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3000/authors/name").then((response) => {
      setAuthors(response.data);

    });
  }, []);

  const createAuthor = () => {
    Axios.post("http://localhost:3000/books/new", {
      title,
      startDate,
      finishDate,
      page,
      author,
    }).then(window.location.replace("http://localhost:5173/Book"));
  };

  const logg = () => {
    console.log(authors);
  };
  return (
    <div>
      <h1 className="w-full text-center my-8">Create new Book </h1>
      <div className="w-full flex justify-center">
        <div className="">
          <input
            type="text"
            placeholder="Title"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
          <input
            type="date"
            placeholder="Start day"
            onChange={(event) => {
              setStartDate(event.target.value);
            }}
          />
          <input
            type="date"
            placeholder="finish day"
            onChange={(event) => {
              setFinishDate(event.target.value);
            }}
          />
          <input
            type="number"
            placeholder="page number"
            onChange={(event) => {
              setPage(event.target.value);
            }}
          />
          <select
            onChange={(event) => {
              setAuthor(event.target.value);
            }}
          >
            {authors.map((authors) => {
              return (
                <>
                  <option
                    onChange={(event) => {
                      setAuthor(event.target.value);
                    }}
                  >
                    {authors}
                  </option>
                </>
              );
            })}
          </select>
          <button
            onClick={createAuthor}
            className=" p-2 text-green-800 text-lg"
          >
            Create
          </button>
        </div>
      </div>
      {/* <button onClick={logg}>log</button> */}
    </div>
  );
}

export default NewAuthor;

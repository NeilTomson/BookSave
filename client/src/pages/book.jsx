import { useState, useEffect } from "react";
import Axios from "axios";

function Book() {
  const [id, setid] = useState([]);
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [finishDate, setFinishDate] = useState("");
  const [page, setPage] = useState(0);
  const [author, setAuthor] = useState("");
  const [listOfBooks, setListOfBooks] = useState([]);
  const [listAuthors, setListAuthors] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3000/authors/name").then((response) => {
      setListAuthors(response.data);
      console.log(response.data);
      console.log(listAuthors.length);
    });
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:3000/books/").then((response) => {
      setListOfBooks(response.data);
      console.log(response.data);
    });
  }, []);
  const setdata = (books) => {
    setid(books._id);
    setTitle(books.title);
    setStartDate(setDate(books.startDate));
    setFinishDate(setDate(books.finishDate));
    setPage(books.page);
    setAuthor(books.author);
  };
  const setDate = (data) => {
    const dateString = data;
    const date = new Date(dateString);
    const isoString = date.toISOString().substring(0, 10);
    return isoString;
  };

  const deleteBook = (id) => {
    Axios.delete(`http://localhost:3000/books/delete/${id}`).then(
      window.location.replace("http://localhost:5173/Book")
    );
  };
  const updateBook = (id) => {
    Axios.put(`http://localhost:3000/books/update/${id}`, {
      title: title,
      startDate: startDate,
      finishDate: finishDate,
      page: page,
      author: author,
      id: id,
    }).then(window.location.replace("http://localhost:5173/Book"));
  };

  return (
    <div className="">
      <div className="w-full mt-4  flex justify-center">
        <table className=" text-center  w-3/5">
          <tr className="border-b-4 w-full border-amber-900">
            <th>Title</th>
            <th>Start day</th>
            <th>finish day</th>
            <th>Page</th>
            <th>Author</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>

          {listOfBooks.map((books) => {
            return (
              <tr className="border-b-2 border-black/5 ">
                <td> {books.title}</td>
                <td>
                  {new Date(books.startDate).toISOString().substring(0, 10)}
                </td>
                <td>
                  {new Date(books.finishDate).toISOString().substring(0, 10)}
                </td>
                <td> {books.page}</td>
                <td> {books.author}</td>
                <td>
                  <button
                    className=" text-amber-900"
                    onClick={() => {
                      deleteBook(books._id);
                    }}
                  >
                    delete
                  </button>
                </td>
                <td>
                  <button
                    className=" text-amber-700"
                    onClick={() => {
                      setdata(books);
                    }}
                  >
                    edit
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
      <div className="flex justify-center	w-full mt-10">
        <div className="flex w-3/5 flex-col ">
          <div className="">
            <h3>Edit</h3>
          </div>
          <div className="flex flex-row w-4/5 flex-wrap">
            <div className="flex flex-col">
              <label htmlFor="">Title: </label>
              <input
                className="ml-2"
                type="text"
                placeholder="Title"
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
                value={title}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Start date: </label>
              <input
                className="ml-2"
                type="date"
                placeholder="first day"
                onChange={(event) => {
                  setStartDate(event.target.value);
                }}
                value={startDate}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Finish day:</label>
              <input
                className="ml-2"
                type="date"
                placeholder="finish day"
                onChange={(event) => {
                  setFinishDate(event.target.value);
                }}
                value={finishDate}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Page:</label>
              <input
                className="ml-2"
                type="number"
                placeholder="page"
                onChange={(event) => {
                  setPage(event.target.value);
                }}
                value={page}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Author</label>
              <select
                className="mr-2"
                onChange={(event) => {
                  setAuthor(event.target.value);
                }}
                value={author}
              >
                {listAuthors.map((author) => {
                  return (
                    <>
                      <option> </option>
                      <option
                        onChange={(event) => {
                          setAuthor(event.target.value);
                        }}
                      >
                        {author}
                      </option>
                    </>
                  );
                })}
              </select>
            </div>
          </div>
          <button
            className="w-1/4 p-2 bg-orange-700 text-slate-50 mt-8 rounded-md md:w-1/4"
            onClick={() => {
              updateBook(id);
            }}
          >
            edit book
          </button>
        </div>
      </div>
    </div>
  );
}

export default Book;

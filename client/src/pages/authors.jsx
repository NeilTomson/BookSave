import { useState, useEffect } from "react";
import Axios from "axios";

function Author() {
  const [id, setid] = useState([]);
  const [name, setName] = useState("");
  const [country, setCountry] = useState(0);
  const [age, setAge] = useState("");
  const [listOfAuthors, setListOfAuthors] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3000/authors").then((response) => {
      setListOfAuthors(response.data);
      console.log(response.data);
    });
  }, []);

  const deleteAuthor = (id) => {
    Axios.delete(`http://localhost:3000/authors/delete/${id}`).then(
      window.location.replace("http://localhost:5173/Author")
    );
  };
  const updateAuthor = (id) => {
    Axios.put(`http://localhost:3000/authors/update/${id}`, {
      name: name,
      age: age,
      country: country,
      id: id,
    }).then(window.location.replace("http://localhost:5173/Author"));
  };
  const log = (id) => {
    console.log(id);
  };

  return (
    <div className="">
      <div className="w-full mt-4  flex justify-center">
        <table className=" text-center  w-3/5">
          <tr className="border-b-4 border-amber-900">
            <th>Name</th>
            <th>Age</th>
            <th>Country</th>
            <th>Delete</th>
          </tr>

          {listOfAuthors.map((authors) => {
            return (
              <tr className="border-b-2 border-black/5 ">
                <td> {authors.name}</td>
                <td> {authors.age}</td>
                <td> {authors.country}</td>
                <td>
                  <button
                    className="mx-3 text-amber-900"
                    onClick={() => {
                      deleteAuthor(authors._id);
                    }}
                  >
                    delete
                  </button>
                  <button
                    className="mx-3 text-amber-700"
                    onClick={() => {
                      setid(authors._id);
                      setName(authors.name);
                      setAge(authors.age);
                      setCountry(authors.country);
                    }}
                  >
                    changeId
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
      <div className="flex justify-center	w-full mt-10">
        <div className="flex w-3/5 flex-col">
          <div className="">
            <h3>Edit</h3>
          </div>
          <div>
            <input
              type="text"
              placeholder="Name..."
              onChange={(event) => {
                setName(event.target.value);
              }}
              value={name}
            />
            <input
              type="text"
              placeholder="Country"
              onChange={(event) => {
                setCountry(event.target.value);
              }}
              value={country}
            />
            <input
              type="number"
              placeholder="age"
              onChange={(event) => {
                setAge(event.target.value);
              }}
              value={age}
            />
            <button
              onClick={() => {
                updateAuthor(id);
              }}
            >
              edit user
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Author;

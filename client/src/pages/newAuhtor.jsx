import { useState } from "react";
import Axios from "axios";

function NewAuthor() {
  const [name, setName] = useState("");
  const [country, setCountry] = useState(0);
  const [age, setAge] = useState(""); 
 
  const createAuthor = () => {
    Axios.post("http://localhost:3000/authors/new", {
      name,
      country,
      age,
    }).then((response) => {
      setListOfUsers([
        ...listOfUsers,
        {
          name,
          country,
          age,
        },
      ]);
    }).then(window.location.replace("http://localhost:5173/Author"));
  };

  return (
    <div>
      <h1 className="w-full text-center my-8">Create new author </h1>
      <div className="w-full flex justify-center">
        <div className="">
          <input
            type="text"
            placeholder="Name..."
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Country"
            onChange={(event) => {
              setCountry(event.target.value);
            }}
          />
          <input
            type="number"
            placeholder="age"
            onChange={(event) => {
              setAge(event.target.value);
            }}
          />
          <button onClick={createAuthor} className = 'p-2 text-green-800 text-lg	'> Create </button>
        </div>
      </div>
    </div>
  );
}

export default NewAuthor;

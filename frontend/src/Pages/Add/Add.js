import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from "./add.module.scss"
function Add() {

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState(0);
  let navigate = useNavigate();

  const handleSubmit = () => {

    console.log("1");
    const data = {
      title,
      author,
      publishYear,
    };

    axios.post('http://localhost:5555/books', data)
      .then(() => {
        console.log("yooo");
        navigate('/');
      })
      .catch((error) => {
        {
          console.log(error);
        }
      })
  }
  return (
    <div>
      <form onClick={handleSubmit}>
      <div className={styles.container}>

        <label>Book name:
          <input className='form-control'
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>Author name:
          <input  className='form-control'
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </label>
        <label>Publish year:
          <input  className='form-control'
            type="number"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
          />
        </label>
        <button className="btn btn-danger mt-3" type="button" >ADD</button>
        </div>

      </form>
    </div>
  )
}

export default Add

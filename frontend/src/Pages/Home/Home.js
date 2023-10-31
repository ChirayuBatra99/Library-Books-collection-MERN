import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import styles from "./home.module.scss";
// import { get } from 'mongoose';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {

  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  const [bookid, setBookid] = useState();

  const getAll = async () => {
    axios.get("http://localhost:5555/books")
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
        console.log("ejdb");
      })
      .catch((error) => {
        console.log(error.message);
        console.log("ejdb");
        setLoading(false);
      })
  }


  useEffect(() => {
    getAll();
  }, []);

  const handleAdd = async () => {
    navigate('/create');
  }

  const handleDelete = (id) => {
    console.log("hey", id);
    axios.delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        console.log("deleted");
        getAll();
      })
  }

  const handleEdit = (id) => {
    navigate(`/edit/${id}`)
  }


  return (
    <div>
      <div className={styles.header}>
      <h1>Library Record</h1>
      <button className="btn btn-danger mx-5" onClick={handleAdd}>ADD A BOOK</button>
      </div>
      <div className={styles.userTable}>
        <table>
          <thead>
            <tr>
              <th>Author</th>
              <th>Title</th>
              <th>PublishYear</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={index}>
                <td>{book.author}</td>
                <td>{book.title}</td>
                <td>{book.publishYear}</td>
                <td> <div className={styles.buttons}>
                  <button className="btn btn-primary mx-2" onClick={() => handleEdit(book._id)}>Edit</button>
                  <button className="btn btn-secondary mx-2" onClick={() => handleDelete(book._id)}>Delete</button> 
                  </div>
                    </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
     
    </div>
  )
}

export default Home



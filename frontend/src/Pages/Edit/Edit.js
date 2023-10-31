import React,{useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import styles from "./edit.module.scss"

function Edit() {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [author, setAuthor]= useState("");
    const [publishYear, setPublishYear]= useState(0);
    const navigate = useNavigate();

    const handleSubmit=()=>{
        // e.preventDefault();
 
        console.log("akjsdncnw kasmd,wwdsn ");
        console.log(id);
        const data={
            title,
            author,
            publishYear,
        }
        axios.put(`http://localhost:5555/books/${id}`,data)
        .then((res)=>{
            console.log("edited");
            navigate('/');

        })
        .catch((error)=>{
        
            console.log(error);
        
    })
    }


    return (
        <div className='form-group'>
            <form onClick={handleSubmit} >
            <div className={styles.container}>

                <label> New name
                    <input className='form-control'
                        type="text"
                        value={title}
                        onChange={(e) =>setTitle(e.target.value)}
                    />
                </label>
                <label> New author
                    <input className='form-control'
                        type="text"
                        value={author}
                        onChange={(e) =>setAuthor(e.target.value)}
                    />
                </label>
                <label> New publish date
                    <input className='form-control'
                        type="text"
                        value={publishYear}
                        onChange={(e) => setPublishYear(e.target.value)}
                    />
                </label>
                <button className="btn btn-danger mt-3" type="button">Confirm</button>
            </div>
            </form>
        </div>
    )
}

export default Edit

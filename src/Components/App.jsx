import { React, useState } from "react";

import Header from "./Header";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
import Note from "./Note";

export default function App() {
    const [notes,setNotes] = useState([]);
    const [count, setCount] = useState(1);
    const [currentNote, setCurrentNote] = useState({title:"", content:"", key:count.toString()});

    function onAdd(event) {
        event.preventDefault();
        setCount(count + 1);
        setNotes((prevValue) => {
            return [...prevValue, currentNote]
        })
        setCurrentNote({title:"", content:""});
        
    };

    function handleChange(event) {
        event.preventDefault();
        const { value, name } = event.target;
        setCurrentNote((prevValue) => {
            return {
                ...prevValue,
                key: count.toString(),
                [name]: value
            }
        })
    }

    function onDelete(id) {
        setNotes((prevValue) => {
            return prevValue.filter((item) => {
                return item.key !== id
            })
        })
    }

    
    return (
        <div>
            <Header />
            <CreateArea onAdd={onAdd} onChange={handleChange} title={currentNote.title} content={currentNote.content} />
            {notes.map((note) => {
                return  <Note 
                            key={note.key}
                            id={note.key}
                            title={note.title}
                            body={note.content}
                            onDelete={onDelete}
                        />
            })}
            <Footer />
        </div>
    )
}
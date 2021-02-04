import logo from '../images/logo.svg';
import React, {useState, useEffect} from "react";
import '../styles/App.css';
import Card from "./TodoBook";
import {Col, Pagination} from "antd";
//import {Card} from "antd";

function App() {
    const [books, setBooks] = useState([]);
    const [page,setPage]=useState(1);

    useEffect(() => {
        const fetchBooks = async () => {
            const response = await fetch("https://stark-spire-22280.herokuapp.com/api/books");
            const json = await response.json();
            console.log("json", json);
            setBooks(json.data);
            return json;
        }

        fetchBooks();
    }, [page]);

    const handlePagination =(page)=>{
        setPage(page);
    }
  return (
    <>
        <h1 style={{margin: '15px'}}>LIBROS</h1>
        <div className={'list'}>
            {books.map((book) => (
                <Card
                    Databook={book}
                />
            ))}
        </div>
        <div className={'list'}>
            <Col>
                <Pagination
                    style={{textAlign:'rigth'}}
                    defaultCurrent={1}
                    total={50}
                    onChange={handlePagination}
                />
            </Col>
        </div>
    </>
  );
}

export default App;

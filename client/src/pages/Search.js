import React from 'react';
import { Row, Container } from "react-bootstrap";
import "./search.css"

export default function Search() {
    return (
        <>
            <Container style={{ border: "2px solid black" }} className="mt-4">
            <Row>
                <Container>
                    <h5 className="mt-1">Books Search</h5>
                    <p>Book:</p>
                    <input type="text" className="mb-4" placeholder="Harry Potter"></input>
                    <button>Search</button>
                </Container>
            </Row>
            </Container>

        </>
    )
}

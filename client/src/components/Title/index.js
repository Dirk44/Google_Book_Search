import React from 'react';
import { Container, Row } from "react-bootstrap";

export default function Title() {
    return (
        <Container style={{ border: "2px solid black" }} className="mt-4">
            <Row>
                <h1>Google Books Search</h1>
            </Row>
            <Row>
                <h3>Search and Save Books of Interest</h3>
            </Row>
            
        </Container>
    )
}

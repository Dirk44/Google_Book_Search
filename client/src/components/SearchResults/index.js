import React from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import "./style.css";

export default function SearchResults(props) {
    return (
        <Container fluid>
            <Card>
                <Row>
                    <Col md={3}>
                        <img src={props.image} className="card-img" alt={props.title} />
                    </Col>
                    <Col md={9}>
                        <h2>{props.title}</h2>
                        <h4>{props.authors.join(", ")}</h4>
                        <p>{props.description}</p>
                        <Button className="mr-2 mb-2" variant="primary" target="blank" href={props.link}>View</Button>
                        <Button className="mb-2" variant="success" onClick={() => props.buttonClick(props)}>{props.buttonText}</Button>
                    </Col>

                </Row>

            </Card>

        </Container>
    )
}

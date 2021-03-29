import React from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import "./style.css";

export default function SearchResults(props) {
    return (
        <Container>
            <Card>
                <Row>
                    <Col className="md-3">
                        <img src={props.image} className="card-img" alt={props.title} />
                    </Col>
                    <Col className="md-9">
                        <h2>{props.title}</h2>
                        <h4>{props.authors.join(", ")}</h4>
                        <p>{props.description}</p>
                        <Button className="mr-2" variant="primary" target="blank" href={props.link}>View</Button>
                        <Button variant="success" onClick={() => props.buttonClick(props)}>{props.buttonText}</Button>
                    </Col>

                </Row>

            </Card>

        </Container>
    )
}

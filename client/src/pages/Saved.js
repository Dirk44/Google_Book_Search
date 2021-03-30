import React, { useState, useEffect } from 'react';
import { Container, Row } from "react-bootstrap";
import API from "../utils/API";
import SearchResults from '../components/SearchResults';



export default function Saved() {

    const [savedResults, setSavedResults] = useState([]);

    

    const handleDelete = async (title) => {
console.log(title);
        await API.delete(title.id);

        async function fetchData() {
            const titles = await API.get()
            setSavedResults(titles.data);
        }
        fetchData();
    }
    useEffect(() => {
        async function fetchData() {
            const titles = await API.get()
            setSavedResults(titles.data);
        }
        fetchData();
    }, []);


    return (
        <>
            <Row>
                <Container>
                    <h4>Saved Books</h4>
                    {savedResults.length ? (
                        <>

                            {savedResults.map((data) => {
                                return (
                                    <SearchResults
                                        key={data._id}
                                        id={data._id}
                                        title={data.title}
                                        authors={data.authors}
                                        description={data.description}
                                        image={data.image}
                                        link={data.link}
                                        buttonText="Delete"
                                        buttonClick={handleDelete}
                                    />
                                )
                            })
                            }
                        </>
                ) : (
                    <h5>Save some books!</h5>
                    )}

                </Container>
            </Row>
        </>
    )
};



import React, { useState } from 'react';
import { Row, Container } from "react-bootstrap";
import "./search.css";
import API from "../utils/API";
import SearchResults from '../components/SearchResults';

export default function Search() {

    const [searchResults, setSearchResults] = useState([]);
    const [searchBar, setSearchBar] = useState("");

    const handleSearch = async (event) => {
        event.preventDefault();
        setSearchResults(await API.search(encodeURI(searchBar)))
    };

    const handleSave = async (data) => {
        console.log(data);
        await API.post(data);
    }
    return (
        <>
            <Container style={{ border: "2px solid black" }} className="mt-4">
                <Row>
                    <Container>
                        <h5 className="mt-1">Books Search</h5>
                        <p>Book:</p>
                        <input value={searchBar} onChange={e => setSearchBar(e.target.value)} type="text" className="mb-4" placeholder="Harry Potter"></input>
                        <button onClick={handleSearch}>Search</button>
                    </Container>
                </Row>
                <Row>
                    <Container>
                        <h5 className="mt-1">Results</h5>
                        {searchResults.length ? (
                            <>
                            {
                                searchResults.map(data => {
                                    return (
                                        <SearchResults
                                        key={data.id}
                                        title={data.title}
                                        authors={data.authors}
                                        description={data.description}
                                        image={data.image}
                                        link={data.link}
                                        buttonText="Save"
                                        buttonClick={handleSave}
                                        />
                                    )
                                })
                            }
                            </>
                        ) : (
                            <h5>Search for Results</h5>
                        )}
                    </Container>
                </Row>
            </Container>

        </>
    )
}

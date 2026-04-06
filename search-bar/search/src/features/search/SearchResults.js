import React from "react";
import {useSelector} from 'react-redux';

const SearchResults = () => {
    const results = useSelector((state) => state.search.results);

    return(
        <ul>
            {results.length > 0 ? (
                results.map((item,index) => <li key={index}>{item}</li>)
                ) : (
                <li>No result found</li>
                )}
        </ul>
    )
}

export default SearchResults;
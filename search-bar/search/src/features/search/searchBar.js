import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setQuery,setResults } from "./searchSlice";

const data = ['apple','banana','grape','orange','pineapple'];

const SearchBar = () => {
    const dispatch = useDispatch();
    const query = useSelector((state) => state.search.query);

    const handleChange = (e) => {
        const value = e.target.value;
        dispatch(setQuery(value));

        const filtered = data.filter(item => 
            item.toLowerCase().includes(value.toLowerCase())
        );
        dispatch(setResults(filtered));
    }

    return(
        <input
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Search Fruits"
        />
    )
}

export default SearchBar;
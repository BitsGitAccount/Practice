import SearchBar from './features/search/searchBar';
import SearchResults from './features/search/SearchResults';

function App() {
  return (
    <div style={{padding: '20px'}}>
      <h2>Search Bar</h2>
      <SearchBar />
      <SearchResults/>
    </div>
  );
}

export default App;

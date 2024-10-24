import './style/searchInput.css';

const SearchInput = () => {
    return (
        <form id="searchForm">
            <label htmlFor="searchText">Search:</label>
            <input id="searchText" type="text"></input>
        </form>
    )
};
export default SearchInput;
import classes from './SearchBar.module.css';
const SearchBar =(props)=>{
    const searchBarHandler=(event)=>{
        props.onSearch(event.target.value);
    }
    return(
        <center>
        <input 
        type='text' 
        placeholder="Search....." 
        onChange={searchBarHandler} 
        className={classes['search-bar']}>
        </input>
        </center>
    );
};
export default SearchBar;
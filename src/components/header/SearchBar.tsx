import React from "react";
import styles from '../../styles/searchBar.module.css';

const SearchBar = () => {
    return (
        <div className={styles.container}>
            <form action="#">
                <div style={{display: 'flex'}}>
                <input type="text"
                    placeholder=" Search"
                    style={{width: '100%', height: '40px', padding: '0px 10px', fontSize: '15px', border: 'none'}}
                    name="search" />
                <button style={{width: '45px' , background: 'green' , border: 'none'}} type="button">
                    <i className="fa fa-search" style={{fontSize: '20px', color: 'white'}}
                    >
                    </i>
                </button>
                </div>
            </form>
        </div>
    )
}

export default SearchBar;
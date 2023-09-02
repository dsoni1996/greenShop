import React from "react";
import styles from '../../styles/headers.module.css';
import Image from 'next/image'
import SearchBar from "./SearchBar";

const Header = () => {
    return (
        <div className={styles.root}>
            <SearchBar />
            <div className={styles.imageContainer}>
            <Image
                src="/profile.jpg"
                width={50}
                height={50}
                alt="Picture of the author"
                style={{borderRadius: '50%'}}
            />
            </div>
        </div>
    )
}

export default Header;
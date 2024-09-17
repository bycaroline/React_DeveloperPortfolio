import React from 'react'
import styles from '../css/styles.module.css'
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';

//header for projects page and admin page
function PagesHeader() {
    return (
        <div className={styles.headerProjectPage}>
            <IoIosArrowBack />
            <Link to="/">
                <p>Back</p>
            </Link>
        </div>
    )
}

export default PagesHeader
import React from 'react'
import styles from '../css/styles.module.css'
import { Link } from 'react-router-dom';


function ProjectCards({ name, iconImage, description, projectURL }) {
    const truncatedDescription = description.length > 40 ? `${description.slice(0, 40)}...` : description;

    return (
        <div className={styles.projectCard}>
            <h2>{name}</h2>
            <Link to={projectURL}>
                <img src={iconImage} />
            </Link>
            <div className={styles.textProjectCard}>
                <p>{truncatedDescription}</p>
                <Link to={projectURL}>Read more</Link>
            </div>
        </div>
    )
}

export default ProjectCards



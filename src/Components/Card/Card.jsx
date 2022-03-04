import React from "react";
import { Link } from "react-router-dom";
import styles from './Card.module.css';

export default function Card ({ name, image }){
    return(
        <article className={styles.articleCard}>
            <Link to={`/`} className={styles.linkCard}>
                <img className={styles.img} src={image} alt={name} />
                <h1 className={styles.name}>{name}</h1>
            </Link>
        </article>
    )
}

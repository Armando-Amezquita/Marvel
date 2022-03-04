import React from "react";
import Card from "../Card/Card";
import styles from './Cards.module.css';

export default function Cards ({marvel}){
    console.log('este', marvel)

    return(
        <div className={styles.main}>

            {
                marvel? marvel.map(comic => (
                    <Card key={comic.id} id={comic.id} name={comic.name} image={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}/>
                ))
                : <h1>Loading...</h1>
            }
        </div>
    )
} 

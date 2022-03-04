import React from 'react';
import Header from '../Header/Header';
import styles from './Marvel.module.css'
import { useSelector } from "react-redux";
import Cards from '../../Components/Cards/Cards';
// import SearchBar from "../../Components/SearchBar/SearchBar";
// import Paginado from "../../Components/Paginado/Paginado";

export default function Marvel () {

    const marvelData = useSelector(state => state.dataApi);

    return(
        <>
        <Header />
        <main className={styles.containerMainMarvel}>
            <h1 className={styles.titleComics}>Comics</h1>
            <Cards marvel={marvelData}/>
        </main>
        </>
    )
}
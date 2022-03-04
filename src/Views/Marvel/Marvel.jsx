import React from 'react';
import Header from '../Header/Header';
import styles from './Marvel.module.css'
import { useDispatch, useSelector } from "react-redux";
import Cards from '../../Components/Cards/Cards';
// import SearchBar from "../../Components/SearchBar/SearchBar";
// import Paginado from "../../Components/Paginado/Paginado";

export default function Marvel () {

    const dispatch = useDispatch();
    const marvelData = useSelector(state => state.dataApi);
    console.log('dataComponente', marvelData)

    return(
        <>
        <Header />
        <main className={styles.containerMainMarvel}>
            <Cards marvel={marvelData}/>
        </main>
        </>
    )
}
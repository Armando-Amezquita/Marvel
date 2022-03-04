import React from "react";
import { Link } from "react-router-dom";
import styles from './Nav.module.css'

export default function Nav () {
    return (
        <nav className={styles.menu}>
            <label htmlFor="" className={styles.logo}>@ARMANDO-AMEZQUITA</label>
            <ul className={styles.menuItems}>
                <Link to='/' className={styles.underline}>
                    <p className={styles.font}>Home</p>
                </Link>
                <Link to='/login' className={styles.underline}>
                    <p className={styles.font}>Login</p>
                </Link>
                <Link to='/apimarvel' className={styles.underline}>
                    <p className={styles.font}>API MARVEL</p> 
                </Link>
                <Link to='/ecommerce' className={styles.underline}>
                    <p className={styles.font}>Ecommerce</p>
                </Link>
            </ul>
            <span className={styles.btnMenu}>
                <i className='fa-solid fa-align-center'></i>
            </span>         
        </nav>
    )
}
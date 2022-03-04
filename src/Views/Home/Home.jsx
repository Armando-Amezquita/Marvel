import React from "react";
import Header from '../Header/Header';
import styles from './Home.module.css';

export default function Home () {
    return(
        <>
        <Header />
        <>
        <main className={styles.containerMainHome}>
            <section className={styles.firstSection}>
                <div className={styles.containerFirstSection}>
                    <div className={styles.presentation}>
                        <p className={styles.parrafos}>Hola...</p>
                        <h1 className={styles.titleName}>Soy Armando Amezquita Molina</h1>
                        <p className={styles.parrafos}>Desarrollador de software Full-Stack </p>
                        <br />
                        <br />
                        <p className={styles.parrafos}>En este proyecto fue desarrollado con el fin de practicar React.Js, Redux, HTML5, CSS3, 
                        consumiendo una API <a href="https://developer.marvel.com">https://developer.marvel.com</a>, y la creación de un Login. </p>
                    </div>
                    <div className={styles.presentationImage}>
                    </div>
                </div>
            </section>
            <section className={styles.secondSection}>
                <div className={styles.containerSecondSection}>
                    <h2 className={styles.titleSecondSection}>About Me</h2>
                    <p className={styles.parrafos2}>💪Desarrollador de Software Full Stack, soy capaz de autogestionar proyectos independientes de manera eficaz. Buenas habilidades de colaboración dentro de un equipo productivo. Me apasiona aprender cosas nuevas, llenarme de conocimiento y poder transmitirlo a personas que lo deseen. 
                    <br />
                    💻 Puedo resolver problemas y lograr el objetivo que desee gracias a mis habilidades, experiencia y mi actitud. Adicional tengo la capacidad de poder generar grandes relaciones interpersonales y me apasiona imaginar y crear cosas nuevas siempre, además de querer estar aprendiendo constantemente.
                    <br />
                    📲 ¡Ya sabes algo sobre mí! ¡Me encantaría conectarme contigo! 
                    ¿Nos estamos conectando ahora? 
                    <br />
                    👉 Contáctame a mi correo a.amezquita.1009@gmail.com
                    <br />
                    👉 O por LinkedIn <a className={styles.linka} href="https://www.linkedin.com/in/armando-amezquita-molina/"> https://www.linkedin.com/in/armando-amezquita-molina/</a>
                    <br />
                    👉 O si prefieres por GitHub <a className={styles.linka} href="https://github.com/Armando-Amezquita/">https://github.com/Armando-Amezquita/</a>

                    </p>
                </div>
            </section>
            <section className={styles.thirdSection}>
                <p className={styles.titleThirdSection}>En este proyecto utilicé</p>
                <div className={styles.containerThirdSection}>
                    <div className={styles.containerThirdSectionLogos}>
                        <div className={styles.divDuo}>
                            <p className={styles.logoJS}></p>
                            <span className={styles.presentationSpan}>Javascript</span>
                        </div>
                        <div className={styles.divDuo}>
                            <p className={styles.logoReact}></p>
                            <span className={styles.presentationSpan}>React</span>
                        </div>
                        <div className={styles.divDuo}>
                            <p className={styles.logoSequelize}></p>
                            <span className={styles.presentationSpan}>Redux</span>
                        </div>
                        <div className={styles.divDuo}>
                            <p className={styles.logoNode}></p>
                            <span className={styles.presentationSpan}>HTML5</span>
                        </div>
                        <p className={styles.imageLogos}></p>
                        <p className={styles.imageLogos}></p>
                    </div>
                </div>
            </section>
        </main>
        </>
        </>
    )
} 
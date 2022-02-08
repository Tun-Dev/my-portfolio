import React from 'react';
import styles from './work.module.css'

const Work = ({ name, made, desc, live, code }) => {
    return (
        <>
            <div className={styles.main} >
                <div className={styles.title} >
                    <h1>{name}</h1>
                    <p>{made}</p>
                </div>

                <div className={styles.talks}>
                    <p>{desc}</p>
                </div>

                <div className={styles.links} >
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <p> <img src="" alt="" srcset="" /> {live}</p>
                    </a>
                </div>
            </div>
        </>
    );
};

export default Work;

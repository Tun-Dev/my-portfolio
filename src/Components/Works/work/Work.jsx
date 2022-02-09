import React from 'react';
import styles from './work.module.css';
import { faEye, faEyeSlash, faMehRollingEyes } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';

const Work = ({ name, made, desc, live, code, codebranch }) => {
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
                        <p> <FontAwesomeIcon icon={faEye} /> {live}</p>
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <p> <FontAwesomeIcon icon={codebranch} /> {code}</p>
                    </a>
                </div>
            </div>
        </>
    );
};

export default Work;

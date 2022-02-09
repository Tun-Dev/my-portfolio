import React from 'react';
import styles from './resume.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Resume = () => {

    return (
        <>
            <div className={styles.resume} >
                <div className={styles.resume_container} >
                    <div className={styles.top_row} >
                        <h1>Douye Tungbulu</h1>
                        <div className={styles.buttons} >
                            <a href="https://www.linkedin.com/in/tungbulu-douye-939ab4182/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a href="" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faDownload} />
                            </a>
                        </div>
                    </div>
                    <p>Frontend Developer</p>
                    <div className={styles.summary} >
                        I’m a frontend software developer, passionate about solving problems with code and transforming ideas from pixels to scalable products. I create usable applications with user experience as a top priority using various web tools, languages and technology.
                    </div>
                    <div className={styles.divider} >
                        <p>Core Technologies</p>
                        <span></span>
                    </div>
                    <div className={styles.skills} >
                        <p>HTML/CSS/SASS, Javascript, React JS, Typescript, GraphQL, PHP</p>
                    </div>
                    <div className={styles.divider} >
                        <p>Work Experience</p>
                        <span></span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Resume;

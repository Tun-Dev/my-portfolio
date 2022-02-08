import React from "react";
import { useState } from "react";
import styles from './info.module.css'
import Works from "../Works/Works";
import Resume from "../Resume/Resume";

const Info = () => {
  const [view, setView] = React.useState(0);

  const work = () => setView(0);
  const resume = () => setView(1);
  const skills = () => setView(2);

  return (
    <>
      <div className={styles.main} >
        <div className={styles.left} >
          <div>
            <h1>Hello, I'm <br /> Douye Tungbulu</h1>
            <p>
              I'm a frontend developer. I enjoy creating beautifully designed and intuitive and functional websites. <br /> <br /> Welcome to my world :)
            </p>
          </div>
          <div className={styles.btns} >
            <button onClick={work}>00 <div></div> WORK</button>
            <button onClick={resume}>01 <div></div> RESUME</button>
            <button onClick={skills}>02 <div></div> SKILLS</button>
          </div>
          <div>

          </div>
        </div>
        <div className={styles.right} >
          {view === 0 ? (
            <Works />
          ) : view === 1 ? (
            <Resume />
          ) : (
            <div>SKILLS</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Info;

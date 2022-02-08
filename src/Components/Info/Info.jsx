import React from "react";
import { useState } from "react";
import styles from './info.module.css'
import Works from "../Works/Works";

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
              I'm a frontend developer. I create interactive experiences for
              amazing people using modern web technology. I am currently
              learning how to write immersive web animations and also exploring
              the decentralized web.
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
            <div>RESUME</div>
          ) : (
            <div>SKILLS</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Info;

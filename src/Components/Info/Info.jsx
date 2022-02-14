import React from "react";
import { useState } from "react";
import styles from './info.module.css'
import Works from "../Works/Works";
import Resume from "../Resume/Resume";
import { motion } from "framer-motion";

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
            <motion.h1
              initial={{ x: '-100vw' }}
              animate={{ x: 0 }}
              transition={{ delay: 0.7, duration: 2.0 }}
            >
              Hello, I'm <br /> Douye Tungbulu</motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 2.0 }}
            >
              I'm a frontend developer. I enjoy creating beautifully designed and intuitive and functional websites. <br /> <br /> Welcome to my world :)
            </motion.p>
          </div>
          <div className={styles.btns} >
            <button onClick={work}>00 <div></div> WORK</button>
            <button onClick={resume}>01 <div></div> RESUME</button>
            <button onClick={skills}>02 <div></div> SKILLS</button>
          </div>
          <div>

          </div>
        </div>
        <motion.div
          className={styles.right}
          initial={{ y: '-90vw' }}
          animate={{ y: 0 }}
          transition={{ delay: 0.7, duration: 2.0, type: 'spring', stiffness: 120 }}
        >
          {view === 0 ? (
            <Works />
          ) : view === 1 ? (
            <Resume />
          ) : (
            <div>SKILLS</div>
          )}
        </motion.div>
      </div>
    </>
  );
};

export default Info;

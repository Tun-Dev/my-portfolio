import React from "react";
import Work from "./work/Work";
import styles from "./works.module.css";
import { faEye, faEyeSlash, faMehRollingEyes } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';
const Works = () => {
  return (
    <>
      <div>
        <Work
          name="Portfolio"
          made="React JS + CSS"
          desc="A portfolio site touring you into my projects :) "
          live="Live"
        />
        <Work
          name="E-Commerce"
          made="React JS + Material UI + CommerceJS + Stripe"
          desc="A gadget e-commerce website"
          live="Live"
          code="Code"
          codebranch={faCodeBranch}
        />
        <Work
          name="GitHub User Search Page"
          made="HTML + CSS + JS + GraphQL"
          desc="A GitHub user search page made with GraphQL API"
          live="Live"
          code="Code"
          codebranch={faCodeBranch}
        />
        <Work
          name="PassDefender"
          made="HTML + CSS + PHP + JS"
          desc="A note web app with a different kind of security protocol"
          live="Live"
          code="Code"
          codebranch={faCodeBranch}
        />
      </div>
    </>
  );
};

export default Works;

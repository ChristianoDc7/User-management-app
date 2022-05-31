import React, { useState } from 'react';
import PageTransition from '../../styles/PageTransition';
import styles from '../../styles/style.module.scss'

function About() {

  return (
     <div className={styles.message}>
        <div className="card-panel" > 
            <i className="material-icons">add</i>
            <p>Designed and developed by Christiano</p>
        </div>
        
      </div>
  );
}

export default About;
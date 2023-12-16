import React from 'react';
import styles from './style.module.css';

const Docs = ({ params }) => {
  console.log(params);

  return (
    <div className={styles.title}>Docs</div>
  )
}

export default Docs
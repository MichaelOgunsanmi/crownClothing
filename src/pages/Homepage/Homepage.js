import React from 'react';

import Directory from "../../components/Directory/Directory";

import styles from './Homepage.module.css';


const Homepage = (props) => {
    return (
        <div className={styles.Homepage}>
            <Directory/>
        </div>
    );
};

export default Homepage;
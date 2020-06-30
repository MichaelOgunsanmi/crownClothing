import React from 'react';

import styles from "./MenuItem.module.css";

const MenuItem = (props) => {
    const {title, imageUrl, size} = props;

    const MenuItemStyles = {
        backgroundImage: `url(${imageUrl})`,
    };

    return (
        <div className={`${styles.MenuItem} ${styles[size]}`}>
            <div className={styles.backgroundImage} style={MenuItemStyles}/>
            <div className={styles.content}>
                <h1 className={styles.title}>{title.toUpperCase()}</h1>
                <span className={styles.subtitle}>SHOP NOW</span>
            </div>
        </div>
    );
};

export default MenuItem;
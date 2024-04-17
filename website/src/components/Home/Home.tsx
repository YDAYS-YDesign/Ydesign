import React, { FC } from "react";
import styles from "./Home.module.css";

interface HomeProps {}

const Home: FC<HomeProps> = () => (
    <div className={styles.Home}>
        <h1>Ydesign</h1>
        <p>
            Find <span className={styles.Your}>Your</span> React Component
        </p>
    </div>
);

export default Home;

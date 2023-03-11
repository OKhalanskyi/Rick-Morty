import React from 'react'
import img from '../../assets/AM7BH-Vjf.jpg'
import logo from '../../assets/Logo.png'
import './app.scss'
import styles from './index.module.scss'
import CardList from '../../components/CardList/CardList'

const MainPage = () => {
    return (
        <div className={styles.wrapper}>
            <img className="logo" src={logo} />
            <input className="input" />
            <CardList />
        </div>
    )
}

export default MainPage

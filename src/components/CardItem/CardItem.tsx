import React from 'react'
import img from '../../assets/AM7BH-Vjf.jpg'
import styles from './index.module.scss'

const CardItem = () => {
    return (
        <div className={styles.block}>
            <div className={styles.blockImage}>
                <img className={styles.image} src={img} alt="" />
            </div>
            <div>text</div>
        </div>
    )
}

export default CardItem

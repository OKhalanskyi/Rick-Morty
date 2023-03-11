import React from 'react'
import img from '../../assets/AM7BH-Vjf.jpg'
import styles from './index.module.scss'

export interface CardItemProps {
    img: string
    name: string
}

const CardItem = (props: CardItemProps) => {
    return (
        <div className={styles.block}>
            <div className={styles.blockImage}>
                <img className={styles.image} src={props.img} alt="" />
            </div>
            <div>{props.name}</div>
        </div>
    )
}

export default CardItem

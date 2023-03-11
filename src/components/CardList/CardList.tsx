import React from 'react'
import styles from './index.module.scss'
import CardItem from '../CardItem/CardItem'

const CardList = () => {
    const arr = [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    ]

    return (
        <div className={styles.blocks}>
            {arr.map((elem, index) => (
                <CardItem key={index} />
            ))}
        </div>
    )
}

export default CardList

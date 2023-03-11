import React from 'react'
import styles from './index.module.scss'
import CardItem from '../CardItem/CardItem'
import { cardApi, useFetchAllCardsQuery } from '../../app/store/api/cardApi'
import { ICard } from '../../models/ICard'

const CardList = () => {
    const arr = [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    ]
    const { data: cards, error, isLoading } = useFetchAllCardsQuery()

    return (
        <div className={styles.blocks}>
            {cards?.results.map((elem: ICard) => (
                <CardItem key={elem.id} name={elem.name} img={elem.image} />
            ))}
        </div>
    )
}

export default CardList

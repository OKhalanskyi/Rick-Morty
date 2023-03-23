import React from 'react'
import img from '../../assets/AM7BH-Vjf.jpg'
import styles from './index.module.scss'
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'

export interface CardItemProps {
    id: number
    img: string
    name: string
    species: string
    status: string
    gender: string
    location: string
}

const CardItem = (props: CardItemProps) => {
    const navigate = useNavigate()

    return (
        <div className={styles.block} onClick={() => navigate(`${props.id}`)}>
            <div className={styles.front}>
                <div className={styles.blockImage}>
                    <img className={styles.image} src={props.img} alt="" />
                </div>
                <div className={styles.blockName}>
                    <h3 className={styles.name}>{props.name}</h3>
                    <h3 className={styles.species}>{props.species}</h3>
                </div>
            </div>
            <div className={styles.back}>
                <div className={styles.backContent}>
                    <ul>
                        <li>{props.name}</li>
                        <li>{props.species}</li>
                        <li>{props.status}</li>
                        <li>{props.gender}</li>
                        <li>{props.location}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CardItem

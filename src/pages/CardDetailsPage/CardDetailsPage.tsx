import React from 'react'
import styles from './index.module.scss'
import arrowBack from '../../assets/arrow_back_24px.png'
import { useNavigate } from 'react-router-dom'
import { useFetchCardByIdQuery } from '../../app/store/api/cardApi'
import { useParams } from 'react-router'

const CardDetailsPage = () => {
    const navigate = useNavigate()
    const { id } = useParams<{ id?: string }>()
    const { data, isLoading, error } = useFetchCardByIdQuery(id || '')
    console.log(data)

    return (
        <div className={styles.wrapper}>
            <div
                className={styles.goBack}
                onClick={() =>
                    navigate(`/?page=${localStorage.getItem('page')}`)
                }
            >
                <span className={styles.arrowBlock}>
                    <img src={arrowBack} />
                </span>
                <h1 className={styles.arrowText}>GO BACK</h1>
            </div>
            <div className={styles.details}>
                <span className={styles.detailsImage}>
                    <img src={data?.image} />
                </span>
                <h1 className={styles.detailsName}>{data?.name}</h1>
                <h1 className={styles.informationsText}>Informations</h1>
                <div className={styles.descriptionItem}>
                    <h1 className={styles.upperText}>Gender</h1>
                    <h1 className={styles.downText}>{data?.gender}</h1>
                </div>
                <div className={styles.descriptionItem}>
                    <h1 className={styles.upperText}>Status</h1>
                    <h1 className={styles.downText}>{data?.status}</h1>
                </div>
                <div className={styles.descriptionItem}>
                    <h1 className={styles.upperText}>Species</h1>
                    <h1 className={styles.downText}>{data?.species}</h1>
                </div>
                <div className={styles.descriptionItem}>
                    <h1 className={styles.upperText}>Origin</h1>
                    <h1 className={styles.downText}>{data?.origin.name}</h1>
                </div>
                <div className={styles.descriptionItem}>
                    <h1 className={styles.upperText}>Type</h1>
                    <h1 className={styles.downText}>
                        {data?.type || 'unknown'}
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default CardDetailsPage

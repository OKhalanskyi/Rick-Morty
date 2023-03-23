import React, { ChangeEvent, useContext, useEffect, useState } from 'react'
import styles from './index.module.scss'
import CardItem from '../CardItem/CardItem'
import { useFetchAllCardsQuery } from '../../app/store/api/cardApi'
import { ICard } from '../../models/ICard'
import Pagination from '@mui/material/Pagination'
import queryString from 'query-string'
import { useLocation, useNavigate } from 'react-router-dom'

interface ICardListProps {
    search: string
}

const CardList = (props: ICardListProps) => {
    const [search, setSearch] = useState<string>(props.search)
    const navigate = useNavigate()
    const location = useLocation()
    const parsedUrl = queryString.parse(location.search)
    const pageParsedUrl = parsedUrl.page ? Number(parsedUrl.page) : 1
    const nameParsedUrl = parsedUrl.name
        ? parsedUrl.name.toString()
        : props.search
    const searchName = localStorage.getItem('search')
    const [currentPage, setCurrentPage] = useState<number>(pageParsedUrl)
    const { data, error, isLoading, refetch } = useFetchAllCardsQuery({
        page: currentPage || pageParsedUrl,
        name: search || searchName || '',
    })

    const [cards, setCards] = useState<ICard[]>()
    const [pageTotal, setPageTotal] = useState<number>()

    useEffect(() => {
        if (searchName?.length === 0) {
            navigate(`?page=${currentPage}`)
            setSearch(props.search)
        }
        if (searchName?.length ? searchName?.length >= 1 : false) {
            console.log('ert')
            setCurrentPage(1)
            navigate(`?page=${currentPage}&name=${searchName}`)
            console.log(`?page=${currentPage}&name=${searchName}`)
            setSearch(props.search)
        }
    }, [props.search, nameParsedUrl])

    const handlePageChange = (selected: number) => {
        setCurrentPage(selected)
        localStorage.setItem('page', `${selected}`)
        if (nameParsedUrl) {
            navigate(`?page=${selected}&name=${nameParsedUrl}`)
        } else {
            navigate(`?page=${selected}`)
        }
    }

    useEffect(() => {
        setCards(data?.results)
        setPageTotal(data?.info.pages)
    }, [data, currentPage, nameParsedUrl])

    if (isLoading) {
        return <div>loading</div>
    }

    return (
        <>
            <div className={styles.blocks}>
                {!error ? (
                    cards?.map((elem: ICard) => (
                        <CardItem
                            key={elem.id}
                            id={elem.id}
                            name={elem.name}
                            img={elem.image}
                            species={elem.species}
                            status={elem.status}
                            gender={elem.gender}
                            location={elem.location.name}
                        />
                    ))
                ) : (
                    <div className={styles.errorTextBlock}>
                        <h1 className={styles.errorText}>
                            No cards with such name:(
                        </h1>
                    </div>
                )}
            </div>
            <div className={styles.paginationBlock}>
                <Pagination
                    page={pageParsedUrl}
                    count={pageTotal}
                    size={'large'}
                    onChange={(event, page) => handlePageChange(page)}
                />
            </div>
        </>
    )
}

export default CardList

import React, { ChangeEvent, FormEvent, useContext, useState } from 'react'
import styles from './index.module.scss'
import searchIcon from '../../assets/icons8-search-384.png'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'

interface ISearchProps {
    search: string
    setSearch: (e) => void
}

const Search = (props: ISearchProps) => {
    const location = useLocation()
    const searchValue = `${localStorage.getItem('search')}`

    const change = (event) => {
        const value = event.target.value
        localStorage.setItem('search', value)
        props.setSearch(value)
    }

    return (
        <div className={styles.searchBlock}>
            <span className={styles.iconBlock}>
                <img className={styles.iconImage} src={searchIcon} />
            </span>
            <input
                value={searchValue}
                onChange={change}
                className={styles.searchInput}
                placeholder="search..."
            />
        </div>
    )
}

export default Search

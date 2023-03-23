import React, { useState } from 'react'
import styles from './index.module.scss'
import CardList from '../../components/CardList/CardList'
import Search from '../../components/Search/Search'
import Logotype from '../../components/Logotype/Logotype'
import searchIcon from '../../assets/icons8-search-384.png'
import useDebounce from '../../utils/hooks/useDebounce'
import { useGoogleLogin } from '@react-oauth/google'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { GoogleLogin } from '@react-oauth/google'

const MainPage = () => {
    const [name, setName] = useState()
    const [search, setSearch] = useState('')
    const debouncedSearch = useDebounce(search, 800)

    const login = useGoogleLogin({
        onSuccess: async (response) => {
            try {
                const res = await axios.get(
                    'https://www.googleapis.com/oauth2/v3/userinfo',
                    {
                        headers: {
                            Authorization: `Bearer ${response.access_token}`,
                        },
                    },
                )
            } catch (err) {
                console.log(err)
            }
        },
    })

    return (
        <>
            <div style={{ position: 'absolute', right: '5%' }}>
                <GoogleLogin
                    onSuccess={(credentialResponse) => {
                        const decoded: any = jwt_decode(
                            `${credentialResponse.credential}`,
                        )
                        setName(decoded.name)
                        localStorage.setItem('name', decoded.name)
                    }}
                    onError={() => {
                        console.log('Login Failed')
                    }}
                />
                <h1>{name || localStorage.getItem('name')}</h1>
            </div>
            <div className={styles.wrapper}>
                <Logotype />
                <Search search={search} setSearch={setSearch} />
                <CardList search={debouncedSearch} />
            </div>
        </>
    )
}

export default MainPage

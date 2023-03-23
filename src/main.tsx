import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import './app/styles/global.scss'
import { Provider } from 'react-redux'
import { store } from './app/store/store'
import { GoogleOAuthProvider } from '@react-oauth/google'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <GoogleOAuthProvider clientId="502182113304-6n3m2rvccm8sdve41g87sk16muiimtje.apps.googleusercontent.com">
                <App />
            </GoogleOAuthProvider>
        </Provider>
    </React.StrictMode>,
)

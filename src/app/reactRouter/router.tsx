import { createBrowserRouter } from 'react-router-dom'
import MainPage from '../../pages/MainPage/MainPage'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,
    },
    {
        path: '/:id',
        element: <h1>card</h1>,
    },
])

import { createBrowserRouter } from 'react-router-dom'
import MainPage from '../../pages/MainPage/MainPage'
import CardDetailsPage from '../../pages/CardDetailsPage/CardDetailsPage'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,
    },
    {
        path: '/:id',
        element: <CardDetailsPage />,
    },
])

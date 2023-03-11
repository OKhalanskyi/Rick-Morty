import './app.scss'
import { RouterProvider } from 'react-router-dom'
import { router } from './utils/reactRouter/router'

function App() {
    return <RouterProvider router={router} />
}

export default App

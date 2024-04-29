import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import { Friend } from './ui/pages/Friend'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/friend/:friendId',
        element: <Friend />,
    },
])

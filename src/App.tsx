import { Search } from './ui/pages/Search'
import { useEffect } from 'react'
import { getFriends } from './store/thunks/friendThunks'
import { useAppDispatch } from './hooks/storeHooks'
import './App.css'

function App() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getFriends())
    }, [dispatch])

    return <Search />
}

export default App

import './App.css'

import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import { useAppDispatch } from './hooks/storeHooks'
import { getFriends } from './store/thunks/friendThunks'
import { Favourites } from './ui/favourites/Favourites'
import { Friend } from './ui/friend/Friend'
import { DrawerNav } from './ui/nav/DrawerNav'
import { Search } from './ui/search/Search'

export const App = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getFriends())
    }, [dispatch])

    return (
        <>
            <DrawerNav />
            <Routes>
                <Route path="/">
                    <Route index element={<Search />} />
                    <Route path="/friend/:friendId" element={<Friend />} />
                    <Route path="/favourites" element={<Favourites />} />
                </Route>
            </Routes>
        </>
    )
}

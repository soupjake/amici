import './Friend.css'

import { Flex } from 'antd'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { useAppSelector } from '../../hooks/storeHooks'
import { selectFriendById } from '../../store/selectors/friendSelectors'
import { FriendImage } from '../shared/FriendImage'
import { FriendInfo } from './FriendInfo'
import { FriendMessage } from './FriendMessage'

export const Friend = () => {
    const { friendId } = useParams()
    const friend = useAppSelector(selectFriendById(friendId))

    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            if (window.innerHeight < 1150) {
                setScrolled(window.scrollY > 0)
            }
        }

        window.addEventListener('scroll', onScroll)

        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [])

    if (!friend) {
        return null
    }

    return (
        <>
            <Flex className="friend-container" justify="center">
                <Flex vertical align="center" className="friend-view">
                    <Flex
                        justify="center"
                        className={`friend-image-view ${scrolled ? 'friend-image-view-scrolled' : ''}`}>
                        <FriendImage
                            className={`friend-image ${scrolled ? 'friend-image-scrolled' : ''}`}
                            image={friend.image}
                        />
                    </Flex>
                    <Flex
                        vertical
                        className={`friend-info ${scrolled ? 'friend-info-scrolled' : ''}`}>
                        <FriendInfo friend={friend} />
                    </Flex>
                </Flex>
            </Flex>
            <FriendMessage />
        </>
    )
}

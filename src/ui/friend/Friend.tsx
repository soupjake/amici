import './Friend.css'

import { Flex } from 'antd'
import { UIEvent, useCallback, useState } from 'react'
import { useParams } from 'react-router-dom'

import { useAppSelector } from '../../hooks/storeHooks'
import { selectFriendById } from '../../store/selectors/friendSelectors'
import { FriendImage } from '../shared/FriendImage'
import { FriendBook } from './FriendBook'
import { FriendInfo } from './FriendInfo'

export const Friend = () => {
    const { friendId } = useParams()
    const friend = useAppSelector(selectFriendById(friendId))

    const [scrolled, setScrolled] = useState(false)

    const onScroll = useCallback((event: UIEvent<HTMLDivElement>) => {
        setScrolled(event.currentTarget.scrollTop > 0)
    }, [])

    if (!friend) {
        return null
    }

    return (
        <Flex className="friend-container" justify="center">
            <Flex className="friend-view" vertical justify="flex-end">
                <Flex justify="center">
                    <FriendImage
                        className={`friend-view friend-image ${scrolled ? 'friend-image-scrolled' : ''}`}
                        image={friend.image}
                    />
                </Flex>
                <Flex
                    vertical
                    className={`friend-info ${scrolled ? 'friend-info-scrolled' : ''}`}
                    onScroll={onScroll}>
                    <FriendInfo friend={friend} />
                </Flex>
                <FriendBook />
            </Flex>
        </Flex>
    )
}

import './Friend.css'

import { Flex } from 'antd'
import { UIEvent, useState } from 'react'
import { useParams } from 'react-router-dom'

import { useAppSelector } from '../../hooks/storeHooks'
import { selectFriendById } from '../../store/selectors/friendSelectors'
import { getFriendImage } from '../../utils/friendhelper'
import { FriendBook } from './FriendBook'
import { FriendInfo } from './FriendInfo'

export const Friend = () => {
    const { friendId } = useParams()
    const friend = useAppSelector(selectFriendById(friendId))

    const [scrolled, setScrolled] = useState(false)

    if (!friend) {
        return null
    }

    const onScroll = (event: UIEvent<HTMLDivElement>) => {
        setScrolled(event.currentTarget.scrollTop > 0)
    }

    return (
        <Flex className="friend-container" justify="center">
            <Flex
                className="friend-view"
                vertical
                justify="flex-end"
                style={{
                    background: `url(${getFriendImage(friend.image)})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100%',
                }}>
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

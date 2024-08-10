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

    const [scrollValue, setScrollValue] = useState(0)

    if (!friend) {
        return null
    }

    const onScroll = (event: UIEvent<HTMLDivElement>) => {
        setScrollValue(event.currentTarget.scrollTop)
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
                    className="friend-info"
                    onScroll={onScroll}
                    style={{
                        height: `calc(50% + ${scrollValue}px)`,
                    }}>
                    <FriendInfo friend={friend} />
                </Flex>
                <FriendBook />
            </Flex>
        </Flex>
    )
}

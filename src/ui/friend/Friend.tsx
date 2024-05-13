import './Friend.css'

import { MessageOutlined, OpenAIOutlined, StarFilled } from '@ant-design/icons'
import { Flex, FloatButton, Rate, Typography } from 'antd'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { useAppSelector } from '../../hooks/storeHooks'
import { selectFriendById } from '../../store/selectors/friendSelectors'
import { FriendImage } from '../shared/FriendImage'
import { MessageModal } from './MessageModal'

const { Text } = Typography

export const Friend = () => {
    const { friendId } = useParams()
    const friend = useAppSelector(selectFriendById(friendId))

    const [openMessage, setOpenMessage] = useState(false)

    if (!friend) {
        return null
    }

    const onClickMessage = () => {
        setOpenMessage(true)
    }

    return (
        <>
            <Flex className="friend-container" justify="center">
                <Flex vertical align="center" className="friend-view">
                    <Flex className="friend-image-view">
                        <FriendImage
                            className="friend-image"
                            image={friend.image}
                        />
                    </Flex>
                    <Flex vertical className="friend-info">
                        <Flex justify="space-between">
                            <Text className="friend-title">{friend.name}</Text>
                            <StarFilled className="friend-fav" />
                        </Flex>
                        <Text className="friend-text">{friend.jobtitle}</Text>
                        <Text className="friend-text">{friend.sector}</Text>
                        <Text className="friend-text">{friend.location}</Text>
                        <Rate
                            disabled
                            value={friend.rating}
                            className="friend-rating"
                            character={<OpenAIOutlined />}
                        />
                        <Text className="friend-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur.
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
            <FloatButton
                className="friend-fab"
                icon={
                    <MessageOutlined
                        className="friend-message-icon"
                        onClick={onClickMessage}
                    />
                }
            />
            <MessageModal open={openMessage} setOpen={setOpenMessage} />
        </>
    )
}

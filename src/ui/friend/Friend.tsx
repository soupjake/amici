import './Friend.css'

import { MessageOutlined, OpenAIOutlined } from '@ant-design/icons'
import { Flex, FloatButton, Modal, Rate, Typography } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { ChangeEvent, useState } from 'react'
import { useParams } from 'react-router-dom'

import carmen from '../../assets/carmen.jpg'
import cus from '../../assets/cus.jpg'
import sydney from '../../assets/sydney.jpg'
import { useAppSelector } from '../../hooks/storeHooks'
import { selectFriendById } from '../../store/selectors/friendSelectors'

const { Text } = Typography

export const Friend = () => {
    const { friendId } = useParams()
    const friend = useAppSelector(selectFriendById(friendId))

    const [showMessage, setShowMessage] = useState(false)
    const [message, setMessage] = useState('')

    if (!friend) {
        return null
    }

    const onClickMessage = () => {
        setShowMessage(true)
    }

    const onCloseMessage = () => {
        setMessage('')
        setShowMessage(false)
    }

    const onChangeMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.target.value)
    }

    const getImage = () => {
        if (friend.image === 'carmen') {
            return carmen
        }

        if (friend.image === 'cus') {
            return cus
        }

        return sydney
    }

    return (
        <Flex className="friend-container" align="start" justify="center">
            <Flex
                vertical
                align="center"
                justify="center"
                className="friend-view">
                <Flex className="friend-image-view">
                    <img className="friend-image" src={getImage()} />
                </Flex>
                <Flex vertical align="center" className="friend-info">
                    <Text className="friend-title">{friend.name}</Text>
                    <Rate
                        value={friend.rating}
                        className="friend-rating"
                        character={<OpenAIOutlined />}
                    />
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
                <Modal
                    title="Message"
                    centered
                    open={showMessage}
                    onOk={onCloseMessage}
                    onCancel={onCloseMessage}>
                    <TextArea
                        value={message}
                        onChange={onChangeMessage}
                        placeholder="Type here..."
                        autoSize={{ minRows: 3, maxRows: 3 }}
                    />
                </Modal>
            </Flex>
        </Flex>
    )
}

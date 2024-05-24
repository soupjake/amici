import './Friend.css'

import { MessageOutlined } from '@ant-design/icons'
import { Flex, FloatButton, Modal } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { ChangeEvent, useState } from 'react'
import { useParams } from 'react-router-dom'

import { useAppSelector } from '../../hooks/storeHooks'
import { selectFriendById } from '../../store/selectors/friendSelectors'
import { FriendImage } from '../shared/FriendImage'
import { FriendInfo } from './FriendInfo'

export const Friend = () => {
    const { friendId } = useParams()
    const friend = useAppSelector(selectFriendById(friendId))

    const [openMessage, setOpenMessage] = useState(false)
    const [message, setMessage] = useState('')

    if (!friend) {
        return null
    }

    const onClickMessage = () => {
        setOpenMessage(true)
    }

    const onCloseMessage = () => {
        setMessage('')
        setOpenMessage(false)
    }

    const onChangeMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.target.value)
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
                    <FriendInfo friend={friend} />
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
            <Modal
                title="Message"
                centered
                open={openMessage}
                onOk={onCloseMessage}
                onCancel={onCloseMessage}>
                <TextArea
                    value={message}
                    onChange={onChangeMessage}
                    placeholder="Type here..."
                    autoSize={{ minRows: 3, maxRows: 3 }}
                />
            </Modal>
        </>
    )
}

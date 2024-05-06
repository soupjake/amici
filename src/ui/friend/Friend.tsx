import Flex from 'antd/es/flex'
import Typography from 'antd/es/typography'
import MessageOutlined from '@ant-design/icons/MessageOutlined'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../../hooks/storeHooks'
import { selectFriendById } from '../../store/selectors/friendSelectors'
import Rate from 'antd/es/rate'
import FloatButton from 'antd/es/float-button'
import { ChangeEvent, useState } from 'react'
import Modal from 'antd/es/modal'
import TextArea from 'antd/es/input/TextArea'
import carmen from '../../assets/carmen.jpg'
import cus from '../../assets/cus.jpg'
import sydney from '../../assets/sydney.jpg'
import './Friend.css'

const { Title } = Typography

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
                    <Title className="friend-title" level={3}>
                        {friend.name}
                    </Title>
                    <Rate value={friend.rating} className="friend-rating" />
                </Flex>
                <FloatButton
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

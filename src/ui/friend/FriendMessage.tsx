import './Friend.css'

import { MessageOutlined } from '@ant-design/icons'
import { FloatButton, Modal } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { ChangeEvent, useState } from 'react'

export const FriendMessage = () => {
    const [openMessage, setOpenMessage] = useState(false)
    const [message, setMessage] = useState('')

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

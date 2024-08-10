import './Friend.css'

import { Button, Modal } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { ChangeEvent, useState } from 'react'

export const FriendBook = () => {
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
            <Button
                className="friend-book"
                shape="round"
                size="large"
                onClick={onClickMessage}>
                Book Now
            </Button>
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

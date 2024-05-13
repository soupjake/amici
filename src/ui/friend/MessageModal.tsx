import { Modal } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { ChangeEvent, useState } from 'react'

type Props = {
    open: boolean
    setOpen: (value: boolean) => void
}

export const MessageModal = (props: Props) => {
    const { open, setOpen } = props

    const [message, setMessage] = useState('')

    const onCloseMessage = () => {
        setMessage('')
        setOpen(false)
    }

    const onChangeMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.target.value)
    }

    return (
        <Modal
            title="Message"
            centered
            open={open}
            onOk={onCloseMessage}
            onCancel={onCloseMessage}>
            <TextArea
                value={message}
                onChange={onChangeMessage}
                placeholder="Type here..."
                autoSize={{ minRows: 3, maxRows: 3 }}
            />
        </Modal>
    )
}

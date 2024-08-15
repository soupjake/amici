import { OpenAIOutlined } from '@ant-design/icons'
import { Flex, Modal, Rate, Typography } from 'antd'
import { useCallback, useMemo, useState } from 'react'

const { Text } = Typography

type Props = {
    rating: number
}

export const FriendReviews = (props: Props) => {
    const { rating } = props

    const [show, setShow] = useState(false)

    const reviews = useMemo(
        () => [
            {
                rating: 4,
                review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            },
            {
                rating: 3,
                review: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
            },
            {
                rating: 5,
                review: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
            },
        ],
        [],
    )

    const onClick = useCallback(() => {
        setShow(true)
    }, [])

    const onCancel = useCallback(() => {
        setShow(false)
    }, [])

    const renderReviews = useMemo(
        () =>
            reviews.map((review, index) => (
                <Flex vertical>
                    <Rate
                        disabled
                        value={review.rating}
                        className="friend-rating friend-review"
                        character={<OpenAIOutlined />}
                    />
                    <Text>{review.review}</Text>
                    <Text className="friend-review-index">{`${index + 1} out of 42`}</Text>
                </Flex>
            )),
        [reviews],
    )

    return (
        <>
            <Flex vertical justify="center" align="center">
                <Rate
                    disabled
                    value={rating}
                    className="friend-rating friend-info-mb"
                    character={<OpenAIOutlined />}
                />
                <Text className="friend-rating-link" onClick={onClick}>
                    42 reviews
                </Text>
            </Flex>
            <Modal title="Reviews" open={show} footer={[]} onCancel={onCancel}>
                {renderReviews}
            </Modal>
        </>
    )
}

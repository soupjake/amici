import {
    FacebookOutlined,
    InstagramOutlined,
    OpenAIOutlined,
    StarFilled,
    TwitterOutlined,
} from '@ant-design/icons'
import { Flex, Rate, Typography } from 'antd'

import { Friend } from '../../types/friend'
import { FriendOnline } from './FriendOnline'

const { Text } = Typography

type Props = {
    friend: Friend
}

export const FriendInfo = (props: Props) => {
    const { friend } = props

    const onClickSocial = (url: string) => () => {
        window.open(url, '_blank', 'noopener,noreferrer')
    }

    return (
        <Flex vertical className="friend-info">
            <Flex justify="space-between">
                <Text className="friend-title">{friend.name}</Text>
                <StarFilled className="friend-icon" />
            </Flex>
            <Flex className="friend-info-mb" justify="space-between">
                <Text className="friend-text">{friend.jobtitle}</Text>
                <FacebookOutlined
                    className="friend-icon"
                    onClick={onClickSocial('https://facebook.com')}
                />
            </Flex>
            <Flex className="friend-info-mb" justify="space-between">
                <Text className="friend-text">{friend.expertise}</Text>
                <InstagramOutlined
                    className="friend-icon"
                    onClick={onClickSocial('https://instagram.com')}
                />
            </Flex>
            <Flex className="friend-info-mb" justify="space-between">
                <Text className="friend-text">{friend.location}</Text>
                <TwitterOutlined
                    className="friend-icon"
                    onClick={onClickSocial('https://twitter.com')}
                />
            </Flex>
            <Flex justify="space-between" align="center">
                <Text className="friend-text">{friend.operatingHours}</Text>
                <FriendOnline online={friend.online} />
            </Flex>
            <Rate
                disabled
                value={friend.rating}
                className="friend-rating"
                character={<OpenAIOutlined />}
            />
            <Text className="friend-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
            </Text>
        </Flex>
    )
}
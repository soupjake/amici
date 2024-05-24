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
            <Flex
                className="friend-info-mb"
                justify="space-between"
                align="center">
                <Text className="friend-text">{friend.operatingHours}</Text>
                <FriendOnline online={friend.online} />
            </Flex>
            <Text className="friend-text friend-info-mb">
                {friend.amiciFor}
            </Text>
            <Rate
                disabled
                value={friend.rating}
                className="friend-rating friend-info-mb"
                character={<OpenAIOutlined />}
            />
            <Text className="friend-text">Services</Text>
            <Text className="friend-subtext friend-info-mb">
                {friend.services}
            </Text>
            {friend.promotions.length ? (
                <>
                    <Text className="friend-text">Promotions</Text>
                    {friend.promotions.map((promotion) => (
                        <Text className="friend-subtext">{`• ${promotion}`}</Text>
                    ))}
                </>
            ) : null}
        </Flex>
    )
}

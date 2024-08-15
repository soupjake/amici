import {
    FacebookOutlined,
    InstagramOutlined,
    StarFilled,
    TwitterOutlined,
} from '@ant-design/icons'
import { Flex, Typography } from 'antd'
import { useCallback } from 'react'

import map from '../../assets/map.jpg'
import { Friend } from '../../types/friend'
import { FriendGallery } from './FriendGallery'
import { FriendOnline } from './FriendOnline'
import { FriendReviews } from './FriendReviews'

const { Text } = Typography

type Props = {
    friend: Friend
}

export const FriendInfo = (props: Props) => {
    const { friend } = props

    const onClickSocial = useCallback(
        (url: string) => () => {
            window.open(url, '_blank', 'noopener,noreferrer')
        },
        [],
    )

    return (
        <>
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
            <FriendReviews rating={friend.rating} />
            <Text className="friend-text">Services</Text>
            <Text className="friend-subtext friend-info-mb">
                {friend.services}
            </Text>
            {friend.promotions.length ? (
                <>
                    <Text className="friend-text">Promotions</Text>
                    {friend.promotions.map((promotion) => (
                        <Text
                            key={promotion}
                            className="friend-subtext">{`• ${promotion}`}</Text>
                    ))}
                </>
            ) : null}
            <FriendGallery />
            <Text className="friend-subtext">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <img className="friend-map" src={map} />
        </>
    )
}

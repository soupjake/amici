import './Search.css'

import { OpenAIOutlined } from '@ant-design/icons'
import { AutoComplete, Flex, Typography } from 'antd'
import { DefaultOptionType } from 'antd/es/select'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAppSelector } from '../../hooks/storeHooks'
import { selectFriends } from '../../store/selectors/friendSelectors'
import { mapFriendsToOptions } from '../../utils/friendhelper'

const { Text } = Typography

export const Search = () => {
    const friends = useAppSelector(selectFriends)
    const navigate = useNavigate()

    const [options, setOptions] = useState<DefaultOptionType[]>([])

    useEffect(() => {
        if (friends.length) {
            setOptions(mapFriendsToOptions(friends))
        }
    }, [friends])

    const onSearch = (value: string) => {
        setOptions(() => {
            if (value) {
                return mapFriendsToOptions(
                    friends.filter(
                        (friend) =>
                            friend.name.includes(value) ||
                            friend.jobtitle.includes(value),
                    ),
                )
            }

            return mapFriendsToOptions(friends)
        })
    }

    const onSelect = (friendId: string) => {
        navigate(`/friend/${friendId}`)
    }

    return (
        <Flex className="search-container" align="start" justify="center">
            <Flex
                vertical
                align="center"
                justify="center"
                className="search-view">
                <OpenAIOutlined className="search-user-icon" />
                <Text className="search-title">amichi</Text>
                <AutoComplete
                    className="search-autocomplete"
                    placeholder="Search..."
                    onSearch={onSearch}
                    onSelect={onSelect}
                    options={options}
                    variant="borderless"
                />
            </Flex>
        </Flex>
    )
}

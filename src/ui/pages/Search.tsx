import { AutoComplete, Flex, Typography } from 'antd'
import { UsergroupAddOutlined } from '@ant-design/icons'
import { primary, shadow } from '../../styles/theme'
import { CSSProperties, useEffect, useState } from 'react'
import { useAppSelector } from '../../hooks/storeHooks'
import { selectFriends } from '../../store/selectors/friendSelectors'
import { DefaultOptionType } from 'antd/es/select'
import { mapFriendsToOptions } from '../../utils/friendhelper'
import { useNavigate } from 'react-router-dom'

const { Title } = Typography

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
        <Flex justify="center" style={styles.container}>
            <Flex
                vertical
                align="center"
                justify="center"
                style={styles.containerItem}>
                <UsergroupAddOutlined style={styles.userIcon} />
                <Title style={styles.title}>amichi</Title>
                <AutoComplete
                    style={styles.autocomplete}
                    placeholder="Search..."
                    onSearch={onSearch}
                    onSelect={onSelect}
                    options={options}
                />
            </Flex>
        </Flex>
    )
}

const styles: Record<string, CSSProperties> = {
    autocomplete: {
        border: 'none',
        boxShadow: shadow,
        width: '100%',
    },
    container: {
        paddingTop: 'calc(50vh - 146px)',
    },
    containerItem: {
        width: '80%',
    },
    title: {
        color: primary,
    },
    userIcon: {
        color: primary,
        fontSize: 100,
    },
}

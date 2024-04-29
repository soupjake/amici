import { Flex, Input, Typography } from 'antd'
import { SearchOutlined, UsergroupAddOutlined } from '@ant-design/icons'
import { primary, shadow } from '../../styles/theme'
import { CSSProperties } from 'react'

const { Title } = Typography

export const Search = () => {
    return (
        <Flex justify="center" style={styles.container}>
            <Flex
                vertical
                align="center"
                justify="center"
                style={styles.containerItem}>
                <UsergroupAddOutlined style={styles.userIcon} />
                <Title style={styles.title}>amichi</Title>
                <Input
                    style={styles.input}
                    placeholder="Search..."
                    size="large"
                    suffix={<SearchOutlined style={styles.inputIcon} />}
                />
            </Flex>
        </Flex>
    )
}

const styles: Record<string, CSSProperties> = {
    container: {
        paddingTop: 'calc(50% - 146px)',
    },
    containerItem: {
        width: '80%',
    },
    input: {
        border: 'none',
        boxShadow: shadow,
    },
    inputIcon: {
        color: primary,
    },
    title: {
        color: primary,
    },
    userIcon: {
        color: primary,
        fontSize: 100,
    },
}

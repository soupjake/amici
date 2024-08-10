import './Favourites.css'

import { ExportOutlined } from '@ant-design/icons'
import { Col, Flex, Row, Typography } from 'antd'
import { Link } from 'react-router-dom'

import { useAppSelector } from '../../hooks/storeHooks'
import { selectFriends } from '../../store/selectors/friendSelectors'
import { getFriendImage } from '../../utils/friendhelper'

const { Text } = Typography

export const Favourites = () => {
    const favourites = useAppSelector(selectFriends)

    const renderFriends = favourites.map((friend) => (
        <Col xs={12} sm={12} md={8} lg={8} xl={8} className="favourite-column">
            <Link to={`/friend/${friend.id}`}>
                <Flex vertical align="center" className="favourite-item">
                    <img
                        className="favourite-image"
                        src={getFriendImage(friend.image)}
                    />
                    <Text className="favourite-text">{friend.name}</Text>
                    <Text className="favourite-text">{friend.jobtitle}</Text>
                    <ExportOutlined className="favourite-icon" />
                </Flex>
            </Link>
        </Col>
    ))

    return (
        <Flex className="favourites-container" vertical>
            <Row className="favourites-row">{renderFriends}</Row>
        </Flex>
    )
}

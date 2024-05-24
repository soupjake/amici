import './DrawerNav.css'

import {
    ContactsOutlined,
    MenuOutlined,
    SearchOutlined,
    StarOutlined,
} from '@ant-design/icons'
import { Drawer, Flex, Typography } from 'antd'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const { Text } = Typography

export const DrawerNav = () => {
    const [open, setOpen] = useState(false)

    const onOpen = () => {
        setOpen(true)
    }

    const onClose = () => {
        setOpen(false)
    }

    return (
        <div className="drawer-nav-container">
            <MenuOutlined className="drawer-nav-icon" onClick={onOpen} />
            <Drawer
                className="drawer-nav"
                title="amici"
                onClose={onClose}
                open={open}
                width={150}>
                <Flex vertical>
                    <Link to="/" onClick={onClose}>
                        <SearchOutlined className="drawer-nav-icon" />
                        <Text className="drawer-nav-text">Search</Text>
                    </Link>
                    <Link to="/favourites" onClick={onClose}>
                        <StarOutlined className="drawer-nav-icon" />
                        <Text className="drawer-nav-text">Favourites</Text>
                    </Link>
                    <Link to="/" onClick={onClose}>
                        <ContactsOutlined className="drawer-nav-icon" />
                        <Text className="drawer-nav-text">Admin</Text>
                    </Link>
                </Flex>
            </Drawer>
        </div>
    )
}

import './DrawerNav.css'

import {
    ContactsOutlined,
    MenuOutlined,
    SearchOutlined,
    StarOutlined,
} from '@ant-design/icons'
import { Drawer, Flex, Typography } from 'antd'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const { Text } = Typography

export const DrawerNav = () => {
    const location = useLocation()

    const [open, setOpen] = useState(false)

    const onOpen = () => {
        setOpen(true)
    }

    const onClose = () => {
        setOpen(false)
    }

    const iconClassname =
        location.pathname === '/'
            ? 'drawer-nav-dark-icon'
            : 'drawer-nav-light-icon'

    return (
        <div className="drawer-nav-container">
            <MenuOutlined className={iconClassname} onClick={onOpen} />
            <Drawer
                className="drawer-nav"
                title="amici"
                onClose={onClose}
                open={open}
                width={150}>
                <Flex vertical>
                    <Link to="/" onClick={onClose}>
                        <SearchOutlined className="drawer-nav-light-icon" />
                        <Text className="drawer-nav-text">Search</Text>
                    </Link>
                    <Link to="/" onClick={onClose}>
                        <StarOutlined className="drawer-nav-light-icon" />
                        <Text className="drawer-nav-text">Favourites</Text>
                    </Link>
                    <Link to="/" onClick={onClose}>
                        <ContactsOutlined className="drawer-nav-light-icon" />
                        <Text className="drawer-nav-text">Admin</Text>
                    </Link>
                </Flex>
            </Drawer>
        </div>
    )
}

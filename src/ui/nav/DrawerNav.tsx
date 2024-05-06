import './DrawerNav.css'

import MenuOutlined from '@ant-design/icons/MenuOutlined'
import Drawer from 'antd/es/drawer'
import Flex from 'antd/es/flex'
import Typography from 'antd/es/typography'
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
        <div className="drawer-nav">
            <MenuOutlined className={iconClassname} onClick={onOpen} />
            <Drawer title="amici" onClose={onClose} open={open} width={150}>
                <Flex vertical>
                    <Link to="/" onClick={onClose}>
                        <Text>Search</Text>
                    </Link>
                    <Link to="/" onClick={onClose}>
                        <Text>Favourites</Text>
                    </Link>
                    <Link to="/" onClick={onClose}>
                        <Text>Admin</Text>
                    </Link>
                </Flex>
            </Drawer>
        </div>
    )
}

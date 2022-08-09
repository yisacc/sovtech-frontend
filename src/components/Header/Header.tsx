import { UserOutlined } from '@ant-design/icons'
import { Avatar } from 'antd'
import React from 'react'

const Header: React.FunctionComponent = () => {
  return (
    <div className="rounded-t-3xl bg-light-gray h-14 pb-2 pr-2">
      <div className="p-2 text-right">
        <Avatar size={'large'} icon={<UserOutlined />} />
        <span className={'pl-2 dark-cyan-blue'}>User</span>
        <span className={'pl-2 dark-cyan-blue'}>Test</span>
      </div>
    </div>
  )
}

export default Header

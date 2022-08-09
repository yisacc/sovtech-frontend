import { PlusCircleOutlined } from '@ant-design/icons'
import React from 'react'
import { NavLink } from 'react-router-dom'
import './Sidebar.css'
import mainLogo from '../../assets/sovtech_logo-2.png'

const Sidebar: React.FunctionComponent = () => {
  let className =
    'side-btn p-4 border-none cursor-pointer text-base font-medium text-white bg-transparent'
  let activeClassName =
    'side-btn active relative bg-white text-fun-blue font-semibold ml-2.5 rounded-l-3xl p-4'
  return (
    <aside>
      <div className="sidebar">
        <nav>
          <NavLink to={`/`}>
            <div className="pr-8 pl-8 pb-8 pt-10">
              <img src={mainLogo} alt="solvtech logo" />
            </div>
          </NavLink>
        </nav>
        <nav className="menu-items flex flex-col mt-5 ml-1.5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeClassName : className
            }
          >
            <div className="flex flex-row justify-between">
              <div className="link-container pl-6">Categories</div>
              <div className="pr-6">
                <PlusCircleOutlined style={{ fontSize: '150%' }} />
              </div>
            </div>
          </NavLink>
          <NavLink
            to="/people"
            className={({ isActive }) =>
              isActive ? activeClassName : className
            }
          >
            <div className="flex flex-row justify-between">
              <div className="link-container pl-6">People</div>
              <div className="pr-6">
                <PlusCircleOutlined style={{ fontSize: '150%' }} />
              </div>
            </div>
          </NavLink>
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar

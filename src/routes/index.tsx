import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ROUTER_ITEMS, { IRouterItems } from './routerItems'

const functionInvoke = ({ ...rest }: IRouterItems): any => {
  return <Route {...rest} />
}

const Router: React.FC = () => {
  return (
    <Routes>
      {ROUTER_ITEMS.map((route) => {
        return functionInvoke(route)
      })}
    </Routes>
  )
}
export default Router

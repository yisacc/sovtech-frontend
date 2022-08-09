import React from 'react'
import { PATH_CATEGORIES, PATH_PEOPLE } from '../helpers/utils/urlList'
import { CategoriesPage } from '../pages/CategoriesPage/CategoriesPage'
import { PeoplePage } from '../pages/PeoplePage/PeoplePage'

export interface IRouterItems {
  element: any
  path: string
  key?: string
  exact?: boolean
}

const ROUTER_ITEMS: IRouterItems[] = [
  {
    key: '0',
    path: PATH_CATEGORIES,
    element: <CategoriesPage />,
    exact: true,
  },
  {
    key: '1',
    path: PATH_PEOPLE,
    element: <PeoplePage />,
  },
]

export default ROUTER_ITEMS

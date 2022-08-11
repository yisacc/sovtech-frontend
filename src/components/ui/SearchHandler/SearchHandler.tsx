import React, { useState } from 'react'
import { Input } from 'antd'
import { FilterFilled } from '@ant-design/icons'

const SearchHandler = ({ onSearch }: { onSearch: Function }) => {
  const [value, setValue] = useState('')

  return (
    <>
      <Input
        onChange={(event) => {
          const value = event.target.value.replace(/\s{2,}/g, ' ').trim()
          setValue(value)
        }}
        placeholder="Search"
      />
      <FilterFilled
        style={{ fontSize: '150%' }}
        className="pl-2"
        onClick={() => onSearch(value)}
      />
    </>
  )
}

export default SearchHandler

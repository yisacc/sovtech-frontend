import React from 'react'

interface Props {
  title: string
}

const PageTitle = ({ title }: Props) => {
  return (
    <div className="pl-16 pt-8 flex align-middle">
      <h1 className="text-left text-dark-blue text-xl font-bold flex-1">
        {title}
      </h1>
    </div>
  )
}
export default PageTitle

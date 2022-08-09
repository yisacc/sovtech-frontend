import React from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import Container from '../ui/Container/Container'

interface ICommonLayout {
  children: React.ReactNode
}

const CommonLayout: React.FunctionComponent<ICommonLayout> = ({
  children,
}: ICommonLayout) => {
  return (
    <div
      className="grid w-full h-full"
      style={{ gridTemplateColumns: '1fr 5fr', minHeight: '100vh' }}
    >
      <Sidebar />
      <div className="bg-white mt-6 mr-6 mb-6 rounded-3xl">
        <Header />
        <Container>{children}</Container>
      </div>
    </div>
  )
}

export default CommonLayout

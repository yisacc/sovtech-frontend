import React from 'react'

interface ContainerProps {
  children: React.ReactNode
}

const Container: React.FunctionComponent<ContainerProps> = ({
  children,
}: ContainerProps) => <div>{children}</div>

export default Container

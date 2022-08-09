import React, { useEffect, useState } from 'react'
import CommonLayout from '../../components/CommonLayout/CommonLayout'
import PageTitle from '../../components/ui/PageTitle/PageTitle'

export const PeoplePage: React.FC = () => {
  return (
    <CommonLayout>
      <PageTitle title="People" />
    </CommonLayout>
  )
}

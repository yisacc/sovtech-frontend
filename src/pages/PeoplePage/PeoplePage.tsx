import React, { useEffect, useState } from 'react'
import CommonLayout from '../../components/CommonLayout/CommonLayout'
import PageTitle from '../../components/ui/PageTitle/PageTitle'
import TableComponent from '../../components/ui/Table/Table'
import axiosInstance from '../../helpers/utils/clientApi'
import Columns from './Columns'

export const PeoplePage: React.FC = () => {
  const [people, setPeople] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  useEffect(() => {
    setLoading(true)
    axiosInstance
      .get('swapi/people')
      .then((res) => {
        setPeople(res?.data?.results)
        setLoading(false)
      })
      .catch((err) => {
        setLoading(false)
      })
  }, [])
  return (
    <CommonLayout>
      <PageTitle title="People" />
      <TableComponent
        data={people}
        loading={loading}
        meta={{
          pageSize: 10,
          current: 1,
          defaultPageSize: 10,
        }}
        setCurrent={setPage}
        columns={Columns()}
      />
    </CommonLayout>
  )
}

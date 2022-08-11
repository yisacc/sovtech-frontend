import React, { useEffect, useState } from 'react'
import CommonLayout from '../../components/CommonLayout/CommonLayout'
import JokeModal from '../../components/ui/Modal/Modal'
import PageTitle from '../../components/ui/PageTitle/PageTitle'
import SearchHandler from '../../components/ui/SearchHandler/SearchHandler'
import TableComponent from '../../components/ui/Table/Table'
import axiosInstance from '../../helpers/utils/clientApi'
import Columns from './Columns'

export const PeoplePage: React.FC = () => {
  const [people, setPeople] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [joke, setJoke] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false)
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
  const handleSearch = (value: any) => {
    setLoading(true)
    axiosInstance
      .get('/search?query=' + value)
      .then((res) => {
        if (res.data) {
          setJoke('Successfully searched for ' + value)
          setIsModalVisible(true)
        }
        setLoading(false)
      })
      .catch((err) => {
        setLoading(false)
      })
  }
  const handleModalCancel = () => {
    setIsModalVisible(false)
    setJoke('')
  }
  return (
    <CommonLayout>
      <PageTitle title="People" />
      <div className="p-2">
        <div className="flex justify-between items-center mb-5">
          <div className="flex items-center justify-center">
            <SearchHandler
              onSearch={(searchValue: any) => {
                handleSearch(searchValue)
              }}
            />
          </div>
        </div>
      </div>
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
      <JokeModal
        isModalVisible={isModalVisible}
        handleModalCancel={handleModalCancel}
        joke={joke}
      />
    </CommonLayout>
  )
}

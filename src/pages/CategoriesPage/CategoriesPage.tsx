import React, { useEffect, useState } from 'react'
import CommonLayout from '../../components/CommonLayout/CommonLayout'
import Card from '../../components/ui/Card/Card'
import JokeModal from '../../components/ui/Modal/Modal'
import PageTitle from '../../components/ui/PageTitle/PageTitle'
import axiosInstance from '../../helpers/utils/clientApi'

export const CategoriesPage: React.FC = () => {
  const [categories, setCategories] = useState([])
  const [joke, setJoke] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false)
  useEffect(() => {
    axiosInstance.get('chuck/categories').then((res) => {
      setCategories(res.data)
    })
  }, [])
  const handleClick = (category: string) => {
    axiosInstance
      .get(`jokes/random`, { params: { category: category } })
      .then((res) => {
        setJoke(res.data.value)
        setIsModalVisible(true)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const handleModalCancel = () => {
    setIsModalVisible(false)
    setJoke('')
  }
  return (
    <CommonLayout>
      <PageTitle title="Categories" />
      <div className="container mx-auto p-16 grid grid-rows-4 grid-flow-col gap-4">
        {categories.length > 0 &&
          categories.map((category, index) => (
            <Card key={index} name={category} handleClick={handleClick} />
          ))}
      </div>
      <JokeModal
        isModalVisible={isModalVisible}
        handleModalCancel={handleModalCancel}
        joke={joke}
      />
      ,
    </CommonLayout>
  )
}

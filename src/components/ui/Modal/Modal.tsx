import { Modal } from 'antd'
import React from 'react'

const JokeModal = ({
  isModalVisible,
  handleModalCancel,
  joke,
}: {
  isModalVisible: boolean
  handleModalCancel: any
  joke: string
}) => {
  return (
    <Modal
      visible={isModalVisible}
      closable={true}
      centered={true}
      maskClosable={false}
      destroyOnClose={true}
      onCancel={handleModalCancel}
      footer={null}
    >
      <div className={'flex justify-center'}>
        <div className={'mb-3 font-medium'}>{joke}</div>
      </div>
    </Modal>
  )
}

export default JokeModal

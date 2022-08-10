import { Table } from 'antd'

const TableComponent = ({
  data,
  loading,
  meta,
  setCurrent,
  columns,
}: {
  data: any
  loading: boolean
  meta: any
  setCurrent: any
  columns: any
}) => {
  return (
    <div className="block p-6">
      <Table
        columns={columns}
        dataSource={data}
        rowKey={'_id'}
        loading={loading}
        pagination={{
          pageSize: meta?.take,
          current: meta?.page,
          defaultPageSize: meta?.pageCount,
          onChange(newPage) {
            setCurrent(newPage)
          },
        }}
      />
    </div>
  )
}
export default TableComponent

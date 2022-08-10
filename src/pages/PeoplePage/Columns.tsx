import { Select, Typography } from 'antd'

const Columns = () => {
  return [
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: (a: any, b: any) => a.name.localeCompare(b.name),
      render: (record: any) => {
        return <span>{`${record}`}</span>
      },
    },
    {
      title: 'Height',
      dataIndex: 'height',
      sorter: (a: any, b: any) => a.height.localeCompare(b.height),
      render: (record: any) => {
        return <span>{`${record}`}</span>
      },
    },
    {
      title: 'Mass',
      dataIndex: 'mass',
      sorter: (a: any, b: any) => a.mass.localeCompare(b.mass),
      render: (record: any) => {
        return <span>{`${record}`}</span>
      },
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      sorter: (a: any, b: any) => a.gender.localeCompare(b.gender),
      render: (record: any) => {
        return <span>{`${record}`}</span>
      },
    },
    {
      title: 'Hair Color',
      dataIndex: 'hairColor',
      render: (record: any) => {
        return <span>{`${record}`}</span>
      },
    },
    {
      title: 'Skin Color',
      dataIndex: 'skinColor',
      render: (record: any) => {
        return <span>{`${record}`}</span>
      },
    },
    {
      title: 'Eye Color',
      dataIndex: 'eyeColor',
      render: (record: any) => {
        return <span>{`${record}`}</span>
      },
    },
    {
      title: 'Birth Year',
      dataIndex: 'birthYear',
      render: (record: any) => {
        return <span>{`${record}`}</span>
      },
    },
  ]
}

export default Columns

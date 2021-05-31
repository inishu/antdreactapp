import React from 'react' 
import {
    Typography,
    Table
} from 'antd'


const {Title} = Typography

const Acdemicdetail = () => {
    const dataSource = [
        {
          key: '1',
          degree: 'HIGH SCHOOL',
          college: 'KENDRIYA VIDHYALAYA, CBSE' ,
          year: '2014',
          marks :'8.6/10'
        },
        {
          key: '2',
          degree: 'HIGHER SECONDARY SCHOOL',
          college: 'KENDRIYA VIDHYALAYA, CBSE',
          year: '2016',
          marks: '85.6/100'
        },
        {
            key: '3',
            degree: 'B.Tech.',
            college: 'NATIONAL INSTITUTE of TECHNOLOGY, PATNA',
            year: '2021',
            marks: '8.05/10'
          },
      ];
      
      const columns = [
        {
          title: 'Degree',
          dataIndex: 'degree',
          key: 'degre',
        },
        {
          title: 'College',
          dataIndex: 'college',
          key: 'college',
        },
        {
          title: 'Year',
          dataIndex: 'year',
          key: 'year',
        },
        {
            title: 'Marks',
            dataIndex: 'marks',
            key: 'marks'
        }
      ];

    return (
        <div >
            <Title level ={3} underline>Academic Details</Title>
            <Table dataSource={dataSource} columns={columns} />;
        </div>
    )

}

export default Acdemicdetail;

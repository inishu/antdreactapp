import React from 'react' 
import {
    Typography,
    List
} from 'antd'


const {Title} = Typography
const data =[
    "AIR 10, 658 in JEE Advanced 2017",
    "AIR 26, 746 in JEE Mains 2017",
    "AIR 775 in Gate 2021",
    "Indian Railways Higher Education Scholarship 3 years in a row",
]
const Achievements = () => {

    return (
        <>
        <Title level={3} underline style={{padding:"10px"}} >Academic Achievements & Scholorships</Title>
        <List
          
            bordered
            dataSource={data}
            renderItem={item => ( <List.Item> {item} </List.Item>)}
        />
        </>
    )

}

export default Achievements;
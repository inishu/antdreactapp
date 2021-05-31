import React from 'react';
import {
    Typography,
    List,
    Divider
} from 'antd'


const {Title} = Typography;
const data = [
    " Power generation and transmission in LHB and ICF, AC, non-AC, pantry car types of coach. Worked on diesel engine 3 phase power generation, step down transformer, relay and",
    "automation control, AC, lighting and fan system, voltage regulation and battery charging.",
  ];
const data1 = [
    "Develop two react app and deploy it on github.io host.",
    "Have a good knowledge of python3, C, C++ programming languages.",
    "Have a good knowledge of proteus software and also design two project in it.",
    "Competative programming at codechef, present rating 2 star.",
    
  ];
const Experience = () => {

    return (
        <>
        <Title level={3} underline>Experience</Title>
        <Title level={5} style={{padding:"5px"}}>Internship at Indian Railways</Title>
            
                <List
                    size="small"
                    bordered
                    dataSource={data}
                    renderItem={item => (
                <List.Item>
                    {item}
                </List.Item>
                )}
                />
        <Title level={5} style={{padding:"15px"}}>Programming</Title>
            
                <List
                    size="small"
                    bordered
                    dataSource={data1}
                    renderItem={item => (
                <List.Item>
                    {item}
                </List.Item>
                )}
                />

        </>
    )

}

export default Experience;

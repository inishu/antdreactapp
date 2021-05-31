import React from 'react' 
import {
    Typography,
} from 'antd'


const {Title} = Typography

const Introcuction = () => {

    return (
        <>
        <Title level={3} underline>Introduction</Title>
        <br/><br/>
        <p style={{fontStyle:'italic', fontSize:'15px'}}> " Hello everyone, I am Nishant srivastava. Currently,
        I am 4th year student of electrical branch at National Institute of Technology, Patna. My branch is 
        electrical and I have good knowledge on it. I have good command in subjects like  Engineering maths, 
        power electronics, Electrical machine, control system, network analysis, etc. In free time, I usually 
        learn programming. I am interested react web developer, programmer(SDE), IOT. I also participate in 
        competetive programming language competiton. At present I am a 2 star at codechef. I had also appeared in 
        the gate 2021 exam and secured rank AIR 775."</p>
        </>
    )

}

export default Introcuction;

import React from 'react' 
import {
    Typography,
  
} from 'antd'


const {Title} = Typography;

const Skill = () => {

    return (
        <>
        <Title level={3} underline>Skill Set</Title><br/>
        <ul style={{columnCount:3, display:'inline-block', style:"list-style-type:disc",fontSize:"20px", columnGap:"200px" }}>
            <li>Circuitry Design</li>
            <li>Control Systems</li>
            <li>Power Systems</li>
            <li>Power Electronics</li>
            <li>Electrical Machines</li>
            <li>PLC & SCADA</li>
            <li>Practical Skill</li>
            <li>Android</li>
            <li>Arduino Microcontrollers</li>
            <li>Python, C & C++</li>
            <li>Algorithms</li>
            <li>Problem solving ability</li>
            <li>Proetus</li>
            <li>GitHub & git</li>
            <li>Linux CLI</li>
            <li>Microsoft office</li>
            <li>Matlab</li>
        </ul>
            
        </>   
    )

}

export default Skill;

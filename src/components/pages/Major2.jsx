import React from 'react' 
import {
    Typography,
} from 'antd'


const {Title} = Typography

const Major2 = () => {

    return (
        <>
        <Title level={3} underline>Major II</Title><br/>
        <Title level={5}>Smart irrigation system</Title><br/>
        <p style={{fontStyle:"italic"}}>"In this project our objective to minimise the use of water used in agriculture 
        without effcting the quality of crops. As we know that ground water level is decreasing day by day and also our 
        population/industry/cities growing. So, demand of water is increasing everywhere. As we also know that 40% of 
        water is used in agriculture. So we need to reallocate this water consumption of agriculture land to others.
        Also we don't want to compromise with the quality of crop. In this project we develop a system that give solution 
        to this problem. In this project we use soil moisture sensor to first determine the soil moisture content of the 
        soil. We use analog pin of nodemcu to take this output as a input to microcontroller. Using nodemcu we also able 
        to develop web server that control the pump switch through digital pin and relay module. This is also used to display 
        the live soil moisture content on web browser. So using this system we are able to see the soil water content before 
        irrigation and based on received data we irrigate land and also stop pump well switch at proper time."</p>

        </>   
    )

}

export default Major2;

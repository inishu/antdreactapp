import React from 'react' 
import {
    Typography,
} from 'antd'


const {Title} = Typography

const Major1 = () => {

    return (
        <>
        <Title level={3} underline style={{padding:"10px"}}>Major I</Title>
        <Title level={5}>Home Automation</Title><br/>
        <p style={{fontStyle:"italic"}}>"In this porject our objective is to control electrical home applicance 
        through internet and also monitor it. In this project we use arduino as a microcontroller and nodemcu as
        a IOT device. We use adafruit as a cloud server. It gives us free web hosting. We created our dashboard 
        adafruit. Its mainly contains switch to on/off our homne applicance. Using adafruit key and cloud programming 
        ,we connect it to nodemcu via net. When we switch on/off on our adafruit it send data to nodemcu. Then we 
        establish serial communication between nodemcu and arduino to send this data. Arduino has five analog pin.
         using this analog pin and LM35 temperature sensor and LDR sensor we are able to find the value temperature 
        and light intensity of home and publish this data to nodemcu via serial communication to adafruit.io dashboard 
        to monitor home. We use digital pin of arduino and relay to turn on/off electrical applicance."
        </p>
        </>   
    )

}

export default Major1;

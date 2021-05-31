import React from 'react' 
import {
    Typography,
} from 'antd'
import {
    FacebookOutlined,
    InstagramOutlined,
    TwitterCircleFilled,
    MailOutlined,
    LinkedinOutlined
  } from '@ant-design/icons';


const {Title} = Typography

const Contacts = () => {

    return (
        <>
        <Title level={3} underline>Contacts</Title>
        <br/><br/><br/>
        <h2 className='icons-lists'>< FacebookOutlined />&nbsp;&nbsp;<a href="https://www.facebook.com/onlinenishantsrivastava/">Facebook</a></h2>
        <h2 className='icons-lists'>< InstagramOutlined />&nbsp;&nbsp;<a href="https://instagram.com/_inishantsrivastava">Instagram</a></h2>
        <h2 className='icons-lists'>< TwitterCircleFilled />&nbsp;&nbsp;<a href="https://twitter.com/_inishant">Twitter</a></h2>
        <h2 className='icons-lists'>< MailOutlined />&nbsp;&nbsp;<a href="mailto:codeofnishant@gmail.com">Gamil</a></h2>
        <h2 className='icons-lists'>< LinkedinOutlined/>&nbsp;&nbsp;<a href="https://www.linkedin.com/in/inishantsrivastava/">Linkedin</a></h2>
        </>   
    )

}

export default Contacts;

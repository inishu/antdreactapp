import React from 'react' 
import {
    Typography,
    List
} from 'antd'
import { 
    PaperClipOutlined
} from '@ant-design/icons';

const {Title} = Typography

const File = () => {

    return (
        <>
        <Title level={3} underline>File</Title>
        <br/><br/>
        <Title level={5}>You can download my cv form the link given bellow.</Title>
        
        <h2 className='icons-lists'><PaperClipOutlined /><a href="https://drive.google.com/file/d/10eqasj_H5jRMYPoM3VP_2tLvauNn4n_M/view?usp=sharing">
            Download me</a></h2>
        </>   
    )

}

export default File;

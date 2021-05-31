import React from 'react';
import './App.css'
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  FileOutlined,
  SmileOutlined,
  FormOutlined,
  RiseOutlined,
  DollarOutlined,
  ExperimentOutlined,
  PhoneOutlined
} from '@ant-design/icons';
import Navigation from './components/Navigation/Navigation';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class App extends React.Component {
  constructor(){
    super()
    
    this.state = {value : 1}
    this.handleClick = this.handleClick.bind(this);
  }
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  handleClick(key){
    this.setState({value:key});
  }

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className ="logo">
            <h1>Nishant Srivatava</h1>
            <br></br>
          </div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<SmileOutlined />} onClick={()=>this.handleClick(1)}>
              Intro
            </Menu.Item>
            <Menu.Item key="2" icon={<FormOutlined />} onClick={()=>this.handleClick(2) }>
              ACADEMIC DETAILS
            </Menu.Item>
            <Menu.Item key="3" icon={<RiseOutlined />}onClick={()=>this.handleClick(3)}>
              PROFESSIONAL EXPERIENCE
            </Menu.Item>
            <Menu.Item key="4" icon={<DesktopOutlined />} onClick={()=>this.handleClick(4)}>
              SKILL SET
            </Menu.Item>
            <Menu.Item key="5" icon={<DollarOutlined />} onClick={()=>this.handleClick(5)}>
              ACADEMIC ACHIEVEMENTS & SCHOLARSHIPS
            </Menu.Item>
            <SubMenu key="sub1" icon={<ExperimentOutlined />} title="Projects">
              <Menu.Item key="6" onClick={()=>this.handleClick(6)} >MAJOR I</Menu.Item>
              <Menu.Item key="7" onClick={()=>this.handleClick(7)} >MAJOR II</Menu.Item>
            </SubMenu>
            <Menu.Item key="8" icon={<FileOutlined />} onClick={()=>this.handleClick(8)} >
              File
            </Menu.Item>
            <Menu.Item key="9" icon={<PhoneOutlined />} onClick={()=>this.handleClick(9)}>
              Contact
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0, }} > 
          <img src='NISHANT.png'style={{ width : "125px", height : "125px", borderRadius:"125px",
          border: "5px solid brown"}}/></Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}/>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <Navigation value= {this.state.value}/>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2021 Created by Nishant</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;

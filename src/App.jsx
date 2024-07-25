import { useState } from 'react'
import { Button, Layout, theme } from 'antd'
import LocaleProvider from 'antd/es/locale'
import Logo from './components/Logo'
import MenuList from './components/MenuList'
import Menu  from './components/Menu'
import useMessage from 'antd/es/message/useMessage'
import ToggleThemeButton from './components/ToggleThemeButton'
import { IoMenuOutline } from 'react-icons/io5'
import {MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons'

const {Header,Sider} = Layout
function App() {
  const [darkTheme, setDarkTheme] = useState(true)
  const [collapsed,setcollapsed] = useState(false);
  const toggleTheme = () =>{
    setDarkTheme(!darkTheme)
  }

  const {
    token: {colorBgContainer},
  } = theme.useToken()

  return (
    
      <Layout>
        <Sider 
        collapsed={collapsed}
        collapsible
        trigger={null}
        theme={darkTheme ? 'dark' : 'light'} className="sidebar">
          <h1>GF Solutions </h1>
          <Logo />
          <Menu darkTheme={darkTheme} />
          <ToggleThemeButton darkTheme={darkTheme} 
          toggleTheme={toggleTheme} />
        </Sider>
        <Layout>
        <Header style={{padding: 0, background: colorBgContainer }}>
          <Button
          className='toggle' 
          type='text' 
          onClick={() => setcollapsed(!collapsed)}
          icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/> }/>
        </Header>
      </Layout>
      </Layout>
     
    
  )
}

export default App

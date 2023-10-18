import { Layout, Menu, Row } from 'antd'
//import { Header} from 'antd/es/layout/layout'
import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTypeSelector } from '../hooks/useTypeSelector'


const Navbar: FC = () => {

  const naviagete = useNavigate()
  const { isAuth } = useTypeSelector(state => state.auth)


  return (
    <Layout.Header>
        <Row justify="end">

          {isAuth ?

          <> 
            <div style={{color: 'white'}}>Daniil</div>
            <Menu theme='dark' selectable={false} mode='horizontal'>
              <Menu.Item 
                onClick={() =>console.log('Выйти') } 
                key={1}>
                Выйти
              </Menu.Item>
            </Menu>
          </> 

          :

          <Menu theme='dark' selectable={false}>
              <Menu.Item 
              onClick={() =>naviagete('/login') } 
              key={1}>
                Логин
              </Menu.Item>
          </Menu> 
          }

        </Row>
    </Layout.Header>
  )
}


export default Navbar
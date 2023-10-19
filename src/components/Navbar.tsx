import { Layout, Menu, Row } from 'antd'
import { FC, Dispatch } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTypeSelector } from '../hooks/useTypeSelector'
import { useDispatch } from 'react-redux'
import { AuthActionCreators } from '../store/reducers/auth/action-creators'


const Navbar: FC = () => {

  const naviagete = useNavigate()
  const { isAuth } = useTypeSelector(state => state.auth)
  const dispatch: Dispatch<any> = useDispatch()


  return (
    <Layout.Header>
        <Row justify="end">

          {isAuth ?

          <> 
            <div style={{color: 'white'}}>Daniil</div>
            <Menu theme='dark' selectable={false} mode='horizontal'>
              <Menu.Item 
                onClick={() => dispatch(AuthActionCreators.logout()) } 
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
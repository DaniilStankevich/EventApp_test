import { Layout, Menu, Row } from "antd"
import { FC, Dispatch } from "react"
import { useNavigate } from "react-router-dom"
import { useTypeSelector } from "../hooks/useTypeSelector"
import { useDispatch } from "react-redux"
import { AuthActionCreators } from "../store/reducers/auth/action-creators"
import { useActions } from "../hooks/useActions"

const Navbar: FC = () => {
  const naviagete = useNavigate()
  const { isAuth, user } = useTypeSelector((state) => state.auth)
  const dispatch: Dispatch<any> = useDispatch()

  const { logout } = useActions()

  return (
    <Layout.Header>
      <Row justify="end">
        {isAuth ? (
          <>
            <div style={{ color: "white" }}>{user.username}</div>
            <Menu
              theme="dark"
              selectable={false}
              mode="horizontal"
            >
              <Menu.Item
                onClick={() => dispatch(AuthActionCreators.logout())}
                key={1}
              >
                Выйти
              </Menu.Item>
            </Menu>
          </>
        ) : (
          <Menu
            theme="dark"
            selectable={false}
          >
            <Menu.Item
              onClick={logout}
              key={1}
            >
              Логин
            </Menu.Item>
          </Menu>
        )}
      </Row>
    </Layout.Header>
  )
}

export default Navbar

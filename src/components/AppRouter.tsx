import { Navigate, Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../router";
import { useTypeSelector } from "../hooks/useTypeSelector";
import Login from "../pages/Login";
import Events from "../pages/Events";

const AppRouter: React.FC = () => {
    const { isAuth } = useTypeSelector(state => state.auth)


    return isAuth === true ? (

      <Routes>
        {privateRoutes.map((route) => (
          <Route path={route.path} element={<Events />} key={route.path} />
        ))}

        <Route
          path="*"
          element={<Navigate to='/' replace />}
        />
      </Routes>
    ) 
    :    
    (
      <Routes>
        {publicRoutes.map((route) => (
          <Route path={route.path} element={<Login />} key={route.path} />
        ))}

        <Route
          path="/"
          element={<Navigate to='/login' replace />}
        />
      </Routes>
    )

}

  export default AppRouter
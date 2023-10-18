import React, { FC } from 'react'
import Router from './router'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Events from './pages/Events'
import Notfound from './pages/Notfound'
import Navbar from './components/Navbar'
import { Layout } from 'antd'
import { useSelector } from 'react-redux'
import { useTypeSelector } from './hooks/useTypeSelector'

const App:FC = () => {


  const auth = false; // временно

  const { isAuth } = useTypeSelector(state => state.auth)



  return (
     
    <Layout> 

      <Navbar />
      
      <Layout.Content> 
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route
            path="/protected"
            element={isAuth ? <Events /> : <Navigate to="/login" />}
          />
 
          <Route
          path="*"
          index
          element={isAuth? <Events /> : <Navigate to="/login" />}
           />

        </Routes>  
      </Layout.Content>  

    </Layout>  
  )
}



export default App

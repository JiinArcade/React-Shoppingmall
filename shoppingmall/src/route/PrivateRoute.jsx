import React from 'react'
import { Navigate } from 'react-router-dom'
import ProductDetail from '../page/ProductDetail'

// useNavigate (React Hook중에 하나)
// React Hook 규칙
// 조건문, 반복문에서 useNavigate를 사용할 수 없다.
// 링크로 이동할 경우 앞에 use를 빼고 뒤에 Navigate 만 사용 ->
// import { Navigate } from 'react-router-dom'


// 조건부 렌더링
// userLogin이 true라면 ProductDetail를 보여주고
// userLogin이 false라면 Login 페이지로 이동~

const PrivateRoute = ({ userLogin }) => {
  return userLogin === true ? <ProductDetail></ProductDetail> : <Navigate to='/login' />
}

export default PrivateRoute
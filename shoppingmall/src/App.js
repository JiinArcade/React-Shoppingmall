// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProductDetail from './page/ProductDetail';
import Login from './page/Login';
import Nav from './component/Nav'



// 1. 전체상품(ProductAll), 로그인, 상세페이지(ProductDetail)
// 2. 로그인 전에 상세페이지 접속시, 로그인 페이지를 먼저 보여준다.
// 3. 로그인이 이미 되어있다면, 상세페이지 보여준다.
// 4. 로그인 하면 로그아웃 버튼이 보이고, 로그아웃 하면 로그인 버튼이 보인다.

function App() {
  // true면 로그인이 된 상태, false면 로그인이 안 된 상태
  // 사이트 접속 했을 때 처음 로그인된 상태면 안되니까 먼저 기본값으로 false 주고
  // 로그인버튼을 클릭 했을 때 상태 값을 true로 바꿔줌

  // 로그인 상태를 변경하려면 state변경 함수인 setUserLogin를 이용
  // Login component에서 이 함수를 이용하려면 어떻게 해야할까? => Props
  // 함수도 Props 전송이 가능하다
  const [userLogin, setUserLogin] = useState(false)

  useEffect(() => {
    console.log("Login", userLogin)
  }, [userLogin])

  return (
    <div className="App">
      <Routes>
        {/* 첫화면 */}
        <Route path='/' element={<Nav></Nav>}></Route>
        {/* 로그인했을 떄 보여줄 */}
        <Route path='/login' element={<Login setUserLogin={setUserLogin} ></Login>}></Route>
        {/* 상품을 눌렀을때 보여줄 것 일일히 path 걸어줄 수 없으니 id값으로 넣어줌 */}
        <Route path='/product/:id' element={<ProductDetail></ProductDetail>}></Route>
      </Routes>
    </div>
  );
}

export default App;

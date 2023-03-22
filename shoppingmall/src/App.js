import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ProductAll from './page/ProductAll';
import ProductDetail from './page/ProductDetail';
import Login from './page/Login';
import Nav from './component/Nav';

// 1. 전체상품(ProductAll), 로그인, 상세페이지(ProductDetail)
// 2. 로그인 전에 상세페이지 접속시, 로그인 페이지를 먼저 보여준다.
// 3. 로그인이 이미 되어있다면, 상세페이지 보여준다.
// 4. 로그인 하면 로그아웃 버튼이 보이고, 로그아웃 하면 로그인 버튼이 보인다.

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Routes>
        {/* 첫화면 */}
        <Route path='/' element={<ProductAll></ProductAll>}></Route>
        {/* 로그인했을 떄 보여줄 */}
        <Route path='/login' element={<Login></Login>}></Route>
        {/* 상품을 눌렀을때 보여줄 것 일일히 path 걸어줄 수 없으니 id값으로 넣어줌 */}
        <Route path='/product/:id' element={<ProductDetail></ProductDetail>}></Route>
      </Routes>
    </div>
  );
}

export default App;

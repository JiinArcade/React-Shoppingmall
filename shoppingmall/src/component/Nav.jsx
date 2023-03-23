import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

const Nav = () => {
  const loginList = ['매장 찾기', '고객센터', '가입하기', '로그인'];
  const menuList = ['New Releases', 'Men', 'Women', 'Kids', 'Sale', 'SNKRS', '나이키 앱']

  return (
    <div>
      <div className='login'>
        <div className='login-img'>
          <img width={25} src="/images/jordan.png" alt="" />
          <img width={30} src="/images/converse.png" alt="" />
        </div>
        <ul className='login-list'>
          {
            loginList.map((item, i) => {
              return <li className='login-item' key={i}>{item}</li>
            })
          }
        </ul>
      </div>

      <div className='nav'>
        <img width={80} src="/images/nikelogo.png" alt="" />
        <ul className='gnb-list'>
          {
            menuList.map((menu, i) => {
              return <li className='gnb-item' key={i}>{menu}</li>
            })
          }
        </ul>

        <div className='icon-list'>
          <div className='search-box'>
            <FontAwesomeIcon className='ic-search' icon={faMagnifyingGlass} />
            <input type="text" placeholder='검색' />
          </div>
          <div className='icon-1'>
            <FontAwesomeIcon className='icon' icon={faHeart} />
          </div>
          <div className='icon-2'>
            <FontAwesomeIcon className='icon' icon={faBagShopping} />
          </div>
        </div>
      </div>

      <div className='banner-container'>
        <ul className='banner-list'>
          <li className='banner-item'>
            <span>카카오페이, 페이코 프로모션 안내</span>
            <div className='banner-link'>
              <p>
                <a href="/">카카오페이 자세히 보기</a>
                <a href="/">페이코 자세히 보기</a>
              </p>
            </div>
          </li>
          <li className='banner-item'>
            <span>반품 및 환불 지연 안내</span>
            <div className='banner-link'>
              <p>
                <a href="/">자세히 보기</a>
              </p>
            </div>
          </li>
        </ul>
      </div>

      <div className="speacial-container">
        <div className='text'>
          <h1>너만을 위한 특별한 나이키</h1>
          <p>
            원하는 것을 누구보다 빠르게, 새로운 영감으로 매일을 새롭게, 상상만 했던 경험을 현실로.<br></br>
            여러분의 매일을 나이키 앱에서 바꿔 보세요.
          </p>
        </div>
        <div className='App-box'>
          <img src='/images/nike-just-do-it.jpg' alt="" />
          <h3>앱 다운로드</h3>
          <button><a href="/">자세히 보기</a></button>
        </div>
      </div>

      <div className="running-container">
        <div className='text'>
          <p>런크루 EES 추천하는</p>
          <h1>러닝 스타일링</h1>
          <p>
            함께 달리며 새로운 러닝 문화를 만들어가는 런크루 EES.<br></br>
            나이키 앱에서 EES가 추천하는 러닝 스타일링을 만나 보세요.
          </p>
        </div>
        <div className='App-box'>
          <img src='/images/nike-just-do-it.jpg' alt="" />
          <h3>자세히 보기</h3>
          <button><a href="/">구매하기</a></button>
        </div>
      </div>
    </div>
  )
}


export default Nav
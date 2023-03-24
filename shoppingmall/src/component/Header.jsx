import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const loginList = ['매장 찾기', '고객센터', '가입하기', '로그인'];
  const menuList = ['New Releases', 'Men', 'Women', 'Kids', 'Sale', 'SNKRS', '나이키 앱']

  // loginList 배열의 마지막 요소인 '로그인'에게 onclick을 부여하려면?

  const navigate = useNavigate()
  const goToLogin = () => {
    navigate('/login')
  }

  // onKeyPress 유저가 키를 눌렀을 때 발생한다.
  // alt, ctrl, shift, ESC 키에는 onKeyPress가 먹지 않는다.
  const search = () => {
    console.log('lalala')
  }

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
              if (i === loginList.length - 1) {
                return <li className='login-item' key={i} onClick={goToLogin}>{item}</li>
              } else {
                return <li className='login-item' key={i}>{item}</li>
              }
            })
          }
        </ul>
      </div>

      <div className='nav'>
        <div className="nikelogo">
          <img width={80} src="/images/nikelogo.png" alt="" />
        </div>
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
            <input type="text" placeholder='검색' onKeyPress={search}/>
          </div>
          <div className='icon-1'>
            <FontAwesomeIcon className='icon' icon={faHeart} />
          </div>
          <div className='icon-2'>
            <FontAwesomeIcon className='icon' icon={faBagShopping} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
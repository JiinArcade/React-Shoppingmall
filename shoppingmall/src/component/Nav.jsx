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
        <img width={70} src="/images/nikelogo.png" alt="" />
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
    </div>
  )
}


export default Nav
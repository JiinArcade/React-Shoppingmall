import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

const Nav = () => {
  const loginList = ['매장찾기', '고객센터', '가입하기', '로그인']
  const menuList = ['New Releases', 'Men', 'Woman', 'Kids', 'Sale', 'SNKRS', '나이키 앱']
  return (
    <div>
      <div className='login'>
        <div className='sub-logo'>
          <img width={25} src="/images/jordan.png" alt="" />
          <img width={30} src="/images/converse.png" alt="" />
        </div>
        <ul>
          {
            loginList.map((item, i) => {
              return <li className='login-item' key={i}>{item}</li>
            })
          }
        </ul>
      </div>
      <div className='nav'>
        <img width={70} src={'/images/nikelogo.png'} alt="nike_logo" />
        <ul className='gnb-list'>
          {
            menuList.map((menu, i) => {
              return <li className='gnb-tem' key={i}>{menu}</li>
            })
          }
        </ul>
        <div className='icon-list'>
          <div className='search-box'>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input type="text" placeholder='검색' />
          </div>
          <div>
            <FontAwesomeIcon icon={faHeart} />
            <FontAwesomeIcon icon={faBagShopping} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav
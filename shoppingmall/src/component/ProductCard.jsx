import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ menu }) => {
  const navigate = useNavigate()

  const showDetail = () => {
    navigate(`/product/${menu.id}`)
  }

  return (
    <div className='product' onClick={showDetail}>
      <img src={menu?.img}></img>
      <div className='product-list'>
        <span className='content'>{menu.choice == true ? "베스트셀러" : ""}</span>
        <span className='new'>{menu.new == true ? "신상품" : ""}</span>
        <span className='formember'>{menu.formember == true ? "For Member" : ""}</span>
      </div>
      <div className='title'>
        <p>{menu.title}</p>
        <p>{menu.gender}</p>
      </div>
      <div className='price'>{menu.price}</div>
    </div>
  )
}

export default ProductCard
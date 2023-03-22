import React from 'react'

const ProductCard = () => {
  return (
    <div className='product'>
      <img width={450} src='https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/653a8a8a-f462-4a5c-8bd0-a493d06bd0e8/%EB%82%98%EC%9D%B4%ED%82%A4-sb-%EB%8D%A9%ED%81%AC-%EB%A1%9C%EC%9A%B0-x-fly-streetwear-gardenia-dq5130-400-%EC%B6%9C%EC%8B%9C%EC%9D%BC.jpg'></img>
      <div className='product-list'>
        <span className='content'>베스트셀러</span>
        <span className='new'>신상품</span>
      </div>
      <div className='title'>
        <p>나이키 SB 덩크 로우 x Fly Streetwear Gardenia</p>
        <p>남성 신발</p>
      </div>
      <div className='price'>159,000 원</div>
    </div>
  )
}

export default ProductCard
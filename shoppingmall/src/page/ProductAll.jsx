import React from 'react'
import { useEffect } from 'react'

const ProductAll = () => {

  const getProducts = async () => {
    // 모든 데이터를 가진 주소를 불어와 줘야 함
    let url = "http://localhost:5000/products"
    // 패치함수를 받아서 url fetch 해줘라 
    let response = await fetch(url)
    // response에서 json을 뽑아와라
    let data = await response.json()
    console.log(data)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div>

    </div>
  )
}

export default ProductAll
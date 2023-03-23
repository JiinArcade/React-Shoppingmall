import React from 'react'
import { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard'
import { Container, Row, Col } from 'react-bootstrap'

const ProductAll = () => {

  const [productsList, setProductList] = useState([])

  // async await http 요청
  // 비동기 처리하는 가장 최근에 나온 문법 (후자의 불편함을 보안해서 나옴)
  // 비동기 처리란? 특정 코드의 실행이 완료될 때 까지 기다리지 않고 다음코드를 먼저 실행한다.
  // 기존에는 비동기 처리를 해주는게 콜백함수였음
  // 콜백함수로 사용할 경우, 콜백함수 안에 또 콜백함수가 들어가는 형태로,
  // 함수가 계속 중첩되면서 가독성도 떨어지고 로직 변경도 힘들다.  => 콜백지옥 이라고 불림

  // 1. 함수 앞에 async 예약어를 써준다.
  // 2. 함수 내부 로직 중 HTTP 통신을 하는 비동기 처리 코드 앞에 await
  // 3. await 함수 내에서 사용하려면, 반드시 함수 앞에 async 키워드가 있어야 한다.

  // await : 함수를 호출하고 본문이 실행될 때 잠시 중단 됐다가 프라미스가 처리되면 실행이 재개된다.
  // 프라미스 : 자바스크립트 비동기 처리에 사용되는 객체
  const getProducts = async () => {
    // 모든 데이터를 가진 주소를 불어와 줘야 함
    let url = "http://localhost:5000/products"
    // 패치함수를 받아서 url fetch 해줘라 
    let response = await fetch(url)
    // response에서 json을 뽑아와라
    let data = await response.json()
    console.log(data)

    // State 변경 함수에 data 값 할당
    setProductList(data)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <Container>
      <Row>
        {
          productsList.map((menu, i) => {
            return (
              <Col lg={4}>
                <ProductCard menu={menu}></ProductCard>
              </Col>
            )
          })
        }
      </Row>
    </Container>
  )
}

export default ProductAll
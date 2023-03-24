import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../component/Header'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const ProductDetail = () => {
  let { id } = useParams()
  const [product, SetProduct] = useState(null)

  // 변수 하나 선언해주자
  const getProdutDetail = async () => {
    // API 호출
    // product/ 뒤에 값은 내가 클릭한 값이 들어와야 한다.
    let url = `http://localhost:5000/products/${id}`
    let response = await fetch(url)
    let data = await response.json()
    console.log(data)

    SetProduct(data)
  }

  useEffect(() => {
    getProdutDetail()
  }, [])

  return (
    <div>
      <Header></Header>
      <Container>
        <Row style={{ marginTop: "50px" }}>
          <Col>
            <img width={"600"} src={product?.img} />
          </Col>
          <Col>
            <div className='shooseDetailBox'>
              <div className='DetailHeader'>
                <h2>{product?.title}</h2>
                <h4>{product?.subtitle}</h4>
                <h5>{product?.gender}</h5>
                <p>{product?.price}</p>
              </div>
              <ul className='ChoiceGuideBox'>
                <span>{product?.sizechoice}</span>
                <span>{product?.sizeguide}</span>
              </ul>
              <div>{product?.size}</div>
              <div>{product?.text}</div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>

  )
}

export default ProductDetail
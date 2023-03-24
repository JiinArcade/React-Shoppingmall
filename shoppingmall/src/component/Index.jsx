import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Main'
import ProductAll from '../page/ProductAll'
import Header from './Header'


const Index = () => {

  return (
    <div>
      <Header></Header>
      <Main></Main>
      <ProductAll></ProductAll>
    </div>
  )
}


export default Index
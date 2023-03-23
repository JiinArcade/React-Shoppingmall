import React from 'react'

const Login = () => {
  return (
    <div className='login-wrapper'>
      <div className="login-box">
        <div className='logo-header'>
          <img width={60} src="/images/nikelogo.png" alt="" />
        </div>
        <h1>가입 또는 로그인을 위해 이메일을 입력하세요.</h1>
        <div className='country-wrapper'>
          <span className='selected-country-label'>튀니지</span>
          <div>
            <label className='country' htmlFor="">변경</label>
            <select name="country" id="country" autoComplete='off' className='country-choice'>
              <option value="">가나</option>
              <option value="">가봉</option>
              <option value="">가이아나</option>
              <option value="">감비아</option>
              <option value="">과들루프</option>
              <option value="">과테말라</option>
              <option value="">괌</option>
              <option value="">그레나다</option>
              <option value="">그리스</option>
              <option value="">그린란드</option>
              <option value="">기니</option>
              <option value="">기니비사우</option>
              <option value="">나미비아</option>
              <option value="">나우루</option>
              <option value="">나이지리아</option>
              <option value="">남극 대륙</option>
              <option value="">남수단</option>
              <option value="">남아프리카 공화국</option>
              <option value="">네덜란드</option>
              <option value="">네덜란드령 안틸레스</option>
              <option value="">네팔</option>
              <option value="">노르웨이</option>
              <option value="">노퍽 섬</option>
              <option value="">뉴질랜드</option>
              <option value="">뉴칼레도니아</option>
              <option value="">니우에</option>
              <option value="">니제르</option>
              <option value="">니카라과</option>
              <option value="">대만</option>
              <option value="">대한민국</option>
              <option value="">덴마크</option>
              <option value="">도미니카</option>
              <option value="">도미니카 공화국</option>
              <option value="">독일</option>
              <option value="">동티모르</option>
              <option value="">라오스</option>
              <option value="">라이베리아</option>
              <option value="">라트비아</option>
              <option value="">라틴 아메리카</option>
              <option value="">러시아 연합</option>
              <option value="">레바논</option>
              <option value="">레위니옹</option>
            </select>
          </div>
        </div>
        <div className='input-container error'>
          <input type="text" className='username input-text-field' />
          <span className='email-box'></span>
          <label>
            <span className='email'>이메일</span>
          </label>
          <fieldset>
            <legend>이메일</legend>
          </fieldset>
        </div>
        <div className='must-box'>
          <span>필수</span>
        </div>
        <div className='agree-box'>
          <p>계속 진행하면 나이키의 <a href="/">개인 정보 처리 방침</a> 및 <a href="">이용약관</a>에 동의하게 됩니다.</p>
        </div>
        <div className='next-box'>
          <button>계속</button>
        </div>
      </div>
    </div>
  )
}

export default Login
import React from 'react'

const Main = () => {
  return (
    <div>
      <div className='emptyBox'></div>
      <div className='banner-container'>
        <ul className='banner-list'>
          <li className='banner-item'>
            <span>카카오페이, 페이코 프로모션 안내</span>
            <div className='banner-link'>
              <p>
                <a href="/">카카오페이 자세히 보기</a>
                <a href="/"> 페이코 자세히 보기</a>
              </p>
            </div>
          </li>
          <li className='banner-item banner-move'>
            <span>반품 및 환불 지연 안내</span>
            <div className='banner-link'>
              <p>
                <a href="/">자세히 보기</a>
              </p>
            </div>
          </li>
        </ul>
      </div>

      <div className="vedioClip">
        <div className='video'>
          <iframe width="95%" height="1000" src="https://www.youtube.com/embed/ro-QNaKx8I8" title="너만을 위한 특별한 나이키 l 나이키 앱" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <h1 className='mainTitle'>너만을 위한 특별한 나이키</h1>
        <p className='story'>
          원하는 것을 누구보다 빠르게, 새로운 영감으로 매일을 새롭게, 상상만 했던 경험을 현실로.<br></br>
          여러분의 매일을 나이키 앱에서 바꿔 보세요.
        </p>
        <img src='https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1824,c_limit/c10c8577-d585-49c9-99af-d1d2f865abf9/nike-just-do-it.jpg' alt="" />
        <div className='appDownload'>앱 다운로드</div>
        <button className='detailBtn' type="button">자세히보기</button>
      </div>

      <div className="vedioClip">
        <div className='video'>
          <iframe width="95%" height="1000" src="https://www.youtube.com/embed/7Ybf6PrHo8k" title="나이키 러닝 - 인빈서블 3" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <h1 className='mainTitle'><p>런크루 EES가 추천하는</p>러닝 스타일링</h1>
        <p className='story'>
          함께 달리며 새로운 러닝 문화를 만들어가는 런크루 EES.<br></br>
          나이키 앱에서 EES가 추천하는 러닝 스타일링을 만나 보세요.
        </p>
        <img src='https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1824,c_limit/166bd916-cc80-43ac-b63e-eeee9d5e9773/nike-just-do-it.png' alt="" />
        <div className='appDownload'>앱 다운로드</div>
        <button className='buyBtn' type="button">구매하기</button>
      </div>

      <div className="vedioClip">
        <div className='video'>
          <iframe width="95%" height="1000" src="https://www.youtube.com/embed/41pJopiAuM4" title="NIKE AIR MAX 가로버전 고화질" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <h1 className='mainTitle'><p>에어맥스 with 뉴진스</p>시대를 초월한 에어맥스</h1>
        <p className='story'>
          나이키 에어맥스. 수많은 실패, 그리고 무한한 가능성.<br></br>
          시대를 초월한 스타일과 새로운 MAXXED OUT 팩을 만나 보세요.
        </p>
        <button className='buyBtn' type="button">구매하기</button>
      </div>

      <div className="vedioClip">
        <div className='video'>
          <img width="95%" height="1000" src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1824,c_limit/ffd535d7-ee84-4903-bb8a-fbcfc298db20/nike-just-do-it.jpg" title="NIKE AIR MAX 가로버전 고화질" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></img>
        </div>
        <h1 className='mainTitle'><p>에어맥스 with 지올팍</p>새로운 에어의 시대</h1>
        <p className='story'>
          나이키 에어맥스. 거침없는 상상이 한계를 뛰어넘어 현실이 되다.<br></br>
          시대를 초월한 에어맥스 스타일을 지금 바로 만나 보세요.
        </p>
        <button className='buyBtn' type="button">구매하기</button>
      </div>

      <div className="vedioClip">
        <div className='video'>
          <img width="95%" height="1000" src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1824,c_limit/8ecafff1-e5ac-4c4c-951b-f794dcb0bd8c/nike-just-do-it.jpg"></img>
        </div>
        <h1 className='mainTitle'>나이키 레깅스와 함께 스타일을 다채롭게</h1>
        <p className='story'>
          젠비 레깅스와 고 레깅스를 평소 즐겨 입는 아이템과 매치하여 일상의 모든 순간에 함께해 보세요
        </p>
        <div className="btnBox">
          <button className='detailBtn' type="button">자세히 보기</button>
          <button className='buyBtn' type="button">구매하기</button>
        </div>
      </div>

      <div className='TrendingNow'>
        <div className='TrendingNow-Header'>
          <h1>Trending Now</h1>
        </div>
        <div className="sampleBox">
          <div className='sample'>
            <img src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_906,c_limit/b7efdfc7-0efd-41ca-a1fb-7cd138c1e683/nike-just-do-it.jpg" />
          </div>
          <div className='sample'>
            <img src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_906,c_limit/a202f779-35b4-4d1d-8c76-d1b1da657ae7/nike-just-do-it.jpg" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
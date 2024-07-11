import React from 'react'
import NavigatorBar from './NavigatorBar'

const Home = () => {
  return (
    <div>
        
        <NavigatorBar/>
        <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div id="carouselExample" class="carousel slide">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="https://www.urbanplant.in/cdn/shop/products/Primary5copy_22b376aa-154f-45c4-97f2-a2427e9bdcb4.webp?v=1681313864" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src="https://i.rtings.com/assets/pages/1OCszFAw/best-apple-20230425-medium.jpg?format=auto" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src="https://nestasia.in/cdn/shop/files/Greencoffeemugs_8.jpg?v=1699368644&width=600" class="d-block w-100" alt="..." />
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <br />

    </div>
  )
}

export default Home
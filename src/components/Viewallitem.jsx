import React, { useState } from 'react'
import NavigatorBar from './NavigatorBar'

const Viewallitem = () => {
  var[data,changeData]=useState(
    [
      {"Item":"Plastic pot-white","price":9000,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ34s4rx0TuaK7ecE7-sP6frjPWdHL-CqjZvw&s"},
      {"Item":"bookshelf-white","price":1000,"image":"https://m.media-amazon.com/images/I/71Zn3M1bJBL._AC_UF894,1000_QL80_.jpg"},
      {"Item":"shoerack-white","price":900,"image":"https://www.ikea.com/in/en/images/products/mackapaer-shoe-rack-white__0710716_pe727737_s5.jpg"},
      {"Item":"shoes-white","price":50,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoNxyewP33D-h9nBz9kLEJ9moeq6Fhk1qrlg&s"},
      {"Item":"headphones-white","price":800,"image":"https://m.media-amazon.com/images/I/71+KbNZu0-L._AC_UF1000,1000_QL80_.jpg"},
      {"Item":"rug-white","price":9,"image":"https://m.media-amazon.com/images/I/71FSPkmWCHS.jpg"},
      {"Item":"lamp-white","price":999,"image":"https://www.ikea.com/in/en/images/products/blidvaeder-table-lamp-off-white-ceramic-beige__1059594_pe849715_s5.jpg"},
      {"Item":"quilt-white","price":900,"image":"https://5.imimg.com/data5/SELLER/Default/2022/1/IR/DH/NA/92198193/duvet-500x500-500x500.jpg"}
    ]
  )
    var [data1,changeData]=useState(
    [
      {"SI":1,"Item":"Headphone","price":500},
      {"SI":2,"Item":"Cup-Plastic","price":80},
      {"SI":3,"Item":"Glasses","price":100}
    ]
   )
  return (
    <div>

<NavigatorBar/>
<div className="container">
      <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <div className="row g-3">
           
           {data.map(
            (val,item)=>{
              return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                <div class="card">
                 <img src={val.image} class="card-img-top" alt="..."/>
                 <div class="card-body">
                   <h5 class="card-title">{val.Item}</h5>
                   <p class="card-text">Rs.{val.price}</p>
                   <a href="#" class="btn btn-primary">Buy now</a>
                 </div>
               </div>
             </div>
            }
           )}
           
           <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <table class="table">
  <thead>
    <tr>
      <th scope="col">SI No.</th>
      <th scope="col">Item</th>
      <th scope="col">Item price</th>
    </tr>
  </thead>
  <tbody>
    
   {data1.map(
    (value,i)=>{
      return <tr>
      <th scope="row">{value.SI}</th>
      <td>{value.Item}</td>
      <td>Rs.{value.price}</td>
    </tr>
    }
   )}

  </tbody>
</table>

                </div>
            </div>
            
          </div>
        </div>
      </div>
     </div> 

    </div>
  )
}

export default Viewallitem
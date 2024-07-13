import React, { useState } from 'react'
import NavigatorBar from './NavigatorBar'

const Viewallitem = () => {
  var[data,changeData]=useState(
    [
      {"Item":"Plastic pot-white","price":9000,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ34s4rx0TuaK7ecE7-sP6frjPWdHL-CqjZvw&s"},
      {"Item":"bookshelf-white","price":1000,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ34s4rx0TuaK7ecE7-sP6frjPWdHL-CqjZvw&s"},
      {"Item":"shoerack-white","price":900,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ34s4rx0TuaK7ecE7-sP6frjPWdHL-CqjZvw&s"},
      {"Item":"shoes-white","price":50,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ34s4rx0TuaK7ecE7-sP6frjPWdHL-CqjZvw&s"},
      {"Item":"headphones-white","price":800,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ34s4rx0TuaK7ecE7-sP6frjPWdHL-CqjZvw&s"},
      {"Item":"rug-white","price":9,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ34s4rx0TuaK7ecE7-sP6frjPWdHL-CqjZvw&s"},
      {"Item":"lamp-white","price":999,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ34s4rx0TuaK7ecE7-sP6frjPWdHL-CqjZvw&s"},
      {"Item":"quilt-white","price":900,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ34s4rx0TuaK7ecE7-sP6frjPWdHL-CqjZvw&s"}
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
           
           
            
          </div>
        </div>
      </div>
     </div> 

    </div>
  )
}

export default Viewallitem
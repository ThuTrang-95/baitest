import React, { Component, useCallback, useState  } from 'react';
import {Pie} from "react-chartjs-2"
class Header extends Component {
  render(){
  const state={
    label:["Unitech", "Univi","Unisoft","Unisof Japan"],
        datasets:[
          {labal: 'Unitech',
          backgroundColor:"#0088FE",
          borderColor:"rgba(0,0,0,1)",
          borderWidth:2,
          data:[65, 45,123,42,43]
        }
        ]
  }
  const options={
    plugins:{
      legend: {
        display: true,
        position: 'bottom',
      }, 
    title: {
      text:"react chart",
      display: true,
      fontSize:20
    }
    }
  }
  return (
    <div>
      <Pie data={state} options={options}/>

    </div>
    // <nav className="navbar navbar-inverse">
    //     <a className="navbar-brand" href="#">Component</a>
    //     <ul className="nav navbar-nav">
    //         <li className="active">
    //             <a > Trang chủ</a>
    //         </li>
    //         <li>
    //             <a >Danh mục sản phẩm</a>
    //         </li>
    //     </ul>
    // </nav>
  );
}
}
export default Header;

import './App.css';
import Header from './components/Header';
import Product from './components/Product';
import React, { Component, useCallback, useState  } from 'react';
import { PieChart, Pie, Cell } from "recharts";
import PieChart1 from './components/PieChart';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [44, 55, 13, 43, 22],
      options: {
        chart: {
          width: 380,
          type: 'pie',
        },
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
    
    
    };
  }


  render() {
    // var products=[
    //   {
    //     id:1,
    //     name:'Apple iphone 6 plus 16GB',
    //     price:15000000,
    //     image:'https://bachlongmobile.com/media/catalog/product/cache/2/image/040ec09b1e35df139433887a97daa66f/6/0/600_ip6_gold_800x800_1_1.jpg',
    //     status: true
    //   },
    //   {
    //     id:2,
    //     name:'Samsung galaxy S7',
    //     price:20000000,
    //     image:'https://hc.com.vn/i/ecommerce/media/ckeditor_2642836.png',
    //     status: true
    //   },
    //   {
    //     id:3,
    //     name:'Oppo F1S',
    //     price:15000000,
    //     image:'https://didongviet.vn/pub/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/d/i/dien-thoai-oppo-a92_1.jpg',
    //     status: true
    //   }
    // ]
    // let elements = products.map((product, index)=>{
    //   let result=""
    //   if(product.status){
    //       result= <Product 
    //   // name='Apple iphone 6 plus 16GB' 
    //             key ={product.id}
    //             price={product.price} 
    //             image ={product.image}
    //           >
    //           {product.name}
    //           </Product>
    //   }
    // return result;
    // })


    const data = [
      { name: "Unitech", value: 100 },
      { name: "Univi", value: 10 },
      { name: "Unisoft", value: 40 },
      { name: "Unisoft JAPAN", value: 50 }
    ];
    var options = {
      series: [44, 55, 13, 43, 22],
      chart: {
      width: 380,
      type: 'pie',
    },
    labels: ['Team A', 'Team B', 'Team C', 'Team D'],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
    };
    
    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
    
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      percent,
      index
    }: any) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);
    
      return (
        <text
          x={x}
          y={y}
          fill="white"
          textAnchor={x > cx ? "start" : "end"}
          dominantBaseline="central"
        >
          {`${(percent * 100).toFixed(0)}%`}
        </text>
      );
    };
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <a className="navbar-brand" >Title</a>
          </div>
        </nav>
        <div className="container-fluid">
          <div className="row">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  {/* <Product 
                   // name='Apple iphone 6 plus 16GB' 
                   price="15000000" 
                   image ="https://bachlongmobile.com/media/catalog/product/cache/2/image/040ec09b1e35df139433887a97daa66f/6/0/600_ip6_gold_800x800_1_1.jpg"
                  >Apple iphone 6 plus 16GB</Product>
                  <Product 
                  // name='Samsung galaxy S7' 
                  price="20000000" 
                  image="https://hc.com.vn/i/ecommerce/media/ckeditor_2642836.png"
                  >Samsung galaxy S7</Product>
                  <Product 
                  // name='Oppo F1S' 
                  price="15000000" 
                  image="https://didongviet.vn/pub/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/d/i/dien-thoai-oppo-a92_1.jpg"
                  >Oppo F1S</Product> */}
                  {/* {elements} */}
                  React Chart
                </div>
                {/* <Header/> */}
              <PieChart width={400} height={400}>
                <Pie
                  data={data}
                  cx={200}
                  cy={200}
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  // options={{
                  //     title:{
                  //       display:true,
                  //       text:'Average Rainfall per month',
                  //       fontSize:20
                  //     },
                  //     legend:{
                  //       display:true,
                  //       position:'right'
                  //     }
                  //   }}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                {/* <div options={this.state.options} series={this.state.series} type="pie" width={380} /> */}
              </PieChart>
              <PieChart1/>
            </div>
          </div> 
        </div>
      </div>
  );
  }

}

export default App;

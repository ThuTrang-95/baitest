import React from 'react'
import {Pie} from "react-chartjs-2"

function PieChart1() {
    // render(){
        const state={
            labels:["January", "February", "March", "April", "May"],
            datasets:[
                {
                    label:"Rainfall",
                    backgroundColor:["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#6800B4"],
                    borderColor:'rgba(0,0,0,1)',
                    borderWidth:2,
                    data:[65,45,123,42,43]
                }
            ]  
        }
        // const options={
            // plugins:{
            //     legend: {
            //         display: true,
            //         position: 'bottom',
            //     },
            //     title: {
            //         text:"Avarage Rainfall per month",
            //         display: true,
            //         fontSize:20
            //     }
            // }
        // }
        const options = {
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
    // }
    return (
      <div className="pie">
      {/* <PieChart> */}
      {/* <PieChart width={400} height={400}> */}
        <Pie data={state} options={options} label={renderCustomizedLabel}  dataKey="data" >
            {/* {state.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))} */}
        </Pie>
        {/* </PieChart> */}
        <p style={{textAlign:'center'}}>Pie Chart </p>
        {/* </PieChart> */}
      </div>
    );
   
  }
  
  export default PieChart1;
  
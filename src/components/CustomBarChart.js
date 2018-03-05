import React, { Component } from 'react'
 import Chart from "chart.js";

class CustomBarChart extends Component {
    constructor(props){
        super(props);
        this.chartData = {
            labels: [1,2,3,4,5,6,7,8,9,10,11,12],
            
            datasets: [{
                    label: 'Zysk',
                    backgroundColor: "#535667",
                hoverBackgroundColor:"#2095F2",
                    pointBackgroundColor: 'white',
                spanGaps:false,
                    data: [70, 55, 60, 81, 54, 60,20,30,30,50,60,70,85]
            }]
        };
        this.chartOptions = {
            responsive: true,
            maintainAspectRatio: false,

            scales: {
                xAxes: [{
                    display:true,
                    gridLines: {
                        color: 'transparent',
                    },

                }],
                yAxes: [{
                    display: true,
                    ticks: {
                        suggestedMin: 0,
                        beginAtZero: true 
                        } ,
                    gridLines: {
                        color: '#757575',
                        drawBorder: false
                    },
                }],
            },
            legend: {
                display: false,
            },
            point: {
                backgroundColor: 'white'
            },
            tooltips: {
                backgroundColor: 'rgba(0,0,0,0.3)',
                titleFontColor: 'white',
                xPadding: 20,
                yPadding: 20
            }
        };
    }
    componentDidMount(){   
        var chart = this.refs[this.props.id].getContext('2d');
        
        Chart.defaults.global.defaultFontColor = "#fff";
        Chart.defaults.global.defaultFontFamily = "'Montserrat', 'Arial', sans-serif";
        Chart.defaults.global.defaultFontSize = 14;
    
        
        new Chart(chart, {
            type: 'bar',
            data: this.chartData,
            options: this.chartOptions
        });
    }
  render() {
    return (
        <div className="chart-sales-container">
                <div className="chart-sales__header-container">
                    <h2 className="chart-sales__header">Raport sprzedaży</h2>
                    <label className="styled-select-label" htmlFor="range">Zakres:</label>
                    <div className="styled-select">
                        <select id="range">
                          <option value="year">Rok</option>
                          <option value="month">Miesiąc</option>
                          <option value="week">Tydzień</option>
                        </select>
                    </div>
                </div>
           <div className="canvas-container">
               <canvas ref={this.props.id}></canvas>
           </div>
       </div>
    );
  }
}


export default CustomBarChart;

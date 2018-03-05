import React, { Component } from 'react'
 import Chart from "chart.js";

class CustomLineChart extends Component {
    constructor(props){
        super(props);
        this.chartData = {
            labels: [ 'Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Cze' ,'Lip','Sie','Wrz','Paź','Lis','Gru'],
            datasets: [{
                    label: 'Zysk',
                    backgroundColor: "red",
                    pointBackgroundColor: 'white',
                    borderWidth: 4,
                spanGaps:false,
                    borderColor: '#2095F2',
                    data: [70, 55, 60, 81, 54, 60,20,30,30,50,60,70,85]
            }]
        };
        this.chartOptions = {
            responsive: true,
            maintainAspectRatio: false,

            scales: {
                xAxes: [{
                    display: true,
                    gridLines: {
                        color: '#757575',
                        drawBorder: false,offsetGridLines:true
                    },

                }],
                yAxes: [{
                    display: true,
                    
                    ticks: {
                        suggestedMin: 0,
                        beginAtZero: true 
                        }       
                }]
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
        var chart = this.refs[this.props.id].getContext('2d'),
            gradient = chart.createLinearGradient(0, 0, 0, 450);
        
            gradient.addColorStop(0, '#21639D');
            gradient.addColorStop(1, '#2A4361');
        
        Chart.defaults.global.defaultFontColor = "#fff";
        Chart.defaults.global.defaultFontFamily = "'Montserrat', 'Arial', sans-serif";
        Chart.defaults.global.defaultFontSize = 14;
        
        this.chartData.datasets[0].backgroundColor = gradient;
        
        new Chart(chart, {
            type: 'line',
            data: this.chartData,
            options: this.chartOptions
        });
    }
  render() {
    return (
       <canvas ref={this.props.id}></canvas>
    );
  }
}


export default CustomLineChart;

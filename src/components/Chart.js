import React, { Component } from 'react';

import CustomScrollbar from './CustomScrollbar';
import CustomLineChart from './CustomLineChart';

class Chart extends Component { 
  render() {
    return (
        <div className="main-container chart"> 
            <main className="main-content">
                 <CustomScrollbar>
                     <div className="chart-days-big">
                         <CustomLineChart id="chart-days-big"/>
                     </div>
                     <div className="campaign-bar-container">
                         <ul className="campaign-bar-description">
                            <li>
                                <p>Akcja</p>
                            </li>
                            <li>
                                <p>Czas</p>
                            </li>
                            <li>
                                <p>Wyświetlenia</p>
                            </li>
                            <li>
                                <p>Wizyty</p>
                            </li>
                            <li>
                                <p>CTR</p>
                            </li>
                            <li>
                                <p>CPC</p>
                            </li>
                            <li>
                               <p>CPV</p>
                            </li>
                            <li>
                               <p>CPM</p>
                            </li>
                            <li>
                               <p>Status</p>
                            </li>
                             </ul>
                                           
                             <ul className="campaign-bar">
                            <li>
                                <p>Lorem ipsum dolor sit amet</p>
                            </li>
                             <li>
                                <p><time>6 dni</time></p>
                            </li>
                             <li>
                                <p>358 000</p>
                            </li>
                             <li>
                                <p>58 200</p>
                            </li>
                             <li>
                                <p>25%</p>
                            </li>
                             <li>
                                <p>3.02zł</p>
                            </li>
                             <li>
                                <p>2.51zł</p>
                            </li>
                             <li>
                                <p>28.35zł</p>
                            </li>
                             <li>
                                <p className="campaign-bar__status campaign-bar__status_active">Aktywny</p>
                            </li>
                         </ul>
                         <ul className="campaign-bar">
                            <li>
                                <p>Lorem ipsum dolor sit amet</p>
                            </li>
                             <li>
                                <p><time>6 dni</time></p>
                            </li>
                             <li>
                                <p>358 000</p>
                            </li>
                             <li>
                                <p>58 200</p>
                            </li>
                             <li>
                                <p>25%</p>
                            </li>
                             <li>
                                <p>3.02zł</p>
                            </li>
                             <li>
                                <p>2.51zł</p>
                            </li>
                             <li>
                                <p>28.35zł</p>
                            </li>
                             <li>
                                <p className="campaign-bar__status campaign-bar__status_unactive">Nieaktywny</p>
                            </li>
                         </ul>
                         <ul className="campaign-bar">
                            <li>
                                <p>Lorem ipsum dolor sit amet</p>
                            </li>
                             <li>
                                <p><time>6 dni</time></p>
                            </li>
                             <li>
                                <p>358 000</p>
                            </li>
                             <li>
                                <p>58 200</p>
                            </li>
                             <li>
                                <p>25%</p>
                            </li>
                             <li>
                                <p>3.02zł</p>
                            </li>
                             <li>
                                <p>2.51zł</p>
                            </li>
                             <li>
                                <p>28.35zł</p>
                            </li>
                             <li>
                                <p className="campaign-bar__status campaign-bar__status_active">Aktywny</p>
                            </li>
                             </ul>
                     </div>
                </CustomScrollbar>    
            </main>   
        </div>
    );
  }
}



export default Chart;

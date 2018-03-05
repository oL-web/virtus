import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

import CustomScrollbar from './CustomScrollbar';
import { Line } from 'rc-progress';

import picture2 from '../img/profile-2.png';
import picture4 from '../img/profile-4.png';
import picture5 from '../img/profile-5.png';

class Projects extends Component { 
  render() {
    return (
        <div className="main-container projects"> 
                      
                      <div className="menu-bar">
                       <NavLink exact to="/virtus/projects/" activeClassName="menu-bar__link_active" className="btn menu-bar__link">Wszystkie projekty (358)</NavLink>
                       <NavLink to="/virtus/projects/progress" activeClassName="menu-bar__link_active"  className="btn menu-bar__link">Postęp pracy</NavLink>
                       
                       <label className="styled-select-label styled-select-label_white" htmlFor="order">Pokaż projekty:</label>
                        <div className="styled-select styled-select_white">
                            <select id="order">
                              <option value="all">Wszystkie</option>
                              <option value="newest">Najnowsze</option>
                              <option value="oldest">Najstarsze</option>
                            </select>
                        </div>
                   </div>
           <CustomScrollbar>
                <main className="main-content">
                  
                   <ul className="project-bar-description">
                        <li>
                            <p>Tytuł projektu</p>
                        </li>
                        <li>
                            <p>Cena</p>
                        </li>
                        <li>
                            <p>Data oddania</p>
                        </li>
                        <li>
                            <p>Przepracowano</p>
                        </li>
                        <li>
                            <p>Postęp</p>
                        </li>
                        <li>
                            <p>Etap projektu</p>
                        </li>
                        <li>
                           <p>Przydział</p>
                        </li>
                    </ul>
                  
                    <ul className="project-bar project-bar_in-progress">
                        <li>
                            <p>Nowa strona</p>
                            <p>Microsoft</p>
                        </li>
                        <li>
                            <p>2300zł</p>
                        </li>
                        <li>
                            <p>15 Maj 2019</p>
                        </li>
                        <li>
                            <p>40 godzin</p>
                        </li>
                        <li className="project-bar__progress">
                           <p>70%</p>
                            <Line percent="70" trailWidth="6" strokeWidth="6" trailColor="#585D71" strokeColor="#2480CD" />
                        </li>
                        <li>
                            <p>Produkcja</p>
                        </li>
                        <li>
                            <div className="project-card">
                                            <img className="project-card__img" src={picture4} alt="Ty" />
                                            <div className="flex-container">
                                                <h5 className="project-card__name">Adam Kowalski</h5>

                                                <p className="project-card__job">Front End Dev</p>
                                            </div>
                                            <button className="btn project-card__btn">
                                                <i className="icon-block icon icon-colon"></i></button>
                                        </div>
                        </li>
                    </ul>
                    <ul className="project-bar project-bar_in-progress">
                        <li>
                            <p>Nowa strona</p>
                            <p>Google</p>
                        </li>
                        <li>
                            <p>1250zł</p>
                        </li>
                        <li>
                            <p>21 Maj 2019</p>
                        </li>
                        <li>
                            <p>7 godzin</p>
                        </li>
                        <li>
                           15%
                            <Line percent="15" trailWidth="6" strokeWidth="6" trailColor="#585D71" strokeColor="#2480CD" />
                        </li>
                        <li>
                            <p>Planowanie</p>
                        </li>
                        <li>
                            <div className="project-card">
                                            <img className="project-card__img" src={picture5}  alt="Ty" />
                                            <div className="flex-container">
                                                <h5 className="project-card__name">Tomasz Nowak</h5>

                                                <p className="project-card__job">UX/UI Designer</p>
                                            </div>
                                            <button className="btn project-card__btn">
                                                <i className="icon-block icon icon-colon"></i></button>
                                        </div>
                        </li>
                    </ul>
                    <ul className="project-bar project-bar_in-progress">
                        <li>
                            <p>Logo firmy</p>
                            <p>JCD.pl</p>
                        </li>
                        <li>
                            <p>900zł</p>
                        </li>
                        <li>
                            <p>2 Lipiec 2020</p>
                        </li>
                        <li>
                            <p>10 godzin</p>
                        </li>
                        <li>
                           40%
                            <Line percent="40" trailWidth="6" strokeWidth="6" trailColor="#585D71" strokeColor="#2480CD" />
                        </li>
                        <li>
                            <p>Projektowanie</p>
                        </li>
                        <li>
                            <div className="project-card">
                                            <img className="project-card__img" src={picture2}  alt="Ty" />
                                            <div className="flex-container">
                                                <h5 className="project-card__name">Anna Kowalska</h5>

                                                <p className="project-card__job">Back End Dev</p>
                                            </div>
                                            <button className="btn project-card__btn">
                                                <i className="icon-block icon icon-colon"></i></button>
                                        </div>
                        </li>
                    </ul>
                    <ul className="project-bar project-bar_in-progress">
                        <li>
                            <p>Nowa strona</p>
                            <p>Symu.co</p>
                        </li>
                        <li>
                            <p>5100zł</p>
                        </li>
                        <li>
                            <p>28 Luty 2020</p>
                        </li>
                        <li>
                            <p>56 godzin</p>
                        </li>
                        <li>
                           90%
                            <Line percent="90" trailWidth="6" strokeWidth="6" trailColor="#585D71" strokeColor="#2480CD" />
                        </li>
                        <li>
                            <p>Testowanie</p>
                        </li>
                        <li>
                            <div className="project-card">
                                            <img className="project-card__img" src={picture5} alt="Ty" />
                                            <div className="flex-container">
                                                <h5 className="project-card__name">Tomasz Nowak</h5>

                                                <p className="project-card__job">UX/UI Designer</p>
                                            </div>
                                            <button className="btn project-card__btn">
                                                <i className="icon-block icon icon-colon"></i></button>
                                        </div>
                        </li>
                    </ul>
                    <ul className="project-bar project-bar_not-started">
                        <li>
                            <p>Appka mobilna</p>
                            <p>Facebook</p>
                        </li>
                        <li>
                            <p>12000zł</p>
                        </li>
                        <li>
                            <p>12 Kwiecień 2021</p>
                        </li>
                        <li>
                            <p>0 godzin</p>
                        </li>
                        <li>
                           0%
                            <Line percent="0" trailWidth="6" strokeWidth="6" trailColor="#585D71" strokeColor="white" />
                        </li>
                        <li>
                            <p>W kolejce</p>
                        </li>
                        <li>
                           <div className="project-card">
                                            <img className="project-card__img" src={picture2}  alt="Ty" />
                                            <div className="flex-container">
                                                <h5 className="project-card__name">Anna Kowalska</h5>

                                                <p className="project-card__job">Back End Dev</p>
                                            </div>
                                            <button className="btn project-card__btn">
                                                <i className="icon-block icon icon-colon"></i></button>
                                        </div>
                        </li>
                    </ul>
                    <ul className="project-bar project-bar_finished">
                        <li>
                            <p>Appka mobilna</p>
                            <p>Symu.co</p>
                        </li>
                        <li>
                            <p>8730zł</p>
                        </li>
                        <li>
                            <p>6 Styczeń 2019</p>
                        </li>
                        <li>
                            <p>59 godzin</p>
                        </li>
                        <li>
                           100%
                            <Line percent="100" trailWidth="6" strokeWidth="6" trailColor="#585D71" strokeColor="#49B14E" />
                        </li>
                        <li>
                            <p>Skończone</p>
                        </li>
                        <li>
                           <div className="project-card">
                                            <img className="project-card__img" src={picture2}  alt="Ty" />
                                            <div className="flex-container">
                                                <h5 className="project-card__name">Anna Kowalska</h5>

                                                <p className="project-card__job">Back End Dev</p>
                                            </div>
                                            <button className="btn project-card__btn">
                                                <i className="icon-block icon icon-colon"></i></button>
                                        </div>
                        </li>
                    </ul>
                    <ul className="project-bar project-bar_finished">
                        <li>
                            <p>Motyw Wordpress</p>
                            <p>Themeforest</p>
                        </li>
                        <li>
                            <p>1320zł</p>
                        </li>
                        <li>
                            <p>29 Grudzień 2018</p>
                        </li>
                        <li>
                            <p>30 godzin</p>
                        </li>
                        <li>
                           100%
                            <Line percent="100" trailWidth="6" strokeWidth="6" trailColor="#585D71" strokeColor="#49B14E" />
                        </li>
                        <li>
                            <p>Skończone</p>
                        </li>
                        <li>
                           <div className="project-card">
                                            <img className="project-card__img" src={picture2}  alt="Ty" />
                                            <div className="flex-container">
                                                <h5 className="project-card__name">Anna Kowalska</h5>

                                                <p className="project-card__job">Back End Dev</p>
                                            </div>
                                            <button className="btn project-card__btn">
                                                <i className="icon-block icon icon-colon"></i></button>
                                        </div>
                        </li>
                    </ul>
                 
                </main>   
            </CustomScrollbar>
        </div>
    );
  }
}



export default Projects;

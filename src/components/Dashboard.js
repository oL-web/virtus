import React, { Component } from 'react';

import CustomLineChart from './CustomLineChart';
import CustomBarChart from './CustomBarChart';
import CustomScrollbar from './CustomScrollbar';
import CustomDayPicker from './CustomDayPicker';

import picture1 from '../img/profile-1.png';
import picture2 from '../img/profile-2.png';
import picture3 from '../img/profile-3.png';
import picture4 from '../img/profile-4.png';

class Dashboard extends Component { 
  render() {
    return (
        <div className="main-container dashboard">
            <CustomScrollbar>
        <main className="main-content">
                    <div className="widgets-row">
                        <div className="chart-days">
                            <CustomLineChart id="chart-days" />
                        </div>
                        <section className="widget widget-projects">
                            <h2 className="widget__header">Twoje projekty</h2>
                            <ul className="widget__list">
                                <CustomScrollbar widget={true}>
                                    <li>
                                        <div className="project-card">
                                            <img className="project-card__img" src={picture1} alt="Ty" />
                                            <div className="flex-container">
                                                <h5 className="project-card__name">Appka mobilna</h5>

                                                <p className="project-card__maker">zse-e.edu.pl</p>
                                                <p className="project-card__cost">1500zł</p>
                                            </div>
                                            <button className="btn project-card__btn">
                                                <i className="icon-block icon icon-colon"></i></button>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="project-card">
                                            <img className="project-card__img" src={picture1} alt="Ty" />
                                            <div className="flex-container">
                                                <h5 className="project-card__name">Strona internetowa</h5>

                                                <p className="project-card__maker">zse-e.edu.pl</p>
                                                <p className="project-card__cost">100zł</p>
                                            </div>
                                            <button className="btn project-card__btn">
                                                <i className="icon-block icon icon-colon"></i></button>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="project-card">
                                            <img className="project-card__img" src={picture1} alt="Ty" />
                                            <div className="flex-container">
                                                <h5 className="project-card__name">Strona internetowa</h5>

                                                <p className="project-card__maker">zse-e.edu.pl</p>
                                                <p className="project-card__cost">700zł</p>
                                            </div>
                                            <button className="btn project-card__btn">
                                                <i className="icon-block icon icon-colon"></i></button>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="project-card">
                                            <img className="project-card__img" src={picture1} alt="Ty" />
                                            <div className="flex-container">
                                                <h5 className="project-card__name">Appka mobilna</h5>

                                                <p className="project-card__maker">zse-e.edu.pl</p>
                                                <p className="project-card__cost">3400zł</p>
                                            </div>
                                            <button className="btn project-card__btn">
                                                <i className="icon-block icon icon-colon"></i></button>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="project-card">
                                            <img className="project-card__img" src={picture1} alt="Ty" />
                                            <div className="flex-container">
                                                <h5 className="project-card__name">Appka mobilna</h5>

                                                <p className="project-card__maker">zse-e.edu.pl</p>
                                                <p className="project-card__cost">2100zł</p>
                                            </div>
                                            <button className="btn project-card__btn">
                                                <i className="icon-block icon icon-colon"></i></button>
                                        </div>
                                    </li>
                                </CustomScrollbar>
                            </ul>
                        </section>
                    </div>

                    <div className="widgets-row">
                        <div className="widget chart-sales">
                           <CustomBarChart id="chart-sales" />
                        </div>
                        <section className="widget widget-inbox">
                            <h2 className="widget__header inbox__header">Skrzynka (<span className="inbox__header_new">2</span>)</h2>
                            <ul className="widget__list">
                                <CustomScrollbar widget={true}>
                                    <li>
                                        <div className="inbox-card">
                                            <img className="inbox-card__img" src={picture2} alt="Anna Kowalska" />
                                            <div className="flex-container">
                                                <h5 className="inbox-card__name">Anna Kowalska</h5>
                                            <time className="inbox-card__time inbox-card__time_new">23:20</time>
                                                <p className="inbox-card__message">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                            </div>
                                        </div>
                                    </li>
                                   <li>
                                        <div className="inbox-card">
                                            <img className="inbox-card__img" src={picture3} alt="Jan Kowalski" />
                                            <div className="flex-container">
                                                <h5 className="inbox-card__name">Jan Kowalski</h5>
                                            <time className="inbox-card__time inbox-card__time_new">15:04</time>
                                                <p className="inbox-card__message">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="inbox-card">
                                            <img className="inbox-card__img" src={picture4} alt="Adam Kowalski" />
                                            <div className="flex-container">
                                                <h5 className="inbox-card__name">Adam Kowalski</h5>
                                            <time className="inbox-card__time">09:45</time>
                                                <p className="inbox-card__message">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                            </div>
                                        </div>
                                    </li>
                                </CustomScrollbar>
                            </ul>
                        </section>
                        <section className="widget widget-calendar">
                            <CustomDayPicker />
                        </section>
                    </div>
                </main>
                </ CustomScrollbar>
                </div>
    );
  }
};


export default Dashboard;

import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import CustomScrollbar from './CustomScrollbar';
import ChatConversation from './ChatConversation';

import picture2 from '../img/profile-2.png';
import picture3 from '../img/profile-3.png';
import picture4 from '../img/profile-4.png';
import picture5 from '../img/profile-5.png';

class Chat extends Component {
  render() {
    return (
        <div className="main-container chat"> 
                      
                   <div className="menu-bar">
                       <NavLink exact to="/virtus/chat/" activeClassName="menu-bar__link_active" className="btn menu-bar__link">
                    <i className="icon icon-inbox"></i>Skrzynka (2)</NavLink>
                       <NavLink to="/virtus/chat/sent" activeClassName="menu-bar__link_active"  className="btn menu-bar__link"><i className="icon icon-paperplane-empty"></i>Wysłane</NavLink>
                       <NavLink to="/virtus/chat/trash" activeClassName="menu-bar__link_active"  className="btn menu-bar__link"><i className="icon icon-trash"></i>Kosz</NavLink>
                       
                       <label className="styled-select-label styled-select-label_white" htmlFor="messages-filter">Filtruj według:</label>
                        <div className="styled-select styled-select_white">
                            <select id="messages-filter">
                              <option value="newest">daty (najnowsze)</option>
                              <option value="oldest">daty (najstarsze)</option>
                            </select>
                        </div>
                   </div>
                <main className="main-content"><CustomScrollbar>
                      <div className="chat-container">
                          <div className="chat__contacts">
                              <ul className="contacts__list">
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
                                                <img className="inbox-card__img" src={picture3}  alt="Jan Kowalski" />
                                                <div className="flex-container">
                                                    <h5 className="inbox-card__name">Jan Kowalski</h5>
                                                <time className="inbox-card__time inbox-card__time_new">15:04</time>
                                                    <p className="inbox-card__message">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="inbox-card">
                                                <img className="inbox-card__img" src={picture4}  alt="Adam Kowalski" />
                                                <div className="flex-container">
                                                    <h5 className="inbox-card__name">Adam Kowalski</h5>
                                                <time className="inbox-card__time">09:45</time>
                                                    <p className="inbox-card__message">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="inbox-card">
                                                <img className="inbox-card__img" src={picture5}  alt="Tomasz Nowak" />
                                                <div className="flex-container">
                                                    <h5 className="inbox-card__name">Tomasz Nowak</h5>
                                                <time className="inbox-card__time">12:22</time>
                                                    <p className="inbox-card__message">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                                                </div>
                                            </div>
                                        </li>
                                    </CustomScrollbar>
                                </ul>
                                <button className="btn btn-inbox">Nowa konwersacja</button>
                          </div>
                          <ChatConversation />
                          <div className="chat__contact-info">
                              <CustomScrollbar widget={true}>
                                  <img className="contact-info__img contact-info__img_online" src={picture5}  alt="Tomasz Nowak" />
                                  <h3 className="contact-info__name">Tomasz Nowak</h3>
                                  <p className="contact-info__job">UX/UI Designer</p>
                                  <p className="contact-info__description">Quisque elementum sollicitudin augue, sed condimentum magna dignissim eu. Integer tempus ut neque et tempor. Donec aliquet tristique dolor, ut convallis sem ornare in. Donec tellus nibh, rhoncus vitae neque eu.</p>
                                  
                                  <ul className="contact-info__list">
                                      <li>
                                          <h6>E-mail</h6>
                                          <p>tomasznowak32@gmail.com</p>
                                      </li>
                                      <li>
                                          <h6>Telefon</h6>
                                          <p>500 400 300</p>
                                      </li>
                                      <li>
                                          <h6>Adres</h6>
                                          <p>Kwiatowa 2.5, Sosnowiec, Polska</p>
                                      </li>
                                      <li>
                                          <h6>Organizacja</h6>
                                          <p>Symu.co</p>
                                      </li>
                                  </ul>
                              </CustomScrollbar>
                          </div>
                      </div>
                       
                     
                </CustomScrollbar>    </main>   
        </div>
    );
  }
}



export default Chat;

import React, { Component } from 'react';
import CustomScrollbar from './CustomScrollbar';
import io from "socket.io-client";

import picture1 from '../img/profile-1.png';
import picture5 from '../img/profile-4.png';

var keyIndexCounter = 0;
var socket = io();


class ChatConversation extends Component { 
    constructor(props){
        super(props);
        this.sendMessage = this.sendMessage.bind(this);
        this.updateStateMessages = this.updateStateMessages.bind(this);
        this.state = {
            messages: [{
                    timestamp:new Date().toLocaleString(),
                    message:"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec dignissim ex ut imperdiet sagittis. Sed eu nisi commodo, fermentum ante ac, porttitor augue. Curabitur placerat ex elit, at venenatis nulla lobortis at. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.",
                    author:{
                        name: "Tomasz Nowak",
                        img: picture5
                    }
                },
                {
                    timestamp:new Date().toLocaleString(),
                    message:"Pellentesque aliquet diam nunc, non sodales lacus egestas ac. Cras aliquam, nibh at imperdiet scelerisque, arcu nibh porttitor metus, non molestie arcu lacus id felis.",
                    author:{
                        name: "Ty",
                        img: picture1
                    }
                }]
        };
    }
    updateStateMessages(obj){
        var updatedMessages = Object.create(this.state.messages);
          updatedMessages.push(obj);
          this.setState({messages:updatedMessages});
    }
    sendMessage(e){
        if(this.refs["conversation__input"].value.trim()){
           var message = {
               timestamp:new Date().toLocaleString(),
                        message:this.refs["conversation__input"].value,
                        author:{
                            name: "Nazwa wysyłającego",
                            img:  picture1
                        }
                   };
                   socket.emit("message sent",message);

            this.refs["conversation__input"].value = "";
            this.refs["conversation__input"].focus();   
            }
        
        e.preventDefault();
   }
    componentDidMount(){ 
      socket.on('message received', function(obj){
            this.updateStateMessages(obj);
        }.bind(this));
    }
    componentDidUpdate(){ 
      var chatWindow = document.querySelector(".conversation__list .view");
            chatWindow.scrollTop = chatWindow.scrollHeight;
    }
  render() {
    return (
       
          <div className="chat__conversation">
                             <ul className="conversation__list">
                                  <CustomScrollbar widget={true}>
                {     
                    this.state.messages.map(function(item){
                        return (
                            <li key={++keyIndexCounter}>
                                    <div className={item.author.name === "Ty" ? "message-block  message-block_yours" : "message-block message-block_someones"}>
                                        <img className="message-block__img" src={item.author.img} alt={item.author.name} />
                                        <div className="flex-container">
                                            <p className="message-block__message">{item.message}</p>

                                            <time className="message-block__time">{item.timestamp}</time>
                                        </div>
                                    </div>
                                </li>
                        )
                  })
                }

                                   </CustomScrollbar>
                              </ul>
                            <form className="conversation__input-container" onSubmit={this.sendMessage} action="">
                                <input ref="conversation__input" autoComplete="off" type="text" placeholder="Napisz wiadomość" className="conversation__input" />
                                <button type="submit" className="btn btn-send">
                                    Wyślij
                                </button>
                            </form>
                          </div>
    );
  }
}

export default ChatConversation;

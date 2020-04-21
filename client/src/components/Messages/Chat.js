import React, { Component } from 'react'
import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'
import Header from '../../components/Header/Header'

const URL = 'ws://localhost:3030'

class Chat extends Component {
  state = {
    name: 'Joe',
    messages: [],
  }

  ws = new WebSocket(URL)

  componentDidMount() {
    this.ws.onopen = () => {
      // on connecting, do nothing but log it to the console
      console.log('connected')
    }

    this.ws.onmessage = evt => {
      // on receiving a message, add it to the list of messages
      const message = JSON.parse(evt.data)
      this.addMessage(message)
    }

    this.ws.onclose = () => {
      console.log('disconnected')
      // automatically try to reconnect on connection loss
      this.setState({
        ws: new WebSocket(URL),
      })
    }
  }

  addMessage = message =>
  //this.setState(state => ({ messages: [message, ...state.messages] }))
   this.setState(state => ({ messages: [...state.messages, message] }))

  submitMessage = messageString => {
    // on submitting the ChatInput form, send the message, add it to the list and reset the input
    const message = { name: this.state.name, message: messageString }
    this.ws.send(JSON.stringify(message))
    this.addMessage(message)
  }

  render() {
    return (
      <div>
         <Header></Header>
      
         <div class= "leftColumn">
        <p >
          {/* Name:&nbsp; */}
          <div class = "pastMessages">
          <strong>Joey</strong> <br />
          <em>Hi! I am interested in your listing</em>
          </div>
          <div class = "pastMessages">
          <strong>George</strong> <br />
          <em>Hello, I am interested in your listing</em>
          </div>
          <div class = "pastMessages">
          <strong>Henry</strong> <br />
          <em>Hi! I am interested in your listing</em>
          </div>
        </p>
        </div>
        
        <div class="rightColumn">
        <div class = "incomingMessages">
        {this.state.messages.map((message, index) =>
          <ChatMessage
            key={index}
            message={message.message}
            name={message.name}
          />,
        )}
        </div>
          <ChatInput
          ws={this.ws}
          onSubmitMessage={messageString => this.submitMessage(messageString)}
        />
        </div>
      </div>
    )
  }
}

export default Chat
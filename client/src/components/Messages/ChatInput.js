import React, { Component } from 'react'
import PropTypes from 'prop-types'
import "./Messages.css"

class ChatInput extends Component {
  static propTypes = {
    onSubmitMessage: PropTypes.func.isRequired,
  }
  state = {
    message: '',
  }

  render() {
    return (

      <form
        class = "chatForm"
        action="."
        onSubmit={e => {
          e.preventDefault()
          this.props.onSubmitMessage(this.state.message)
          this.setState({ message: '' })
        }}
      >
       <div class= "messageBox">
        <input
          type="text"
          placeholder={'Enter message...'}
          value={this.state.message}
          onChange={e => this.setState({ message: e.target.value })}
        />
        <input class="sendButton" type="submit" value={'Send'} />
        </div>
      </form>

    )
  }
}

export default ChatInput
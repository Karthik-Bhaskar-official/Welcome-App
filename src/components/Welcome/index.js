// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribed: true}

  renderAuthButton = () => {
    const {isSubscribed} = this.state

    if (isSubscribed === true) {
      this.setState({isSubscribed: false})
    } else {
      this.setState({isSubscribed: true})
    }
  }

  render() {
    const {isSubscribed} = this.state

    return (
      <div className="bg-container">
        <h1>Welcome</h1>
        <p>Thank you! Happy Learning</p>
        {isSubscribed ? (
          <button type="button" onClick={this.renderAuthButton}>
            Subscribe
          </button>
        ) : (
          <button type="button" onClick={this.renderAuthButton}>
            Subscribed
          </button>
        )}
      </div>
    )
  }
}

export default Welcome

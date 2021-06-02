import React from 'react'

class Welcome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      countNumber: this.props.number,
    }
  }

  addCount = () => {
    let countNumber = this.state.countNumber
    this.setState({ countNumber: countNumber + 1 })
  }

  render() {
    return (
      <div>
        <h1>Hi, {this.props.name}</h1>
        <h2>Count: { this.state.countNumber }</h2>
        <button onClick={this.addCount.bind(this)}>Add</button>
      </div>
    );
  }
}

export default Welcome;

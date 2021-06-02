import React from 'react'
import './styles/index.css'
import ZodiacsTable from './reusable/zodiacTable'

class MainComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Hello World',
      zodiacs: [
        {id: '1', name: 'Leo',},
        {id: '2', name: 'Gemini'},
      ],
    }
  }

  render() {
    return (
      <div className="container">
        <div>{ this.state.title }</div>
        <ZodiacsTable data={this.state.zodiacs} />
      </div>
    );
  }
}

export default MainComponent;

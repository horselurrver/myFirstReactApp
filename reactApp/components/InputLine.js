import React from 'react';

export default class InputLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typedText: ''
    };
    this.handleTyping = this.handleTyping.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTyping(evt) {
    this.setState({
      typedText: evt.target.value
    })
  }

  handleSubmit() {
    if (this.state.typedText.length > 0) {
      this.props.submit(this.state.typedText);
      this.setState({
        typedText: ''
      });
    }
  }

  render() {
    return (
      <div className="input-group">
        <input placeholder="Enter todo here" onChange={(event) => this.handleTyping(event)} value={this.state.typedText} type="text" className="form-control"/>
          <span className="input-group-btn">
            <button onClick={this.handleSubmit} className="btn btn-info" type="button">Add todo</button>
          </span>
        </div>
    );
  }
}

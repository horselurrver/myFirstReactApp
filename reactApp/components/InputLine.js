import React from 'react';

export default class InputLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="input-group">
        <input type="text" className="form-control"/>
          <span className="input-group-btn">
            <button onClick={this.props.submit} className="btn btn-info" type="button">Add todo</button>
          </span>
        </div>
    );
  }
}

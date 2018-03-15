import React from 'react';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      turn: 'X',
      topLeft: '',
      topMid: '',
      topRight: '',
      midLeft: '',
      midCenter: '',
      midRight: '',
      botLeft: '',
      botMid: '',
      botRight: '',
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const playerTargetSquare = event.target.className;
    const currentTurn = this.state.turn;
    if (this.state[playerTargetSquare] === '') {
      let newTurn = this.state.turn === 'X' ? 'O' : 'X';
      this.state[playerTargetSquare] = currentTurn;
      this.setState({
        turn: newTurn,
      }, () => {
        console.log('After', this.state.turn);
      });
    }
  }

  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td className="topLeft" onClick={this.handleClick}>{this.state.topLeft}</td>
              <td className='topMid' onClick={this.handleClick}>{this.state.topMid}</td>
              <td className='topRight' onClick={this.handleClick}>{this.state.topRight}</td>
            </tr>
            <tr>
              <td className='midLeft' onClick={this.handleClick}>{this.state.midLeft}</td>
              <td className='midCenter' onClick={this.handleClick}>{this.state.midCenter}</td>
              <td className='midRight' onClick={this.handleClick}>{this.state.midRight}</td>
            </tr>
            <tr>
              <td className='botLeft' onClick={this.handleClick}>{this.state.botLeft}</td>
              <td className='botMid' onClick={this.handleClick}>{this.state.botMid}</td>
              <td className='botRight' onClick={this.handleClick}>{this.state.botRight}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Table;
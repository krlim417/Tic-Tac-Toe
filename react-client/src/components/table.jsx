import React from 'react';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      turn: 'x'
    }
  }

  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Table;
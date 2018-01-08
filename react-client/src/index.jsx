import React from 'react';
import ReactDOM from 'react-dom';
import Table from './components/table.jsx';
// import TopFiveLiked from './components/TopFiveSearched.jsx';
// import RecommendationList from './components/RecommendationList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <Table />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
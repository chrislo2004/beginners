import React,{ Component } from 'react';
import ReactDom from 'react-dom';
import Card from 'react-cards';

class App extends React.Component {
  render() {
    return (
      <Card
        src='path/to/img'
        titleSmallWord='Small word'
        titleBigWord='Big word'
        color='Overlay color'>
        Whatever text Here
      </Card>
    );
  }
}

ReactDom.render(<App />, document.getElementById('App'));

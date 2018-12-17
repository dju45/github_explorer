import React, { Component } from 'react';
import { ReactiveBase, DataSearch } from '@appbaseio/reactivesearch';

import theme from './theme';
import './App.css';

class App extends Component {
  render() {
    return (
      <section className="container">
      <ReactiveBase app="gitxplore-app" credentials="FULjx0b1x:f649ea80-f8b2-41df-9047-8ed3403f8075"
        type="githubExplorer"
        theme= {theme}>
        </ReactiveBase>
      </section>
    );
  }
}

export default App;

import React, { Component } from 'react';
import SongList from '../components/SongList';
import SongDetail from '../components/SongDetail';

class App extends Component {
  render() {
    return (
      <div className='ui container grid'>
        <div className='ui row'>
          <div className='column eight wide'>
            <h1>Songify</h1>
            <SongList />
          </div>
          <div className='column eight wide'>
            <SongDetail />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

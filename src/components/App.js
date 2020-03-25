import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

const API_KEY = `${process.env.REACT_APP_API_KEY_YT}`;

class App extends React.Component {
  state = { videos: [] };

  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
        part: 'snippet',
        maxResults: 5,
        key: API_KEY,
      },
    });

    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />I have{' '}
        {this.state.videos.length} videos.
      </div>
    );
  }
}

export default App;

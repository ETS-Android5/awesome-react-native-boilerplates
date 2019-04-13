import React, { Component } from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Home from './screens/Home';
import Page1 from './screens/Page1';
import Page2 from './screens/Page2';
import Page3 from './screens/Page3';
import Page4 from './screens/Page4';

class App extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'home', title: 'Home', icon: 'queue-music' },
      { key: 'albums', title: 'Albums', icon: 'album' },
      { key: 'recents', title: 'Recents', icon: 'history' },
      { key: 'inputs', title: 'Recents', icon: 'history' },
      { key: 'buttons', title: 'Recents', icon: 'history' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    home: Home,
    albums: Page1,
    recents: Page2,
    inputs: Page3,
    buttons: Page4,
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}

export default App;
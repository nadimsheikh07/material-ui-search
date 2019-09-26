import React, { Component } from 'react'

import { SearchBar } from 'material-ui-search'

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar
          onChange={() => console.log('onChange')}
          onRequestSearch={() => console.log('onRequestSearch')}
          onClear={() => console.log('onClear')}
          style={{
            margin: '0 auto',
            maxWidth: 800
          }}
        />
      </div>
    )
  }
}

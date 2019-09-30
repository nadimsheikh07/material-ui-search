# material-ui-search

> material ui search bar 

[![NPM](https://img.shields.io/npm/v/material-ui-search.svg)](https://www.npmjs.com/package/material-ui-search) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save material-ui-search
```

### Add the Reducer to Redux store

The first step is to add the reducer to your rootReducer when creating Redux's store.

```js
import { combineReducers } from 'redux'
import { searchbarReducer as searchbar } from 'material-ui-search'

const rootReducer = combineReducers({
  // other reducers...
  searchbar
})

export default rootReducer
```


### Add the SearchbarProvider component to the tree

The second step is to add the `SearchbarProvider` component somewhere in your app.

```js
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { SearchbarProvider } from 'material-ui-search'
import App from './App' // your entry page
import reducer from './reducers' // root reduer

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <SearchbarProvider>
            <App />
    </SearchbarProvider>
  </Provider>,
  document.getElementById('root')
)
```

Set the searchbar data

```js
import React from 'react'
import { withSearchbar } from 'material-ui-search'
import { SearchBar } from 'material-ui-search'

class MyComponent extends React.Component {

  onChangeSearch(event) {
    const { searchbar } = this.props
    searchbar.search(event);
  }

  render () {
    <div>
        <SearchBar
          onChange={(e) => { this.onChangeSearch(e) }}
          onRequestSearch={(e) => { this.onChangeSearch(e) }}
          onCancelSearch={(e) => { this.onChangeSearch(e) }}
          style={{
            margin: '0 auto',
            maxWidth: 800
          }}
        />
    </div>
  }
}

MyComponent = withSearchbar()(MyComponent)
export default MyComponent
```

Access the search data

```js
import React, { Component } from 'react'
import { withSearchbar } from 'material-ui-search'

class GetComponent extends React.Component {
    render() {
        const { searchQuery } = this.props.searchbar
        return (
            <React.Fragment>
                <h3>{searchQuery}</h3>
            </React.Fragment>
        )
    }
}

GetComponent = withSearchbar()(GetComponent)
export default GetComponent
```

## License

[MIT](LICENSE)

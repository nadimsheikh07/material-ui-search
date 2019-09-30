import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import App from './App'

import { Provider } from 'react-redux'
import { SearchbarProvider } from 'material-ui-search'
import configureStore from './store'
const store = configureStore()


ReactDOM.render(
    <Provider store={store}>
        <SearchbarProvider>
            <App />
        </SearchbarProvider>
    </Provider>,
    document.querySelector('#root')
)


import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import withRoot from 'material-ui-search/example/src/withRoot'
import { SearchBar } from 'material-ui-search'
import { withSearchbar } from 'material-ui-search'
import SearchData from './searchData'


const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing(20)
  }
})

class App extends Component {

  constructor(props) {
    super(props);
  }

  onChangeSearch(event) {
    const { searchbar } = this.props
    searchbar.search(event);
  }

  render() {

    const { classes } = this.props
    return (
      <div className={classes.root}>

        <Typography variant="h1" component="h1">
          Material-UI SearchBar Redux
        </Typography>

        <Typography variant="h4" component="h4">
          SearchBar component using Material-UI with Redux integration
        </Typography>

        <SearchBar
          onChange={(e) => { this.onChangeSearch(e) }}
          onRequestSearch={(e) => { this.onChangeSearch(e) }}
          onCancelSearch={(e) => { this.onChangeSearch(e) }}
          style={{
            margin: '0 auto',
            maxWidth: 800
          }}
        />

        <SearchData />
      </div>
    )
  }
}



App.propTypes = {
  classes: PropTypes.object.isRequired
}

App = withSearchbar()(App);
export default withRoot((withStyles(styles)(App)))

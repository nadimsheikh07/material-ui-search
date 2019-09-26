import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import { SearchBar } from 'material-ui-search'
import withRoot from 'material-ui-search/example/src/withRoot'

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing(20)
  }
})

class App extends Component {
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



App.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withRoot((withStyles(styles)(App)))

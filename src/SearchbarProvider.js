import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import actions from './actions'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    close: {
        padding: theme.spacing(0.5),
    }
});


class SearchbarProvider extends PureComponent {
    constructor() {
        super()
        this.state = {
            searchQuery: null,
        }
    }



    componentDidUpdate(prevProps, prevState) {
        if (this.props.searchbar !== prevProps.searchbar) {
            if (this.props.searchbar) {
                this.processQueue()
            }
        }
    }

    processQueue = () => {
        if (this.props.searchbar) {
            this.setState({ searchQuery: this.props.searchbar.options })
            this.props.clear(this.props.searchbar.id)
        }
    }

    static childContextTypes = {
        searchbar: PropTypes.object,
        searchQuery: PropTypes.string,
    }

    static propTypes = {
        children: PropTypes.node,
        SearchbarProps: PropTypes.object
    }

    getChildContext() {
        return {
            searchbar: {
                search: this.props.search,
                searchQuery: this.state.searchQuery
            }
        }
    }

    render() {
        const { children } = this.props
        return (
            <React.Fragment>
                {children}
            </React.Fragment>
        )
    }
}



SearchbarProvider = withStyles(styles)(SearchbarProvider);

export default connect(
    state => ({
        searchbar: state.searchbar.queue[0] || null
    }),
    dispatch => ({
        search: (options) => dispatch(actions.search({ options })),
        clear: (id) => dispatch(actions.clear({ id }))
    })
)(SearchbarProvider)
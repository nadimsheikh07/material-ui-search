import React, { Component } from 'react'
import { withSearchbar } from 'material-ui-search'


class SearchData extends Component {

    render() {
        const { searchQuery } = this.props.searchbar        
        return (
            <React.Fragment>
                <h3>{searchQuery}</h3>
            </React.Fragment>
        )
    }
}


SearchData = withSearchbar()(SearchData);

export default SearchData;
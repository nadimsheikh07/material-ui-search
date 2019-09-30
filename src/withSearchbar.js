import React from 'react'
import PropTypes from 'prop-types'

function withSearchbar() {
    return (Component) => {
        const ComponentWithSearchbar = (props, { searchbar }) => (
            <Component
                searchbar={searchbar}
                {...props}
            />
        )

        ComponentWithSearchbar.contextTypes = {
            searchbar: PropTypes.object.isRequired
        }

        return ComponentWithSearchbar
    }
}

export default withSearchbar
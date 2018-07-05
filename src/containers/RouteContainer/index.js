import React from 'react'
import { Route } from 'react-router-dom'
import {
    MainLayoutContainer,
    PofileContainer,
    PictureContainer
} from 'containers'

class RouteContainer extends React.Component {
    render() {
        return (
            <div>
                <Route path='/' component={MainLayoutContainer} />
            </div>
        )
    }
}

export default RouteContainer
import React from 'react'
import {
    Route
} from 'react-router-dom'
import { MainLayoutContainer } from 'containers'

class RouteContainer extends React.Component {
    componentDidMount() {
        this.props.history.push("/main")
    }
    render() {
        return (
            <div>
                <Route path='/main' component={MainLayoutContainer} />
            </div>
        )
    }
}

export default RouteContainer
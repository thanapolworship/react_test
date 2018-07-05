import React from 'react'
import { HeaderNavbar } from 'components'
import { Route } from 'react-router-dom'
import {
    PofileContainer,
    PictureContainer
} from 'containers'
class MainLayoutContainer extends React.Component {
    render() {
        return (
            <div>
                <HeaderNavbar />
                <div>
                    <Route path='/profile' component={PofileContainer} />
                    <Route path='/pictures' component={PictureContainer} />
                </div>
            </div>
        )
    }
}

export default MainLayoutContainer
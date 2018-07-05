import React from 'react'
import { Button } from 'reactstrap'
import { Progress } from 'reactstrap';

class MainLayoutContainer extends React.Component {
    render() {
        return (
            <div>
                <Button color="primary">primary</Button>{' '}
                <Button color="secondary">secondary</Button>{' '}
                <Button color="success">success</Button>{' '}
                <Button color="info">info</Button>{' '}
                <Button color="warning">warning</Button>{' '}
                <Button color="danger">danger</Button>{' '}
                <Button color="link">link</Button>
                <br />
                <div className="text-center">25%</div>
                <Progress value="25" />
            </div>
        )
    }
}

export default MainLayoutContainer
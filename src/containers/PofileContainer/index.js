import React from 'react'
import 'assets/page/profilepage.scss'
import { HeaderText } from 'components'
import {
    Container,
    Row,
    Col
} from 'reactstrap'

class PofileContainer extends React.Component {
    render() {
        return (
            <div className="profileContainer">
                <HeaderText
                    text='Profile'
                />
                <Container>
                    <Row>
                        <Col>
                            <figure className="imgContainer">
                                <img
                                    src="https://testcreative.co.uk/wp-content/uploads/2017/10/Test-Logo-Circle-black-transparent.png"
                                    className="img-thumbnail"
                                />
                            </figure>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="3">name:</Col>
                        <Col xs="auto">thanp chano</Col>
                    </Row>
                    <Row>
                        <Col xs="3">nickname:</Col>
                        <Col xs="auto">Asrock</Col>
                    </Row>
                    <Row>
                        <Col xs="3">tel:</Col>
                        <Col xs="auto">063-2489632</Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default PofileContainer
import React from 'react'
import Lightbox from 'react-images'
import './index.scss'

export class LigthBoxComponent extends React.Component {
    state = {
        lightboxIsOpen: false
    }

    openLightbox = (key) => {
        this.setState({
            lightboxIsOpen: true,
            currentImg: key
        })
    }
    closeLightbox = () => {
        this.setState({
            lightboxIsOpen: false
        })
    }
    gotoPrevious = () => {
        const { currentImg } = this.state
        let currentimagesNext = currentImg - 1
        this.setState({
            currentImg: currentimagesNext
        })
    }
    gotoNext = () => {
        const { currentImg } = this.state
        let currentimagesNext = currentImg + 1
        this.setState({
            currentImg: currentimagesNext
        })
    }

    render() {
        const { images } = this.props
        const { currentImg } = this.state
        return (
            <div className="ligth_box_container">
                <div className="image_group">
                    {
                        images.map(
                            (e, key) => {
                                return (
                                    <figure
                                        key={key}
                                        className="imgContainer"
                                        onClick={() => this.openLightbox(key)}
                                    >
                                        <img
                                            className="img-fluid"
                                            src={e.src}
                                        />
                                    </figure>
                                )
                            }
                        )
                    }
                </div>
                <Lightbox
                    images={images}
                    currentImage={currentImg}
                    isOpen={this.state.lightboxIsOpen}
                    onClickPrev={this.gotoPrevious}
                    onClickNext={this.gotoNext}
                    onClose={this.closeLightbox}
                />
            </div>
        )
    }
}

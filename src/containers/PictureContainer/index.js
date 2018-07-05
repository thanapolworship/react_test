import React from 'react'
import {
    HeaderText,
    LigthBoxComponent
} from 'components'

class PictureContainer extends React.Component {
    render() {
        return (
            <div>
                <HeaderText
                    text='Picture'
                />
                <LigthBoxComponent
                    images={LIGHTBOX_IMAGE_SET}
                />
            </div>
        )
    }
}

const LIGHTBOX_IMAGE_SET = [
    {
        src: 'https://images.unsplash.com/photo-1455717974081-0436a066bb96?dpr=2&auto=format&w=1024',
    },
    {
        src: 'https://images.unsplash.com/photo-1456926631375-92c8ce872def?dpr=2&auto=format&w=1024',
    }
];

export default PictureContainer
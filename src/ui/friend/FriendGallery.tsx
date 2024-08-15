import { Carousel } from 'antd'
import { useMemo } from 'react'

import gallery1 from '../../assets/gallery1.jpeg'
import gallery2 from '../../assets/gallery2.jpeg'
import gallery3 from '../../assets/gallery3.jpeg'

export const FriendGallery = () => {
    const images = useMemo(() => [gallery1, gallery2, gallery3], [])

    return (
        <Carousel className="friend-gallery" autoplay>
            {images.map((image) => (
                <img className="friend-gallery-image" src={image} />
            ))}
        </Carousel>
    )
}

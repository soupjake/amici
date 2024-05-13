import carmen from '../../assets/carmen.jpg'
import cus from '../../assets/cus.jpg'
import sydney from '../../assets/sydney.jpg'

type Props = {
    className?: string
    image: string
}

export const FriendImage = (props: Props) => {
    const { className, image } = props

    let imageSrc = carmen

    if (image === 'cus') {
        imageSrc = cus
    }

    if (image === 'sydney') {
        imageSrc = sydney
    }

    return <img className={className} src={imageSrc} />
}

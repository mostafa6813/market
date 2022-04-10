import Image from 'next/image'

export default function Box({img, title, price, off}) {
    return <div className="box">
        <div className="img">
            <Image src={img} />
        </div>
        <div className="title">{title}</div>
        <div className="price">Price: {price}</div>
        <div className="off">OFF: {off}</div>
    </div>
}
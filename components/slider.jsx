import Slider from 'react-slick'
import "/node_modules/slick-carousel/slick/slick.css";
import "/node_modules/slick-carousel/slick/slick-theme.css";
import Image from 'next/image'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import image1 from '../public/image1.jpg'
import image2 from '../public/image2.jpg'
import image3 from '../public/image3.jpg'
import image4 from '../public/image4.jpg'
import image5 from '../public/image5.jpg'

export default function MainSlider() {
    const settings = {
        dots: true,
        infinite: true,
        pauseOnHover:false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dotsClass: "button__bar",
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    }

    return (
        <div className='slider'>
            <Slider {...settings}>
                <div>
                    <Image src={image1} />
                </div>
                <div>
                    <Image src={image2} />
                </div>
                <div>
                    <Image src={image3} />
                </div>
                <div>
                    <Image src={image4} />
                </div>
                <div>
                    <Image src={image5} />
                </div>
            </Slider>
        </div>
    )
}

function NextArrow(props) {
    return (
        <div
            className='prev-button'
            onClick={props.onClick}
        >
            <ArrowBackIosNewIcon style={{ color: '#ddd', fontSize: 30 }} />
        </div>
    )
}

function PrevArrow(props) {
    return (
        <div
            className='next-button'
            onClick={props.onClick}
        >
            <ArrowForwardIosIcon style={{ color: '#ddd', fontSize: 30 }} />
        </div>
    )
}
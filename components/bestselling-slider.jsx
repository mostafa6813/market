import Slider from 'react-slick'
import "/node_modules/slick-carousel/slick/slick.css";
import "/node_modules/slick-carousel/slick/slick-theme.css";
import Image from 'next/image'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Box from './box';
import image1 from '../public/b1.jpg'
import image2 from '../public/b2.jpg'
import image3 from '../public/b3.jpg'
import image4 from '../public/b4.jpg'
import image5 from '../public/b4.jpg'

export default function BestsellingSlider() {
    const settings = {
        dots: false,
        fade: false,
        infinite: true,
        pauseOnHover: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        dotsClass: "btn-slider",
        arrows: true,
        nextArrow: <BnextArrow />,
        prevArrow: <BprevArrow />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return (
        <div className='b-slider'>
            <Slider {...settings}>
                <div className='slide'>
                    <Box title='title' img={image1} price='1000$' off='0%' />
                </div>
                <div className='slide'>
                    <Box title='title' img={image2} price='1000$' off='0%' />
                </div>
                <div className='slide'>
                    <Box title='title' img={image3} price='1000$' off='0%' />
                </div >
                <div className='slide'>
                    <Box title='title' img={image4} price='1000$' off='0%' />
                </div>
                <div className='slide'>
                    <Box title='title' img={image5} price='1000$' off='0%' />
                </div>
                <div className='slide'>
                    <Box title='title' img={image3} price='1000$' off='0%' />
                </div >
                <div className='slide'>
                    <Box title='title' img={image4} price='1000$' off='0%' />
                </div>
                <div className='slide'>
                    <Box title='title' img={image5} price='1000$' off='0%' />
                </div>
            </Slider>
        </div>
    )
}

function BnextArrow(props) {
    return (
        <div
            className='b-prev-button'
            onClick={props.onClick}
        >
            <ArrowBackIosNewIcon style={{ color: '#555', fontSize: 40 }} />
        </div>
    )
}

function BprevArrow(props) {
    return (
        <div
            className='b-next-button'
            onClick={props.onClick}
        >
            <ArrowForwardIosIcon style={{ color: '#555', fontSize: 40 }} />
        </div>
    )
}
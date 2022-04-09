import Link from "next/link"
import Image from 'next/image'
import cate1 from '../public/cate1.png'
import cate2 from '../public/cate2.png'
import cate3 from '../public/cate3.png'
import cate4 from '../public/cate4.png'
import cate5 from '../public/cate5.png'

export default function Category() {
    return (
        <div className="category">
            <h3>Category</h3>
            <div className="detials">
                <Link href='/'>
                    <div className="img" >
                        <Image src={cate1} />
                        <div className="text">Digital</div>
                    </div>
                </Link>
                <Link href='/'>
                    <div className="img">
                        <Image className="img" src={cate2} />
                        <div className="text">Tools</div>
                    </div>
                </Link>
                <Link href='/'>
                    <div className="img">
                        <Image className="img" src={cate3} />
                        <div className="text">Clothing</div>
                    </div>
                </Link>
                <Link href='/'>
                    <div className="img">
                        <Image className="img" src={cate4} />
                        <div className="text">Text</div>
                    </div>
                </Link>
                <Link href='/'>
                    <div className="img">
                        <Image className="img" src={cate5} />
                        <div className="text">Text</div>
                    </div>
                </Link>
            </div>
        </div >
    )
}
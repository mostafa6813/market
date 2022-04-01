import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
    return (
        <div className='logo'>
            <Link href='/'>
                <div className='logo-image'>
                    <Image
                        src='/logo.png'
                        width={40}
                        height={40}
                    />
                </div>
            </Link>
        </div>
    )
}
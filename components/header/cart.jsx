import Link from 'next/link'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'

export default function Cart() {
    return (
        <div className='cart'>
            <Link href='/'>
                <div className="cart-link">
                    <ShoppingCartOutlinedIcon style={{ color: '#888' }} fontSize="medium" />
                </div>
            </Link>
        </div>
    )
}
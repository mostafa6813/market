import Link from "next/link"
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'

export default function Nav() {
    return (
        <div className="login">
            <Link href='/'>
                <div className="login-link">
                    <PersonOutlineOutlinedIcon style={{ color: '#888' }} fontSize="medium" />
                </div>
            </Link>
        </div>
    )
}
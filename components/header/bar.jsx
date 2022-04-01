import MenuIcon from '@mui/icons-material/Menu'
import ClearIcon from '@mui/icons-material/Clear'
import { useEffect } from 'react'

export default function Bar() {

    useEffect(() => {

        document.getElementById('bar').onclick = () => {
            if (document.getElementById('nav').classList.contains('menu')) {
                document.getElementById('nav').classList.remove('menu')
            } else {
                document.getElementById('nav').classList.add('menu')
            }
        }
    }, [])

    return (
        <div className="bar" id="bar">
            <MenuIcon />
        </div>
    )
}

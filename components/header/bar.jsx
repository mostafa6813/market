import { useSelector, useDispatch } from 'react-redux'
import MenuIcon from '@mui/icons-material/Menu'
import ClearIcon from '@mui/icons-material/Clear'
import { useEffect } from 'react'

export default function Bar() {
    const menuIcon = useSelector((state) => state.menuIcon)
    const dispatch = useDispatch()

    useEffect(() => {
        document.getElementById('bar').onclick = () => {
            if (document.getElementById('nav').classList.contains('menu')) {
                document.getElementById('nav').classList.remove('menu')
            } else {
                document.getElementById('nav').classList.add('menu')
            }
        }
    }, [])

    const handleClick = () => {
        if (menuIcon.menuIcon === 'bar') {
            dispatch({ type: 'CLEAR' })
        } else {
            dispatch({ type: 'BAR' })
        }
    }

    return (
        <div className="bar" id="bar" onClick={handleClick}>
            {
                menuIcon.menuIcon === 'bar' ? <MenuIcon /> : <ClearIcon />
            }
        </div>
    )
}

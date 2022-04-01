import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export default function Search() {
    return (
        <div className='search'>
            <form>
                <input type='text' />
                <button type="submit">
                    <SearchOutlinedIcon/>
                </button>
            </form>
        </div>
    )
}
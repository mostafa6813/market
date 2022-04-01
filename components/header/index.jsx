import Logo from "./logo"
import Nav from "./nav"
import Search from "./search"
import Cart from "./cart"
import Bar from "./bar"
import Login from "./login"

export default function Header() {
    return (
        <>
            <section id='header' className='header'>
                <div className='container'>
                    <Logo />
                    <Search />
                    <Cart />
                    <Login />
                    <Bar />
                    <Nav />
                </div>
            </section>
        </>
    )
}
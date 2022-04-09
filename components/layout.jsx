import Header from './header'
import Footer from './footer'

export default function Layout({ children }) {
    return (
        <>
            <div className='main-container'>
                <Header />
                <main>{children}</main>
                <Footer />
            </div>
        </>
    )
}
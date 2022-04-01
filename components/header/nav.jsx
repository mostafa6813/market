import Link from "next/link";

export default function Nav() {
    return (
        <nav className='nav' id='nav'>
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
            <Link href="/about">About</Link>
            <Link href="/contract">Contract</Link>
            <Link href="/blog">Blog</Link>
        </nav>
    )
}

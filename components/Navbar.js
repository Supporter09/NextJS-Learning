import Link from 'next/link'
import Image from 'next/image';
const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src='/logo.png' width={32} height={32}/>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/ball"><a>Ball Listingc</a></Link>
        </nav>
    );
}
 
export default Navbar;
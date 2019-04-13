import Link from 'next/link'

const Layout = ({children}) => {
    return <>
    <div className="header">
        <Link href="/"><button>Home</button></Link>
        <Link href="/about"><button>About</button></Link>
    </div>
    {children}
    </>
}
export default Layout
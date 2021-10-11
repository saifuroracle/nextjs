import Link from 'next/link'

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link href="/">
                                <a className="nav-link">Home</a>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link href="/product">
                                <a className="nav-link">Products</a>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link href="/posts">
                                <a className="nav-link">Posts</a>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link href="/news">
                                <a className="nav-link">News</a>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link href="/about">
                                <a className="nav-link">About</a>
                            </Link>
                        </li>
                        
                    </ul>
                   
                </div>
            </nav>
        </>
    )
}

export default Header

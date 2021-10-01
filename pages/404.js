import Link from 'next/link'

function PageNotFound() {
    return (
        <>
            <h1>404</h1>
            <h3>Page not found</h3>
            <Link href="/">
                <a>Go to Home</a>
            </Link>
        </>
    )
}

export default PageNotFound

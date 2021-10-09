import { useRouter } from 'next/router'
import Link from 'next/link'

function Home() {

    const router = useRouter()

    const handleOrder = () => {
        router.push('product')
    }

    return (
        <>
            <h1>Home page</h1>
            <hr />
            <Link href="/blog">
                <a>Blog</a>
            </Link>
            <hr />
            <Link href="/product">
                <a>Products</a>
            </Link>
            <hr />

            <Link href="/posts">
                <a>Posts</a>
            </Link>
            <hr />

            <Link href="/news">
                <a>News</a>
            </Link>
            <hr />

            <button onClick={handleOrder}>Place order</button>
        </>
    )
}

export default Home

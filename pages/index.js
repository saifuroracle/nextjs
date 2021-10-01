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
            <Link href="/blog">
                <a>Blog</a>
            </Link>
            <Link href="/product">
                <a>Products</a>
            </Link>

            <button onClick={handleOrder}>Place order</button>
        </>
    )
}

export default Home

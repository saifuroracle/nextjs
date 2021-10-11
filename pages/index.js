import Head from 'next/head' 
import { useRouter } from 'next/router'

function Home({ title, description}) {

    const router = useRouter()

    const handleOrder = () => {
        router.push('product')
    }

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Head>

            <button onClick={handleOrder}>Place order</button>
        </>
    )
}

export default Home

export const getServerSideProps = async (ctx) => {

    return {
        props: {
            title: 'Home',
            description: 'This is home description',
        }
    }
}
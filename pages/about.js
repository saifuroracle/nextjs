import Head from 'next/head' 

function About({title, description}) {
    return (
        <>
            <h1>About page</h1>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Head>
        </>
    )
}

export default About


export const getServerSideProps = async (ctx) => {

    return {
        props: {
            title: 'About',
            description: 'This is about description',
        }
    }
}
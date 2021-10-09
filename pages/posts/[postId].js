import { useRouter } from "next/router";

function PostDetail({post}) {
    const router = useRouter()
    if (router.isFallback) {
        return <h1>Loading..</h1>
    }
    return (
        <>
            <h2>{post?.title}</h2>
            <p>{post?.body}</p>
        </>
    )
}

export default PostDetail

export async function getStaticPaths() {
    return {
        paths: [
            { params: { postId: '1' }},
            { params: { postId: '2' }},
            { params: { postId: '3' }},
        ],
        fallback: true
    };
}

export async function getStaticProps(context) {
    const { params } = context
    const response = await fetch(`http://localhost:4000/posts/${params?.postId}`)
    const data = await response.json()

    if (!data.id) {
        return {
            notFound: true
        }
        
    }

    return {
        props: {
            post:data
        },
        revalidate: 1
    }
}

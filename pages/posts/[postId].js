
function PostDetail({post}) {
    return (
        <>
            <h2>{post?.title}</h2>
            <p>{post?.body}</p>
        </>
    )
}

export default PostDetail

export async function getStaticPaths() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await response.json()

    const paths = posts.map(post => {
        return {
            params: {
                postId: `${post?.id}`
            }
        }
    })

    return {
        // paths: [
        //     { params: { postId: '1' }},
        //     { params: { postId: '2' }},
        //     { params: { postId: '3' }},
        //     { params: { postId: '4' }},
        //     { params: { postId: '5' }},
        // ],
        paths,
        fallback: false
    };
}

export async function getStaticProps(context) {
    const { params } = context
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params?.postId}`)
    const data = await response.json()

    return {
        props: {
            post:data
        }
    }
}

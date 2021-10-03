import Link from 'next/link'

function PostList({posts}) {
    return (
        <>
            {
                posts?.map(post => {
                    return (
                        <>
                            <Link href={'/posts/'+post.id}>
                                <a >{post.id+'. '+post.title}</a>
                            </Link>
                            <hr />
                        </>
                    )
                })
            }
        </>
    )
}

export default PostList



export async function getStaticProps () {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    return{
        props:{
            posts:data
        }
    }
}
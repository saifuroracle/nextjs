import User from '../components/user'

function UserList({users}) {
    return (
        <>
            <h1>User list</h1>
            {
                users?.map(user => {
                   return(
                        <User user={user} key={user?.id} />
                   )
                })
            }
        </>

    )
}

export default UserList


export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')

    const data = await response.json()

    console.log(data);

    if (!data) {
        return {
          notFound: true,
        }
    }

    return{
        props:{
            users:data
        }
    }
};
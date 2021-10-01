import { useRouter } from "next/router"

function Docs() {
    const router = useRouter()
    const {params=[]} = router.query
    console.log('params ', params);

    if (params?.length>0) {
        return <h1>Doc page with param</h1>
    } 
    return <h1>Doc home page</h1>
    
}

export default Docs

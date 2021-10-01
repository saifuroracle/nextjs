import { useRouter } from "next/router"


function ProductDetails() {
    const router = useRouter();
    const {productId} = router.query
    
    return (
        <h1>Product Details - productId = {productId}</h1>
    )
}

export default ProductDetails

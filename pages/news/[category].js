import React from 'react'

function ArticleListByCategory({articles,category}) {
    return (
        <>
            <h1>Article list for category {category}</h1>
            {
                articles?.map((article, index) => {
                    return <p key={'article-'+index}>{'Id: '+article?.id+', Title: '+ article?.title+', Category: '+ article?.category}</p>
                })
            }
        </>
    )
}

export default ArticleListByCategory

export async function getServerSideProps(context) { 
    const {req, res, headers, query, params, url } = context  
    const {category} = params
    const response = await fetch('http://localhost:4000/news?category='+category)
    const data = await response.json()
    
    console.log(context);
    console.log(data);
    return {
        props: {
            articles: data
        }
    }
}
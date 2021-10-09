import React from 'react'

function NewsListArticle({ articles }) {
    return (
        <>
            <h1>List of new articles</h1>
            {
                articles?.map((article, index) => {
                    return <p key={'article-'+index}>{'Id: '+article?.id+', Title: '+ article?.title+', Category: '+ article?.category}</p>
                })
            }
        </>
    )
}

export default NewsListArticle

export async function getServerSideProps(){
    const response = await fetch('http://localhost:4000/news')
    
    const data = await response.json()
    
    return {
        props: {
            articles: data
        }
    }
}
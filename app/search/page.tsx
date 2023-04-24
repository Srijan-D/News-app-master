import fetchNews from '@/lib/fetchNews'
import React from 'react'
import NewsList from '../NewsList'

type Props = {
    searchParams?: { term: string }
}

async function SearchPage({ searchParams }: Props) {
    const news: NewsResponse = await fetchNews(
        "general",
        searchParams?.term,//use this as keyword and create a dynamic request
        true//we need to refetch cant give back stale data
    )

    return (
        <div>
            <h1 className='Title'>Search Results for: {searchParams?.term}</h1>
            <NewsList news={news} />
        </div>
    )
}

export default SearchPage
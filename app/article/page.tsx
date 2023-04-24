
import { notFound } from "next/navigation"

type Props = {
    searchParams?: Article
}

function ArticlePage({ searchParams }: Props) {
    if (
        (searchParams && Object.entries(searchParams).length === 0) || !searchParams
    ) return notFound()
    // console.log(searchParams)   
    const article: Article = searchParams;

    return (
        <article>
            <section className="flex flex-col lg:flex-row px-0 lg:px-10">
                {article.image && (
                    <img src={article.image} alt="article.title"
                        className="h-50 max-w-md mx-auto md:max-w-lg lg:max-w-xl
                    object-cover object-center rounded-lg shadow-lg
                    "
                    />
                )}
                <div className="px-10">
                    <h1 className="Title px-0 no-underline pb-2">{article.title}</h1>
                    <div className="flex divide-x-2 space-x-4">
                        <h2 className="font-bold">By: {(article.author !== null) ? article.author : "unknown"}</h2>
                        <h2 className="font-bold pl-4">Source: {(article.source !== null) ? article.source : "unknown"}</h2>
                        <p className="pl-4">{article.published_at}</p>
                    </div>
                    <p className="pt-4">{article.description}</p>
                </div>
            </section>

        </article>
    )
}

export default ArticlePage

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
            <section>
                {article.image && (
                    <img src={article.image} alt="article.title"
                        className="h-50 max-w-md mx-auto md:max-w-lg lg:max-w-xl
                    object-cover object-center rounded-lg shadow-lg
                    "
                    />
                )}
                <div className="px-10">
                    <h1 className="px-0 no-underline pb-2">{article.title}</h1>
                    <div>
                        <h2>By: {(article.author !== null) ? article.author : "unknown"}</h2>
                        <h2>Source: {(article.source !== null) ? article.source : "unknown"}</h2>
                    </div>
                </div>
            </section>

        </article>
    )
}

export default ArticlePage
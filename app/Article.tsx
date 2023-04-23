import Image from "next/image"

type Props = {
  article: Article
}

function Article({ article }: Props) {
  return (
    <article>
      {article.image && (
        <img 
        src={article.image} 
        alt={article.title}
        className="h-56 w-full object-cover shadow-md"
        />
      )}
      <div>
        <div>
          <h2>{article.title}</h2>
          <section>
            <p>{article.description}</p>
          </section>
          <footer>
            <p>{article.source}</p>
            <p>{article.published_at}</p>
          </footer>
        </div>
      </div>
    </article>
  )
}

export default Article
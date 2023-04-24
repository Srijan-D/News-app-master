import Image from "next/image"
import ReadMoreButton from "./ReadMoreButton"
import TimeStamp from "./TimeStamp"

type Props = {
  article: Article
}

function Article({ article }: Props) {
  return (
    <article className="bg-slate-100 dark:bg-slate-800 flex flex-col rounded-lg shadow-sm hover:scale-105 hover:shadow-lg hover:bg-slate-200 transition-all duration-200 ease-out ">
      {article.image && (
        <img
          // not using Next Image tag as we cant particularly know the domain 
          // as we need to whitelist the domain used 
          src={article.image}
          alt={article.title}
          className="h-56 w-full object-cover shadow-md rounded-t-lg"
        />
      )}
      <div className="flex-1 flex flex-col">
        <div className="flex-1 flex flex-col p-5 ">
          <h2 className="font-bold font-serif ">{article.title}</h2>
          <section className="mt-2 flex-1">
            <p className="text-xs line-clamp-3">{article.description}</p>
          </section>
          <footer>
            <p>{article.source}</p>
            <p>
              <TimeStamp time={article.published_at} />
              
            </p>
          </footer>
        </div>
        <ReadMoreButton article={article} />
      </div>
    </article>
  )
}

export default Article
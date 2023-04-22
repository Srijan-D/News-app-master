import React from 'react'

type Props = {
  article: Article
}

function Article({article}: Props) {
  return (
    <article>
      {article.image&&(
        
      )}
    </article>
  )
}

export default Article
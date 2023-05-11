"use client"
import { useRouter } from "next/navigation"
import { encode } from "querystring"
type Props = {
    article: Article
}

function ReadMoreButton({ article }: Props) {
    const router = useRouter()

    const handleClick = () => {
        const url = `/article?${encode(article)}`
        router.push(`${url}`)
    }

    return (
        <button
            onClick={handleClick}
            className="bg-orange-400 h-10 rounded-b-lg dark:text-gray-900 hover:bg-orange-500"
        >Read More

        </button>
    )
}

export default ReadMoreButton
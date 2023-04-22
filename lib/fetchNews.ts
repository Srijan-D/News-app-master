import { gql } from "graphql-request"
const fetchNews = async (
    category?: Category | string,
    keyword?: string,
    isDynamic?: boolean,
) => {
    const query = gql`
    query MyQuery(
        $access_key: String!
        $categories: String!
        $keywords: String!
    ) {
        myQuery(
            access_key: $access_key
            categories: $categories
            countries: "in"
            sort: "published_desc"
            keywords: $keywords
        ) {
            data{
                author
                category
                image
                description
                country
                language
                published_at
                source
                title
                url
            }
            pagination{
                count
                limit
                offset
                total
            }
        }
    }`;

    //fetching data from the api
    const res = await fetch(" https://dolisie.stepzen.net/api/quieting-gecko/__graphql", {
        method: "POST",
        cache: isDynamic ? "no-cache" : "default",
        next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
        headers: {
            "Content-Type": "application/json",
            Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`
        }
    })

}
//http://api.mediastack.com/v1/news?access_key=093d71c51c61edd065631b084c515218&categories=health,sports&limit=100

export default fetchNews
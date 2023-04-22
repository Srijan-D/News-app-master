
function sortNewsByImage(news: NewsResponse) {
const newsWithImages= news.data.filter((item)=>item.image!==null)
const newsWithoutImages= news.data.filter((item)=>item.image===null)


    return (
     
    )
}

export default sortNewsByImage
function sortNewsByImage(news: NewsResponse) {
    const newsWithImages = news.data.filter((item) => item.image !== null)
    const newsWithoutImages = news.data.filter((item) => item.image === null)

    // //either we spread or we riginalspread

    // const newsWithImagesAndText = [...newsWithImages, ...newsWithoutImages]

    //or we spread

    const sortedNews = {
        pagination: news.pagination,
        data: [...newsWithImages, ...newsWithoutImages]
    }

    return sortedNews

}

export default sortNewsByImage
export const fetchMarkdownPosts = async () => {
    // Vite 함수입니다. 제공된 glob(와일드카드 문자열)과 일치하는 모든 파일(이 경우 src/routes/blog 내의 모든 .md 파일)을 가져옵니다.
    const allPostFiles = import.meta.glob('/src/routes/blog/*.md')
    const iterablePostFiles = Object.entries(allPostFiles)

    const allPosts = await Promise.all(
        iterablePostFiles.map(async ([path, resolver]) => {
            const { metadata } = await resolver()
            const postPath = path.slice(11, -3)

            return {
                meta: metadata,
                path: postPath,
            }
        })
    )

    return allPosts
}
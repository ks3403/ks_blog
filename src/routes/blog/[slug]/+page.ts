// @ts-ignore

export async function load({ params }){
    const post = await import(`../${params.slug}.md`)
    console.log("post!!!", post)
    const { title, date } = post.metadata
    const content = post.default

    return {
        content,
        title,
        date,
    }
}
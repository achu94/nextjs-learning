import { getLatestArticles } from "app/lib/data/articles";
import ArticleFeaturedCard from "./article-featured-card";

export default async function NewArticles({ count, title }: { count: number, title: string; }) {
    const articles = await getLatestArticles(count);

    return (
        <div>
            <h1 className="text-2xl">{title}</h1>
            <section className="flex gap-5 self-start flex-wrap">
                {articles.map((article, index) => {
                    return <ArticleFeaturedCard key={index} article={article} />
                })}
            </section>
        </div>
    )
}
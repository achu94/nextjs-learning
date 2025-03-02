import { getLatestArticles } from "app/lib/data/articles";
import ArticleCard from "./articel-card";


export default async function Page() {

    const articleList = await getLatestArticles();

    return (
        <div className="p-4 flex flex-col justify-center">
            <div className="p-2">
                {articleList.map((article) => (<ArticleCard key={article.id} article={article} />))}
            </div>
        </div>
    )
}

export const revalidate = 60;
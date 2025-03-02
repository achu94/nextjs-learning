import Image from "next/image";
import { getArticle } from "app/lib/data/articles";
import ArticleAngebotForm from "app/components/articles/article-angebot-form";

export default async function Page({
  params,
}: {
  params: Promise<{ article: string }>
}) {

  const articleId = (await params).article;

  const article = await getArticle(articleId);

  if (article === null) {
    return "NOT FOUND"
  }

  return (
    <div className="flex flex-col md:flex-row gap-5 items-start p-4">
      <div className="flex flex-col">
        <Image loading="lazy" alt={article.title} src={article.image} width={640} height={320} />
        <div>
          <p className="text-3xl">{article.title}</p>
          <p className="text-amber-200 font-bold text-2xl">{article.price} €</p>
        </div>
        <div>
          <p className="font-bold">Beschreibung</p>
          <hr />
          <p className="m-1">{article.description}</p>
        </div>
      </div>
      <ArticleAngebotForm />
    </div>
  )
}
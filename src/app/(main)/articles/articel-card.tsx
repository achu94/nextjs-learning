'use clinet'

import type Article from "app/lib/types/article"
import Image from "next/image"
import Link from "next/link";

export default function ArticleCard({ article }: { article: Article }) {

    const shortDescription = (description: string) => (description.substring(0, 100));

    return (
        <Link href={`/articles/${article.id}`}>
            <div className="flex gap-2 border m-2 rounded-sm cursor-pointer hover:scale-101 hover:border-amber-200">
                <Image loading="lazy" width={160} height={80} src={article.image} alt={article.title} />
                <div className="flex flex-col justify-between">
                    <div>
                        <p className="text-2xl">{article.title}</p>
                        <p className="p-1">{shortDescription(article.description)}..</p>
                    </div>
                    <div>
                        <p className="text-amber-200 font-bold text-lg">{article.price} €</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}
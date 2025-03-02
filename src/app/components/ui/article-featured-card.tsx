'use clinet'

import Image from "next/image";
import type ArticleType from "app/lib/types/article"
import Link from "next/link";

export default function ArticleFeaturedCard({ article }: { article: ArticleType }) {
    return (
        <Link href={`/articles/${article.id}`}>
            <div key={article.id} className="article-card flex-col bg-amber-200 text-gray-900">
                <Image
                    src={article.image || '/images/placeholder.jpg'}
                    alt={article.title}
                    width={320}
                    height={180}
                    loading="lazy"
                />
                <h3 className="p-2">{article.title}</h3>
            </div >
        </Link>
    );
}
import type ArticleType from "../types/article";

const API_URL = "http://localhost:3000/articles.json";

export async function getLatestArticles(count?: number): Promise<ArticleType[] | []> {
    try {
        const response = await fetch(API_URL);

        const articles: ArticleType[] = await response.json();

        const shuffled = [...articles];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }

        return count ? shuffled.slice(0, count) : shuffled;
    } catch (error) {
        console.error("Failed to fetch articles:", error);
        return [];
    };
}

export async function getArticle(id: string): Promise<ArticleType | null> {
    try {
        const response = await fetch(API_URL);

        const articles: ArticleType[] = await response.json();

        const article = articles.filter((article) => article.id === id);

        return article[0];
    } catch (error) {
        console.error("Failed to fetch article with ID: ", id, error);
        return null;
    };
}
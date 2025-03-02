import NewArticles from "app/components/new-articles";

export default async function Home() {

  return (
    <main className="grid items-start min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Server component with direct data fetching */}
      <NewArticles title="Neuste Anzeigen" count={5} />
    </main>
  );
}

export const revalidate = 60;

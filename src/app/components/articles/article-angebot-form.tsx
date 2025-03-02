'use client'

export default function ArticleAngebotForm() {

    const handleAngebot = (e: React.FormEvent) => {
        e.preventDefault();

        console.log(e);
    }


    return (
        <form className="flex flex-col gap-5 w-full" onSubmit={handleAngebot}>
            <textarea placeholder="Angebot angeben..." rows={5} className="bg-gray-200 text-black p-2 w-full" name="message" id="message"></textarea>
            <button className="p-2 rounded-2xl bg-amber-200 text-gray-900">Angebot</button>
        </form>
    )
}
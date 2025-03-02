import Link from "next/link"

export default function Header() {
    return (
        <div className="m-1">
            <nav className="flex justify-between p-4 items-center">
                <Link href="/">
                    <div className="border-2 p-2" >LOGO</div>
                </Link>
                <div className="flex gap-10">
                    <Link href="/">Home</Link>
                    <Link href="/articles">Articles</Link>
                </div>
            </nav>
            <hr />
        </div>
    )
}
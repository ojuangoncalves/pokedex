import Link from "next/link";

export default function Header() {
    return (
        <header className="flex justify-between items-center py-6 pb-9 px-8 bg-red-500">
            <Link href="/" className="text-5xl text-white font-pokemon tracking-wider" style={{ WebkitTextStroke: '3px #000' }}>
                Pokedéx de Kanto
            </Link>
            <img src="" alt="" />
        </header>
    )
}
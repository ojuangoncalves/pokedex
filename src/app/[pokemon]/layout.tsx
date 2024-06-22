import { Metadata } from "next"

type Props = {
    params: {
        pokemon: string
    }
}

export function generateMetadata(
    { params } : Props
) : Metadata {
    let fl = params.pokemon[0]
    const pokemonName = params.pokemon.replace(fl, fl.toUpperCase()) // Colocando a primeira letra do nome do Pokémon em maiúscula

    return {
        title: pokemonName
    }
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
        <>
		{ children }
        </>
	)
}
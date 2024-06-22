import { MainClient } from "pokenode-ts"
import Link from "next/link"

export default async function Page() {
	const api = new MainClient()

	const PokemonList = (await api.game.getPokedexByName('kanto')).pokemon_entries

  return (
	<main className="grid grid-cols-5 justify-center justify-items-center place-items-center item-center gap-10 p-12">
		{
			PokemonList.map(pokemon => {
				return (
					<Link key={pokemon.entry_number} href={ `/${pokemon.pokemon_species.name}` }>
						<div className="flex flex-col justify-between items-center p-10 rounded-lg shadow-xl bg-white">
							<img src={`https://img.pokemondb.net/sprites/go/normal/${pokemon.pokemon_species.name}.png`} className="w-24 h-24" alt="" />
							<p className="text-center">
								{ pokemon.pokemon_species.name }
							</p>
						</div>
					</Link>
				)
			})
		}
	</main>
  )
}
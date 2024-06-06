import { MainClient } from "pokenode-ts"
import Link from "next/link"

interface evolutionData {
    pokemon_name: string
    level?: number | null
    type?: string | null
    is_first?: boolean
}

interface EvolutionChainProps {
    id: number
}

export default async function EvolutionChain(props: EvolutionChainProps) {

    const api = new MainClient()
    const evolutionChain = await api.evolution.getEvolutionChainById(props.id)

    let evolutions : evolutionData[] = [
        { pokemon_name: evolutionChain.chain.species.name, is_first: true } // adding the first Pokémon of evolution chain
    ]

    // adding anothers Pokémon in evolution chain - max limit => 2 pokémons
    if(evolutionChain.chain.evolves_to) {
        evolutions.push({
            pokemon_name: evolutionChain.chain.evolves_to[0].species.name,
            level: evolutionChain.chain.evolves_to[0].evolution_details[0].min_level,
            type: evolutionChain.chain.evolves_to[0].evolution_details[0].trigger.name
        })
        if (evolutionChain.chain.evolves_to[0].evolves_to) {
            evolutions.push({
                pokemon_name: evolutionChain.chain.evolves_to[0].evolves_to[0].species.name,
                level: evolutionChain.chain.evolves_to[0].evolves_to[0].evolution_details[0].min_level,
                type: evolutionChain.chain.evolves_to[0].evolves_to[0].evolution_details[0].trigger.name
            })
        }
    }

    return (
        <div className='flex flex-row justify-between'>
            { evolutions.map(evolution => {
                // generate the evolution chain
                if (!evolution.is_first) {
                    return (
                        <Link href={`../${evolution.pokemon_name}`}>
                            <div>
                                <img className="border-black border-solid border-2" src={`https://img.pokemondb.net/sprites/go/normal/${evolution.pokemon_name}.png`} />
                                <p>{ evolution.pokemon_name } = { evolution.level } tipo: { evolution.type }</p>
                            </div>
                        </Link>
                    )
                } else if (evolution.is_first) {
                    return (
                        <Link href={`../${evolution.pokemon_name}`}>
                            <div>
                                <img className="border-black border-solid border-2" src={`https://img.pokemondb.net/sprites/go/normal/${evolution.pokemon_name}.png`} />
                                <p>{ evolution.pokemon_name }</p>
                            </div>
                        </Link>
                    )
                }
            }) }
        </div>
    )
}


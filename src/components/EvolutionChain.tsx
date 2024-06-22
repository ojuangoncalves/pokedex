import { MainClient } from "pokenode-ts"
import Link from "next/link"

interface evolutionData {
    pokemon_name: string
    level?: number | null
    type?: string | null
    item?: string | null
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
        // formate de item name | ex: leaf-stone -> leaf stone
        const getItem = (item: string | undefined) => {
            if (item) {
                let itemSplit = item.split('-')
                itemSplit[0] += " "
                let itemName = ""

                itemSplit.forEach(word => {
                    itemName += word
                });

                return itemName
            } else {
                return ''
            }
        }
        evolutions.push({
            pokemon_name: evolutionChain.chain.evolves_to[0].species.name,
            level: evolutionChain.chain.evolves_to[0].evolution_details[0].min_level,
            type: evolutionChain.chain.evolves_to[0].evolution_details[0].trigger.name,
            item: getItem(evolutionChain.chain.evolves_to[0].evolution_details[0].item?.name)
        })
        if (evolutionChain.chain.evolves_to[0].evolves_to[0]) {
            evolutions.push({
                pokemon_name: evolutionChain.chain.evolves_to[0].evolves_to[0].species.name,
                level: evolutionChain.chain.evolves_to[0].evolves_to[0].evolution_details[0].min_level,
                type: evolutionChain.chain.evolves_to[0].evolves_to[0].evolution_details[0].trigger.name,
                item: getItem(evolutionChain.chain.evolves_to[0].evolves_to[0].evolution_details[0].item?.name)
            })
        }
    }

    return (
        <div className='flex flex-row justify-between'>
            { evolutions.map(evolution => {
                let fl = evolution.item? evolution.item[0] : ""
                // generate the evolution chain
                if (!evolution.is_first) {
                    switch(evolution.type) {
                        case 'level-up':
                            return (
                                <Link key={evolution.pokemon_name} href={`../${evolution.pokemon_name}`}>
                                    <div>
                                        <img className="border-black border-solid border-2" src={`https://img.pokemondb.net/sprites/go/normal/${evolution.pokemon_name}.png`} />
                                        <p>{ evolution.pokemon_name }</p>
                                        <p>Level { evolution.level }</p>
                                    </div>
                                </Link>
                            )
                        case 'use-item':
                            return (
                                <Link key={evolution.pokemon_name} href={`../${evolution.pokemon_name}`}>
                                    <div>
                                        <img className="border-black border-solid border-2" src={`https://img.pokemondb.net/sprites/go/normal/${evolution.pokemon_name}.png`} />
                                        <p>{ evolution.pokemon_name }</p>
                                        <p>Use { evolution.item? evolution.item.replace(fl, fl.toUpperCase()) : "" }</p>
                                    </div>
                                </Link>
                            )
                        case 'trade':
                            break
                        default:
                            <p> DEFAULT </p>
                    }
                } else if (evolution.is_first) {
                    return (
                        <Link key={evolution.pokemon_name} href={`../${evolution.pokemon_name}`}>
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


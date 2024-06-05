// import { Pokemon } from 'pokenode-ts'

import { PokemonClient, MainClient } from "pokenode-ts"

export default async function TestePage() {
    const api = new PokemonClient()

    const poke = await api.getPokemonByName('charmander')

    let type = poke.types[0].type.name

    return (
        <p>{ type }</p>
    )
}
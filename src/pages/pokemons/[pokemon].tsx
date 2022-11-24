import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from 'axios'

import Layout from "../../components/Layout"

export default function PokemonPage() {
    const pokemonName = useRouter().query.pokemon
    const [pokemon, setPokemon] = useState<any>()

    useEffect(() => {
        axios(`https://pokeapi.co/api/v2/pokemon-species/${pokemonName}/`)
            .then(resp => resp.data)
            .then(resp => {
                setPokemon(resp)
            })
    }, [])

    return (
        <Layout headTitle={ pokemonName }>
            <p>
                { JSON.stringify(pokemon) }
            </p>
        </Layout>
    )
}
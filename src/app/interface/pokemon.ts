export interface Pokemon {
    id: number,
    name: string,   
    sprites: {
        front_default: string
    },
    types: PokemonTypeObject[]
}

interface PokemonTypeObject {
    slot: number;
    type: {
        name: string;
        url: string;
    }
}

export class PokemonClass {

    id: number;
    name: string;  
    sprite: string;
    types: string[];

    constructor(data: Pokemon) {
        this.id = data.id
        this.name = data.name
        this.sprite = data.sprites.front_default
        this.types = data.types.map((typeObj) => {
            return typeObj.type.name
        })
    }
    
    
}
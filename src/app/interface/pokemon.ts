export interface Pokemon {
    id: number,
    name: string,   
    sprites: {
        front_default: string
    }
}

export class PokemonClass {

    constructor(data: Pokemon) {
        this.id = data.id
        this.name = data.name
        this.sprite = data.sprites.front_default
    }
    
    id: number;
    name: string;  
    sprite: string
}
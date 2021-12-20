//Array that contains pokemon
//and their respective stats
let pokemonList = [
    {
        name: 'Bulbasaur',
        height: '0.7',
        types: [
            'grass',
            'poison'
        ]
    },

    {
        name: 'Charmander',
        height: 0.6,
        types: [
            'fire'
        ]
    },

    {
        name: 'Squirtle',
        height: 0.5,
        types: [
            'water'
        ]
    },

    {
        name: 'Pikachu',
        height: 0.4,
        types: [
            'electric'
        ]
    },

    {
        name: 'Gengar',
        height: 1.5,
        types: [
            'ghost',
            'poison'
        ]
    }
    
]

//Checks the height of each pokemon
//and prints corresponding message
for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height > 1) {
        document.write(
            pokemonList[i].name + " (height: " + pokemonList[i].height + ")" + " - Wow! That's a big Pokemon" + "<br>");
    } else {
        document.write(
            pokemonList[i].name + " (height: " + pokemonList[i].height + ")" + "<br>");
    }
}


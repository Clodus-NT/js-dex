//IIFE containing stats array
let pokemonRepository = (function() {
    //Array that contains pokemon
    //and their respective stats
    let pokemonList = [
        {
            name: 'Bulbasaur',
            height: 0.7,
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

    function add(item) {
        pokemonList.push(item);
    }

    function getAll() {
        return pokemonList;
    }

    return {
        add: add,
        getAll: getAll
    };

})();


//Checks the height of each pokemon
//and prints corresponding message

pokemonRepository.getAll().forEach(function (pokemon) {
    if (pokemon.height > 1) {
        document.write(
            pokemon.name + " (height: " + pokemon.height + ")" + " - Wow! That's a big Pokemon" + "<br>");
        } else {
          document.write(
            pokemon.name + " (height: " + pokemon.height + ")" + "<br>");
    }
})
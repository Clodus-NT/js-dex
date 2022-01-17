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
    // Creates a button for each Pokemon
    // When clicked, the button console logs the name
    function addListItem(pokemon) {
        let pokemonUl = document.querySelector('.pokemon-list');

        let listItem = document.createElement('li');

        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('button');

        listItem.appendChild(button);
        pokemonUl.appendChild(listItem);

        button.addEventListener('click', () => showDetails(pokemon));
    }

    function showDetails(pokemon) {
        console.log(pokemon.name);
    }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem
    };

})();

pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
})
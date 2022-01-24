//IIFE containing an empty array, Pokemon API, and button creator
let pokemonRepository = (function() {
    let modalContainer = document.querySelector('#modal-container');
    //Empty Array that will draw from the API
    let pokemonList = [];
    //Variable holding the API URL
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

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
    //Loads list of Pokemon
    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
                console.log(pokemon);
            });
        }).catch(function (e) {
            console.error(e);
        })
    }
    //Loads details/stats of Pokemon
    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
        }).catch(function (e) {
            console.error(e);
        });
    }
    //Show Details
    function showDetails(item) {
        pokemonRepository.loadDetails(item).then(function () {
            showModal(item);
        });
    }

    //Show Modal

    function showModal (/*may need to change*/pokemon) {
        let modalContainer = document.querySelector('#modal-container');

        //Clear existing modal content
        modalContainer.innerHTML = '';

        let modal = document.createElement('div');
        modal.classList.add('modal');

        //Add new content
        let closeButtonElement = document.createElement('button');
        closeButtonElement.classList.add('modal-close');
        closeButtonElement.innerText = 'X';
            //Title (name)
        let titleElement = document.createElement('h1');
        titleElement.innerText = pokemon.name;
            //Sprite
        let imgElement = document.createElement('img');
        imgElement.src = pokemon.imageUrl;
            //Stats
        let contentElement = document.createElement('p');
        contentElement.innerText ='Height: ' + pokemon.height

        modal.appendChild(closeButtonElement);
        modal.appendChild(titleElement);
        modal.appendChild(imgElement);
        modal.appendChild(contentElement);
        modalContainer.appendChild(modal);

        modalContainer.classList.add('is-visible');
    }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails
    };

})();
//Accesses IIFE, loads pokemon info,
//adds a button for each pokemon to page
pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});
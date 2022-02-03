//IIFE containing an empty array, Pokemon API, and button creator
let pokemonRepository = (function() {
    let modalContainer = document.querySelector('#modal-container');
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    function add(item) {
        pokemonList.push(item);
    }

    function getAll() {
        return pokemonList;
    }
    // Creates a button for each Pokemon 
    function addListItem(pokemon) {
        let pokemonList = document.querySelector('.pokemon-list');

        let listItem = document.createElement('li');
        listItem.classList.add('group-list-item');
        listItem.classList.add('col-2');
        

        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('btn');
        button.classList.add('button');

        listItem.appendChild(button);
        pokemonList.appendChild(listItem);

        button.addEventListener('click', () => showDetails(pokemon));
    }
    // function addListItem(pokemon) {
    //     pokemonRepository.loadDetails(pokemon).then(function () {
    //       let $row = $(".row");
    
    //       let $card = $('<div class="card poke-card" style="width:400px"></div>');
    //       let $image = $(
    //         '<img class="card-img-top" alt="Card image" style="width:20%" />'
    //       );
    //       $image.attr("src", pokemon.imageUrlFront);
    //       let $cardBody = $('<div class="card-body"></div>');
    //       let $cardTitle = $("<h4 class='card-title' >" + pokemon.name + "</h4>");
    //       let $seeProfile = $(
    //         '<button type="button" class="btn btn-primary button" data-toggle="modal" data-target="#exampleModal">See Details</button>'
    //       );
    
    //       $row.append($card);
    //       //Append the image to each card
    //       $card.append($image);
    //       $card.append($cardBody);
    //       $cardBody.append($cardTitle);
    //       $cardBody.append($seeProfile);
    
    //       $seeProfile.on("click", function (event) {
    //         showDetails(pokemon);
    //       });
    //     });
    //   }

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
            item.imageUrlFront = details.sprites.front_default;
            item.imageUrlBack = details.sprites.back_default;
            item.height = details.height;
            item.weight = details.weight;
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
    function showModal(pokemon) {
        let modalBody = $(".modal-body");
        let modalTitle = $(".modal-title");
        let modalHeader = $(".modal-header");
        //Clear existing Content
        modalTitle.empty();
        modalBody.empty();
    
        //Name
        let nameElement = $("<h1>" + pokemon.name + "</h1>");
        //Image/Sprite
        let imageElementFront = $('<img class="modal-img" style="width:50%">');
        imageElementFront.attr("src", pokemon.imageUrlFront);
        let imageElementBack = $('<img class="modal-img" style="width:50%">');
        imageElementBack.attr("src", pokemon.imageUrlBack);
        //Height
        let heightElement = $("<p>" + "height : " + pokemon.height + "</p>");
        //Weight
        let weightElement = $("<p>" + "weight : " + pokemon.weight + "</p>");
    
        modalTitle.append(nameElement);
        modalBody.append(imageElementFront);
        modalBody.append(imageElementBack);
        modalBody.append(heightElement);
        modalBody.append(weightElement);

        $('#exampleModal').modal();
      }
    
      return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showModal: showModal,
      };


})();
//Accesses IIFE, loads pokemon info,
//adds a button for each pokemon to page
pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});
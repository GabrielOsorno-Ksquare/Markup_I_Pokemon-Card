const pkmnNumber = document.querySelector('.pkmnNumber');
const pkmnName = document.querySelector('.pkmnName');
const pkmnHeight = document.querySelector('.pkmnHeight');
const pkmnWeigth = document.querySelector('.pkmnWeigth');
const pkmnImg = document.querySelector('.pkmnImg');
const pkmnJpName = document.querySelector('.pkmnJpName');
const pkmnType = document.querySelector('.pkmnType');
const pkmnStats = document.querySelector('.pkmnStats');
const pkmnRegion = document.querySelector('.pkmnRegion');

/* Creating an Array that will contain all aviable Pokemons */
const pkmnArr = [];

/* Declaring some Pokemons */
const bulbasaur = {
  baseStats: {
    attack: 49,
    defense: 49,
    hp: 45,
    spAtk: 65,
    spDef: 65,
    speed: 45,
  },
  name: 'Bulbasaur',
  number: '001',
  jpName: 'フシギダネ',
  region: 'Kanto',
  type: ['grass', 'poison'],
  heightInM: 0.7,
  weigthInKg: 6.9,
  img: 'https://maurowernly.github.io/Pokedex/images/pokemons/001Bulbasaur.png',
};
const ivysaur = {
  baseStats: {
    attack: 62,
    defense: 63,
    hp: 60,
    spAtk: 80,
    spDef: 80,
    speed: 60,
  },
  name: 'Ivysaur',
  number: '002',
  jpName: 'フシギソウ',
  region: 'Kanto',
  type: ['grass', 'poison'],
  heightInM: 1,
  weigthInKg: 13,
  img: 'https://maurowernly.github.io/Pokedex/images/pokemons/002Ivysaur.png',
};
const venusaur = {
  baseStats: {
    attack: 82,
    defense: 83,
    hp: 80,
    spAtk: 100,
    spDef: 100,
    speed: 80,
  },
  name: 'Venusaur',
  number: '003',
  jpName: 'フシギバナ',
  region: 'Kanto',
  type: ['grass', 'poison'],
  heightInM: 2,
  weigthInKg: 100,
  img: 'https://maurowernly.github.io/Pokedex/images/pokemons/003Venusaur.png',
};
const charmander = {
  baseStats: {
    attack: 52,
    defense: 43,
    hp: 39,
    spAtk: 60,
    spDef: 50,
    speed: 65,
  },
  name: 'Charmander',
  number: '004',
  jpName: 'ヒトカゲ',
  region: 'Kanto',
  type: ['fire'],
  heightInM: 0.6,
  weigthInKg: 8.5,
  img: 'https://maurowernly.github.io/Pokedex/images/pokemons/004Charmander.png',
};
const charmeleon = {
  baseStats: {
    attack: 64,
    defense: 58,
    hp: 58,
    spAtk: 80,
    spDef: 65,
    speed: 80,
  },
  name: 'Charmeleon',
  number: '005',
  jpName: 'リザード',
  region: 'Kanto',
  type: ['fire'],
  heightInM: 1.1,
  weigthInKg: 19,
  img: 'https://maurowernly.github.io/Pokedex/images/pokemons/005Charmeleon.png',
};
const charizard = {
  baseStats: {
    attack: 84,
    defense: 78,
    hp: 78,
    spAtk: 109,
    spDef: 85,
    speed: 100,
  },
  name: 'Charizard',
  number: '006',
  jpName: 'リザードン',
  region: 'Kanto',
  type: ['fire', 'flying'],
  heightInM: 1.7,
  weigthInKg: 90.5,
  img: 'https://maurowernly.github.io/Pokedex/images/pokemons/006Charizard.png',
};
const squirtle = {
  baseStats: {
    attack: 48,
    defense: 65,
    hp: 44,
    spAtk: 50,
    spDef: 64,
    speed: 43,
  },
  name: 'Squirtle',
  number: '007',
  jpName: 'ゼニガメ',
  region: 'Kanto',
  type: ['water'],
  heightInM: 0.5,
  weigthInKg: 9,
  img: 'https://maurowernly.github.io/Pokedex/images/pokemons/007Squirtle.png',
};
const wartortle = {
  baseStats: {
    attack: 63,
    defense: 80,
    hp: 59,
    spAtk: 65,
    spDef: 80,
    speed: 58,
  },
  name: 'Wartortle',
  number: '008',
  jpName: 'カメール',
  region: 'Kanto',
  type: ['water'],
  heightInM: 1,
  weigthInKg: 22.5,
  img: 'https://maurowernly.github.io/Pokedex/images/pokemons/008Wartortle.png',
};
const blastoise = {
  baseStats: {
    attack: 83,
    defense: 100,
    hp: 79,
    spAtk: 85,
    spDef: 105,
    speed: 78,
  },
  name: 'Blastoise',
  number: '009',
  jpName: 'カメックス',
  region: 'Kanto',
  type: ['water'],
  heightInM: 1.6,
  weigthInKg: 85.5,
  img: 'https://maurowernly.github.io/Pokedex/images/pokemons/009Blastoise.png',
};

pkmnArr.push(
  bulbasaur,
  ivysaur,
  venusaur,
  charmander,
  charmeleon,
  charizard,
  squirtle,
  wartortle,
  blastoise
);

/* Creating the selector options for selecting which Pokemon will be displayed */
for (let i = 0; i < pkmnArr.length; i++) {
  const el = pkmnArr[i];
  const newPkmnOption = pkmnName.appendChild(document.createElement('option'));

  newPkmnOption.value = el.number;
  newPkmnOption.innerText = `${el.name}`;
}

/* Main displayPokemon function */
const displayPokemon = (pkmnNum) => {
  pkmnNum--;

  /* Changing the Pokemon's number */
  pkmnNumber.innerText = `#${pkmnArr[pkmnNum].number}`;

  /* Changing the Pokemon's size */
  pkmnHeight.innerText = `Height: ${pkmnArr[pkmnNum].heightInM}m`;
  pkmnWeigth.innerText = `Weigth: ${pkmnArr[pkmnNum].weigthInKg}kg`;

  /* Changing the Pokemon's img */
  pkmnImg.src = pkmnArr[pkmnNum].img;
  pkmnImg.alt = pkmnArr[pkmnNum].name;

  /* Removing all existent childs for pkmnType */
  while (pkmnType.firstChild) pkmnType.removeChild(pkmnType.lastChild);
  /* Changing the Pokemon's type images */
  for (let i = 0; i < pkmnArr[pkmnNum].type.length; i++) {
    const el = pkmnArr[pkmnNum].type[i];
    const newPkmnTypeImg = pkmnType.appendChild(document.createElement('img'));
    newPkmnTypeImg.className = 'pkmnTypeImg';
    switch (el) {
      case 'bug':
        newPkmnTypeImg.src =
          'https://maurowernly.github.io/Pokedex/images/types/Bug.png';
        break;
      case 'dark':
        newPkmnTypeImg.src =
          'https://maurowernly.github.io/Pokedex/images/types/Dark.png';
        break;
      case 'dragon':
        newPkmnTypeImg.src =
          'https://maurowernly.github.io/Pokedex/images/types/Dragon.png';
        break;
      case 'electric':
        newPkmnTypeImg.src =
          'https://maurowernly.github.io/Pokedex/images/types/Electric.png';
        break;
      case 'fighting':
        newPkmnTypeImg.src =
          'https://maurowernly.github.io/Pokedex/images/types/Fighting.png';
        break;
      case 'fire':
        newPkmnTypeImg.src =
          'https://maurowernly.github.io/Pokedex/images/types/Fire.png';
        break;
      case 'flying':
        newPkmnTypeImg.src =
          'https://maurowernly.github.io/Pokedex/images/types/Flying.png';
        break;
      case 'ghost':
        newPkmnTypeImg.src =
          'https://maurowernly.github.io/Pokedex/images/types/Ghost.png';
        break;
      case 'grass':
        newPkmnTypeImg.src =
          'https://maurowernly.github.io/Pokedex/images/types/Grass.png';
        break;
      case 'ground':
        newPkmnTypeImg.src =
          'https://maurowernly.github.io/Pokedex/images/types/Ground.png';
        break;
      case 'ice':
        newPkmnTypeImg.src =
          'https://maurowernly.github.io/Pokedex/images/types/Ice.png';
        break;
      case 'normal':
        newPkmnTypeImg.src =
          'https://maurowernly.github.io/Pokedex/images/types/Normal.png';
        break;
      case 'poison':
        newPkmnTypeImg.src =
          'https://maurowernly.github.io/Pokedex/images/types/Poison.png';
        break;
      case 'psychic':
        newPkmnTypeImg.src =
          'https://maurowernly.github.io/Pokedex/images/types/Psychic.png';
        break;
      case 'rock':
        newPkmnTypeImg.src =
          'https://maurowernly.github.io/Pokedex/images/types/Rock.png';
        break;
      case 'steel':
        newPkmnTypeImg.src =
          'https://maurowernly.github.io/Pokedex/images/types/Steel.png';
        break;
      case 'water':
        newPkmnTypeImg.src =
          'https://maurowernly.github.io/Pokedex/images/types/Water.png';
        break;
    }
    newPkmnTypeImg.alt = `${el} type`;
  }

  /* Changing the Pokemon's japanese name */
  pkmnJpName.innerText = `${pkmnArr[pkmnNum].jpName}`;

  /* Removing all existent childs from pkmnStats */
  while (pkmnStats.firstChild) pkmnStats.removeChild(pkmnStats.lastChild);
  /* Changing the Pokemon's stats */
  const pkmnBStatsKeys = Object.keys(pkmnArr[pkmnNum].baseStats);
  for (let i = 0; i < pkmnBStatsKeys.length; i++) {
    const key = pkmnBStatsKeys[i];
    const newPkmnStatDiv = pkmnStats.appendChild(document.createElement('div'));
    newPkmnStatDiv.className = 'pkmnStatDiv';

    let statName;
    if (key === 'spAtk') statName = 'SP. ATTACK';
    else if (key === 'spDef') statName = 'SP. DEFENSE';
    else statName = key.toUpperCase();

    newPkmnStatDiv.innerText = `${statName}: ${pkmnArr[pkmnNum].baseStats[key]}`;
  }

  /* Changing the Pokemon's region */
  pkmnRegion.innerText = `Region: ${pkmnArr[pkmnNum].region}`;
};

/* First display on the website with Pokemon #001 */
displayPokemon(1);

/* Adding an event listener for when changing the Pokemon to be displayed in selector */
pkmnName.addEventListener('change', () => {
  displayPokemon(parseInt(pkmnName.value));
});

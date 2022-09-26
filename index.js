const pkmnNumber = document.querySelector('.pkmnNumber');
const pkmnName = document.querySelector('.pkmnName');
const pkmnHeight = document.querySelector('.pkmnHeight');
const pkmnWeigth = document.querySelector('.pkmnWeigth');
const pkmnImg = document.querySelector('.pkmnImg');
const pkmnJpName = document.querySelector('.pkmnJpName');
const pkmnType = document.querySelector('.pkmnType');
const pkmnStats = document.querySelector('.pkmnStats');
const pkmnRegion = document.querySelector('.pkmnRegion');

const pkmnArr = [];

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

pkmnArr.push(bulbasaur, ivysaur, venusaur, charmander, charmeleon, charizard);

for (let i = 0; i < pkmnArr.length; i++) {
  const el = pkmnArr[i];
  const newPkmnOption = pkmnName.appendChild(document.createElement('option'));

  newPkmnOption.value = el.number;
  newPkmnOption.innerText = `${el.name}`;
}

const displayPokemon = (pkmnNum) => {
  pkmnNum--;

  pkmnNumber.innerText = `#${pkmnArr[pkmnNum].number}`;

  pkmnHeight.innerText = `Height: ${pkmnArr[pkmnNum].heightInM}m`;

  pkmnWeigth.innerText = `Weigth: ${pkmnArr[pkmnNum].weigthInKg}kg`;

  pkmnImg.src = pkmnArr[pkmnNum].img;
  pkmnImg.alt = pkmnArr[pkmnNum].name;

  while (pkmnType.firstChild) pkmnType.removeChild(pkmnType.lastChild);
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

  pkmnJpName.innerText = `${pkmnArr[pkmnNum].jpName}`;

  while (pkmnStats.firstChild) pkmnStats.removeChild(pkmnStats.lastChild);
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

  pkmnRegion.innerText = `Region: ${pkmnArr[pkmnNum].region}`;
};

displayPokemon(1);

pkmnName.addEventListener('change', () => {
  displayPokemon(parseInt(pkmnName.value));
});

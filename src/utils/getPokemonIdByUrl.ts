const getPokemonIdByUrl = (url: string): number => parseInt(url.split('/')[6]);

export default getPokemonIdByUrl;

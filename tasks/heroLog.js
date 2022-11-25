import myHero, { randomDice } from './hero.mjs';

console.log('dice', randomDice);
console.log('my hero is', await myHero.getHero());

console.log('hero says', await myHero.getQuote());

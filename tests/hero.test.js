import { test, describe, mock } from 'node:test';
import assert from 'node:assert';
import myHero from '../tasks/hero.mjs';

describe('Hero can be chosen randomly with relevant quote', () => {
  let mockedRrandomDice;
  test('When dice shows 1 we get character Yoda and his quote', async () => {
    mockedRrandomDice = mock.fn(() => 1);
    const myCharacter = await myHero.getHero(mockedRrandomDice);
    const expectedHero = 'Yoda';

    assert(myCharacter, expectedHero);

    const heroSays = myHero.getQuote();
    const expectedHeroQuote = 'You must unlearn what you have learned';

    assert(heroSays, expectedHeroQuote);
  });

  test('When dice shows 0 we get character Darth Vader and his quote', async () => {
    mockedRrandomDice = mock.fn(() => 0);
    const myCharacter = await myHero.getHero(mockedRrandomDice);
    const expectedHero = 'Darth Vader';

    assert(myCharacter, expectedHero);

    const heroSays = myHero.getQuote();
    const expectedHeroQuote = 'Be careful not to chock on your aspiratons';

    assert(heroSays, expectedHeroQuote);
  });
});

// class MyHero {
//   constructor() {
//     this.hero = getHero();
//   }

//   async getHero() {
//     const character = randomDice === 0 ? 'Darth Vader' : 'Yoda';
//     return character;
//   }

//   async getQuote() {
//     const quote =
//       this.hero === 'Yoda'
//         ? 'You must unlearn what you have learned'
//         : 'Be careful not to chock onyour aspiratons';

//     return quote;
//   }
// }

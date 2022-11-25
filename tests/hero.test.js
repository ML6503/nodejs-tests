import { test, describe, mock, after } from 'node:test';
import assert from 'node:assert';
import myHero from '../tasks/hero.mjs';

describe('Hero can be chosen randomly with relevant quote', () => {
  after(() => {
    mock.reset();
  });

  let randomDice;

  test('When randomDice is mocked to show 1 we get character Yoda and his quote', async () => {
    randomDice = mock.fn(() => 1);

    const myCharacter = await myHero.getHero();
    const expectedHero = 'Yoda';

    assert(myCharacter, expectedHero);

    const heroSays = myHero.getQuote();
    const expectedHeroQuote = 'You must unlearn what you have learned';

    assert(heroSays, expectedHeroQuote);
  });

  test('When randomDice is mocked to show 0 we get character Darth Vader and his quote', async () => {
    randomDice = mock.fn(() => 0);

    const myCharacter = await myHero.getHero();
    const expectedHero = 'Darth Vader';

    assert(myCharacter, expectedHero);

    const heroSays = myHero.getQuote();
    const expectedHeroQuote = 'Be careful not to chock on your aspiratons';

    assert(heroSays, expectedHeroQuote);
  });
});

export const randomDice = Math.random() < 0.5 ? 0 : 1;

class MyHero {
  constructor() {
    this.hero;
  }

  async getHero() {
    const character = randomDice === 0 ? 'Darth Vader' : 'Yoda';
    this.returnHero(character);
    return character;
  }

  async returnHero(chosenHero) {
    this.hero = chosenHero;
    return this.hero;
  }

  async getQuote() {
    const quote =
      this.hero === 'Yoda'
        ? 'You must unlearn what you have learned'
        : 'Be careful not to chock on your aspiratons';

    return quote;
  }
}

export default new MyHero();

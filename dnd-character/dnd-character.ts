export class DnDCharacter {
  hitpoints: number;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;

  constructor() {
    this.strength = DnDCharacter.generateAbilityScore();
    this.dexterity = DnDCharacter.generateAbilityScore();
    this.constitution = DnDCharacter.generateAbilityScore();
    this.intelligence = DnDCharacter.generateAbilityScore();
    this.wisdom = DnDCharacter.generateAbilityScore();
    this.charisma = DnDCharacter.generateAbilityScore();
    this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
  }

  public static generateAbilityScore(): number {
    let values = [];

    for (let i = 0; i < 4; i++) {
      values.push(Math.floor(Math.random() * 6) + 1);
    }

    let minValue = 6;
    let minValueIndex = 0;

    for (let i = 0; i < 4; i++) {
      values[i] < minValue
        ? ((minValue = values[i]), (minValueIndex = i))
        : null;
    }

    values.splice(minValueIndex, 1);

    return values.reduce((a, b) => a + b, 0);
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2);
  }
}

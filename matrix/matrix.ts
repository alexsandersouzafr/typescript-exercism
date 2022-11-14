export class Matrix {
  numberString: string;

  constructor(numbers: string) {
    this.numberString = numbers;
  }

  get rows(): Array<number[]> {
    let mountMatrix = (str: string): Array<number[]> => {
      let matrix: Array<number[]> = [[]];
      let row = 0;
      let numbers: string[] = [...str];
      numbers.forEach((char, i) => {
        switch (true) {
          //TODO: concatenar números entre espaços antes de testar
          case /[0-9]/.test(char):
            matrix[row].push(parseInt(char));
            break;
          case /\n/.test(char):
            row++;
            matrix.push([]);
            break;
          default:
            null;
        }
      });
      return matrix;
    };
    return mountMatrix(this.numberString);
  }

  get columns(): number[] {
    return [0];
  }
}

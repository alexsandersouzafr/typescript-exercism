export class Matrix {
  numbers: string;

  constructor(numbers: string) {
    this.numbers = numbers;
  }

  get rows(): Array<number[]> {
    let mountRows = (str: string): Array<number[]> => {
      let matrix: Array<number[]> = [[]];
      let row = 0;
      str.match(/[0-9]+|\n/g)?.forEach((item) => {
        /[0-9]+/.test(item)
          ? matrix[row].push(parseInt(item))
          : (row++, matrix.push([]));
      });
      return matrix;
    };
    return mountRows(this.numbers);
  }

  get columns(): Array<number[]> {
    const matrix: Array<number[]> = this.rows;
    let columnsMatrix: Array<number[]> = [];
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
        i === 0 ? columnsMatrix.push([]) : null;
        columnsMatrix[j].push(matrix[i][j]);
      }
    }
    return columnsMatrix;
  }
}

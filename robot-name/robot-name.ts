export class Robot {
  previousNames: string[] = [];
  actualName: string;

  constructor() {
    this.previousNames = [...this.previousNames, this.name];
    this.actualName = this.createName();
  }

  createName() {
    const charCode = () => Math.floor(Math.random() * (90 - 65) + 65);
    const char = String.fromCharCode(charCode(), charCode());
    const num = Math.floor(Math.random() * (999 - 100) + 100).toString();
    return char + num;
  }

  public get name(): string {
    return this.actualName;
  }

  public resetName(): void {
    throw new Error("Implement Robot#resetName");
  }

  public static releaseNames(): void {
    throw new Error("Implement Robot.releaseNames");
  }
}

export function decodedValue(colors: string[]): number {
  const bands = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9,
  };

  type ObjectKey = keyof typeof bands;
  const colorValueA = bands[colors[0] as ObjectKey];
  const colorValueB = bands[colors[1] as ObjectKey];

  const result = colorValueA.toString() + colorValueB.toString();

  return Number(result);
}

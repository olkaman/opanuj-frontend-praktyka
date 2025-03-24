export function addNumbers(a: number, b: number) {
  return a + b;
}
export function substractNumbers(a: number, b: number) {
  return a - b;
}
export function multiplyNumbers(a: number, b: number) {
  return a * b;
}

export function divideNumbers(a: number, b: number) {
  if (b === 0) {
    throw new Error('You cannot divide by 0');
  }
  return a / b;
}

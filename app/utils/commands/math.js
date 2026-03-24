export const helpSummary =
  'Does some very basic math, like adding and subtracting';

/**
 *
 * @param {any} terminal
 * @param {String} operation - The math operation to perform (e.g. '1+1')
 */
export const math = (terminal, operation) => {
  if (!terminal) return;
  let result;

  try {
    result = operation.includes('+')
      ? operation.split('+').reduce((a, b) => +a + +b)
      : operation.includes('-')
      ? operation.split('-').reduce((a, b) => a - b)
      : operation.includes('*')
      ? operation.split('*').reduce((a, b) => a * b)
      : operation.includes('/')
      ? operation.split('/').reduce((a, b) => a / b)
      : 'Invalid operation';
    console.log(result);
    terminal.write(String(result));
  } catch {
    result = 'Invalid operation';
  }
};

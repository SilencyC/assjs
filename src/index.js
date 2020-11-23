export function add(a, b) {
  return a + b;
}
export const filterWithRest = (data, handler) => {
  const satisfied = [];
  const rest = [];

  for (let i = 0, len = data.length; i < len; i++) {
    const current = data[i];

    handler(current) ? satisfied.push(current) : rest.push(current);
  }

  return [satisfied, rest];
};

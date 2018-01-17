export function getRandom(weights){
  const totalSum = weights.reduce((sum, p) => sum + p, 0);
  const rand = Math.random() * totalSum;
  let sum = 0;

  for (let i=0; i < weights.length; i++) {
    sum += weights[i];
    if (rand < sum) return i;
  }
}

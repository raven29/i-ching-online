export function getRandom(weights){
  const totalSum = weights.reduce((sum, p) => sum + p, 0);
  const rand = Math.random() * totalSum;
  let sum = 0;

  for (let i=0; i < weights.length; i++) {
    sum += weights[i];
    if (rand < sum) return i;
  }
}

export function generateStems() {
  return [
    {
      style: {transform: 'rotate(0deg)', left: '100px', top: '20px', backgroundImage: 'linear-gradient(to bottom, #a5b47f, #69844f)'},
      knots: [
        {type: 'l-u', style: {top: '50px', borderTopColor: '#90a06f'}},
        {type: 'l-u', style: {top: '220px', borderTopColor: '#90a06f'}},
        {type: 'l-u', style: {top: '380px', borderTopColor: '#90a06f'}}
      ]
    },
    {
      style: {transform: 'rotate(15deg)', left: '100px', top: '15px', backgroundImage: 'linear-gradient(to bottom, #a5b47f, #69844f)'},
      knots: [
        {type: 'l-d', style: {top: '220px', borderRightColor: '#90a06f'}}
      ]
    },
    {
      style: {transform: 'rotate(2deg)', left: '120px', top: '10px', backgroundImage: 'linear-gradient(to bottom, #bb8e6f, #55474a)'},
      knots: [
        {type: 'r-d', style: {top: '55px', borderLeftColor: '#bb8e6f'}},
        {type: 'l-d', style: {top: '350px', borderRightColor: '#87705c'}}
      ]
    },

    {
      style: {transform: 'rotate(-3deg)', left: '130px', top: '5px', backgroundImage: 'linear-gradient(to bottom, #a5b47f, #69844f)'},
      knots: []
    },
    {
      style: {transform: 'rotate(-2deg)', left: '145px', top: '10px', backgroundImage: 'linear-gradient(to bottom, #bb8e6f, #6c4b45)'},
      knots: [
        {type: 'l-u', style: {top: '20px', borderTopColor: '#87705c'}},
        {type: 'r-u', style: {top: '380px', borderTopColor: '#bb8e6f'}}
      ]
    },
  ];
}
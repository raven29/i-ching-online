// Don't need animore: jasmine-check is enough!
// import { check, gen, property } from 'testcheck';
import {getRandom} from  '../../src/lib/utils';
import { install as testcheckInstall } from 'jasmine-check';

testcheckInstall();
const genWeights = gen.array(gen.sPosInt, {minSize: 1});

describe('Random lib tests', () => {
  it('should be correct total sum', () => {
    const index = getRandom([1,1,1]);
    expect(index).toBeIntInRange(3);
  });

  check.it('result is in bound', { numTests: 101 }, genWeights, (weights) => {
    const index = getRandom(weights);
    expect(index).toBeIntInRange(weights.length);
  });

  check.it('distribution conforms weights', { numTests: 200 }, genWeights, (weights) => {
    const numberOfExperiments = 1000;
    const sumTotal = weights.reduce((a, b) => a + b, 0);
    let freq = new Array(weights.length).fill(0);

    for (let experiment = 0; experiment < numberOfExperiments; experiment++) {
      const index = getRandom(weights);
      freq[index]++;
    }

    for (let index = 0; index < weights.length; index++) {
      expect(freq[index] / numberOfExperiments).toBeCloseTo(weights[index] / sumTotal, 1);
    }
  });
})

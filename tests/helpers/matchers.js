expect.extend({
  toBeOneOf(received, argument) {
    if (argument.indexOf(received) >= 0) {
      return {
        pass: true,
      };
    } else {
      return {
        message: () => `expected ${received} to be one of ${argument}`,
        pass: false,
      };
    }
  },

  toBeIntInRange(received, argument) {
    if (Math.floor(received) === received && received >= 0 && received < argument) {
      return {
        pass: true,
      };
    } else {
      return {
        message: () => `expected ${received} to be in range [0 .. ${argument})`,
        pass: false,
      };
    }
  },
});

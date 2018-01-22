import '../src/app';

jest.mock('react-dom', () => {
  return {
    render: jest.fn(),
  };
});

describe('App test', () => {
  it("Render should be called", () => {
    const {render} = require('react-dom');
    expect(render).toHaveBeenCalled();
  });
  it('Create element works', () => {
    const div = document.createElement('div');
  });
});

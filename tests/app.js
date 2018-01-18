import '../src/app';

describe('Index test', () => {
  it('test', () => {
    expect(true).toBe(true);
  });
  it('renders without crashing', () => {
    const div = document.createElement('div');
    console.log(div);
  });
});

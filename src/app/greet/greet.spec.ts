import { greet} from './greet';

describe('greet', () => {
  it('should greet', () => {
    expect(greet('Alice')).toBe('Hello, Alice!');
  });
});
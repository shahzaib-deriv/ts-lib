import { avg, sum3 } from '..';

describe('avg should calculate an average properly', () => {
  it('three positive numbers', () => {
    expect(avg(3, 4, 5)).toBe(4);
  });
  it('three negative numbers', () => {
    expect(avg(3, -4, -5)).toBe(-2);
  });
});

describe('sum3 should calculate a sum properly', () => {
  it('three positive numbers', () => {
    expect(sum3(3, 4, 5)).toBe(12);
  });
  it('three negative numbers', () => {
    expect(sum3(3, -4, -5)).toBe(-6);
  });
});
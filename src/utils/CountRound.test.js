import CountRound from './countRound';

describe('CountRound', () => {
  it.each`
    count            | result
    ${1}             | ${1}
    ${5566}          | ${'5.6K'}
    ${5_566_666}     | ${'5.6M'}
    ${5_566_666_666} | ${'5.6B'}
  `('should convert $count to $result', ({ count, result }) => {
    expect(CountRound(count)).toBe(result);
  });
});

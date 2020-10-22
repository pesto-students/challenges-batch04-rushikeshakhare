// write your own test cases
import { flipArgs, encodeString, decodeString } from './flipArgs';

describe('flipArgs', () => {
  it('should return a function', () => {
    expect(typeof flipArgs()).toBe('function');
  });
  it('should return an array with reversed elements as paramters', () => {
    const flipped = flipArgs();
    expect(flipped(1, 2, 3, 5)).toEqual([5, 3, 2, 1]);
  });
  it('should return correct encoded string', () => {
    expect(encodeString('Transferring 100 Rs Via Secure Gateway')).toEqual('yawetaG$eruceS$aiV$sR$001$gnirrefsnarT');
  });
  it('should return correct decoded string', () => {
    expect(decodeString('yawetaG$eruceS$aiV$sR$005$gnirrefsnarT')).toEqual('Transferring 500 Rs Via Secure Gateway');
  });
});

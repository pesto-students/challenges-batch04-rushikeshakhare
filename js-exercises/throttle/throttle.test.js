/* eslint-disable no-console */
import { throttle } from "./throttle";

jest.useFakeTimers();
describe('throttle', () => {
  test('The function should return a Function', () => {
    expect(typeof throttle(() => {}, 1000)).toEqual('function');
  });
  test('Should throttle function calls as per given delay', () => {
    const logSomething = () => console.log('logged');
    console.log = jest.fn();
    const throttleFn = throttle(logSomething, 5000);
    throttleFn();
    throttleFn();
    throttleFn();
    jest.advanceTimersByTime(10000);
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith('logged');
  });
});

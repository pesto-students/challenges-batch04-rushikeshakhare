import {
  map,
  filter,
  invert,
  merge,
  all,
  some,
}
  from './objectUtils';

describe('Object Utils', () => {
  test('Object map', () => {
    const testObject = {
      score1: 23,
      score2: 34,
      score3: 56,
    };

    const incrementScore = ([key, value]) => ([key, value + 2]);

    expect(map(testObject, incrementScore)).toEqual({
      score1: 25,
      score2: 36,
      score3: 58,
    });
  });

  test('Object filter', () => {
    const testObject = {
      student1: {
        name: 'student1',
        class: 10,
      },
      student2: {
        name: 'student2',
        class: 12,
      },
      student3: {
        name: 'student3',
        class: 12,
      },
    };

    const studentsInClass = ([key, value]) => (key && value.class === 12);

    expect(filter(testObject, studentsInClass)).toEqual({
      student2: {
        name: 'student2',
        class: 12,
      },
      student3: {
        name: 'student3',
        class: 12,
      },
    });
  });

  test('Object invert', () => {
    const testObject = {
      name: 'rushikesh',
      age: 23,
    };

    const objectWithNestedObject = {
      address: {},
    };

    expect(invert(testObject)).toEqual({
      rushikesh: 'name',
      23: 'age',
    });

    expect(invert(objectWithNestedObject)).toBeFalsy();
  });

  test('Object merge', () => {
    expect(merge({ name: 'rushikesh', age: 23 }, { sector: 'it' }, { age: 25 })).toEqual({ name: 'rushikesh', age: 25, sector: 'it' });
  });

  test('Object all', () => {
    const testObject = {
      student1: {
        name: 'student1',
        class: 10,
      },
      student2: {
        name: 'student2',
        class: 12,
      },
      student3: {
        name: 'student3',
        class: 12,
      },
    };
    const allStudentsAreFromClassTwelve = ([key, value]) => (key && value.class === 12);
    expect(all(testObject, allStudentsAreFromClassTwelve)).toBeFalsy();
  });

  test('Object some', () => {
    const testObject = {
      student1: {
        name: 'student1',
        class: 10,
      },
      student2: {
        name: 'student2',
        class: 12,
      },
      student3: {
        name: 'student3',
        class: 12,
      },
    };
    const someStudentsAreFromClassTwelve = ([key, value]) => (key && value.class === 12);
    expect(some(testObject, someStudentsAreFromClassTwelve)).toBeTruthy();
  });
});

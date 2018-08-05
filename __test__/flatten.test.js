const { flatten } = require('../lib/flatten');

describe('flatten', () => {
  test('1 returns 1', () => {
    expect(flatten(1)).toEqual(1);
  });
  test('[1] returns [1]', () => {
    expect(flatten([1])).toEqual([1]);
  });
  test('1 dim array', () => {
    const arr = [1, 2, 'ejb'];
    expect(flatten(arr)).toEqual(arr);
  });
  test('2 dims array', () => {
    const arr = [
      [1, 2, 'ejb'],
      [null, undefined, false],
    ];
    const expectedArr = [
      1, 2, 'ejb', null, undefined, false,
    ]
    expect(flatten(arr)).toEqual(expectedArr);
  });
  test('complecated array', () => {
    const arr = [
      [1, [2, 'ejb']],
      [null, [undefined], false],
      [['test', { name: 'Jong Il' }], 2000, true,]
    ];
    const expectedArr = [
      1, 2, 'ejb', null, undefined, false, 'test', { name: 'Jong Il' }, 2000, true,
    ];
    expect(flatten(arr)).toEqual(expectedArr);
  });
});

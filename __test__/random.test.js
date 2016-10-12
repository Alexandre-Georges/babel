test('Random 6 greater than 0', () => {
    const random = require('../src/random.js');
    expect(random.random6Dice()).toBeGreaterThan(0);
    expect(random.random6Dice()).toBeGreaterThan(0);
    expect(random.random6Dice()).toBeGreaterThan(0);
    expect(random.random6Dice()).toBeGreaterThan(0);
});

test('Random 6 less than 7', () => {
    const random = require('../src/random.js');
    expect(random.random6Dice()).toBeLessThan(7);
    expect(random.random6Dice()).toBeLessThan(7);
    expect(random.random6Dice()).toBeLessThan(7);
    expect(random.random6Dice()).toBeLessThan(7);
});
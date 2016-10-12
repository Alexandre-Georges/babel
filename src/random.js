var randomBetween = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

var random6Dice = () => randomBetween(1, 6);

export { randomBetween, random6Dice };
// Importe a função Math.random
export const generateLevel = () => {
    const opt1 = [
        [1, 1, 0],
        [1, 1, 0],
        [1, 1, 0],
    ];

    const opt2 = [
        [0, 1, 0],
        [1, 0, 1],
        [0, 1, 0],
    ];

    const opt3 = [
        [1, 0, 1],
        [0, 1, 0],
        [1, 0, 1],
    ];

    // Array contendo as opções
    const options = [opt1, opt2, opt3];

    // Escolhe aleatoriamente uma das opções
    const randomIndex = Math.floor(Math.random() * options.length);
    const randomOption = options[randomIndex];

    return randomOption;
};

// Importe a função Math.random
export const generateLevel = () => {
    // Array de tamanho 9 preenchido com os números 1, 2, 3 e 4
    const shuffledArray = Array.from({ length: 9 }, () => Math.floor(Math.random() * 4) + 1);

    // Função para embaralhar o array usando o algoritmo de Fisher-Yates
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    // Embaralha o array
    const shuffledGrid = shuffleArray(shuffledArray);

    // Converte o array embaralhado de tamanho 9 para uma matriz 3x3
    const grid = [];
    for (let i = 0; i < 3; i++) {
        grid.push(shuffledGrid.slice(i * 3, i * 3 + 3));
    }

    return grid;
};

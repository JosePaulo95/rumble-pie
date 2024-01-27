
const shuffleArray = (array) => {
    const copyArray = [...array];
    for (let i = 0; i < 100; i++) {
        const index1 = Math.floor(Math.random() * copyArray.length);
        const index2 = Math.floor(Math.random() * copyArray.length);

        // Troca os elementos nas posições index1 e index2
        [copyArray[index1], copyArray[index2]] = [copyArray[index2], copyArray[index1]];
    }
    return copyArray;
};

const initCharsAvoidingRep = (prevArray, objetivoId) => {
    let currentArray = Array.from({ length: 9 }, () => Math.floor(Math.random() * 4) + 1);
    const maxAttempts = 100;

    if(!prevArray) return currentArray

    for (let attempt = 0; attempt < maxAttempts; attempt++) {
        let isRepeated = false;

        for (let i = 0; i < currentArray.length; i++) {
            if (prevArray[i] === currentArray[i]) {
                isRepeated = true;
                break;
            }
        }

        if (!isRepeated) {
            // Não houve repetição, pode usar este array
            return currentArray;
        }

        // Se houve repetição, refaz a geração
        currentArray = shuffleArray(currentArray);
    }

    // Se chegou a 100 tentativas e ainda há repetição, retorna o array original
    return currentArray;
};

const initItemsAvoidingRep = (prevArray, objetivoId) => {
    let bagitems = [1, 2, 3, 4].filter(item => item !== objetivoId);
    let currentArray = Array.from({ length: 8 }, () => bagitems[Math.floor(Math.random() * bagitems.length)]);
    currentArray.push(objetivoId)
    currentArray = shuffleArray(currentArray)

    const maxAttempts = 100;

    if(!prevArray) return currentArray

    for (let attempt = 0; attempt < maxAttempts; attempt++) {
        let isRepeated = false;

        for (let i = 0; i < currentArray.length; i++) {
            if (prevArray[i] === currentArray[i]) {
                isRepeated = true;
                break;
            }
        }

        if (!isRepeated) {
            // Não houve repetição, pode usar este array
            return currentArray;
        }

        // Se houve repetição, refaz a geração
        currentArray = shuffleArray(currentArray);
    }

    // Se chegou a 100 tentativas e ainda há repetição, retorna o array original
    return currentArray;
};

let prevCharacters: number[], prevbagitems: any[];

// Importe a função Math.random
export const generateLevel = (objetivoId: number): string[][] => {
    // Array de tamanho 9 preenchido com os números 1, 2, 3 e 4
    const shuffledCharacters = initCharsAvoidingRep(prevCharacters, objetivoId)
    const shuffledItems = initItemsAvoidingRep(prevbagitems, objetivoId)

    prevCharacters = shuffledCharacters 
    prevbagitems = shuffledItems

    const combinedArray = shuffledCharacters.map((char, index) => `${char}-${shuffledItems[index]}`);

    // Converte o array embaralhado de tamanho 9 para uma matriz 3x3
    const grid = [];
    for (let i = 0; i < 3; i++) {
        grid.push(combinedArray.slice(i * 3, i * 3 + 3));
    }

    return grid;
};



export const getTextObjetivo = (id: number) => {
    switch (id) {
        case 1:
            return "Bigode"
        case 2:
            return "Óculos"
        case 3:
            return "Boné"
        case 4:
            return "Chapéu"
        default:
            return "-"
    }
}
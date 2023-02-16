


export const BOARD_SIZE = 5;

const DEFAULT_BOARD_ITEM: any = {
  letter: "",
  status: "default",
};

export async function getValidWords() {
  const wordsText = await (await fetch("src\assets\words.txt")).text();
  const wordsArray = wordsText.split("\n");
  const filteredWords = wordsArray.filter((word) => word.length === 5);
  const normalizeWords = filteredWords.map((word) => {
    return word
      .toUpperCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  });
  return normalizeWords;
}

export function initializeBoard(): any {
  const initialBoard: any = [];
  for (let row = 0; row < BOARD_SIZE; row++) {
    const row: any[] = [];
    for (let col = 0; col < BOARD_SIZE; col++) {
      row[col] = { ...DEFAULT_BOARD_ITEM };
    }
    initialBoard.push(row);
  }
  return initialBoard;
}
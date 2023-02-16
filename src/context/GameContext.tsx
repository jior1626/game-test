import {
    FC,
    PropsWithChildren,
    useLayoutEffect,
    useContext,
    useEffect,
    useState,
    createContext,
    useCallback,
} from "react";
import { initializeBoard, getValidWords } from "./GameContext.helpers";

const initialState: any = {
    isGameOver: false,
    isLost: false,
    board: [],
    solution: "",
    currentWord: "",
    currentLineIdx: 0,
    stats: {
        games: 0,
        victories: 0,
    },
    revealedLetters: {},
    generateSolution: () => null,
    finishGame: () => null,
    setIsGameOver: () => null,
    setIsLost: () => null,
    handlePressBackspace: () => null,
    handlePressLetter: () => null,
    handlePressEnter: () => null,
};

export const WordleContext = createContext<any>(initialState);
export const WordleProvider: FC<PropsWithChildren> = ({ children }) => {

    const [validWords, setValidWords] = useState<string[]>([]);
    const [solution, setSolution] = useState<string>("");
    const [currentWord, setCurrentWord] = useState<string>("");
    const [board, setBoard] = useState<any>(initializeBoard());
    const [currentLineIdx, setCurrentLineIdx] = useState<number>(0);

    const getRandomSolution = (words: string[]) => {
        if (words.length === 0) alert("Ya no hay más palabras para jugar!");
        const randomIndex = Math.floor(Math.random() * words.length);
        const newSolution = words[randomIndex];
        console.log(`Solucion: ${newSolution}`);
        setSolution(newSolution);
        return randomIndex;
    };

    const handlePressLetter = useCallback(
        (keyPressed: string) => {
            // If the row is fill then dont execute this
            const hasFiveLetters = currentWord.length === 5;
            if (hasFiveLetters) return;

            const keyUppercase = keyPressed.toUpperCase();
            const currentColIdx = currentWord.length;
            setCurrentWord((prevWord) => prevWord + keyUppercase);
            setBoard((prevBoard: any) => {
                const copyBoard = [...prevBoard];
                copyBoard[currentLineIdx][currentColIdx].letter = keyUppercase;
                return copyBoard;
            });
        },
        [currentLineIdx, currentWord.length],
    );






    useLayoutEffect(() => {
        if (validWords.length > 0) return;
        const getInitialWords = async () => {
            const wordsFromDict = await getValidWords();
            const randomIndex = getRandomSolution(wordsFromDict);
            wordsFromDict.splice(randomIndex, 1);
            setValidWords(wordsFromDict);
            console.log(`palabras disponibles para jugar: ${wordsFromDict.length}`);
        };
        getInitialWords();
    }, [validWords.length]);


    return (
        <WordleContext.Provider
            value={{
                solution,
                handlePressLetter
            }}
        >
            {children}
        </WordleContext.Provider>
    );

}
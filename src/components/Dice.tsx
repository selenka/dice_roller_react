import {useEffect, useState} from "react";
import {ROLL_DURATION} from "../App.tsx";

type PipRow = Array<number>;
type PipPattern = Array<PipRow>

interface Props {
    animate: boolean;
}

const PIPS_PATTERNS: Record<number, PipPattern> = {
    1: [[0,0,0], [0,1,0], [0,0,0]],
    2: [[1,0,0], [0,0,0], [0,0,1]],
    3: [[1,0,0], [0,1,0], [0,0,1]],
    4: [[1,0,1], [0,0,0], [1,0,1]],
    5: [[1,0,1], [0,1,0], [1,0,1]],
    6: [[1,0,1], [1,0,1], [1,0,1]],
}

function getRandomDiceSide(): number {
    return Math.floor(Math.random() * 6 + 1);
}
const Dice = ({ animate = false }: Props) => {
    const [diceSide, setDiceSide] = useState<number>(getRandomDiceSide())

    useEffect(() => {
        if (animate) {
            setTimeout(() => setDiceSide(getRandomDiceSide()), ROLL_DURATION - 500)
        }
    }, [animate]);

    return (
        <div className={`grid grid-cols-3 bg-amber-50 rounded-md w-28 h-28 ${animate && 'animate-roll'}`}>
            {PIPS_PATTERNS[diceSide].map((value) => (
                value.map((pip, index) => (
                    <div key={`pip-${index}`} className="flex items-center justify-center">
                        <div className={`${pip === 1 ? 'bg-indigo-950' : 'transparent'} rounded-full w-5 h-5 transition-all`}/>
                    </div>
                ))
            ))}
        </div>
    )
}
export default Dice;
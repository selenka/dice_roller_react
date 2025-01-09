import './App.css'
import { ChangeEvent, useMemo, useState } from "react";
import Dice from "./components/Dice.tsx";

export const ROLL_DURATION = 3000 // 3 sec

function App() {
    const [diceCount, setDiceCount] = useState<number>();
    const [triggerRoll, setTriggerRoll] = useState<boolean>(false);

    const isDiceCountValid = useMemo(() => {
        // valid range is between 1 and 12
        return diceCount ? /^([1-9]|1[0-2])$/.test(diceCount.toString()) : true

    }, [diceCount])

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setDiceCount(!e.target.value ? undefined : Number(value))
    }

    const onHandleRollStart = () => {
        setTriggerRoll(true);
        // roll time 3 sec
        setTimeout(() => setTriggerRoll(false), ROLL_DURATION)
    }

    return (
    <main className="container mx-auto flex flex-col items-center justify-center">
        <header className="pb-10">
            <h1 className="text-2xl">Welcome!</h1>
        </header>
        <div>
            <div className="flex flex-col">
                <label htmlFor="diceCount">Number of dice:</label>
                <div className="flex flex-row space-x-2 my-2">
                    <input
                        id="diceCount"
                        type="number"
                        className="rounded-md p-2"
                        onChange={onInputChange}
                        value={diceCount ?? ''}
                    />
                    <button
                        className="p-4 rounded-md bg-indigo-800 hover:bg-indigo-950"
                        onClick={onHandleRollStart}
                    >
                        Roll!
                    </button>
                </div>
                <span className={`text-red-500 text-sm ${isDiceCountValid && 'invisible'}`}>
                    Range should be between 1 and 12
                </span>
            </div>
        </div>
        <div className="grid grid-cols-3 gap-6">
            {diceCount && isDiceCountValid &&
                Array.from(Array(diceCount).keys())
                    .map((_, i) => (<Dice key={i} animate={triggerRoll} />))}
        </div>
    </main>
    )
}

export default App

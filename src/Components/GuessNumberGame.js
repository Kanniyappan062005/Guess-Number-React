import { useState } from "react";

function GuessNumberGame() {
    const [count, setCount] = useState(0); // Default guess is 1
    const [message, setMessage] = useState("Let's begin the game!");
    const [guessesLeft, setGuessesLeft] = useState(3);
    const [messageColor, setMessageColor] = useState("text-violet-700");

    function increment() {
        if (count < 5) {
            setCount(prev => prev + 1);
        }
        setMessage("");
    }

    function decrement() {
        if (count > 1) {
            setCount(prev => prev - 1);
        }
        setMessage("");
    }

    function checkGuess() {
        if (guessesLeft <= 0) {
            setMessage("❌ No guesses left. Refresh to play again!");
            setMessageColor("text-red-500");
            return;
        }

        const computerChoice = Math.floor(Math.random() * 5) + 1;

        if (count === computerChoice) {
            setMessage("🎉 Your guess is correct!");
            setMessageColor("text-green-400");
            alert("🎉 Your guess is correct!");
        } else {
            const newGuessesLeft = guessesLeft - 1;
            setGuessesLeft(newGuessesLeft);
            setMessage(`❌ Wrong! The number was: ${computerChoice}${newGuessesLeft === 0 ? " 💀 Game Over!" : ""}`);
            setMessageColor("text-red-900");

            if (newGuessesLeft === 0) {
                setMessageColor("text-red-500");
            }
        }
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-200 to-red-400 text-white px-5 py-10 sm:shadow-[0_0_15px_rgba(0,0,0,0.5)]-md sm:px-5 sm:py-10">
            <h1 className="text-2xl font-bold mb-6 shadow-md sm:text-4xl">🎯 Guess the Number (1 to 5)</h1>
            <div className="flex items-center gap-4 mb-4">
                <button
                    onClick={decrement}
                    className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-xl font-bold shadow-md"
                >
                    DEC
                </button>
                <span className="text-4xl font-bold">{count}</span>
                <button
                    onClick={increment}
                    className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-xl font-bold shadow-md"
                >
                    INC
                </button>
            </div>
            <button
                onClick={checkGuess}
                className="mb-4 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-lg shadow-md transition duration-300"
            >
                Check
            </button>
            <p className={`text-lg font-semibold mb-2 ${messageColor}`}>{message}</p>
            <p className="text-md">Available Guesses: {guessesLeft}</p>
        </div>
    );
}

export default GuessNumberGame;
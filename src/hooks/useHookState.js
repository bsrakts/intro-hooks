import { useState } from "react";

export const useHookState = () => {
    const [data, setData] = useState(100);
    const [newData, setStringData] = useState("I will practice useState");

    let number = 10
    let sentence = "I learn useState"

    const setNumber = () => {
        setData(data + 1)
    }

    const showValues = () => {
        console.log("Number: ", number);
        console.log("Data: ", data);
    }

    const setWord = () => {
        const parsed = newData.replace(
            "practice", `more practice`
        );

        setStringData(parsed)
    }

    const showStringValues = () => {
        console.log("Sentence: ", sentence);
        console.log("New Data: ", newData);
    }

    return {
        number,
        data,
        setNumber,
        showValues,
        sentence,
        newData,
        setWord,
        showStringValues,
        setData,
        setStringData
    }
}
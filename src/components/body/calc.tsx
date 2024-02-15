/* eslint-disable no-eval */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { StyledCalcBody, StyledDisplay, StyledsingleLine } from "./styled";

const Caclulator = () => {

    const [expression, setExpression] = useState<string>("");

    const toggleSign = () => {
        setExpression(prevExpression => {
            if (prevExpression[0] === "-") {
                return prevExpression.substring(1); // Remove "-"
            } else {
                return "-" + prevExpression; // Add "-"
            }
        });
    };

    const handleClick = (event: MouseEvent) => {
        if (event.target instanceof HTMLDivElement) {
            const buttonValue = event.target.textContent || "";
            if (buttonValue === "=") {
                calculate();
            } else if (buttonValue.toUpperCase() === "C") {
                setExpression("");
            } else if (buttonValue === "+/-") {
                toggleSign();
            } else {
                setExpression(prevExpression => prevExpression + buttonValue);
            }
        }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
        const key = event.key.toUpperCase();
        if (/[0-9+\-*/.%]/.test(key)) {
            setExpression(prevExpression => prevExpression + key);
        } else if (key === "ENTER") {
            calculate();
        } else if (key === "C") {
            setExpression("");
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("click", handleClick);
        };
    }, [expression]);

    const calculate = () => {
        try {
            const result = eval(expression);
            setExpression(result.toString());
        } catch (error) {
            setExpression("Error");
        }
    };

    return (
        <StyledCalcBody>

            <StyledDisplay>{expression}</StyledDisplay>

            <StyledsingleLine>
                <div style={{backgroundColor: 'gray', color: 'black'}}>C</div>
                <div style={{backgroundColor: 'gray', color: 'black'}}>+/-</div>
                <div style={{backgroundColor: 'gray', color: 'black'}}>%</div>
                <div style={{backgroundColor: 'orange', color: 'white'}}>/</div>
            </StyledsingleLine>

            <StyledsingleLine>
                <div>7</div>
                <div>8</div>
                <div>9</div>
                <div style={{backgroundColor: 'orange', color: 'white'}}>*</div>
            </StyledsingleLine>

            <StyledsingleLine>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div style={{backgroundColor: 'orange', color: 'white'}}>-</div>
            </StyledsingleLine>

            <StyledsingleLine>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div style={{backgroundColor: 'orange', color: 'white'}}>+</div>
            </StyledsingleLine>

            <StyledsingleLine>
                <div style={{width: '100px'}}>0</div>
                <div>.</div>
                <div style={{backgroundColor: 'orange', color: 'white'}}>=</div>
            </StyledsingleLine>

        </StyledCalcBody>
    )
}

export default Caclulator;
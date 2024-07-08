import { useState } from "react";
import Button from "./components/Buttons";

const numbers = Array.from({ length: 10 }, (_, index) => index);
const symbols = ["+", "*", "/", "-"];

const App = () => {
  const [result, setResult] = useState("");
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState("");
  const [symbol, setSymbol] = useState("");

  const handleReset = () => {
    setFirstNumber(0);
    setSecondNumber("");
    setSymbol("");
    setResult("");
  };

  const handleOnClick = (num) => {
    if (result) {
      setResult("");
      setFirstNumber(num);
      setSymbol("");
      setSecondNumber("");
    } else if (firstNumber && symbol) {
      setSecondNumber((n) => `${n}${num}`);
    } else if (firstNumber) {
      setFirstNumber((n) => `${n}${num}`);
    } else {
      setFirstNumber(num);
    }
  };

  const handleSymbols = (sym) => {
    if (!firstNumber && sym === "-") {
      setFirstNumber(sym);
    }

    setSymbol(sym);
  };

  const handleResult = () => {
    setResult(eval(Number(firstNumber) + `${symbol}` + Number(secondNumber)));
  };

  return (
    <div className='border rounded-md bg-slate-800 p-4 w-80 mt-40'>
      <div className='bg-slate-400 mb-4 rounded-md pr-4 text-right'>
        <p className='text-lg font-bold text-slate-900'>
          {firstNumber}
          {symbol || ""}
          {secondNumber || ""}
        </p>
        <p className='text-lg font-bold text-slate-950 p-2'>{result}</p>
      </div>
      <div className='grid grid-cols-4 gap-4'>
        <Button num={"CE"} bg={`bg-red-600`} onClick={() => handleReset()} />
        {numbers.map((num) => (
          <Button
            num={num}
            key={crypto.randomUUID()}
            w={8}
            h={8}
            onClick={() => handleOnClick(num)}
          />
        ))}
        <Button num={"="} onClick={() => handleResult()} />

        {symbols.map((symbol) => (
          <Button
            num={symbol}
            key={crypto.randomUUID()}
            onClick={() => handleSymbols(symbol)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;

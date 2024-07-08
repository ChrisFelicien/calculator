import { useState } from "react";
import Button from "./components/Buttons";

const numbers = Array.from({ length: 9 }, (_, index) => index + 1);
const symbols = ["+", "*", "/", "-"];

const App = () => {
  const [result, setResult] = useState("");
  const [expression, setExpression] = useState(0);

  const handleReset = () => {
    setExpression(0);
    setResult(0);
  };

  const handleOnClick = (num) => {
    if (!expression) {
      setExpression(num);
    } else {
      setExpression((n) => `${n}${num}`);
    }
  };

  const handleSymbols = (sym) => {
    if (result) {
      setExpression(`${result}${sym}`);
      return setResult(0);
    }
    if (!symbols.includes(String(expression).at(-1))) {
      return setExpression((ex) => `${ex}${sym}`);
    } else if (symbols.includes(expression.at(-1))) {
      return setExpression((ex) => ex.replace(ex.at(-1), sym));
    }
  };

  const handleResult = () => {
    try {
      const output = eval(expression);

      setResult(output);
    } catch (error) {
      setResult("Wrong Input");
    }
  };

  return (
    <div className='border rounded-md bg-slate-800 p-4 w-80 mt-40'>
      <div className='bg-slate-400 mb-4 rounded-md  text-right'>
        <input
          type='text'
          className='w-full py-2 px-3 border-none focus:outline-none bg-slate-700 text-right '
          readOnly
          value={expression}
        />
        <input
          type='text'
          value={result}
          className='w-full py-2 px-3 border-none focus:outline-none bg-slate-700 text-right '
          readOnly
        />
      </div>
      <div className='flex justify-around'>
        <div className='grid grid-cols-3 gap-x-4 gap-y-2 '>
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
          <Button
            num={0}
            key={crypto.randomUUID()}
            w={8}
            h={8}
            onClick={() => handleOnClick(0)}
          />
          <Button num={"="} onClick={() => handleResult()} />
        </div>
        <div className='grid grid-cols-1 gap-2 justify-self-start'>
          {symbols.map((symbol) => (
            <Button
              num={symbol}
              key={crypto.randomUUID()}
              onClick={() => handleSymbols(symbol)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;

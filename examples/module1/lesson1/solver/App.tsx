import { useState } from 'react';
import {
  addNumbers,
  substractNumbers,
  multiplyNumbers,
  divideNumbers,
} from './functions';
import Button from './Button';
import Input from './Input';

const App = () => {
  const [firstNum, setFirstNum] = useState<number>(0);
  const [secondNum, setSecondNum] = useState<number>(0);
  const [calculationsResult, setCalculationsResult] = useState<number | string>(
    0
  );

  const performCalculations = (func: (a: number, b: number) => number) => {
    setCalculationsResult(func(firstNum, secondNum));
    setFirstNum(0);
    setSecondNum(0);
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4">
        <Input
          num={firstNum}
          handleChange={(e) => setFirstNum(parseFloat(e.target.value))}
        />
        <Input
          num={secondNum}
          handleChange={(e) => setSecondNum(parseFloat(e.target.value))}
        />
      </div>
      <div className="grid grid-cols-4 gap-x-4 my-4">
        <Button handleClick={() => performCalculations(addNumbers)}>+</Button>
        <Button handleClick={() => performCalculations(substractNumbers)}>
          -
        </Button>
        <Button handleClick={() => performCalculations(multiplyNumbers)}>
          *
        </Button>
        <Button
          handleClick={() => {
            if (secondNum === 0)
              setCalculationsResult('You cannot divide by 0');
            else performCalculations(divideNumbers);
          }}
        >
          /
        </Button>
      </div>
      <div>Result: {calculationsResult}</div>
    </div>
  );
};

export default App;

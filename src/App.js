import { useState } from 'react';
import './app.css';

function App() {
  return (
    <>
      <h1>DATE COUNTER</h1>
      <Count />
    </>
  );
}

function Count() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();

  date.setDate(date.getDate() + count);

  function countMin() {
    setCount((c) => c - step);
  }

  function countPlus() {
    setCount((c) => c + step);
  }

  function stepMin() {
    setStep((s) => s - 1);
  }

  function stepPlus() {
    setStep((s) => s + 1);
  }

  return (
    <>
      <div>
        <button onClick={stepMin}>-</button>
        <span>Step: {step}</span>
        <button onClick={stepPlus}>+</button>
      </div>

      <div>
        <button onClick={countMin}>-</button>
        <span>Count: {count}</span>
        <button onClick={countPlus}>+</button>
      </div>

      <p>
        {count < 0
          ? `${count * -1} ${count < -1 ? 'days' : 'day'} ago it was `
          : 0 < count
          ? `In ${count} ${1 < count ? 'days' : 'day'} it will be `
          : 'Today is '}
        {date.toDateString()}
      </p>
    </>
  );
}

export default App;

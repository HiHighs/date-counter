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

  function handleReset() {
    setStep(1);
    setCount(0);
  }

  return (
    <>
      <div>
        <input
          type='range'
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={countMin}>-</button>
        <input
          type='number'
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
          placeholder='Count'
        />
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

      <button
        onClick={handleReset}
        className={count === 0 && step === 1 ? 'hide' : ''}
      >
        Reset
      </button>
    </>
  );
}

export default App;

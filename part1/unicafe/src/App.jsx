import { useState } from "react";

const Title = ({ text }) => <h1>{text}</h1>;

const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}>{text}</button>
);

const Statistic = ({ name, value }) => (
  <div>
    {name} {value}
  </div>
);

const Statistics = ({ stats }) => {
  return (
    <div>
      <h1>statistics</h1>
      <Statistic name="good" value={stats.good} />
      <Statistic name="neutral" value={stats.neutral} />
      <Statistic name="bad" value={stats.bad} />
      <Statistic name="average" value={stats.average} />
      <Statistic name="positive" value={stats.positive.toString() + " %"} />
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickGood = () => setGood(good + 1);
  const handleClickNeutral = () => setNeutral(neutral + 1);
  const handleClickBad = () => setBad(bad + 1);

  const total = good + bad + neutral;
  const stats = {
    good: good,
    neutral: neutral,
    bad: bad,
    average: (good - bad) / total,
    positive: (good / total) * 100,
  };

  return (
    <div>
      <Title text="give feedback" />
      <div>
        <Button text="good" handleClick={handleClickGood} />
        <Button text="neutral" handleClick={handleClickNeutral} />
        <Button text="bad" handleClick={handleClickBad} />
      </div>
      <Statistics stats={stats} />
    </div>
  );
};

export default App;

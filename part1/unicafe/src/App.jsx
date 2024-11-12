import { useState } from "react";

const Title = ({ text }) => <h1>{text}</h1>;

const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}>{text}</button>
);

const StatisticLine = ({ name, value }) => (
  <tr>
    <th>{name}</th>
    <th>{value}</th>
  </tr>
);

const Statistics = ({ stats }) => {
  if (stats.total === 0) {
    return <div>No feedback given</div>;
  }
  return (
    <div>
      <table>
        <tbody>
          <StatisticLine name="good" value={stats.good} />
          <StatisticLine name="neutral" value={stats.neutral} />
          <StatisticLine name="bad" value={stats.bad} />
          <StatisticLine name="average" value={stats.average} />
          <StatisticLine
            name="positive"
            value={stats.positive.toString() + " %"}
          />
        </tbody>
      </table>
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
    total: total,
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
      <h1>statistics</h1>
      <Statistics stats={stats} />
    </div>
  );
};

export default App;

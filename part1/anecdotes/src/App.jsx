import { useState } from "react";

function indexOfMax(arr) {
  if (arr.length === 0) {
    return -1;
  }

  var max = arr[0];
  var maxIndex = 0;

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      maxIndex = i;
      max = arr[i];
    }
  }

  return maxIndex;
}

const Anecdote = ({ anecdote, votes }) => (
  <div>
    <div>{anecdote}</div>
    <div>{"Has " + votes + " votes"}</div>
  </div>
);

const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
  const max_votes = indexOfMax(votes);

  const handleClickVote = () => {
    var new_votes = [...votes];
    new_votes[selected] += 1;
    setVotes(new_votes);
  };
  const handleClickNext = () => {
    var next = Math.floor(Math.random() * anecdotes.length);
    // ensure the next is different than the current
    while (next === selected) {
      next = Math.floor(Math.random() * anecdotes.length);
    }
    setSelected(next);
  };

  return (
    <div>
      <h1>Anecdote of the Day</h1>
      <Anecdote
        anecdote={anecdotes[selected]}
        votes={String(votes[selected])}
      />
      <div>
        <Button text="vote" handleClick={handleClickVote} />
        <Button text="next anecdote" handleClick={handleClickNext} />
      </div>
      <h1>Anecdote with most votes</h1>
      <Anecdote
        anecdote={anecdotes[max_votes]}
        votes={String(votes[max_votes])}
      />
    </div>
  );
};

export default App;

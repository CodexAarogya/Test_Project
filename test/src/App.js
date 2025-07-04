import './App.css';
import { useState } from 'react';

const questions = [
  {
    id: 1,
    value: "What is the capital of Nepal?",
    options: ["Kathmandu", "Pokhara", "Lalitpur", "Bhaktapur"],
    answer: "Kathmandu"
  },
  {
    id: 2,
    value: "What is the national animal of Nepal?",
    options: ["Cow", "Tiger", "Elephant", "Yak"],
    answer: "Cow"
  },
  {
    id: 3,
    value: "What is the national game of Nepal?",
    options: ["Football", "Cricket", "Volleyball", "Badminton"],
    answer: "Volleyball"
  },
  {
    id: 4,
    value: "What is the capital of China?",
    options: ["Shanghai", "Beijing", "Wuhan", "Guangzhou"],
    answer: "Beijing"
  },
  {
    id: 5,
    value: "What is the capital of Japan?",
    options: ["Tokyo", "Kyoto", "Osaka", "Nagoya"],
    answer: "Tokyo"
  }
];

function App() {
  let [count, setCount] = useState(1);
  const [selected, setSelected] = useState(' ')


  const onRadioChange = (e) => {
    setSelected(e.target.value)
  }
  function onNextButtonClick(id, value) {
    setCount(++count);
    sessionStorage.setItem(id, value)
  }
  function onPreviousclick() {
    setCount(--count)
  }

  const displayedQuestion = questions.find(question => question.id === count)

  return (
    <>
      <div>
        <p>{displayedQuestion.value}</p>
      </div>
      <div>
        {count <= 5 ? displayedQuestion.options.map(value => <label><input key={displayedQuestion.id} onChange={onRadioChange} className='userOption' type='radio' value={value} checked={selected === value} />{value}</label>)

          : <p>Click submit to upload your answers !</p>

        }
      </div >
      <div>
        {
          count <= 5 ? <button onClick={() => onNextButtonClick(displayedQuestion.id, selected)}>Next</button> : <button>Submit</button>
        }
        {
          count > 1 ? <button onClick={onPreviousclick}>Previous</button> : null
        }
      </div>
    </>
  );
}

export default App;

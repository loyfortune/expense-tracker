import { useRef, useState, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import arrowImage from '../../assets/arrow.png';

const options = ['Wages/Salary (income)', 'Business Income (income)',
                 'Tips (income)', 'Other (income)',
                 'Food (expense)','Bills (expense)',
                 'Entertainment (expense)', 'Educational (expense)',
                 'Travel (expense)', 'Miscellaneous (expense)'];

export function AddTransaction(){
  const [category, setCategory] = useState('');
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const selectTextRef = useRef<HTMLParagraphElement>(null);
  const arrowImgRef = useRef<HTMLImageElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const { addTransaction } = useContext(GlobalContext);

  function toggleSelectField(){
    const arrowImgElement = arrowImgRef.current;
    const listElement = listRef.current;

    listElement!.classList.toggle('hide');
    arrowImgElement!.classList.toggle('rotate');
  };

     const handleOptionClick = (text: string) => {
        const selectTextElement = selectTextRef.current;
        const listElement = listRef.current;
        const arrowImgElement = arrowImgRef.current;

        selectTextElement!.innerHTML = text;
        listElement!.classList.add('hide');
        arrowImgElement!.classList.toggle('rotate');
        setCategory(text);
      };

      const onSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newTransaction = {
          id: Math.floor(Math.random() * 100000000),
          category,
          text,
          amount
        }

        addTransaction(newTransaction);
      }

    return(
        <>
        <h3>Add new transaction</h3>
              <form id="form" onSubmit={onSubmit}> 
                <div className="form-control">
                    <div className="selector">
        <div id="selectField" onClick={toggleSelectField}> 
          <p ref={selectTextRef}>Select Category</p>
          <img ref={arrowImgRef} src={arrowImage} id="arrowIcon" />
        </div>
        <ul ref={listRef} className="hide">
            {options.map((option, index) => (
              <li key={index} className="options" value={category} onClick={() => handleOptionClick(option)}>
                <p>{option}</p>
              </li>
            ))}
        </ul>
      </div>
                  <label htmlFor="text">Text</label>
                  <input type="text" id="text" value={text} onChange={(e) => {setText(e.target.value);}} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                  <label htmlFor="amount"
                    >Amount <br />
                    (negative - expense, positive - income)</label>
                  <input type="number" id="amount" value={amount} onChange={(e) => {setAmount(e.target.valueAsNumber);}} placeholder="Enter amount..." />
                  </div>
                <button className="btn">Add transaction</button>
              </form>
        </>
    );
  }
import { useRef, useState, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import arrowImage from '../../assets/arrow.png';

const incomeOptions = ['Wages/Salary', 'Business Income',
                 'Tips', 'Other',
                 ];
<<<<<<< HEAD
export const expenseOptions = ['Food','Bills',
=======
const expenseOptions = ['Food','Bills',
>>>>>>> 6c7894ef7d0009db901780c5d81984c5fd14ab71
                 'Entertainment', 'Educational',
                 'Travel', 'Miscellaneous'];

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
                 <label htmlFor="selectField">Category</label>
                        <div id="selectField" onClick={toggleSelectField}> 
          <p ref={selectTextRef}>Select Category</p>
          <img ref={arrowImgRef} src={arrowImage} id="arrowIcon" />
        </div>
        <ul id='list' ref={listRef} className="hide">
          <h2>Income</h2>
            {incomeOptions.map((option, index) => (
              <li key={index} className="options" value={category} onClick={() => handleOptionClick(option)}><p>{option}</p></li>
            ))}
                      <h2>Expense</h2>
            {expenseOptions.map((option, index) => (
              <li key={index} className="options" value={category} onClick={() => handleOptionClick(option)}><p>{option}</p></li>
            ))}
            </ul>
      </div>
<<<<<<< HEAD
                  <label htmlFor="text">Description</label>
=======
                  <label htmlFor="text">Text</label>
>>>>>>> 6c7894ef7d0009db901780c5d81984c5fd14ab71
                  <input type="text" id="text" value={text} onChange={(e) => {setText(e.target.value);}} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                  <label htmlFor="amount"
<<<<<<< HEAD
                    >Amount</label>
=======
                    >Amount <br />
                    (negative - expense, positive - income)</label>
>>>>>>> 6c7894ef7d0009db901780c5d81984c5fd14ab71
                  <input type="number" id="amount" value={amount} onChange={(e) => {setAmount(e.target.valueAsNumber);}} placeholder="Enter amount..." />
                  </div>
                <button className="btn">Add transaction</button>
              </form>
        </>
    );
<<<<<<< HEAD
  }
=======
  }
>>>>>>> 6c7894ef7d0009db901780c5d81984c5fd14ab71

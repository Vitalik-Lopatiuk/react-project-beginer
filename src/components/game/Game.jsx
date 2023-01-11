import Questions from '../questions/Questions'
function Game({step , nextQuestion , question}) {
  
    const editWidth = Math.round(step / Questions.length * 100)

    return (
      <>
        <div  className="progress">
          <div style={{ width: `${editWidth}%` }} className="progress__inner"></div>
        </div>
        <h1>{question.title}</h1>
        <ul className='question-ul'>
          {
            question.variants.map((text , i) =>  <li className='question-li' key={text} onClick={ () => nextQuestion(i)}>{text}</li> ) 
          }
       
        </ul>
      </>
    );
  }

export default Game
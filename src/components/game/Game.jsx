import Questions from '../questions/Questions'
function Game({step , nextQuestion , question}) {
  
    const editWidth = Math.round(step / Questions.length * 100)
    console.log(editWidth)

    return (
      <>
        <div  className="progress">
          <div style={{ width: `${editWidth}%` }} className="progress__inner"></div>
        </div>
        <h1>{question.title}</h1>
        <ul>
          {
            question.variants.map((text , i) =>  <li key={text} onClick={ () => nextQuestion(i)}>{text}</li> ) 
          }
       
        </ul>
      </>
    );
  }

export default Game
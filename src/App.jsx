import './index.scss'
import Game from './components/game/Game'
import Result from './components/result/Result'
import Questions from './components/questions/Questions'
import { useState } from 'react'

function App() {
	const [step, setStep] = useState(0)
	const [correct, setCorrect] = useState(0)
	const question = Questions[step]

	const nextQuestion = i => {
		setStep(prev => prev + 1)

		if (question.correct === i) {
			setCorrect(correct + 1)
		}

	}
	return (
		<div className="App">
			{' '}
			{step !== Questions.length ? (
				<Game
					question={question}
					step={step}
					nextQuestion={
						nextQuestion
					}
				/>
			) : (
				<Result correct={correct} />
			)}
		</div>
	)
}

export default App

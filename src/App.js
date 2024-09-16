import React, { useReducer } from 'react';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import reducer, { initialState, calculateResult } from './reducers';
import {
	addOne,
	applyNumber,
	changeOperator,
	clearDisplay,
	addMemory,
	applyMemory,
	clearMemory,
} from './actions/index';

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);
	const handleEvent = (e) => {
		// dispatch(addOne());
		dispatch(applyNumber(e));
	};

	const handleOperator = (e) => {
		dispatch(changeOperator(e));
	};
	const clearHandler = (e) => {
		dispatch(clearDisplay(e));
	};
	const handleMemory = (e) => {
		dispatch(addMemory(e));
	};

	const handleMemoryState = (e) => {
		dispatch(applyMemory(e));
	};
	const handleResetMemory = () => {
		dispatch(clearMemory());
	};
	return (
		<div className='App'>
			<nav className='navbar navbar-dark bg-dark'>
				<a className='navbar-brand' href='#'>
					<img width='40px' src='./Lambda-Logo-Red.png' /> Lambda Reducer
					Challenge
				</a>
			</nav>

			<div className='container row mt-5'>
				<div className='col-md-12 d-flex justify-content-center'>
					<form name='Cal'>
						<TotalDisplay value={state.total} />
						<div className='row details'>
							<span id='operation'>
								<b>Operation:</b> {state.operation}
							</span>
							<span id='memory'>
								<b>Memory:</b> {state.memory}
							</span>
						</div>

						<div className='row'>
							<CalcButton value={'M+'} onClick={(e) => handleMemory('M+')} />
							<CalcButton
								value={'MR'}
								onClick={(e) => handleMemoryState('MR')}
							/>
							<CalcButton
								value={'MC'}
								onClick={() => handleResetMemory('MC')}
							/>
						</div>

						<div className='row'>
							<CalcButton value={1} onClick={(e) => handleEvent(1)} />
							<CalcButton value={2} onClick={(e) => handleEvent(2)} />
							<CalcButton value={3} onClick={(e) => handleEvent(3)} />
						</div>

						<div className='row'>
							<CalcButton value={4} onClick={(e) => handleEvent(4)} />
							<CalcButton value={5} onClick={(e) => handleEvent(5)} />
							<CalcButton value={6} onClick={(e) => handleEvent(6)} />
						</div>

						<div className='row'>
							<CalcButton value={7} onClick={(e) => handleEvent(7)} />
							<CalcButton value={8} onClick={(e) => handleEvent(8)} />
							<CalcButton value={9} onClick={(e) => handleEvent(9)} />
						</div>

						<div className='row'>
							<CalcButton value={'+'} onClick={(e) => handleOperator('+')} />
							<CalcButton value={'*'} onClick={(e) => handleOperator('*')} />
							<CalcButton value={'-'} onClick={(e) => handleOperator('-')} />
						</div>

						<div className='row ce_button'>
							<CalcButton value={'CE'} onClick={(e) => clearHandler('CE')} />
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default App;

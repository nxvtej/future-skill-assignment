/** @format */

import "./App.css";
import { Header } from "./components/Header";

function App() {
	return (
		<div className='display:flex'>
			<div className='mx-1 rounded-full bg-slate-200 mt-1'>
				<Header />
			</div>
			<div></div>
		</div>
	);
}

export default App;

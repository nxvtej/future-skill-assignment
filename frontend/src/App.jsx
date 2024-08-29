/** @format */

import { useEffect, useState } from "react";
import "./App.css";
import { Card } from "./components/Card";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Button } from "./components/ui/button";
import axios from "axios";

function App() {
	const [cards, setCards] = useState([]);

	useEffect(() => {
		onclickhandler();
	}, []);

	const onclickhandler = () => {
		console.log("Secondary button clicked");
		axios
			.get("http://localhost:3001/api/v1/cards/")
			.then((response) => {
				console.log("Response data:", response.data);
				setCards(response.data.data); // Update state with the new data
				console.log("Updated card data:", response.data); // Log the data after update
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	};

	return (
		<div>
			<div className='bg-black border-2 rounded-t-lg border-white mt-1 text-white flex items-center justify-between p-4'>
				<div className='flex space-x-4'>
					<div className='flex'>Abstract</div>
					<div className='flex'>Help Center</div>
				</div>

				<div>
					<Button onClick={onclickhandler} variant='secondary'>
						Submit a Request
					</Button>
				</div>
			</div>

			<header>
				<Header />
			</header>

			<main>
				{/* {console.log(cards.length)}
				{console.log(cards.data.length)} */}
				<div className='flex flex-col items-center mt-28'>
					<div className='grid grid-cols-2 gap-6 justify-center'>
						{
							cards.map((card) => (
								<div key={card._id} className='col-span-1'>
									<Card
										id={card.id}
										title={card.title}
										description={card.description}
									/>
								</div>
							))
							// ) : (
							// <p>No cards available</p>
						}
					</div>
				</div>
			</main>

			<footer className='mt-12'>
				<Footer />
			</footer>
		</div>
	);
}

export default App;

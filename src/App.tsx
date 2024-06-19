import { Filters } from "./components/Filters";
import { Header } from "./components/Header";
// import { TodoItems } from "./components/TodoItems";
import { DropList } from "./components/DropList";

function App() {
	return (
		<main className="container min-h-screen sm:max-w-[100%]">
			<Header />
			<DropList />

			<Filters />

			<p className="px-5 mt-8 text-center text-light-darkBlueGray">
				Drag and drop to reorder the list
			</p>
			<p className="mt-5 text-center text-light-lightBlueGray text-sm">
				Made by Nikita Korneev in 2024
			</p>
		</main>
	);
}

export default App;

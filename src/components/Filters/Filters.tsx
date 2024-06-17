function Filters() {
	return (
		<div className="dark:text-dark-lightBlue dark:bg-dark-desaturatedBlue  flex justify-center gap-5 bg-white shadow-md rounded-md mt-5 mx-5 xl:mx-[30vw] sm:mx-24 py-5 xl:text-base text-sm font-semibold">
			<button className="text-primary dark:hover:text-dark-lightBlueHover hover:text-dark-lightBlueHover">
				All
			</button>
			<button className="dark:hover:text-dark-lightBlueHover hover:text-dark-lightBlueHover">
				Active
			</button>
			<button className="dark:hover:text-dark-lightBlueHover hover:text-dark-lightBlueHover">
				Completed
			</button>
		</div>
	);
}

export { Filters };

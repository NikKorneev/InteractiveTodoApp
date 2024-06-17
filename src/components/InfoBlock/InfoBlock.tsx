function InfoBlock() {
	return (
		<div className="justify-between flex p-5">
			<p className="text-sm text-light-darkBlueGray xl:text-base">
				5 items left
			</p>
			<button className="text-sm text-light-darkBlueGray xl:text-base">
				Clear completed
			</button>
		</div>
	);
}

export { InfoBlock };

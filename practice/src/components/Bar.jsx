import useDetail from "../context/Detail"
const Bar = () => {
	const {detail}=useDetail();
	return (
		<>
		<h1>{detail}</h1>
			<ul className="flex w-full justify-evenly ">
				
				<li>{detail}</li>
			</ul>
		</>
	)
}

export default Bar

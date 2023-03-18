import Header from "../components/Header/Header"
import Cards from "../components/Cards/Cards"
import Loader from "../components/Loader/Loader"

type RootProps = {
	children: JSX.Element | JSX.Element[];
}

export const Root = ({ children }: RootProps) => {
  return (
		<>
			<Header />
			<Cards />
			{/* <Loader /> */}

			{ children }
		</>
	)
}

import Header from "../components/Header/Header"
import Cards from "../components/Cards/Cards"

type RootProps = {
	children: JSX.Element | JSX.Element[];
}

export const Root = ({ children }: RootProps) => {
  return (
		<>
			<Header />
			<Cards />

			{ children }
		</>
	)
}

import Header from "../components/Header/Header"

type RootProps = {
	children: JSX.Element | JSX.Element[];
}

export const Root = ({ children }: RootProps) => {
  return (
		<>
			<Header />

			{ children }
		</>
	)
}

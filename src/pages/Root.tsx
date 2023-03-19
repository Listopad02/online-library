type RootProps = {
	children: JSX.Element | JSX.Element[];
}

export const Root = ({ children }: RootProps) => {
  return (
		<>
			{ children }
		</>
	)
}

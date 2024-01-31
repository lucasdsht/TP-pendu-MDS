import Nav from "./nav"

export const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main>
        {children}
      </main>
    </>
  )
}

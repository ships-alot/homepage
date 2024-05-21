const App = () => {
  return (
    <div className="w-screen">
      <Header />
      <Projects />
    </div>
  )
}

const Projects = () => <div>Projects</div>

const Header = () => (
  <div className="w-full">
    <div className="flex h-16 items-center pl-4">
      <div>Name Lastname</div>
      <div>CXO</div>
    </div>
    <div className="h-0.5 bg-sky-600"></div>
  </div>
)

// const Block = () => {
//   return (
//     <div
//       style={{
//         height: "300px",
//         backgroundColor: "red",
//         marginBottom: "20px",
//       }}
//     >
//       hello
//     </div>
//   )
// }

// const Partners = () => {
//   return <div>Proudly working width: Samsung Apple Roche</div>
// }

export default App

const App = () => {
  return (
    <div className="w-screen h-screen">
      <Header />
      <Contact />
    </div>
  )
}

const Contact = () => (
  <iframe
    className="flex w-full h-full"
    src="https://calendly.com/marcello-chiaramonte"
  ></iframe>
)

const Header = () => (
  <div className="w-full">
    <div className="flex flex-col place-content-center h-16 items-center">
      <div>Marcello Chiaramonte</div>
      <div className="w-2"></div>
      <div>Senior Fullstack Developer</div>
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

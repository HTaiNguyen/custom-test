import logo from "./logo.svg";
import "./App.css";
import Counter from "./Counter";

function App() {
  const user = { firstName: "John", lastName: "Doe" };

  console.log({ ...user, lastName: "Doeuf" }); // 1st console log
  console.log({ lastName: "Doeuf", ...user }); // 2nd console log
  console.log({ middleName: "Thomas", ...user }); // 3rd console log

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Counter />
      </header>
    </div>
  );
}

export default App;

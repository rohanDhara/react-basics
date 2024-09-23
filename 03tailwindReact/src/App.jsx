import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="bg-violet-300 p-5 rounded-xl text-black">
        Hello I'm using Tailwind CSS
      </h1>
      <Card cardName="India" speciality="Justice for R.G Kar" />
      <Card cardName="London" />
    </>
  );
}

export default App;

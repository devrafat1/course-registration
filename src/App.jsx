import Card from "./Components/Card/Card";
import Header from "./Components/Header";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="pt-8 font-bold text-2xl mb-8">
        <Header></Header>
      </div>

      <Card></Card>
    </div>
  );
}

export default App;

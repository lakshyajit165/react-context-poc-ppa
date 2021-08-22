import Posts from "./components/Posts";
import { GlobalContextProvider } from "./contexts/GlobalContext";


function App() {
  return (
    <div className="App">
      <GlobalContextProvider>
        <Posts/>
      </GlobalContextProvider>
    </div>
  );
}

export default App;

import { Container } from "./components/Container";
import { TheHeader } from "./components/TheHeader";
import { ThemeSwitcher } from "./components/ThemeSwitcher";

function App() {
  return (
    <div>
      <h1>DevFinder</h1>
      <TheHeader></TheHeader>
      <ThemeSwitcher />
      {/* <Container></Container>; */}
    </div>
  );
}

export default App;

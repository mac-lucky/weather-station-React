import "./App.css";
import Tabs from "./components/Tabs/Tabs";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

function App() {
  const darkTheme = createTheme({
    palette: {
      type: "dark",
    },
  });

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Tabs />
      </ThemeProvider>
    </>
  );
}

export default App;

import "./App.css";
import Tabs from "./components/Tabs/Tabs";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

function App() {
  const darkTheme = createMuiTheme({
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

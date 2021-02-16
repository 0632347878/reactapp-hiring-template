import { ThemeProvider } from 'styled-components';
import { Theme, GlobalStyle } from './theme';
function App() {
  return (
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
      </ThemeProvider>
  );
}

export default App;

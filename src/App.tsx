import { Home } from "./pages/home/home";
import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes/index'
import UserContext from "./contexts/useContext";
import { useEffect, useState } from "react";
import { History } from "./pages/history";
import { Form } from "./pages/home/components/form";

export interface Cards {
  id: string;
  card: number;
  setCard: any;
  name: string;
  validity: string;
  CVV: number;
  flag?: string;
}
export function App() {

  const [card, setCard] = useState<Cards[]>([]);


  console.log(card)

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
      <UserContext.Provider value={{card, setCard}}>
        <Form />
        <History />
        </UserContext.Provider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;

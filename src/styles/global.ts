import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme['gray-800']};
    color: ${(props) => props.theme['gray-50']};
    -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }/* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    list-style: none;
    scrollbar-width: auto;
    scrollbar-color: 3px solid ${(props) => props.theme['purple-100']}
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 8px;
  }

  *::-webkit-scrollbar-track {
    background:${(props) => props.theme['gray-600']};
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme['purple-100']};
    border-radius: 10px;
    border: 5px solid ${(props) => props.theme['purple-100']};

    :hover {
      border: 5px solid ${(props) => props.theme['purple-400']};
    }
  }
`
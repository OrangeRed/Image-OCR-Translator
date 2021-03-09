import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './styles/GlobalStyles';
import { lightTheme, darkTheme } from './styles/Themes';

import RawText from './components/rawText/RawText';
import MediaDisplay from './components/mediaDisplay/MediaDisplay';
import TranslatedText from './components/translatedText/TranslatedText';
import Buttons from './components/buttons/Buttons';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isDarkMode: false
    }
  }

  render() {
    const theme = this.state.isDarkMode ? darkTheme : lightTheme;

    return (
      <ThemeProvider theme={ theme }>
        <>
        <GlobalStyles />
          <div className="App">
            <div className="div-container">
              <div className="text-container">
                <RawText className="text-item raw-text" />
                <TranslatedText className="text-item translate-container" />
                <Buttons className="btn-container" />
              </div>
              <MediaDisplay />
            </div>
          </div>
        </>
      </ThemeProvider>
    );
  }
}

export default App;

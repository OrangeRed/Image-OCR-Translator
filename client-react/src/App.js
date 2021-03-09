import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './styles/GlobalStyles';
import { lightTheme, darkTheme } from './styles/Themes';

import RawText from './components/rawText/RawText';
import MediaDisplay from './components/mediaDisplay/MediaDisplay';
import TranslatedText from './components/translatedText/TranslatedText';


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
            <RawText />
            <TranslatedText />
            <MediaDisplay />
          </div>
        </>
      </ThemeProvider>
    );
  }
}

export default App;

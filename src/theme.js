// eslint-disable-next-line
import {MuiThemeProvider, withStyles, createMuiTheme } from 'material-ui/styles'
const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#BBDEFB',
        main: '#2196F3',
        dark: '#0D47A1',
        contrastText: '#fff'
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#fff'
      }
    }
  })

export default theme
// eslint-disable-next-line
import {MuiThemeProvider, withStyles, createMuiTheme } from 'material-ui/styles'
import theme from './theme'
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
const styles = theme => ({
    root: {
      width: '100%',
      overflowX: 'auto',
      zIndex: 1,
      overflow: 'hidden'
    },
    table: {
      minWidth: 150
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 120
    },
    selectEmpty: {
      marginTop: theme.spacing.unit * 2
    },
    button: {
      margin: theme.spacing.unit
    },
    bar: {},
    checked: {
      color: theme.palette.secondary.main,
      '& + $bar': {
        backgroundColor: theme.palette.secondary.main
      }
    },
    flex: {
      flex: 1
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20
    },
    control: {
      padding: theme.spacing.unit * 2
    },
    content: {
      backgroundColor: theme.palette.background.default,
      width: '100%',
      padding: theme.spacing.unit * 3,
      height: 'calc(100% - 56px)',
      marginTop: 56,
      [theme.breakpoints.up('sm')]: {
        height: 'calc(100% - 64px)',
        marginTop: 64
      }
    },
    appFrame: {
      position: 'relative',
      display: 'flex',
      width: '100%',
      height: '100%'
    },
    appBar: {
      position: 'absolute',
      [theme.breakpoints.up('md')]: {
        width: `100%`
      }
    },
    navIconHide: {
      [theme.breakpoints.up('md')]: {
        display: 'none'
      }
    },
    drawerHeader: theme.mixins.toolbar,
    drawerPaper: {
      width: 250,
      [theme.breakpoints.up('md')]: {
        width: 240,
        position: 'relative',
        height: '100%'
      }
    },
    gridRoot: {
      flexGrow: 1
    },
    grid: {
      padding: 16,
      textAlign: 'center'
    }
  })

  export default styles
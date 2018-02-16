// eslint-disable-next-line
import React from 'react'
// eslint-disable-next-line
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table'
// eslint-disable-next-line
import Paper from 'material-ui/Paper'
// eslint-disable-next-line
import Checkbox from 'material-ui/Checkbox'
// eslint-disable-next-line
import Switch from 'material-ui/Switch'
// eslint-disable-next-line
import Button from 'material-ui/Button'

const SelectionTp = function (props) {
  const tp = props.tp
  const colonne = props.colonne
  var handleCheck = props.handleCheck
  const classes = props.classes
  return (
    <Paper>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell> </TableCell>
            {[0, 1, 2, 3].map(nb => <TableCell key={'STH' + nb}>{colonne[nb].label}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {
            tp.map((tp, index) => {
              return (
                <TableRow onClick={event => handleCheck(index)} key={'rowSeTp' + index}>
                  <TableCell scope = 'row'> {index + 1 }</TableCell>
                  <TableCell key = {'chbk' + index}>
                    <Checkbox
                      checked={tp.afficher}
                      id={'check' + index}
                      tabIndex={-1}
                      disableRipple
                    />
                  </TableCell>
                  <TableCell key= {'0C' + index}>{tp.infNl} </TableCell>
                  <TableCell key= {'1C' + index}>{tp.OVT} </TableCell>
                  <TableCell key= {'2C' + index}>{tp.PP} </TableCell>
                  <TableCell key= {'3C' + index}>{tp.infFr} </TableCell>
                </TableRow>)
            })
          }
        </TableBody>
      </Table>
    </Paper>
  )
}

export default SelectionTp

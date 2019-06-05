import React from 'react';
import { withStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const fontWhite = {
  color: '#000'
}

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    // overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
  paper: {
    marginTop: theme.spacing(3),
    width: '100%',
    // overflowX: 'auto',
    marginBottom: theme.spacing(2),
  },
  tableHead: {
  
    backgroundColor: '#252934'
  },
  tableId: {
    width: '15%',
    // color: '#000'
  },
  tableTitle: {
    width: '75%'
  },
  tableHeadType: {
    width: '15%'
  }
})


const ListGrid = (props) => {
  const { classes, media } = props
  let content;

  if (media) {
   
    content = <Paper className={classes.paper}>
      <Table className={classes.table}>
        <TableHead className={classes.tableHead}>
          <TableRow  >
            <TableCell className={classes.tableId} align="left">Id</TableCell>
            <TableCell className={classes.tableTitle} align="left">Title</TableCell>
            <TableCell className={classes.tableType} align="right">Type</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {
            media.map((item, index) => (
              <TableRow  key={index}>
                <TableCell style={fontWhite} className={classes.tableId} component="th" align="left" scope="row">
                  {item.id}
                </TableCell>
                <TableCell style={fontWhite} className={classes.tableTitle} align="left">{item.title}</TableCell>
                <TableCell style={fontWhite} className={classes.tableType} align="right">{item.type}</TableCell>

              </TableRow>
            ))

          }
        </TableBody>
      </Table>
    </Paper>
  }
  return (
    
    <div>
     {content}
    </div>
  )
}

export default withStyles(styles)(ListGrid)